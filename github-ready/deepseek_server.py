import json
import mimetypes
import os
import posixpath
import urllib.error
import urllib.parse
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent
DEFAULT_MODEL = "deepseek-v4-flash"
MAX_BODY_BYTES = 64 * 1024


def load_dotenv():
    env_file = ROOT / ".env"
    if not env_file.exists():
        return

    for raw_line in env_file.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if key and key not in os.environ:
            os.environ[key] = value


def json_response(handler, status, payload):
    data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(data)))
    handler.end_headers()
    handler.wfile.write(data)


def static_path_from_url(url_path):
    path = urllib.parse.unquote(url_path.split("?", 1)[0])
    if path in ("", "/"):
        path = "/有机物质结构1.html"
    normalized = posixpath.normpath(path.lstrip("/"))
    target = (ROOT / normalized).resolve()
    if ROOT not in target.parents and target != ROOT:
        return None
    return target


def build_messages(payload):
    molecule = payload.get("molecule") or {}
    question = (payload.get("question") or "").strip()
    mode = payload.get("mode") or "explain"

    if not isinstance(molecule, dict):
        molecule = {}

    name = molecule.get("name") or "当前分子"
    formula = molecule.get("formula") or ""
    condensed = molecule.get("condensed") or ""
    tags = "、".join(molecule.get("tags") or [])
    units = "、".join(molecule.get("units") or [])
    main_point = molecule.get("mainPoint") or ""
    hint = molecule.get("hint") or ""
    plane_line = molecule.get("planeLine") or ""
    plane_stats = molecule.get("planeStats") or ""

    if mode == "ask" and not question:
        question = f"请讲解{name}的空间结构、共线共面判断和常见易错点。"

    user_text = f"""
当前分子：{name}
分子式：{formula}
结构简式：{condensed}
结构标签：{tags}
结构单元：{units}
页面观察重点：{main_point}
页面提示：{hint}
共线/共面信息：{plane_stats}；{plane_line}
学生问题：{question}
""".strip()

    return [
        {
            "role": "system",
            "content": (
                "你是一位高中有机化学老师，专门解释有机物空间结构、杂化类型、"
                "共线共面判断和学生易错点。回答要准确、简洁、适合课堂展示。"
                "如果页面给出的结构数据不足以严格推出结论，要明确说明是基于页面模型和高中化学近似。"
            ),
        },
        {"role": "user", "content": user_text},
    ]


def call_deepseek(payload):
    load_dotenv()
    api_key = os.environ.get("DEEPSEEK_API_KEY")
    if not api_key:
        return 500, {
            "error": "还没有配置 DeepSeek API Key。请复制 .env.example 为 .env，并填写 DEEPSEEK_API_KEY。",
        }

    model = os.environ.get("DEEPSEEK_MODEL", DEFAULT_MODEL)
    base_url = os.environ.get("DEEPSEEK_BASE_URL", "https://api.deepseek.com").rstrip("/")
    url = f"{base_url}/chat/completions"
    request_payload = {
        "model": model,
        "messages": build_messages(payload),
        "temperature": 0.4,
        "max_tokens": 900,
    }

    request = urllib.request.Request(
        url,
        data=json.dumps(request_payload, ensure_ascii=False).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(request, timeout=45) as response:
            data = json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        return exc.code, {"error": "DeepSeek API 返回错误。", "detail": detail}
    except urllib.error.URLError as exc:
        return 502, {"error": "无法连接 DeepSeek API。", "detail": str(exc.reason)}
    except TimeoutError:
        return 504, {"error": "DeepSeek API 响应超时，请稍后再试。"}

    answer = (
        data.get("choices", [{}])[0]
        .get("message", {})
        .get("content", "")
        .strip()
    )
    return 200, {
        "answer": answer or "DeepSeek 没有返回可显示的回答。",
        "model": data.get("model", model),
        "usage": data.get("usage"),
    }


class Handler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        print("%s - %s" % (self.address_string(), format % args))

    def do_GET(self):
        if self.path.startswith("/api/health"):
            load_dotenv()
            json_response(
                self,
                200,
                {
                    "ok": True,
                    "configured": bool(os.environ.get("DEEPSEEK_API_KEY")),
                    "model": os.environ.get("DEEPSEEK_MODEL", DEFAULT_MODEL),
                },
            )
            return

        target = static_path_from_url(self.path)
        if not target or not target.exists() or not target.is_file():
            self.send_error(404, "File not found")
            return

        content_type = mimetypes.guess_type(str(target))[0] or "application/octet-stream"
        data = target.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type + ("; charset=utf-8" if content_type.startswith("text/") else ""))
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_POST(self):
        if self.path != "/api/deepseek":
            self.send_error(404, "Not found")
            return

        length = int(self.headers.get("Content-Length", "0") or "0")
        if length > MAX_BODY_BYTES:
            json_response(self, 413, {"error": "请求内容太长。"})
            return

        try:
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
        except json.JSONDecodeError:
            json_response(self, 400, {"error": "请求格式不是有效 JSON。"})
            return

        status, response = call_deepseek(payload)
        json_response(self, status, response)


def main():
    load_dotenv()
    port = int(os.environ.get("PORT", "8765"))
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"有机结构 DeepSeek 服务已启动：http://127.0.0.1:{port}/")
    print("按 Ctrl+C 停止服务。")
    server.serve_forever()


if __name__ == "__main__":
    main()

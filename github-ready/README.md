# 有机物结构认知与共线共面可视化平台

这是一个用于高中有机化学教学的网页工具，可以旋转、缩放观察常见有机物的空间结构，并在本地接入 DeepSeek AI 助手。

## 文件说明

- `index.html`：网页首页，适合直接放到 GitHub Pages。
- `deepseek-assistant.js`：右侧 AI 助手切换栏。
- `deepseek_server.py`：本地 DeepSeek API 转发服务，用来保护 API Key。
- `.env.example`：本地环境变量模板。
- `启动DeepSeek服务.bat`：Windows 双击启动脚本。

## 本地运行并接入 DeepSeek

1. 复制 `.env.example`，改名为 `.env`。
2. 打开 `.env`，填写你的 DeepSeek API Key：

```text
DEEPSEEK_API_KEY=你的Key
DEEPSEEK_MODEL=deepseek-v4-flash
DEEPSEEK_BASE_URL=https://api.deepseek.com
PORT=8765
```

3. 双击 `启动DeepSeek服务.bat`，或在当前目录运行：

```powershell
py .\deepseek_server.py
```

4. 浏览器打开：

```text
http://127.0.0.1:8765/
```

## 上传到 GitHub Pages

把本目录里的文件上传到 GitHub 仓库根目录，然后在仓库的 `Settings -> Pages` 中选择：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ root`

GitHub Pages 会发布 `index.html`。

## 注意

GitHub Pages 只能托管静态网页，不能运行 `deepseek_server.py`。因此：

- 3D 分子结构页面可以在 GitHub Pages 正常显示。
- DeepSeek AI 助手需要本地运行 `deepseek_server.py`，或以后单独部署一个后端服务。
- 不要把 `.env` 上传到 GitHub。

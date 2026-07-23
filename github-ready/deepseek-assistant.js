(function () {
  const AI_STYLE = `
    .info {
      grid-template-rows: auto auto 1fr;
    }

    .ai-tabs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      padding: 0 16px 12px;
    }

    .ai-tab {
      border: 1px solid var(--line);
      background: #fff;
      color: #174170;
      border-radius: 8px;
      padding: 9px 10px;
      cursor: pointer;
      font-weight: 900;
      min-height: 40px;
    }

    .ai-tab.active {
      background: var(--blue);
      color: #fff;
      border-color: var(--blue);
    }

    .info.ai-mode .info-body > .section:not(#aiAssistant) {
      display: none;
    }

    .info:not(.ai-mode) #aiAssistant {
      display: none;
    }

    .info.ai-mode .info-body {
      display: grid;
      min-height: 0;
      padding-top: 0;
    }

    .info.ai-mode #aiAssistant {
      display: grid;
      grid-template-rows: auto minmax(150px, 0.35fr) auto auto minmax(180px, 1fr);
      gap: 10px;
      min-height: 0;
      border-top: 0;
      padding-top: 0;
    }

    .ai-question {
      width: 100%;
      min-height: 110px;
      resize: vertical;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 10px 11px;
      outline: none;
      color: var(--text);
      background: #fff;
      line-height: 1.55;
    }

    .info.ai-mode .ai-question {
      height: 100%;
      min-height: 150px;
      resize: none;
    }

    .ai-question:focus {
      border-color: #78a9ff;
      box-shadow: 0 0 0 3px rgba(31, 99, 216, 0.13);
    }

    .ai-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .ai-answer {
      min-height: 110px;
      max-height: 260px;
      overflow: auto;
      padding: 11px 12px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #f8fbff;
      color: #17385f;
      line-height: 1.62;
      white-space: pre-wrap;
    }

    .info.ai-mode .ai-answer {
      min-height: 0;
      max-height: none;
    }

    .ai-answer.error {
      color: #a82020;
      background: #fff7f7;
      border-color: #f0c5c5;
    }

    .ai-status {
      min-height: 20px;
      color: var(--muted);
      font-size: 0.88rem;
    }

    @media (max-width: 980px) {
      .ai-actions {
        grid-template-columns: 1fr;
      }

      .info.ai-mode #aiAssistant {
        grid-template-rows: auto 150px auto auto minmax(180px, 1fr);
      }
    }
  `;

  function addStyle() {
    const style = document.createElement("style");
    style.textContent = AI_STYLE;
    document.head.appendChild(style);
  }

  function addTabs() {
    const infoPanel = document.querySelector(".info");
    const title = infoPanel?.querySelector(".panel-title");
    if (!infoPanel || !title || document.getElementById("aiTabs")) return;

    const tabs = document.createElement("div");
    tabs.id = "aiTabs";
    tabs.className = "ai-tabs";
    tabs.innerHTML = `
      <button id="showTipsTab" class="ai-tab active" type="button">观察提示</button>
      <button id="showAiTab" class="ai-tab" type="button">AI 助手</button>
    `;
    title.insertAdjacentElement("afterend", tabs);

    document.getElementById("showTipsTab").addEventListener("click", () => setMode("tips"));
    document.getElementById("showAiTab").addEventListener("click", () => setMode("ai"));
  }

  function addPanel() {
    const infoBody = document.querySelector(".info .info-body");
    if (!infoBody || document.getElementById("aiAssistant")) return;

    const section = document.createElement("div");
    section.className = "section";
    section.id = "aiAssistant";
    section.innerHTML = `
      <h3>DeepSeek AI 助手</h3>
      <textarea id="aiQuestion" class="ai-question" placeholder="输入你的问题，例如：为什么甲烷不是平面分子？"></textarea>
      <div class="ai-actions">
        <button id="aiExplain" class="btn" type="button">讲解当前分子</button>
        <button id="aiAsk" class="btn" type="button">发送问题</button>
      </div>
      <div id="aiStatus" class="ai-status"></div>
      <div id="aiAnswer" class="ai-answer">切换到 AI 助手后，可以一边观察中间的分子模型，一边让 DeepSeek 讲解共线、共面和易错点。</div>
    `;
    infoBody.appendChild(section);

    document.getElementById("aiExplain").addEventListener("click", () => requestAi("explain"));
    document.getElementById("aiAsk").addEventListener("click", () => requestAi("ask"));
  }

  function setMode(mode) {
    const infoPanel = document.querySelector(".info");
    const tipsTab = document.getElementById("showTipsTab");
    const aiTab = document.getElementById("showAiTab");
    const isAi = mode === "ai";

    infoPanel?.classList.toggle("ai-mode", isAi);
    tipsTab?.classList.toggle("active", !isAi);
    aiTab?.classList.toggle("active", isAi);
    if (isAi) {
      setTimeout(() => document.getElementById("aiQuestion")?.focus(), 0);
    }
  }

  function selectedMolecule() {
    let molecule = null;
    if (typeof current === "function") {
      molecule = current();
    }

    if (!molecule) {
      return {
        name: document.getElementById("molName")?.textContent || "当前分子",
        formula: document.getElementById("molFormula")?.textContent || "",
      };
    }

    let statsText = "";
    if (typeof planeStats !== "undefined" && planeStats[molecule.id]) {
      const stats = planeStats[molecule.id];
      statsText = `最多 ${stats[0]} 个原子共面；最多 ${stats[1]} 个碳原子共面`;
    }

    return {
      id: molecule.id,
      name: molecule.name,
      formula: molecule.formula,
      condensed: molecule.condensed,
      tags: molecule.tags || [],
      units: molecule.units || [],
      mainPoint: molecule.mainPoint || "",
      hint: molecule.hint || "",
      planeLine: molecule.planeLine || "",
      planeStats: statsText,
    };
  }

  function setAnswer(text, isError) {
    const answer = document.getElementById("aiAnswer");
    answer.textContent = text;
    answer.classList.toggle("error", Boolean(isError));
  }

  function setBusy(isBusy, text) {
    document.getElementById("aiStatus").textContent = text || "";
    document.getElementById("aiExplain").disabled = isBusy;
    document.getElementById("aiAsk").disabled = isBusy;
  }

  async function requestAi(mode) {
    setMode("ai");
    const question = document.getElementById("aiQuestion").value.trim();
    if (mode === "ask" && !question) {
      setAnswer("请先输入你想问 DeepSeek 的问题。", true);
      return;
    }

    setBusy(true, "正在请求 DeepSeek...");
    setAnswer("思考中...", false);

    try {
      const response = await fetch("/api/deepseek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          question,
          molecule: selectedMolecule(),
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || data.detail || "DeepSeek 请求失败。");
      }
      setAnswer(data.answer || "DeepSeek 没有返回内容。", false);
      setBusy(false, data.model ? `模型：${data.model}` : "");
    } catch (error) {
      setAnswer(error.message, true);
      setBusy(false, "");
    }
  }

  addStyle();
  addTabs();
  addPanel();
})();

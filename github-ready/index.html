<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>有机物结构认知与共线共面可视化平台</title>
  <style>
    :root {
      --bg: #f4f8fd;
      --panel: #ffffff;
      --text: #102a43;
      --muted: #60708a;
      --line: #d7e3f2;
      --blue: #1f63d8;
      --soft-blue: #eaf2ff;
      --green: #11a36a;
      --cyan: #0ea5b7;
      --purple: #7657df;
      --orange: #d68621;
      --red: #d82424;
      --shadow: 0 18px 38px rgba(28, 62, 105, 0.09);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: "Microsoft YaHei", "PingFang SC", system-ui, sans-serif;
      color: var(--text);
      background: radial-gradient(circle at top right, #e8f2ff 0, transparent 340px), var(--bg);
      overflow: hidden;
    }

    button, input { font: inherit; }

    .app {
      height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    header {
      height: 78px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      padding: 12px 22px;
      background: rgba(255,255,255,0.92);
      border-bottom: 1px solid var(--line);
      box-shadow: 0 8px 22px rgba(44, 86, 139, 0.06);
      backdrop-filter: blur(14px);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
    }

    .logo {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: linear-gradient(145deg, #1f63d8, #0ea5b7);
      display: grid;
      place-items: center;
      color: white;
      font-weight: 900;
      box-shadow: 0 10px 24px rgba(31, 99, 216, 0.22);
    }

    h1 {
      margin: 0;
      font-size: clamp(1.25rem, 2.4vw, 2rem);
      line-height: 1.15;
      letter-spacing: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .subtitle {
      margin: 3px 0 0;
      color: var(--muted);
      font-size: 0.94rem;
    }

    .top-tools {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .search {
      width: min(280px, 25vw);
      min-width: 190px;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 10px 12px;
      outline: none;
      background: #fff;
    }

    .search:focus {
      border-color: #78a9ff;
      box-shadow: 0 0 0 3px rgba(31, 99, 216, 0.13);
    }

    .btn {
      border: 1px solid var(--line);
      background: #fff;
      color: #174170;
      border-radius: 8px;
      padding: 10px 13px;
      cursor: pointer;
      font-weight: 700;
      transition: 0.16s ease;
      min-height: 42px;
    }

    .btn:hover { background: var(--soft-blue); border-color: #b8cff0; }
    .btn.active { background: var(--blue); color: #fff; border-color: var(--blue); }
    #togglePlanes { display: none; }

    .layout {
      min-height: 0;
      display: grid;
      grid-template-columns: 300px minmax(0, 1fr) 300px;
      gap: 14px;
      padding: 14px;
    }

    .panel {
      min-height: 0;
      background: rgba(255,255,255,0.92);
      border: 1px solid var(--line);
      border-radius: 8px;
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .side {
      display: grid;
      grid-template-rows: auto auto 1fr;
    }

    .panel-title {
      padding: 16px 16px 8px;
      font-size: 1.05rem;
      font-weight: 900;
      color: #123865;
    }

    .chips {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      padding: 0 14px 12px;
    }

    .chip {
      border: 1px solid var(--line);
      border-radius: 999px;
      background: #fff;
      color: #31506f;
      padding: 6px 10px;
      cursor: pointer;
      font-size: 0.86rem;
      font-weight: 700;
    }

    .chip.active {
      background: #174ea6;
      border-color: #174ea6;
      color: #fff;
    }

    .list {
      overflow: auto;
      padding: 0 10px 12px;
    }

    .item {
      width: 100%;
      text-align: left;
      border: 1px solid transparent;
      background: transparent;
      border-radius: 8px;
      padding: 11px 12px;
      cursor: pointer;
      margin: 4px 0;
      display: grid;
      grid-template-columns: 12px 1fr;
      gap: 10px;
      align-items: start;
    }

    .item:hover { background: #f2f7ff; }
    .item.active {
      background: #eaf2ff;
      border-color: #bdd4fb;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      margin-top: 7px;
    }

    .item-name {
      font-weight: 900;
      color: #0f2f57;
    }

    .item-formula {
      color: #52677f;
      font-size: 0.92rem;
      margin-top: 2px;
    }

    .stage {
      min-width: 0;
      min-height: 0;
      display: grid;
      grid-template-rows: auto 1fr auto;
      position: relative;
    }

    .stage-head {
      padding: 16px 18px 10px;
      display: flex;
      align-items: start;
      justify-content: space-between;
      gap: 18px;
      border-bottom: 1px solid var(--line);
    }

    .mol-title {
      margin: 0;
      font-size: clamp(1.45rem, 2.8vw, 2.5rem);
      line-height: 1.1;
    }

    .formula-line {
      margin-top: 7px;
      color: #31506f;
      font-weight: 700;
    }

    .tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .tag {
      border-radius: 999px;
      padding: 6px 11px;
      font-weight: 900;
      font-size: 0.88rem;
      border: 1px solid #c8d9ef;
      background: #fff;
      color: #264b73;
      white-space: nowrap;
    }

    .tag.good { background: #eafaf2; color: #08784d; border-color: #b7ebd1; }
    .tag.warn { background: #fff7e8; color: #a85b0a; border-color: #f5d29b; }
    .tag.line { background: #f0ebff; color: #5b3fc8; border-color: #cec3ff; }
    .tag.plane { background: #e9f3ff; color: #1458ba; border-color: #bfdbff; }

    .canvas-wrap {
      position: relative;
      min-height: 0;
      background:
        linear-gradient(90deg, rgba(31,99,216,0.045) 1px, transparent 1px),
        linear-gradient(rgba(31,99,216,0.045) 1px, transparent 1px),
        radial-gradient(circle at 50% 40%, #ffffff 0, #f5f9ff 56%, #eaf2ff 100%);
      background-size: 44px 44px, 44px 44px, auto;
    }

    canvas {
      width: 100%;
      height: 100%;
      display: block;
      cursor: grab;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
    }

    canvas:active { cursor: grabbing; }

    .hint {
      position: absolute;
      left: 18px;
      bottom: 16px;
      background: rgba(255,255,255,0.88);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 8px 10px;
      color: #52677f;
      font-size: 0.9rem;
      pointer-events: none;
    }

    .controls {
      border-top: 1px solid var(--line);
      padding: 12px 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      background: rgba(255,255,255,0.92);
    }

    .stage:fullscreen {
      width: 100vw;
      height: 100vh;
      border: 0;
      border-radius: 0;
      background: #ffffff;
    }

    .stage:fullscreen .stage-head {
      padding: 18px 28px 12px;
    }

    .stage:fullscreen .canvas-wrap {
      min-height: 0;
    }

    .stage:fullscreen .controls {
      padding: 16px 20px;
    }

    .stage:fullscreen .btn {
      min-height: 52px;
      padding: 12px 18px;
      font-size: 1.05rem;
    }

    .info {
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .info-body {
      overflow: auto;
      padding: 0 16px 16px;
    }

    .section {
      border-top: 1px solid #edf2f8;
      padding: 14px 0;
    }

    .section:first-child { border-top: 0; }

    .section h3 {
      margin: 0 0 8px;
      color: #123865;
      font-size: 1.02rem;
    }

    .big-point {
      margin: 0;
      font-size: 1.06rem;
      font-weight: 900;
      color: #0f2f57;
      line-height: 1.55;
    }

    .small {
      margin: 6px 0 0;
      color: var(--muted);
      font-size: 0.94rem;
    }

    .legend-row {
      display: grid;
      grid-template-columns: 20px 1fr;
      gap: 8px;
      align-items: center;
      margin: 8px 0;
      color: #31506f;
      font-weight: 700;
    }

    .atom-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,0.16);
      box-shadow: inset -4px -4px 8px rgba(0,0,0,0.18);
    }

    .plane-key {
      display: inline-block;
      width: 16px;
      height: 10px;
      border-radius: 4px;
      background: rgba(31,99,216,0.16);
      border: 1px solid rgba(31,99,216,0.42);
    }

    .empty {
      padding: 18px;
      color: var(--muted);
    }

    @media (max-width: 1120px) {
      body { overflow: auto; }
      .app { height: auto; min-height: 100vh; }
      .layout {
        grid-template-columns: 260px minmax(0, 1fr);
      }
      .info {
        grid-column: 1 / -1;
        min-height: 260px;
      }
      .stage { min-height: 650px; }
    }

    @media (max-width: 760px) {
      header {
        height: auto;
        align-items: flex-start;
        flex-direction: column;
      }
      .top-tools { justify-content: flex-start; }
      .search { width: calc(100vw - 44px); }
      .layout { grid-template-columns: 1fr; }
      .stage { min-height: 590px; }
      .stage-head { flex-direction: column; }
      .tags { justify-content: flex-start; }
    }
  </style>
</head>
<body>
  <div class="app">
    <header>
      <div class="brand">
        <div class="logo">3D</div>
        <div>
          <h1>有机物结构认知与共线共面可视化平台</h1>
          <p class="subtitle">拖拽旋转，滚轮缩放，观察空间结构</p>
        </div>
      </div>
      <div class="top-tools">
        <input id="search" class="search" type="search" placeholder="搜索：甲苯、苯乙炔、羰基..." />
        <button id="togglePlanes" class="btn active">显示平面/直线</button>
        <button id="autoRotate" class="btn">自动旋转</button>
      </div>
    </header>

    <main class="layout">
      <aside class="panel side">
        <div class="panel-title">物质列表</div>
        <div class="chips" id="filters"></div>
        <div class="list" id="moleculeList"></div>
      </aside>

      <section class="panel stage">
        <div class="stage-head">
          <div>
            <h2 class="mol-title" id="molName"></h2>
            <div class="formula-line" id="molFormula"></div>
          </div>
          <div class="tags" id="molTags"></div>
        </div>
        <div class="canvas-wrap">
          <canvas id="viewer" aria-label="可旋转可缩放的三维分子模型"></canvas>
          <div class="hint">单指拖动旋转 · 双指捏合缩放 · 点击全屏观察</div>
        </div>
        <div class="controls">
          <button class="btn" data-action="fullscreen">全屏观察</button>
          <button class="btn" data-action="reset">重置视角</button>
          <button class="btn" data-action="x">绕 X 轴</button>
          <button class="btn" data-action="y">绕 Y 轴</button>
          <button class="btn" data-action="z">绕 Z 轴</button>
          <button class="btn" data-action="zoomIn">放大</button>
          <button class="btn" data-action="zoomOut">缩小</button>
        </div>
      </section>

      <aside class="panel info">
        <div class="panel-title">观察提示</div>
        <div class="info-body">
          <div class="section">
            <h3>学生先看什么</h3>
            <p class="big-point" id="mainPoint"></p>
            <p class="small" id="shortHint"></p>
          </div>
          <div class="section">
            <h3>结构单元</h3>
            <div id="units"></div>
          </div>
          <div class="section">
            <h3>共线 / 共面</h3>
            <p class="big-point" id="planeStats"></p>
            <p class="small" id="planeLine"></p>
          </div>
          <div class="section">
            <h3>颜色说明</h3>
            <div class="legend-row"><span class="atom-dot" style="background:#2d3035"></span><span>碳 C</span></div>
            <div class="legend-row"><span class="atom-dot" style="background:#f7f7f7"></span><span>氢 H</span></div>
            <div class="legend-row"><span class="atom-dot" style="background:#e32424"></span><span>氧 O</span></div>
            <div class="legend-row"><span class="atom-dot" style="background:#2f65d8"></span><span>氮 N</span></div>
          </div>
        </div>
      </aside>
    </main>
  </div>

  <script>
    const atomStyle = {
      C: { color: "#2d3035", label: "C", r: 18 },
      H: { color: "#f6f7f8", label: "H", r: 12 },
      O: { color: "#e32424", label: "O", r: 16 },
      N: { color: "#2f65d8", label: "N", r: 16 }
    };

    const filters = ["全部", "基础物质", "复合物质", "含苯环", "含双键", "含三键", "含羰基", "含sp³碳"];
    let activeFilter = "全部";
    let activeId = "methane";
    let showGuides = false;
    let autoRotate = false;
    let view = { rx: -0.48, ry: 0.72, rz: 0.05, zoom: 1 };

    const structureUnits = [
      { id: "sp3-carbon", name: "sp³ 碳", tags: ["四面体", "不全部共面"], color: "#d68621" },
      { id: "sp2-carbon", name: "sp² 碳", tags: ["局部平面", "双键不可旋转"], color: "#1f63d8" },
      { id: "sp-carbon", name: "sp 碳", tags: ["直线结构", "一定共线"], color: "#7657df" },
      { id: "benzene-ring", name: "苯环", tags: ["刚性平面", "苯环共面"], color: "#1f63d8" },
      { id: "carbonyl", name: "羰基", tags: ["局部平面", "羰基共面"], color: "#d82424" }
    ];

    const molecules = [
      molecule("methane", "甲烷", "CH₄", "CH₄", "基础物质", ["基础物质","含sp³碳"], ["sp³ 碳"], ["四面体","不全部共面"], "观察四面体。", "中心碳连接四个方向，不能把 CH₄ 画成平面分子。", "四个 H 不可能全部与 C 共面。", tetra()),
      molecule("ethane", "乙烷", "C₂H₆", "CH₃-CH₃", "基础物质", ["基础物质","含sp³碳"], ["两个 sp³ 碳","C-C 单键"], ["单键可旋转","不全部共面"], "观察两个四面体。", "拖动后看两个甲基不是平铺在纸面上。", "C-C 单键可旋转，整体不是固定平面。", ethane()),
      molecule("ethylene", "乙烯", "C₂H₄", "CH₂=CH₂", "基础物质", ["基础物质","含双键"], ["C=C","sp² 碳"], ["一定共面","双键不可旋转"], "观察一个平面。", "所有原子都落在同一平面中。", "C=C 及直接相连原子一定共面。", ethylene()),
      molecule("acetylene", "乙炔", "C₂H₂", "HC≡CH", "基础物质", ["基础物质","含三键"], ["C≡C","sp 碳"], ["一定共线","直线结构"], "观察一条直线。", "四个原子排成一条线。", "C≡C 及两端直接相连原子一定共线。", acetylene()),
      molecule("benzene", "苯", "C₆H₆", "C₆H₆", "基础物质", ["基础物质","含苯环"], ["苯环"], ["刚性平面","一定共面"], "观察刚性平面。", "旋转后仍能看到整个苯环是一张平面。", "苯分子 12 个原子共面。", benzeneMol()),
      molecule("formaldehyde", "甲醛", "CH₂O", "HCHO", "基础物质", ["基础物质","含羰基"], ["羰基","sp² 碳"], ["羰基平面","一定共面"], "观察羰基平面。", "C=O 与两个 H 构成局部平面。", "羰基碳为 sp²，局部共面。", formaldehyde()),
      molecule("ethanol", "乙醇", "C₂H₆O", "CH₃CH₂OH", "基础物质", ["基础物质","含sp³碳"], ["sp³ 碳","C-O 单键"], ["单键可旋转","不全部共面"], "观察柔性单键链。", "乙醇不是平面分子，C-C 和 C-O 都能改变取向。", "不能把结构简式等同于平面结构。", ethanol()),
      molecule("acetic", "乙酸", "C₂H₄O₂", "CH₃COOH", "基础物质", ["基础物质","含羰基","含sp³碳"], ["甲基四面体","羧基平面"], ["局部共面","不全部共面"], "同时看甲基和羧基。", "羧基局部平面，甲基仍是四面体。", "一个分子可同时有平面片段和非平面片段。", aceticAcid()),

      molecule("toluene", "甲苯", "C₇H₈", "C₆H₅-CH₃", "复合物质", ["复合物质","含苯环","含sp³碳"], ["苯环平面","甲基四面体"], ["苯环共面","不全部共面"], "看苯环，再看甲基。", "苯环是平面，但甲基 H 不会全部进入苯环平面。", "甲苯不是所有原子共面。", toluene()),
      molecule("ethylbenzene", "乙苯", "C₈H₁₀", "C₆H₅-CH₂CH₃", "复合物质", ["复合物质","含苯环","含sp³碳"], ["苯环平面","乙基 sp³ 链"], ["单键可旋转","不全部共面"], "观察苯环外的乙基。", "乙基可以转动，空间形态更灵活。", "苯环共面不代表乙基全体原子共面。", ethylbenzene()),
      molecule("propene", "丙烯", "C₃H₆", "CH₃-CH=CH₂", "复合物质", ["复合物质","含双键","含sp³碳"], ["甲基四面体","双键平面"], ["双键平面","不全部共面"], "比较双键端和甲基端。", "双键部分平面，甲基仍是四面体。", "不能把甲基上的 H 全部归入双键平面。", propene()),
      molecule("butadiene", "1,3-丁二烯", "C₄H₆", "CH₂=CH-CH=CH₂", "复合物质", ["复合物质","含双键"], ["两个双键平面","共轭体系"], ["可能整体共面","共轭作用"], "观察两个平面是否接近重合。", "中间单键能转，但共轭使平面构象更有利。", "适合理解“可能共面”。", butadiene()),
      molecule("styrene", "苯乙烯", "C₈H₈", "C₆H₅-CH=CH₂", "复合物质", ["复合物质","含苯环","含双键"], ["苯环平面","乙烯基平面"], ["可能整体共面","共轭作用"], "看苯环和乙烯基两个平面。", "两个平面通过单键相连，共轭时倾向重合。", "高中可理解为可能整体共面。", styrene()),
      molecule("phenylacetylene", "苯乙炔", "C₈H₆", "C₆H₅-C≡CH", "复合物质", ["复合物质","含苯环","含三键"], ["苯环平面","三键直线"], ["苯环共面","三键共线"], "同时看平面和直线。", "三键直线可以落在苯环平面内。", "共线与共面可同时出现。", phenylacetylene()),
      molecule("phenol", "苯酚", "C₆H₆O", "C₆H₅-OH", "复合物质", ["复合物质","含苯环"], ["苯环平面","羟基"], ["苯环共面","单键可旋转"], "观察羟基取向。", "苯环共面，但 O-H 方向不必固定在环平面中。", "取代基要单独判断。", phenol()),
      molecule("benzaldehyde", "苯甲醛", "C₇H₆O", "C₆H₅-CHO", "复合物质", ["复合物质","含苯环","含羰基"], ["苯环平面","醛基平面"], ["可能整体共面","羰基平面"], "看苯环平面与醛基平面。", "羰基局部平面，和苯环可因共轭趋于重合。", "适合理解局部平面的组合。", benzaldehyde()),
      molecule("benzoic", "苯甲酸", "C₇H₆O₂", "C₆H₅-COOH", "复合物质", ["复合物质","含苯环","含羰基"], ["苯环平面","羧基平面"], ["羧基平面","可能整体共面"], "观察羧基局部平面。", "羧基不是随便弯折的一串原子，它有平面性。", "羧基与苯环之间夹角可受单键旋转影响。", benzoicAcid()),
      molecule("aniline", "苯胺", "C₆H₇N", "C₆H₅-NH₂", "复合物质", ["复合物质","含苯环"], ["苯环平面","氨基"], ["苯环共面","取代基判断"], "观察 N-H 是否都在环平面。", "苯环平面很稳定，氨基取向需另判。", "不要把取代基全部自动算入苯环平面。", aniline()),
      molecule("vinylAcetate", "乙酸乙烯酯", "C₄H₆O₂", "CH₃COOCH=CH₂", "复合物质", ["复合物质","含双键","含羰基","含sp³碳"], ["甲基四面体","酯基平面","乙烯基平面"], ["多个平面","单键可旋转"], "找出多个局部平面。", "一个分子里可同时有酯基平面、乙烯基平面和甲基四面体。", "多个平面不一定完全重合。", vinylAcetate()),
      molecule("aspirin", "阿司匹林", "C₉H₈O₄", "C₆H₄(OCOCH₃)COOH", "复合物质", ["复合物质","含苯环","含羰基","含sp³碳"], ["苯环平面","羧基平面","酯基平面","甲基四面体"], ["综合判断","局部共面"], "综合观察四类结构。", "苯环和羰基给出多个平面，甲基破坏全部共面。", "复杂分子要拆成结构单元再判断。", aspirin()),
      molecule("benzylCyanide", "苯甲腈", "C₇H₅N", "C₆H₅-C≡N", "复合物质", ["复合物质","含苯环","含三键"], ["苯环平面","C≡N 直线"], ["三键共线","线在平面内"], "新增例子：看 C≡N 直线。", "腈基呈直线，可与苯环平面组合观察。", "共线结构也可以接在平面结构上。", benzonitrile()),
      molecule("acrolein", "丙烯醛", "C₃H₄O", "CH₂=CH-CHO", "复合物质", ["复合物质","含双键","含羰基"], ["双键平面","醛基平面","共轭体系"], ["可能整体共面","羰基平面"], "新增例子：看 C=C 与 C=O。", "双键平面和羰基平面通过单键相连，共轭时倾向共面。", "适合比较“一定局部共面”和“可能整体共面”。", acrolein())
    ];

    const planeStats = {
      methane: [3, 1],
      ethane: [4, 2],
      ethylene: [6, 2],
      acetylene: [4, 2],
      benzene: [12, 6],
      formaldehyde: [4, 1],
      ethanol: [5, 2],
      acetic: [6, 2],
      toluene: [13, 7],
      ethylbenzene: [15, 8],
      propene: [7, 3],
      butadiene: [10, 4],
      styrene: [16, 8],
      phenylacetylene: [14, 8],
      phenol: [13, 6],
      benzaldehyde: [14, 7],
      benzoic: [15, 7],
      aniline: [13, 6],
      vinylAcetate: [10, 4],
      aspirin: [19, 9],
      benzylCyanide: [13, 7],
      acrolein: [8, 3]
    };

    function molecule(id, name, formula, condensed, type, categories, units, tags, mainPoint, hint, planeLine, model) {
      return { id, name, formula, condensed, type, categories, units, tags, mainPoint, hint, planeLine, ...model };
    }

    function A(e, x, y, z) { return { e, x, y, z }; }
    function B(a, b, order = 1) { return { a, b, order }; }
    function guide(type, atoms, color, label) { return { type, atoms, color, label }; }

    function tetra() {
      const atoms = [A("C",0,0,0), A("H",1.25,1.25,1.25), A("H",-1.25,-1.25,1.25), A("H",-1.25,1.25,-1.25), A("H",1.25,-1.25,-1.25)];
      return { atoms, bonds: [B(0,1),B(0,2),B(0,3),B(0,4)], guides: [] };
    }

    function ethane() {
      const atoms = [A("C",-1,0,0), A("C",1,0,0), A("H",-1.8,1,1), A("H",-1.8,-1,1), A("H",-1.8,0,-1.35), A("H",1.8,1,-1), A("H",1.8,-1,-1), A("H",1.8,0,1.35)];
      return { atoms, bonds: [B(0,1),B(0,2),B(0,3),B(0,4),B(1,5),B(1,6),B(1,7)], guides: [] };
    }

    function ethylene() {
      const atoms = [A("C",-0.75,0,0), A("C",0.75,0,0), A("H",-1.6,1,0), A("H",-1.6,-1,0), A("H",1.6,1,0), A("H",1.6,-1,0)];
      return { atoms, bonds: [B(0,1,2),B(0,2),B(0,3),B(1,4),B(1,5)], guides: [guide("plane",[0,1,2,3,4,5],"#1f63d8","乙烯平面")] };
    }

    function acetylene() {
      const atoms = [A("H",-2,0,0), A("C",-0.7,0,0), A("C",0.7,0,0), A("H",2,0,0)];
      return { atoms, bonds: [B(0,1),B(1,2,3),B(2,3)], guides: [guide("line",[0,1,2,3],"#7657df","全体共线")] };
    }

    function ringAtoms(cx = 0, cy = 0, z = 0, r = 1.65) {
      const atoms = [];
      for (let i = 0; i < 6; i++) {
        const a = -Math.PI / 2 + i * Math.PI / 3;
        atoms.push(A("C", cx + Math.cos(a) * r, cy + Math.sin(a) * r, z));
      }
      for (let i = 0; i < 6; i++) {
        const a = -Math.PI / 2 + i * Math.PI / 3;
        atoms.push(A("H", cx + Math.cos(a) * (r + 0.95), cy + Math.sin(a) * (r + 0.95), z));
      }
      return atoms;
    }

    function ringBonds(offset = 0) {
      const bonds = [];
      for (let i = 0; i < 6; i++) bonds.push(B(offset + i, offset + ((i + 1) % 6), i % 2 ? 1 : 2));
      for (let i = 0; i < 6; i++) bonds.push(B(offset + i, offset + 6 + i));
      return bonds;
    }

    function benzeneCore(omitH = []) {
      const atoms = [];
      const bonds = [];
      const omitted = new Set(omitH);
      const r = 1.65;
      for (let i = 0; i < 6; i++) {
        const a = -Math.PI / 2 + i * Math.PI / 3;
        atoms.push(A("C", Math.cos(a) * r, Math.sin(a) * r, 0));
      }
      for (let i = 0; i < 6; i++) bonds.push(B(i, (i + 1) % 6, i % 2 ? 1 : 2));
      for (let i = 0; i < 6; i++) {
        if (omitted.has(i)) continue;
        const a = -Math.PI / 2 + i * Math.PI / 3;
        atoms.push(A("H", Math.cos(a) * (r + 0.95), Math.sin(a) * (r + 0.95), 0));
        bonds.push(B(i, atoms.length - 1));
      }
      return { atoms, bonds, guides: [guide("plane", atoms.map((_, i) => i), "#1f63d8", "苯环平面")] };
    }

    function benzeneMol() {
      const atoms = ringAtoms();
      return { atoms, bonds: ringBonds(), guides: [guide("plane",[0,1,2,3,4,5,6,7,8,9,10,11],"#1f63d8","苯环平面")] };
    }

    function formaldehyde() {
      const atoms = [A("C",0,0,0), A("O",0,1.45,0), A("H",-1.2,-0.85,0), A("H",1.2,-0.85,0)];
      return { atoms, bonds: [B(0,1,2),B(0,2),B(0,3)], guides: [guide("plane",[0,1,2,3],"#d82424","羰基平面")] };
    }

    function ethanol() {
      const atoms = [A("C",-1.15,0,0), A("C",0.55,0.15,0.25), A("O",1.75,-0.55,0.05), A("H",2.55,-0.05,0.22), A("H",-1.8,0.95,0.75), A("H",-1.75,-1.0,0.55), A("H",-1.45,0,-1.25), A("H",0.55,1.2,-0.4), A("H",0.55,0.2,1.45)];
      return { atoms, bonds: [B(0,1),B(1,2),B(2,3),B(0,4),B(0,5),B(0,6),B(1,7),B(1,8)], guides: [] };
    }

    function aceticAcid() {
      const atoms = [
        A("C",-1.45,-0.10,0.10),
        A("C",0.00,0.00,0.00),
        A("O",0.68,1.20,0.00),
        A("O",0.76,-1.14,0.00),
        A("H",1.66,-1.26,0.00),
        A("H",-2.10,0.74,0.78),
        A("H",-2.08,-1.02,0.70),
        A("H",-1.70,-0.06,-1.18)
      ];
      return { atoms, bonds: [B(0,1),B(1,2,2),B(1,3),B(3,4),B(0,5),B(0,6),B(0,7)], guides: [guide("plane",[1,2,3,4],"#d82424","羧基平面")] };
    }

    function toluene() {
      const base = benzeneCore([0]);
      const atoms = base.atoms;
      atoms.push(A("C",0,-2.95,0), A("H",0,-3.75,1.05), A("H",-0.95,-3.4,-0.75), A("H",0.95,-3.4,-0.75));
      return { atoms, bonds: [...base.bonds, B(0,11), B(11,12), B(11,13), B(11,14)], guides: base.guides };
    }

    function ethylbenzene() {
      const m = toluene();
      m.atoms[11] = A("C",0,-2.95,0);
      m.atoms[12] = A("C",0,-4.45,0.8);
      m.atoms[13] = A("H",-0.85,-2.95,-0.95);
      m.atoms[14] = A("H",0.85,-2.95,-0.95);
      m.atoms.push(A("H",-0.8,-4.95,1.55), A("H",0.8,-4.95,1.55), A("H",0,-4.9,-0.25));
      m.bonds = [...benzeneCore([0]).bonds, B(0,11), B(11,12), B(11,13), B(11,14), B(12,15), B(12,16), B(12,17)];
      return m;
    }

    function propene() {
      const atoms = [
        A("C",-0.85,1.22,0.08),
        A("C",0.00,0.00,0.00),
        A("C",1.42,0.00,0.00),
        A("H",-1.95,1.28,0.82),
        A("H",-0.45,2.26,0.50),
        A("H",-1.16,1.16,-1.16),
        A("H",-0.72,-1.05,0.00),
        A("H",2.10,0.92,0.00),
        A("H",2.10,-0.92,0.00)
      ];
      return { atoms, bonds: [B(0,1),B(1,2,2),B(0,3),B(0,4),B(0,5),B(1,6),B(2,7),B(2,8)], guides: [guide("plane",[1,2,6,7,8],"#1f63d8","双键平面")] };
    }

    function butadiene() {
      const atoms = [
        A("C",-2.10,0.00,0.00),
        A("C",-0.68,0.00,0.00),
        A("C",0.18,1.18,0.00),
        A("C",1.60,1.18,0.00),
        A("H",-2.78,0.92,0.00),
        A("H",-2.78,-0.92,0.00),
        A("H",-0.24,-0.98,0.00),
        A("H",-0.26,2.16,0.00),
        A("H",2.28,2.10,0.00),
        A("H",2.28,0.26,0.00)
      ];
      return { atoms, bonds: [B(0,1,2),B(1,2),B(2,3,2),B(0,4),B(0,5),B(1,6),B(2,7),B(3,8),B(3,9)], guides: [guide("plane",[0,1,2,3,4,5,6,7,8,9],"#1f63d8","共轭平面")] };
    }

    function styrene() {
      const m = benzeneSubBase();
      const n = m.atoms.length;
      m.atoms.push(
        A("C",0.00,-3.00,0.00),
        A("C",1.34,-3.62,0.00),
        A("H",-1.02,-3.48,0.00),
        A("H",1.48,-4.72,0.00),
        A("H",2.20,-2.94,0.00)
      );
      m.bonds.push(B(0,n), B(n,n+1,2), B(n,n+2), B(n+1,n+3), B(n+1,n+4));
      m.guides.push(guide("plane",[n,n+1,n+2,n+3,n+4],"#0ea5b7","乙烯基平面"));
      return m;
    }

    function phenylacetylene() {
      const m = benzeneSubBase();
      const n = m.atoms.length;
      m.atoms.push(A("C",0,-3,0), A("C",0,-4.45,0), A("H",0,-5.55,0));
      m.bonds.push(B(0,n), B(n,n+1,3), B(n+1,n+2));
      m.guides.push(guide("line",[0,n,n+1,n+2],"#7657df","三键直线"));
      return m;
    }

    function phenol() {
      const m = benzeneSubBase();
      const n = m.atoms.length;
      m.atoms.push(A("O",0,-3,0.1), A("H",0.75,-3.55,0.7));
      m.bonds.push(B(0,n), B(n,n+1));
      return m;
    }

    function benzaldehyde() {
      const m = benzeneSubBase();
      const n = m.atoms.length;
      m.atoms.push(A("C",0,-3,0), A("O",0.95,-3.85,0), A("H",-0.95,-3.75,0));
      m.bonds.push(B(0,n), B(n,n+1,2), B(n,n+2));
      m.guides.push(guide("plane",[0,n,n+1,n+2],"#d82424","醛基平面"));
      return m;
    }

    function benzoicAcid() {
      const m = benzeneSubBase();
      const n = m.atoms.length;
      m.atoms.push(A("C",0,-3,0), A("O",0.95,-3.85,0), A("O",-0.95,-3.85,0), A("H",-1.55,-4.55,0.2));
      m.bonds.push(B(0,n), B(n,n+1,2), B(n,n+2), B(n+2,n+3));
      m.guides.push(guide("plane",[0,n,n+1,n+2,n+3],"#d82424","羧基平面"));
      return m;
    }

    function aniline() {
      const m = benzeneSubBase();
      const n = m.atoms.length;
      m.atoms.push(A("N",0,-3,0.25), A("H",-0.75,-3.55,0.95), A("H",0.75,-3.55,0.95));
      m.bonds.push(B(0,n), B(n,n+1), B(n,n+2));
      return m;
    }

    function vinylAcetate() {
      const atoms = [A("C",-2.2,0,0.7), A("C",-0.8,0,0), A("O",-0.35,1.25,0), A("O",0.1,-1.05,0), A("C",1.35,-1.05,0), A("C",2.75,-1.05,0), A("H",-2.9,0.8,1.1), A("H",-2.85,-0.85,1.05), A("H",-2.35,0,-0.55), A("H",1.35,-2.05,0), A("H",3.35,-0.2,0), A("H",3.35,-1.9,0)];
      return { atoms, bonds: [B(0,1),B(1,2,2),B(1,3),B(3,4),B(4,5,2),B(0,6),B(0,7),B(0,8),B(4,9),B(5,10),B(5,11)], guides: [guide("plane",[1,2,3,4,5,9,10,11],"#d82424","酯基/乙烯基平面")] };
    }

    function aspirin() {
      const m = benzeneSubBase([0,2]);
      let n = m.atoms.length;
      m.atoms.push(A("C",0,-3,0), A("O",0.95,-3.85,0), A("O",-0.95,-3.85,0), A("H",-1.55,-4.55,0.35));
      m.bonds.push(B(0,n),B(n,n+1,2),B(n,n+2),B(n+2,n+3));
      m.guides.push(guide("plane",[0,n,n+1,n+2,n+3],"#d82424","羧基平面"));
      n = m.atoms.length;
      m.atoms.push(A("O",2.35,1.35,0.15), A("C",3.55,1.95,0), A("O",3.75,3.2,0), A("C",4.75,1.05,0.75), A("H",5.45,1.75,1.2), A("H",4.45,0.25,1.45), A("H",5.25,0.55,-0.1));
      m.bonds.push(B(2,n),B(n,n+1),B(n+1,n+2,2),B(n+1,n+3),B(n+3,n+4),B(n+3,n+5),B(n+3,n+6));
      m.guides.push(guide("plane",[2,n,n+1,n+2,n+3],"#d82424","酯基平面"));
      return m;
    }

    function benzonitrile() {
      const m = benzeneSubBase();
      const n = m.atoms.length;
      m.atoms.push(A("C",0,-3,0), A("N",0,-4.35,0));
      m.bonds.push(B(0,n), B(n,n+1,3));
      m.guides.push(guide("line",[0,n,n+1],"#7657df","C≡N 直线"));
      return m;
    }

    function acrolein() {
      const atoms = [A("C",-1.8,0,0), A("C",-0.35,0,0), A("C",1.05,0,0), A("O",2.05,0.85,0), A("H",-2.45,0.9,0), A("H",-2.45,-0.9,0), A("H",-0.35,1.05,0), A("H",1.1,-1.05,0)];
      return { atoms, bonds: [B(0,1,2),B(1,2),B(2,3,2),B(0,4),B(0,5),B(1,6),B(2,7)], guides: [guide("plane",[0,1,2,3,4,5,6,7],"#1f63d8","共轭平面")] };
    }

    function benzeneSubBase(omit = [0]) {
      return benzeneCore(omit);
    }

    const canvas = document.getElementById("viewer");
    const ctx = canvas.getContext("2d");
    const listEl = document.getElementById("moleculeList");
    const filterEl = document.getElementById("filters");
    const searchEl = document.getElementById("search");

    function current() { return molecules.find(m => m.id === activeId) || molecules[0]; }

    function renderFilters() {
      filterEl.innerHTML = filters.map(f => `<button class="chip ${f === activeFilter ? "active" : ""}" data-filter="${f}">${f}</button>`).join("");
      filterEl.querySelectorAll("button").forEach(btn => {
        btn.onclick = () => {
          activeFilter = btn.dataset.filter;
          renderList();
        };
      });
    }

    function renderList() {
      const keyword = searchEl.value.trim().toLowerCase();
      const items = molecules.filter(m => {
        const filterOk = activeFilter === "全部" || m.categories.includes(activeFilter);
        const searchOk = !keyword || [m.name, m.formula, m.condensed, m.tags.join(""), m.units.join("")].join("").toLowerCase().includes(keyword);
        return filterOk && searchOk;
      });
      listEl.innerHTML = items.length ? items.map((m, i) => `
        <button class="item ${m.id === activeId ? "active" : ""}" data-id="${m.id}">
          <span class="dot" style="background:${colorFor(m)}"></span>
          <span>
            <span class="item-name">${m.name}</span>
            <span class="item-formula">${m.formula}　${m.condensed}</span>
          </span>
        </button>
      `).join("") : `<div class="empty">没有找到匹配物质。</div>`;
      listEl.querySelectorAll(".item").forEach(btn => {
        btn.onclick = () => {
          activeId = btn.dataset.id;
          view = { rx: -0.48, ry: 0.72, rz: 0.05, zoom: 1 };
          renderAll();
        };
      });
    }

    function colorFor(m) {
      if (m.categories.includes("含三键")) return "#7657df";
      if (m.categories.includes("含羰基")) return "#d82424";
      if (m.categories.includes("含双键")) return "#0ea5b7";
      if (m.categories.includes("含苯环")) return "#1f63d8";
      return "#11a36a";
    }

    function renderInfo() {
      const m = current();
      document.getElementById("molName").textContent = m.name;
      document.getElementById("molFormula").textContent = `${m.formula}　结构简式：${m.condensed}`;
      document.getElementById("molTags").innerHTML = m.tags.map(tag => {
        const cls = tag.includes("共线") || tag.includes("直线") ? "line" : tag.includes("共面") || tag.includes("平面") ? "plane" : tag.includes("不") || tag.includes("旋转") ? "warn" : "good";
        return `<span class="tag ${cls}">${tag}</span>`;
      }).join("");
      document.getElementById("mainPoint").textContent = m.mainPoint;
      document.getElementById("shortHint").textContent = m.hint;
      const stats = planeStats[m.id] || ["-", "-"];
      document.getElementById("planeStats").textContent = `最多 ${stats[0]} 个原子共面；最多 ${stats[1]} 个碳原子共面`;
      document.getElementById("planeLine").textContent = m.planeLine;
      document.getElementById("units").innerHTML = m.units.map(u => `<div class="legend-row"><span class="plane-key"></span><span>${u}</span></div>`).join("");
    }

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(400, Math.floor(rect.width * dpr));
      canvas.height = Math.max(300, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function rotatePoint(p) {
      let { x, y, z } = p;
      const sx = Math.sin(view.rx), cx = Math.cos(view.rx);
      const sy = Math.sin(view.ry), cy = Math.cos(view.ry);
      const sz = Math.sin(view.rz), cz = Math.cos(view.rz);
      let y1 = y * cx - z * sx, z1 = y * sx + z * cx; y = y1; z = z1;
      let x1 = x * cy + z * sy, z2 = -x * sy + z * cy; x = x1; z = z2;
      let x2 = x * cz - y * sz, y2 = x * sz + y * cz; x = x2; y = y2;
      return { x, y, z, e: p.e };
    }

    function project(p, scale, cx, cy) {
      const depth = 7;
      const perspective = depth / (depth - p.z);
      return { x: cx + p.x * scale * perspective, y: cy + p.y * scale * perspective, z: p.z, e: p.e, k: perspective };
    }

    function draw() {
      resizeCanvas();
      const w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const m = current();
      const rotated = m.atoms.map(rotatePoint);
      const bounds = getBounds(rotated);
      const span = Math.max(bounds.maxX - bounds.minX, bounds.maxY - bounds.minY, 4);
      const scale = Math.min(w, h) * 0.42 / span * view.zoom;
      const cx = w / 2 - ((bounds.maxX + bounds.minX) / 2) * scale;
      const cy = h / 2 - ((bounds.maxY + bounds.minY) / 2) * scale;
      const pts = rotated.map(p => project(p, scale, cx, cy));

      if (showGuides) drawGuides(m, pts);

      const bondItems = m.bonds.map(b => ({ ...b, z: (pts[b.a].z + pts[b.b].z) / 2 })).sort((a,b) => a.z - b.z);
      bondItems.forEach(b => drawBond(pts[b.a], pts[b.b], b.order));

      pts.map((p, i) => ({ ...p, i })).sort((a,b) => a.z - b.z).forEach(p => drawAtom(p));
    }

    function getBounds(points) {
      return points.reduce((b, p) => ({
        minX: Math.min(b.minX, p.x), maxX: Math.max(b.maxX, p.x),
        minY: Math.min(b.minY, p.y), maxY: Math.max(b.maxY, p.y)
      }), { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity });
    }

    function drawGuides(m, pts) {
      m.guides.forEach(g => {
        const arr = g.atoms.map(i => pts[i]).filter(Boolean);
        if (g.type === "plane" && arr.length >= 3) {
          const hull = convexHull(arr);
          ctx.save();
          ctx.globalAlpha = 0.22;
          ctx.beginPath();
          hull.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
          ctx.closePath();
          ctx.fillStyle = g.color;
          ctx.fill();
          ctx.globalAlpha = 0.55;
          ctx.strokeStyle = g.color;
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
        }
        if (g.type === "line" && arr.length >= 2) {
          ctx.save();
          ctx.strokeStyle = g.color;
          ctx.globalAlpha = 0.75;
          ctx.lineWidth = 6;
          ctx.setLineDash([12, 10]);
          ctx.beginPath();
          arr.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
          ctx.stroke();
          ctx.restore();
        }
      });
    }

    function convexHull(points) {
      const pts = [...points].sort((a,b) => a.x === b.x ? a.y - b.y : a.x - b.x);
      const cross = (o,a,b) => (a.x-o.x)*(b.y-o.y) - (a.y-o.y)*(b.x-o.x);
      const lower = [];
      for (const p of pts) { while (lower.length >= 2 && cross(lower[lower.length-2], lower[lower.length-1], p) <= 0) lower.pop(); lower.push(p); }
      const upper = [];
      for (let i = pts.length - 1; i >= 0; i--) { const p = pts[i]; while (upper.length >= 2 && cross(upper[upper.length-2], upper[upper.length-1], p) <= 0) upper.pop(); upper.push(p); }
      return lower.slice(0,-1).concat(upper.slice(0,-1));
    }

    function drawBond(a, b, order) {
      const dx = b.x - a.x, dy = b.y - a.y;
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len, ny = dx / len;
      const offsets = order === 1 ? [0] : order === 2 ? [-4, 4] : [-6, 0, 6];
      offsets.forEach(off => {
        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        grad.addColorStop(0, "#777d86");
        grad.addColorStop(0.45, "#f2f4f7");
        grad.addColorStop(1, "#565c65");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(a.x + nx * off, a.y + ny * off);
        ctx.lineTo(b.x + nx * off, b.y + ny * off);
        ctx.stroke();
      });
    }

    function drawAtom(p) {
      const st = atomStyle[p.e] || atomStyle.C;
      const r = st.r * p.k * view.zoom ** 0.15;
      const grad = ctx.createRadialGradient(p.x - r * 0.35, p.y - r * 0.42, r * 0.1, p.x, p.y, r);
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.35, st.color);
      grad.addColorStop(1, shade(st.color, -42));
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(18, 37, 60, 0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function shade(hex, percent) {
      const n = parseInt(hex.slice(1), 16);
      let r = n >> 16, g = n >> 8 & 255, b = n & 255;
      r = Math.max(0, Math.min(255, r + percent));
      g = Math.max(0, Math.min(255, g + percent));
      b = Math.max(0, Math.min(255, b + percent));
      return `rgb(${r},${g},${b})`;
    }

    function renderAll() {
      renderList();
      renderInfo();
      draw();
    }

    let dragging = false;
    const pointers = new Map();
    let lastX = 0, lastY = 0, lastPinch = 0;

    function pinchDistance() {
      const pts = [...pointers.values()];
      if (pts.length < 2) return 0;
      return Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    }

    canvas.addEventListener("contextmenu", e => e.preventDefault());
    canvas.addEventListener("pointerdown", e => {
      e.preventDefault();
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      canvas.setPointerCapture(e.pointerId);
      dragging = true;
      if (pointers.size === 1) {
        lastX = e.clientX;
        lastY = e.clientY;
      }
      if (pointers.size === 2) {
        lastPinch = pinchDistance();
      }
    });
    canvas.addEventListener("pointermove", e => {
      if (!pointers.has(e.pointerId)) return;
      e.preventDefault();
      const prev = pointers.get(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) {
        view.ry += (e.clientX - lastX) * 0.012;
        view.rx += (e.clientY - lastY) * 0.012;
        lastX = e.clientX;
        lastY = e.clientY;
        draw();
      } else if (pointers.size >= 2) {
        const now = pinchDistance();
        if (lastPinch > 0) {
          view.zoom *= now / lastPinch;
          view.zoom = Math.max(0.45, Math.min(3.6, view.zoom));
        }
        lastPinch = now;
        const dx = e.clientX - prev.x;
        const dy = e.clientY - prev.y;
        view.ry += dx * 0.003;
        view.rx += dy * 0.003;
        draw();
      }
    });

    function endPointer(e) {
      pointers.delete(e.pointerId);
      dragging = pointers.size > 0;
      if (pointers.size === 1) {
        const p = [...pointers.values()][0];
        lastX = p.x;
        lastY = p.y;
      }
      lastPinch = pointers.size === 2 ? pinchDistance() : 0;
    }

    canvas.addEventListener("pointerup", endPointer);
    canvas.addEventListener("pointercancel", endPointer);
    canvas.addEventListener("lostpointercapture", endPointer);
    canvas.addEventListener("wheel", e => {
      e.preventDefault();
      view.zoom *= e.deltaY < 0 ? 1.08 : 0.92;
      view.zoom = Math.max(0.45, Math.min(3.2, view.zoom));
      draw();
    }, { passive: false });

    document.querySelector(".controls").addEventListener("click", e => {
      const action = e.target.dataset.action;
      if (!action) return;
      if (action === "fullscreen") {
        const stage = document.querySelector(".stage");
        if (!document.fullscreenElement) {
          stage.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
        setTimeout(draw, 180);
      }
      if (action === "reset") view = { rx: -0.48, ry: 0.72, rz: 0.05, zoom: 1 };
      if (action === "x") view.rx += Math.PI / 2;
      if (action === "y") view.ry += Math.PI / 2;
      if (action === "z") view.rz += Math.PI / 2;
      if (action === "zoomIn") view.zoom = Math.min(3.2, view.zoom * 1.18);
      if (action === "zoomOut") view.zoom = Math.max(0.45, view.zoom / 1.18);
      draw();
    });

    document.getElementById("togglePlanes").onclick = e => {
      showGuides = !showGuides;
      e.currentTarget.classList.toggle("active", showGuides);
      draw();
    };

    document.getElementById("autoRotate").onclick = e => {
      autoRotate = !autoRotate;
      e.currentTarget.classList.toggle("active", autoRotate);
    };

    searchEl.addEventListener("input", renderList);
    window.addEventListener("resize", draw);
    document.addEventListener("fullscreenchange", () => {
      const btn = document.querySelector('[data-action="fullscreen"]');
      if (btn) btn.textContent = document.fullscreenElement ? "退出全屏" : "全屏观察";
      setTimeout(draw, 120);
    });

    function tick() {
      if (autoRotate && !dragging) {
        view.ry += 0.008;
        view.rx += 0.002;
        draw();
      }
      requestAnimationFrame(tick);
    }

    renderFilters();
    renderAll();
    tick();
  </script>
  <script src="./deepseek-assistant.js"></script>
</body>
</html>

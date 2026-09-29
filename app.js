const projects = [
  { title: "即時互動平台", repo: "cloudes", category: "tools", type: "教學工具", url: "https://laisurjan.github.io/cloudes/", desc: "整合問答、文字雲、投票、量表與排序題，讓全班即時參與並看見彼此的想法。", tags: ["課堂互動", "即時回饋", "多元評量"], accent: "#b7ff57", tech: "HTML · JavaScript · Firebase Firestore", method: "將教師出題與學生回應存入雲端資料庫，畫面會同步更新全班結果。" },
  { title: "深度共讀 RIA", repo: "reading", category: "tools", type: "教學工具", url: "https://laisurjan.github.io/reading/", desc: "以 RIA 閱讀策略串連理解、提問與交流，建立可共同思考的深度共讀空間。", tags: ["閱讀策略", "協作學習", "思考鷹架"], accent: "#67e8f9", tech: "TypeScript · React · GitHub Pages", method: "把 RIA 閱讀流程拆成連續步驟，讓閱讀、提問與回應在同一個介面完成。" },
  { title: "學習素材累積", repo: "Learning-Portfolio", category: "tools", type: "教學工具", url: "https://laisurjan.github.io/Learning-Portfolio/", desc: "集中累積與瀏覽學習素材，讓教學歷程與作品不再散落，逐步形成可回看的學習檔案。", tags: ["學習歷程", "素材管理", "作品整理"], accent: "#a7f3d0", tech: "HTML · CSS · JavaScript", method: "以瀏覽器端互動整理素材與作品，依類別呈現可持續累積的學習紀錄。" },

  { title: "應用文：稱謂與題辭", repo: "Letter", category: "language", type: "語文人文", url: "https://laisurjan.github.io/Letter/", desc: "以遊戲化練習熟悉應用文稱謂與題辭，搭配成績卡與即時回饋提升練習動機。", tags: ["國語文", "應用文", "遊戲化"], accent: "#facc15", tech: "HTML · CSS · JavaScript", method: "以題庫、即時判定與成績卡組成單頁闖關，完成後產生結果與彩帶回饋。" },
  { title: "即席・演說道場", repo: "speech-dojo", category: "language", type: "語文人文", url: "https://laisurjan.github.io/speech-dojo/", desc: "把即席演說拆成可以反覆演練的任務，協助學生組織觀點、掌握時間並勇敢表達。", tags: ["口語表達", "即席演說", "自主練習"], accent: "#fb923c", tech: "HTML · CSS · JavaScript", method: "用隨機題目、準備倒數與演說計時，建立可重複操作的個人練習流程。" },
  { title: "《郁離子選》互動教學", repo: "yulizi-xuan", category: "language", type: "語文人文", url: "https://yulizi-xuan.vercel.app/", desc: "以圖像化歸納、互動圖解與自學測驗，重新梳理〈魯般〉與〈鄙人學蓋〉的文本思考。", tags: ["古典文學", "互動圖解", "自學複習"], accent: "#fbbf24", tech: "Next.js · React · TypeScript · Vercel", method: "將課文整理成可切換的圖解、比較區塊與測驗元件，適合課堂投影和學生自學。" },
  { title: "縱谷無言", repo: "silent-valley-hualien", category: "language", type: "語文人文", url: "https://laisurjan.github.io/silent-valley-hualien/outputs/ai_history_learning_exhibit.html", desc: "從花東縱谷重大歷史事件出發，結合 NotebookLM 與三句寫作，走過認識、對照與省思。", tags: ["多元文化", "地方學", "AI 共學"], accent: "#d6d3d1", tech: "HTML · CSS · JavaScript · GitHub Pages", method: "把事件資料編排成可導覽的數位展覽，串連地方地景、史料閱讀與三句寫作。" },
  { title: "一個你以為你懂的制度", repo: "test-history", category: "language", type: "語文人文", url: "https://laisurjan.github.io/test-history/", desc: "談科舉制度如何運作、又如何牽動讀書人的一生，作為〈范進中舉〉的前導背景閱讀。", tags: ["國語文", "科舉制度", "背景閱讀"], accent: "#818cf8", tech: "HTML · CSS · JavaScript", method: "用分段敘事、選擇與資訊揭露控制閱讀節奏，逐步改變學生對制度的判斷。" },
  { title: "留言區：傷人與接住", repo: "teacher", category: "language", type: "語文人文", url: "https://laisurjan.github.io/teacher/ig/", desc: "從名人貼文下的真實留言出發，看見同一件事如何引出悲喜不同的回應，作為〈岳陽樓記〉覽物之情的前導情境。", tags: ["國語文", "社群媒體", "引起動機"], accent: "#f87171", tech: "HTML · CSS · JavaScript", method: "全螢幕投影簡報，留言卡字級依長短自動撐滿畫面，中間穿插提問頁讓全班停下來討論。" },
  { title: "曲面鏡與透鏡 3D 實驗室", repo: "mengxi-optics-lab", category: "language", type: "語文人文", url: "https://laisurjan.github.io/mengxi-optics-lab/", desc: "以《夢溪筆談》〈古人鑄鑑〉為核心，用 3D 實驗驗證「鑑窪則照人面大，凸則照人面小」，操作時即時標出對應的課文字句。", tags: ["國語文", "夢溪筆談", "科學實驗"], accent: "#22d3ee", tech: "HTML · JavaScript · Three.js 3D", method: "拖曳物體或調整鏡片參數時，3D 場景會即時重算光線與成像位置。" },

  { title: "花蓮縣災害風險地圖", repo: "hualien-flood-risk-map", category: "cross", type: "跨域素養", url: "https://laisurjan.github.io/hualien-flood-risk-map/", desc: "從「記帳」轉向「記災」，用互動地圖閱讀地方風險，連結資料判讀與防災意識。", tags: ["防災教育", "地圖素養", "花蓮"], accent: "#38bdf8", tech: "HTML · JavaScript · 互動地圖", method: "把地點與災害資料放入可點選的地圖圖層，讓學生比較不同區域的風險。" },
  { title: "台灣地理探險隊", repo: "taiwan-geoplay", category: "cross", type: "跨域素養", url: "https://taiwan-geography-classroom.lailaifamily.chatgpt.site/", desc: "把台灣地圖變成班級遊樂場，分隊在真實座標上定位、判讀地形圖，揭曉時一起比較落點與距離。", tags: ["地理", "地圖判讀", "班級對戰"], accent: "#34d399", external: true, tech: "React · Cloudflare Worker · D1 · ChatGPT Sites", method: "教師開房、學生以手機掃碼加入，同隊多機即時看見隊友落點，服務端統一計分與逐題揭曉。" },
  { title: "地圖實驗室：把地球攤開", repo: "mercator-lab", category: "cross", type: "跨域素養", url: "https://mercator-unfold-lab.lailaifamily.chatgpt.site/", desc: "親手把地球攤成麥卡托地圖，從球體、圓柱到平面，看見格陵蘭為什麼被放大十倍，再回頭讀懂世界地圖。", tags: ["地理", "地圖投影", "3D 模擬"], accent: "#a78bfa", external: true, tech: "React · 3D 動畫 · ChatGPT Sites", method: "以透明地球儀播放投影三階段，搭配各緯度面積失真表與觀察任務，讓學生先預測再驗證。" },
  { title: "校園噪音地圖", repo: "hlbh-noise-map", category: "cross", type: "跨域素養", url: "https://hlbh-noise-map.web.app/", desc: "學生分組認養校園測量點，用手機麥克風測量音量，繪成全班共享的噪音地圖，再回到學習單分析與提出結論。", tags: ["地理", "實地測量", "資料判讀"], accent: "#60a5fa", external: true, tech: "HTML · JavaScript · Firebase Firestore · Web Audio", method: "學生手機錄 30 秒音量並附 GPS 檢查，資料即時匯入投影地圖；兩張學習單分別承接測量與分析。" },
  { title: "說故事學行銷 × 實地詢價", repo: "price-survey", category: "cross", type: "跨域素養", url: "https://laisurjan.github.io/price-survey/", desc: "把行銷敘事與實地詢價結合，帶學生從真實市場資料發現價格背後的故事。", tags: ["商業教育", "實地調查", "任務導向"], accent: "#2dd4bf", tech: "HTML · CSS · JavaScript", method: "將實地詢價拆成任務步驟，學生依畫面提示蒐集、比較並整理商品資訊。" },

  { title: "未來魔法使圖鑑", repo: "magic", category: "cross", type: "跨域素養", url: "https://laisurjan.github.io/magic/", desc: "不看成績，以十二種異世界魔法學派探索能力傾向，開啟輕鬆而有想像力的自我認識。", tags: ["生涯探索", "自我認識", "趣味測驗"], accent: "#c084fc", tech: "HTML · CSS · JavaScript", method: "將選項換算成能力向度，再依分數組合產生魔法學派與個人結果卡。" },
  { title: "未來魔法使圖鑑・新版", repo: "newmagic", category: "cross", type: "跨域素養", url: "https://laisurjan.github.io/newmagic/", desc: "魔法適性測驗的進化版本，以角色敘事與結果回饋陪學生發現自己的潛在優勢。", tags: ["能力探索", "角色敘事", "測驗"], accent: "#e879f9", tech: "HTML · CSS · JavaScript", method: "重新設計題目流程、計分規則與結果敘事，讓測驗回饋更完整也更容易閱讀。" },
  { title: "電玩主角刻板印象 BINGO", repo: "men", category: "cross", type: "跨域素養", url: "https://laisurjan.github.io/men/", desc: "從熟悉的電玩角色切入性別刻板印象，以 BINGO 引發觀察、辨識與對話。", tags: ["性別平等", "媒體識讀", "討論活動"], accent: "#f472b6", tech: "HTML · CSS · JavaScript", method: "用可點選的賓果格記錄觀察結果，再以完成狀態帶動全班檢視與討論。" },
  { title: "職場服務大挑戰", repo: "SELgame", category: "cross", type: "跨域素養", url: "https://laisurjan.github.io/SELgame/", desc: "以空服員工作情境進行 SEL 壓力測試，在選擇與回饋中練習情緒調節與服務判斷。", tags: ["SEL", "職場情境", "壓力調適"], accent: "#fb7185", tech: "HTML · CSS · JavaScript", method: "每次情境選擇會改變壓力與服務指標，最後依累積結果提供不同回饋。" },
  { title: "好運之島", repo: "lucky-island-game", category: "language", type: "語文人文", url: "https://lucky-island-game.web.app/demo.html", desc: "以島嶼冒險與情境選擇，引導學生走進原住民族的歷史處境，在體驗中理解不同位置與抉擇。", tags: ["原住民族", "處境體驗", "遊戲學習"], accent: "#d59b42", external: true, tech: "HTML · JavaScript · Firebase Hosting", method: "以分支選擇推進島嶼故事，學生的決定會改變後續處境與結局。" }
];

const categoryNames = { all: "全部", tools: "教學工具", language: "語文人文", cross: "跨域素養" };
const grid = document.querySelector("#project-grid");
const search = document.querySelector("#search");
const status = document.querySelector("#results-status");
const empty = document.querySelector("#empty-state");
let activeFilter = "all";

function colorMix(hex, alpha) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16), g = parseInt(value.slice(2, 4), 16), b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function render() {
  const query = search.value.trim().toLocaleLowerCase("zh-Hant");
  const visible = projects.filter(project => {
    const inCategory = activeFilter === "all" || project.category === activeFilter;
    const haystack = [project.title, project.repo, project.type, project.desc, ...project.tags].join(" ").toLocaleLowerCase("zh-Hant");
    return inCategory && (!query || haystack.includes(query));
  });

  grid.innerHTML = visible.map((project, index) => `
    <article class="project-card" style="--accent:${project.accent};--accent-dark:${colorMix(project.accent,.12)};--accent-glow:${colorMix(project.accent,.2)};animation-delay:${Math.min(index * 35, 280)}ms">
      <div class="preview">
        <div class="preview-fallback" aria-hidden="true">${String(index + 1).padStart(2, "0")}</div>
        <iframe title="${project.title} 網頁即時預覽" data-src="${project.url}" loading="lazy" tabindex="-1" aria-hidden="true"></iframe>
        <div class="preview-chrome" aria-hidden="true"><i></i><i></i><i></i><span>${new URL(project.url).hostname}</span></div>
        <div class="tech-popover" role="note">
          <span>製作方式</span>
          <strong>${project.tech}</strong>
          <p>${project.method}</p>
        </div>
        <a class="preview-link" href="${project.url}" target="_blank" rel="noopener" aria-label="開啟 ${project.title}">
          <span class="open-pill">進入作品 ↗</span>
        </a>
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${project.type}</span><span>${project.external ? "EXTERNAL SITE" : `GITHUB / ${project.repo}`} · 停留看製作</span></div>
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");

  status.textContent = query || activeFilter !== "all"
    ? `${categoryNames[activeFilter]}中找到 ${visible.length} 件作品`
    : `顯示全部 ${visible.length} 件作品`;
  empty.hidden = visible.length !== 0;
  grid.hidden = visible.length === 0;
  observePreviews();
}

let observer;
function observePreviews() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const frame = entry.target;
      frame.src = frame.dataset.src;
      frame.removeAttribute("data-src");
      observer.unobserve(frame);
    });
  }, { rootMargin: "320px" });
  document.querySelectorAll("iframe[data-src]").forEach(frame => observer.observe(frame));
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });
    activeFilter = button.dataset.filter;
    render();
  });
});

search.addEventListener("input", render);
document.addEventListener("keydown", event => {
  if (event.key === "/" && document.activeElement !== search) {
    event.preventDefault();
    search.focus();
  }
  if (event.key === "Escape" && document.activeElement === search) {
    search.value = "";
    search.blur();
    render();
  }
});

document.querySelector("#reset-filters").addEventListener("click", () => {
  activeFilter = "all";
  search.value = "";
  document.querySelectorAll(".filter").forEach((item, index) => {
    item.classList.toggle("active", index === 0);
    item.setAttribute("aria-pressed", index === 0 ? "true" : "false");
  });
  render();
});

document.querySelector("#project-count").textContent = projects.length;
document.querySelector("#all-count").textContent = projects.length;
document.querySelector("#category-count").textContent = new Set(projects.map(project => project.category)).size;
render();

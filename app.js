const projects = [
  { title: "即時互動平台", repo: "cloudes", category: "tools", type: "教學工具", url: "https://laisurjan.github.io/cloudes/", desc: "整合問答、文字雲、投票、量表與排序題，讓全班即時參與並看見彼此的想法。", tags: ["課堂互動", "即時回饋", "多元評量"], accent: "#b7ff57" },
  { title: "花商教師配課系統", repo: "hlbhteacher", category: "tools", type: "教學工具", url: "https://github.com/Laisurjan/hlbhteacher", desc: "協助整理教師、課程與配課資料，以清楚介面支援校務安排、比較與檢核。目前公開原始專案供教師參考。", tags: ["校務協作", "資料整理", "教師工具"], accent: "#5eead4", sourceOnly: true },
  { title: "深度共讀 RIA", repo: "reading", category: "tools", type: "教學工具", url: "https://laisurjan.github.io/reading/", desc: "以 RIA 閱讀策略串連理解、提問與交流，建立可共同思考的深度共讀空間。", tags: ["閱讀策略", "協作學習", "思考鷹架"], accent: "#67e8f9" },
  { title: "學習素材累積", repo: "Learning-Portfolio", category: "tools", type: "教學工具", url: "https://laisurjan.github.io/Learning-Portfolio/", desc: "集中累積與瀏覽學習素材，讓教學歷程與作品不再散落，逐步形成可回看的學習檔案。", tags: ["學習歷程", "素材管理", "作品整理"], accent: "#a7f3d0" },

  { title: "應用文：稱謂與題辭", repo: "Letter", category: "language", type: "語文人文", url: "https://laisurjan.github.io/Letter/", desc: "以遊戲化練習熟悉應用文稱謂與題辭，搭配成績卡與即時回饋提升練習動機。", tags: ["國語文", "應用文", "遊戲化"], accent: "#facc15" },
  { title: "即席・演說道場", repo: "speech-dojo", category: "language", type: "語文人文", url: "https://laisurjan.github.io/speech-dojo/", desc: "把即席演說拆成可以反覆演練的任務，協助學生組織觀點、掌握時間並勇敢表達。", tags: ["口語表達", "即席演說", "自主練習"], accent: "#fb923c" },
  { title: "《郁離子選》互動教學", repo: "yulizi-xuan", category: "language", type: "語文人文", url: "https://yulizi-xuan.vercel.app/", desc: "以圖像化歸納、互動圖解與自學測驗，重新梳理〈魯般〉與〈鄙人學蓋〉的文本思考。", tags: ["古典文學", "互動圖解", "自學複習"], accent: "#fbbf24" },
  { title: "縱谷無言", repo: "silent-valley-hualien", category: "language", type: "語文人文", url: "https://laisurjan.github.io/silent-valley-hualien/outputs/ai_history_learning_exhibit.html", desc: "從花東縱谷重大歷史事件出發，結合 NotebookLM 與三句寫作，走過認識、對照與省思。", tags: ["多元文化", "地方學", "AI 共學"], accent: "#d6d3d1" },

  { title: "花蓮縣災害風險地圖", repo: "hualien-flood-risk-map", category: "inquiry", type: "跨域探究", url: "https://laisurjan.github.io/hualien-flood-risk-map/", desc: "從「記帳」轉向「記災」，用互動地圖閱讀地方風險，連結資料判讀與防災意識。", tags: ["防災教育", "地圖素養", "花蓮"], accent: "#38bdf8" },
  { title: "曲面鏡與透鏡 3D 實驗室", repo: "mengxi-optics-lab", category: "inquiry", type: "跨域探究", url: "https://laisurjan.github.io/mengxi-optics-lab/", desc: "以 3D 互動操作觀察成像變化，讓抽象光學概念成為可以拖曳、比較與驗證的實驗。", tags: ["自然科學", "3D 模擬", "探究實作"], accent: "#22d3ee" },
  { title: "說故事學行銷 × 實地詢價", repo: "price-survey", category: "inquiry", type: "跨域探究", url: "https://laisurjan.github.io/price-survey/", desc: "把行銷敘事與實地詢價結合，帶學生從真實市場資料發現價格背後的故事。", tags: ["商業教育", "實地調查", "任務導向"], accent: "#2dd4bf" },
  { title: "兼任行政人數資料站", repo: "teacher", category: "inquiry", type: "跨域探究", url: "https://laisurjan.github.io/teacher/", desc: "將花蓮高商歷年各科兼任行政人數視覺化，讓校務資料更容易閱讀、比較與討論。", tags: ["資料視覺化", "校務研究", "趨勢比較"], accent: "#60a5fa" },
  { title: "一個你以為你懂的制度", repo: "test-history", category: "inquiry", type: "跨域探究", url: "https://laisurjan.github.io/test-history/", desc: "以問題情境打開制度與歷史的多重視角，邀請學生重新檢視習以為常的理解。", tags: ["歷史思考", "制度探究", "情境學習"], accent: "#818cf8" },

  { title: "未來魔法使圖鑑", repo: "magic", category: "growth", type: "生涯素養", url: "https://laisurjan.github.io/magic/", desc: "不看成績，以十二種異世界魔法學派探索能力傾向，開啟輕鬆而有想像力的自我認識。", tags: ["生涯探索", "自我認識", "趣味測驗"], accent: "#c084fc" },
  { title: "未來魔法使圖鑑・新版", repo: "newmagic", category: "growth", type: "生涯素養", url: "https://laisurjan.github.io/newmagic/", desc: "魔法適性測驗的進化版本，以角色敘事與結果回饋陪學生發現自己的潛在優勢。", tags: ["能力探索", "角色敘事", "測驗"], accent: "#e879f9" },
  { title: "電玩主角刻板印象 BINGO", repo: "men", category: "growth", type: "生涯素養", url: "https://laisurjan.github.io/men/", desc: "從熟悉的電玩角色切入性別刻板印象，以 BINGO 引發觀察、辨識與對話。", tags: ["性別平等", "媒體識讀", "討論活動"], accent: "#f472b6" },
  { title: "職場服務大挑戰", repo: "SELgame", category: "growth", type: "生涯素養", url: "https://laisurjan.github.io/SELgame/", desc: "以空服員工作情境進行 SEL 壓力測試，在選擇與回饋中練習情緒調節與服務判斷。", tags: ["SEL", "職場情境", "壓力調適"], accent: "#fb7185" },
  { title: "好運之島", repo: "lucky-island-game", category: "growth", type: "生涯素養", url: "https://lucky-island-game.web.app/demo.html", desc: "以島嶼冒險包裝選擇與機會，透過遊戲體驗引導學生思考運氣、決策與人生路徑。", tags: ["遊戲學習", "選擇思考", "互動體驗"], accent: "#fcd34d", external: true }
];

const categoryNames = { all: "全部", tools: "教學工具", language: "語文人文", inquiry: "跨域探究", growth: "生涯素養" };
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
        ${project.sourceOnly ? "" : `<iframe title="${project.title} 網頁即時預覽" data-src="${project.url}" loading="lazy" tabindex="-1" aria-hidden="true"></iframe>`}
        <div class="preview-chrome" aria-hidden="true"><i></i><i></i><i></i><span>${new URL(project.url).hostname}</span></div>
        <a class="preview-link" href="${project.url}" target="_blank" rel="noopener" aria-label="開啟 ${project.title}">
          <span class="open-pill">${project.sourceOnly ? "查看專案" : "進入作品"} ↗</span>
        </a>
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${project.type}</span><span>${project.sourceOnly ? "SOURCE PROJECT" : project.external ? "EXTERNAL SITE" : `GITHUB / ${project.repo}`}</span></div>
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
document.querySelector("#category-count").textContent = new Set(projects.map(project => project.category)).size;
render();

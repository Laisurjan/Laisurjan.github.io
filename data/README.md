# data/projects.json

作品庫的結構化資料。115 年 10 月 29 日逐一查證 repo 後重建，用來取代 `app.js` 裡只有標籤與技術字串的扁平清單，之後的知識圖譜或任何新呈現方式都從這份資料長出來。

**目前網站（`app.js`）尚未改接這份資料**，兩邊並存；等呈現方式定案再接。

## 查證方式

- GitHub 上的專案：讀 README、檔案清單、`package.json`，並對線上頁面原始碼掃描函式庫關鍵字（firebase、three、leaflet、canvas、getUserMedia……）
- `teacher` 子目錄：在本機 clone 用 `git log` 取日期，掃原始碼
- 沒有 GitHub repo 的（台灣地理探險隊、地圖實驗室、校園噪音地圖、上學路上、Good Traffic Auto、好運之島、博學冒險）：讀本機專案的 `README.md`／`CLAUDE.md`／`HANDOFF.md`，日期取 git 或檔案修改時間，`dates.approx: true`
- `app.js` 的 `tech` 欄位有多處與實際不符（深度共讀、實地詢價、職場服務、災害地圖都有 Firebase 後台卻寫成純靜態），所以 `tools` 一律以程式碼為準，不抄 `app.js`

## 欄位

| 欄位 | 說明 |
| --- | --- |
| `id` | 短代號，關係表用它指向作品 |
| `title`、`url` | 與 `app.js` 一致 |
| `source` | 程式碼在哪：`github:<owner>/<repo>[/子目錄]` 或 `local:<路徑>` |
| `category` | 沿用網站現有三類：`tools`／`language`／`cross` |
| `format` | 作品形式，見 `formats`：簡報、遊戲、課堂工具、互動模擬、測驗、閱讀／展覽 |
| `domains` | 涉及的領域，可多個，限 `domains` 清單 |
| `abilities` | 能力代號 `C1`–`C9`，見下；**每個能力至少要有兩件作品當證據才成立** |
| `tools` | 查證過的技術與資料來源；HTML／CSS／JS 是底色，不列 |
| `features` | 查證到的具體功能，給圖譜的節點說明用 |
| `local` | 以花蓮或台灣在地真實場域／資料為素材 |
| `collaborators` | 共同開發者 |
| `dates` | `created`／`updated`，`approx` 表示來自檔案時間而非 git |
| `status`、`public` | `live` 且公開才會出現在網站；`pending` 的作品留在資料裡但不顯示 |
| `pending_reason` | 為什麼還不公開 |
| `notes` | 查證時發現的事，含與 `app.js` 不一致之處 |

## 能力（圖譜的主軸）

| 代號 | 能力 | 件數 |
| --- | --- | --- |
| C1 | 讓人站進別人的處境做選擇 | 6 |
| C2 | 從熟悉的當下搭橋到陌生的文本 | 6 |
| C3 | 把看不見的原理做成能動手驗證的模型 | 5 |
| C4 | 讓一群人即時看見彼此 | 7 |
| C5 | 把複雜任務拆成能反覆練的步驟 | 8 |
| C6 | 從花蓮的真實場域與資料出發 | 6 |
| C7 | 做出別人能直接接手使用的系統 | 11 |
| C8 | 把做法整理給別人複用 | 3 |
| C9 | 把文本與脈絡整理成看得見的結構 | 4 |

能力用動詞寫，主詞是「人」不是「學生」，以便日後接進非教學的作品。

## 起點（`origins`）

更早期給自己用的工具（目前只有影片格式轉換器，桌面程式、無連結）。**不算進作品數、不掛能力**，只出現在時間軸開頭。前職務期間建構、資料與帳號都屬於校方的系統不列入；YouTube 轉 MP3 工具刻意不收。

## 關係

`relations` 列作品之間的直接關係：同一課（課前→課後）、續作、同一組合作者、同一門課、同一種方法或資料來源。兩兩關係用 `from`／`to`，群組關係用 `members`。

## 重建

資料由 `data/build_data.py` 產生：`python -X utf8 data/build_data.py data/projects.json`。要改內容改腳本再重跑，不要直接改 JSON，否則下次重跑會蓋掉。改完用 `python -X utf8 -c "import json;json.load(open('data/projects.json',encoding='utf8'))"` 檢查格式。

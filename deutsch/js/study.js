// Study mode - flashcards (static version)
const Study = (() => {
    let words = [];
    let currentIndex = 0;
    let isFlipped = false;

    function renderBatchSelector(level) {
        const levels = Data.getLevels();
        const lvl = levels.find(l => l.id === level);
        if (!lvl) return "";

        let html = `<button class="back-btn" onclick="App.navigate('study')">&larr; Back</button>`;
        html += `<h2 class="section-title">${level} - Select Batch</h2>`;
        html += `<div class="batch-grid">`;

        for (let i = 1; i <= lvl.total_batches; i++) {
            const startWord = (i - 1) * Data.BATCH_SIZE + 1;
            const endWord = Math.min(i * Data.BATCH_SIZE, lvl.total_words);
            let seen = 0;
            for (let j = startWord; j <= endWord; j++) {
                const id = level + "_" + String(j).padStart(4, "0");
                const w = Progress.getWord(id);
                if (w.status !== "new") seen++;
            }
            const total = endWord - startWord + 1;
            const pct = Math.round((seen / total) * 100);
            let cls = "batch-btn unlocked";
            if (pct === 100) cls = "batch-btn completed";
            else if (pct > 0) cls = "batch-btn current";
            html += `<button class="${cls}" onclick="Study.loadBatch('${level}', ${i})">${i}<br><span style="font-size:0.7rem">${startWord}-${endWord}</span>${pct > 0 ? `<br><span style="font-size:0.65rem;color:#4caf50">${pct}%</span>` : ""}</button>`;
        }
        html += `</div>`;
        return html;
    }

    function loadBatch(level, batchNum) {
        words = Data.getBatchWords(level, batchNum);
        currentIndex = 0;
        isFlipped = false;
        renderCard();
    }

    function renderCard() {
        if (!words.length) return;
        const w = words[currentIndex];
        isFlipped = false;

        let frontHtml = `
            <span class="word-type-badge">${w.word_type}</span>
            <div class="german-word">${w.german} ${TTS.btn(w.german, "1.2rem")}</div>
            <div style="color:#666;margin-top:1rem;font-size:0.85rem">Click card to flip</div>
        `;

        let backHtml = `
            <span class="word-type-badge">${w.word_type}</span>
            <div class="german-word">${w.german} ${TTS.btn(w.german, "1.2rem")}</div>
            <div class="korean">${w.korean}</div>
            <div class="korean-detail">${w.korean_detail || ""}</div>
        `;

        if (w.conjugation && w.conjugation.present) {
            const c = w.conjugation;
            backHtml += `<table class="conjugation-table"><tbody>`;
            for (const [pron, form] of Object.entries(c.present)) {
                const fullForm = pron + " " + form;
                backHtml += `<tr><td class="pronoun">${pron}</td><td>${form} ${TTS.btn(fullForm, "0.8rem")}</td></tr>`;
            }
            backHtml += `</tbody></table>`;
            if (c.past_participle) {
                backHtml += `<div style="margin-top:0.5rem;color:#888;font-size:0.85rem">
                    P.P.: <strong style="color:#e0e0e0">${c.past_participle}</strong>
                    (${c.auxiliary})
                    ${c.is_separable ? '<span style="color:#ff9800"> [sep]</span>' : ""}
                    ${c.is_reflexive ? '<span style="color:#2196f3"> [refl]</span>' : ""}
                </div>`;
            }
        }

        if (w.word_type === "noun" && w.plural) {
            backHtml += `<div style="margin-top:0.5rem;color:#888;font-size:0.85rem">Plural: <strong style="color:#e0e0e0">${w.plural}</strong> ${TTS.btn(w.plural, "0.8rem")}</div>`;
        }

        if (w.examples && w.examples.length) {
            backHtml += `<div class="examples">`;
            for (const ex of w.examples) {
                backHtml += `<div class="example"><div class="de">${ex.de} ${TTS.btn(ex.de, "0.85rem")}</div><div class="ko">${ex.ko}</div></div>`;
            }
            backHtml += `</div>`;
        }

        document.getElementById("app").innerHTML = `
            <button class="back-btn" onclick="App.navigate('study')">&larr; Back to batches</button>
            <div class="card-container">
                <div class="card" onclick="Study.flip()">
                    <div class="card-front">${frontHtml}</div>
                    <div class="card-back">${backHtml}</div>
                </div>
            </div>
            <div class="card-nav">
                <button onclick="Study.prev()">&larr; Prev</button>
                <span class="counter">${currentIndex + 1} / ${words.length}</span>
                <button onclick="Study.next()">Next &rarr;</button>
            </div>
            <div class="text-center mt-1">
                <button class="btn" onclick="Study.startQuiz()">Quiz this batch</button>
            </div>
        `;
    }

    function flip() {
        const card = document.querySelector(".card");
        if (card) {
            card.classList.toggle("flipped");
            isFlipped = !isFlipped;
            if (isFlipped && words[currentIndex]) {
                const w = Progress.getWord(words[currentIndex].id);
                if (w.status === "new") {
                    w.status = "learning";
                    w.lastSeen = new Date().toISOString().split("T")[0];
                    Progress.setWord(words[currentIndex].id, w);
                }
            }
        }
    }

    function next() { if (currentIndex < words.length - 1) { currentIndex++; renderCard(); } }
    function prev() { if (currentIndex > 0) { currentIndex--; renderCard(); } }

    function startQuiz() {
        if (!words.length) return;
        const level = words[0].id.split("_")[0];
        const batchNum = Math.ceil(words[0].number / 20);
        App.navigate("quiz", { level, batch: batchNum });
    }

    return { renderBatchSelector, loadBatch, renderCard, flip, next, prev, startQuiz };
})();

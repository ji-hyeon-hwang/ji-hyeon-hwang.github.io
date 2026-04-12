// Quiz mode - 4-choice (static version)
const Quiz = (() => {
    let questions = [];
    let currentQ = 0;
    let score = 0;
    let answered = false;
    let results = [];
    let currentLevel = "";
    let currentBatch = 0;

    function renderBatchSelector(level) {
        const levels = Data.getLevels();
        const lvl = levels.find(l => l.id === level);
        if (!lvl) return "";

        let html = `<button class="back-btn" onclick="App.navigate('quiz')">&larr; Back</button>`;
        html += `<h2 class="section-title">${level} - Select Batch to Quiz</h2>`;
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
            html += `<button class="${cls}" onclick="Quiz.loadQuiz('${level}', ${i})">Batch ${i}${pct > 0 ? `<br><span style="font-size:0.65rem;color:#4caf50">${pct}%</span>` : ""}</button>`;
        }
        html += `</div>`;
        return html;
    }

    function loadQuiz(level, batchNum) {
        currentLevel = level;
        currentBatch = batchNum;
        questions = Data.getQuizQuestions(level, batchNum, 20, true);
        currentQ = 0;
        score = 0;
        answered = false;
        results = [];
        renderQuestion();
    }

    function renderQuestion() {
        if (currentQ >= questions.length) { renderResult(); return; }
        const q = questions[currentQ];
        const progress = (currentQ / questions.length) * 100;

        let html = `
            <div class="quiz-container">
                <div class="quiz-progress"><div class="quiz-progress-bar" style="width:${progress}%"></div></div>
                <div class="quiz-question">
                    <div class="q-german">
                        ${q.article ? `<span class="q-article">${q.article}</span> ` : ""}${q.german}
                        ${q.is_review ? '<span class="quiz-review-badge">review</span>' : ""}
                    </div>
                    <div style="color:#888;text-align:center;margin-bottom:1rem;font-size:0.8rem">${q.word_type}</div>
                    <div class="quiz-options">`;

        for (let i = 0; i < q.options.length; i++) {
            html += `<button class="quiz-option" onclick="Quiz.answer(${i})" data-idx="${i}">${q.options[i]}</button>`;
        }

        html += `</div></div>
            <div class="text-center" style="color:#888;font-size:0.85rem">${currentQ + 1} / ${questions.length}</div>
        </div>`;

        document.getElementById("app").innerHTML = html;
        answered = false;
    }

    function answer(idx) {
        if (answered) return;
        answered = true;
        const q = questions[currentQ];
        const chosen = q.options[idx];
        const correct = chosen === q.correct;
        if (correct) score++;

        Progress.sm2Update(q.id, correct ? 4 : 1);
        results.push({ ...q, chosen, correct });

        const btns = document.querySelectorAll(".quiz-option");
        btns.forEach((btn, i) => {
            btn.classList.add("disabled");
            if (q.options[i] === q.correct) btn.classList.add("correct");
            if (i === idx && !correct) btn.classList.add("wrong");
        });

        setTimeout(() => { currentQ++; renderQuestion(); }, correct ? 600 : 1500);
    }

    function renderResult() {
        const pct = Math.round((score / questions.length) * 100);
        const color = pct >= 80 ? "#4caf50" : pct >= 60 ? "#ff9800" : "#f44336";

        let html = `
            <div class="quiz-score">
                <h2>Quiz Complete!</h2>
                <div class="score-number" style="color:${color}">${pct}%</div>
                <div class="score-detail">${score} / ${questions.length} correct</div>
                <div class="mt-1 flex-center">
                    <button class="btn" onclick="Quiz.retry()">Retry</button>
                    <button class="btn btn-secondary" onclick="App.navigate('home')">Home</button>
                </div>
            </div>
            <div style="margin-top:1.5rem"><h3 class="section-title">Review wrong answers</h3>`;

        const wrongs = results.filter(r => !r.correct);
        if (!wrongs.length) {
            html += `<p style="color:#4caf50">Perfect score!</p>`;
        } else {
            for (const r of wrongs) {
                html += `<div style="background:#1a1a2e;border:1px solid #333;border-radius:8px;padding:1rem;margin:0.5rem 0">
                    <div style="color:#fff;font-size:1.1rem">${r.article ? r.article + " " : ""}${r.german}</div>
                    <div style="color:#4caf50">${r.correct}</div>
                    <div style="color:#f44336;font-size:0.85rem">Your answer: ${r.chosen}</div>
                </div>`;
            }
        }
        html += `</div>`;
        document.getElementById("app").innerHTML = html;
    }

    function retry() { loadQuiz(currentLevel, currentBatch); }

    return { renderBatchSelector, loadQuiz, answer, retry };
})();

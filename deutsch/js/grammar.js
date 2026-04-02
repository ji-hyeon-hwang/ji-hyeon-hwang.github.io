// Grammar tables + quiz (static version)
const Grammar = (() => {
    let sections = [];
    let quizItems = [];
    let quizIdx = 0;
    let quizScore = 0;
    let quizAnswered = false;

    function renderList() {
        sections = Data.getGrammarSections();
        let html = `<h2 class="section-title">Grammar</h2><div class="grammar-list">`;
        for (const s of sections) {
            html += `<div class="grammar-item" onclick="Grammar.showSection('${s.id}')">
                <div><div class="title-de">${s.title_de}</div><div class="title-ko">${s.title_ko}</div></div>
                <span class="badge">${s.type}</span>
            </div>`;
        }
        html += `</div>`;
        return html;
    }

    function showSection(id) {
        const s = sections.find(x => x.id === id);
        if (!s) return;

        let html = `<button class="back-btn" onclick="App.navigate('grammar')">&larr; Back</button>`;
        html += `<h2 class="section-title">${s.title_de}</h2>`;
        html += `<div class="description">${s.title_ko} - ${s.description_ko || ""}</div>`;

        if (s.headers && s.rows) {
            html += `<div class="grammar-table-wrap"><table class="grammar-table"><thead><tr>`;
            for (const h of s.headers) html += `<th>${h}</th>`;
            html += `</tr></thead><tbody>`;
            for (const row of s.rows) {
                html += `<tr>`;
                for (const cell of row) html += `<td>${cell}</td>`;
                html += `</tr>`;
            }
            html += `</tbody></table></div>`;
        }

        if (s.quiz_items && s.quiz_items.length) {
            html += `<div class="text-center mt-1"><button class="btn" onclick="Grammar.startQuiz('${s.id}')">Quiz (${s.quiz_items.length} questions)</button></div>`;
        }

        document.getElementById("app").innerHTML = html;
    }

    function startQuiz(sectionId) {
        quizItems = Data.getGrammarQuiz(sectionId);
        quizIdx = 0;
        quizScore = 0;
        renderGrammarQuestion();
    }

    function renderGrammarQuestion() {
        if (quizIdx >= quizItems.length) { renderGrammarResult(); return; }
        const q = quizItems[quizIdx];
        const progress = (quizIdx / quizItems.length) * 100;

        let html = `<div class="quiz-container">
            <div class="quiz-progress"><div class="quiz-progress-bar" style="width:${progress}%"></div></div>
            <div class="quiz-question">
                <div class="q-german" style="font-size:1.3rem">${q.question}</div>
                ${q.hint ? `<div style="color:#888;text-align:center;margin-bottom:1rem;font-size:0.8rem">${q.hint}</div>` : ""}
                <div class="quiz-options">`;

        if (q.options) {
            for (let i = 0; i < q.options.length; i++) {
                html += `<button class="quiz-option" onclick="Grammar.answerQuiz(${i})" data-idx="${i}">${q.options[i]}</button>`;
            }
        }
        html += `</div></div><div class="text-center" style="color:#888;font-size:0.85rem">${quizIdx + 1} / ${quizItems.length}</div></div>`;
        document.getElementById("app").innerHTML = html;
        quizAnswered = false;
    }

    function answerQuiz(idx) {
        if (quizAnswered) return;
        quizAnswered = true;
        const q = quizItems[quizIdx];
        const chosen = q.options[idx];
        const correct = chosen === q.answer;
        if (correct) quizScore++;

        const btns = document.querySelectorAll(".quiz-option");
        btns.forEach((btn, i) => {
            btn.classList.add("disabled");
            if (q.options[i] === q.answer) btn.classList.add("correct");
            if (i === idx && !correct) btn.classList.add("wrong");
        });
        setTimeout(() => { quizIdx++; renderGrammarQuestion(); }, correct ? 600 : 1500);
    }

    function renderGrammarResult() {
        const pct = Math.round((quizScore / quizItems.length) * 100);
        const color = pct >= 80 ? "#4caf50" : pct >= 60 ? "#ff9800" : "#f44336";
        document.getElementById("app").innerHTML = `
            <div class="quiz-score">
                <h2>Grammar Quiz Complete!</h2>
                <div class="score-number" style="color:${color}">${pct}%</div>
                <div class="score-detail">${quizScore} / ${quizItems.length} correct</div>
                <div class="mt-1 flex-center">
                    <button class="btn" onclick="App.navigate('grammar')">Back to Grammar</button>
                    <button class="btn btn-secondary" onclick="App.navigate('home')">Home</button>
                </div>
            </div>`;
    }

    return { renderList, showSection, startQuiz, answerQuiz };
})();

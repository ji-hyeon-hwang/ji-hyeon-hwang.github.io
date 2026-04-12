// Practice module: flashcard study + fill-in-blank quiz
const Practice = (() => {
    let phrases = [];
    let currentIndex = 0;
    let isFlipped = false;
    let quizItems = [];
    let quizIdx = 0;
    let quizScore = 0;
    let quizAnswered = false;

    // Flatten all phrases from PRACTICE_DATA with topic/section info
    function getAllPhrases(topicId) {
        const result = [];
        for (const topic of PRACTICE_DATA) {
            if (topicId && topic.id !== topicId) continue;
            for (const section of topic.sections) {
                for (const p of section.phrases) {
                    result.push({
                        ...p,
                        topic_id: topic.id,
                        topic_de: topic.topic_de,
                        topic_ko: topic.topic_ko,
                        section_de: section.title_de,
                        skill: section.skill
                    });
                }
            }
        }
        return result;
    }

    // ===== MODE SELECTOR =====
    function renderModeSelector() {
        let html = `<h2 class="section-title">Practice - Goethe A2</h2>`;
        html += `<div class="level-cards">`;
        html += `<div class="level-card" onclick="Practice.renderTopicSelector('study')">
            <h3>Flashcards</h3><p>Card study with grammar</p>
        </div>`;
        html += `<div class="level-card" onclick="Practice.renderTopicSelector('quiz')">
            <h3>Fill-in Quiz</h3><p>Fill the blank (4 choices)</p>
        </div>`;
        html += `<div class="level-card" onclick="window.location.href='practice.html'" style="border-color:#555">
            <h3>Reference</h3><p>Full document view</p>
        </div>`;
        html += `</div>`;
        return html;
    }

    // ===== TOPIC SELECTOR =====
    function renderTopicSelector(mode) {
        let html = `<button class="back-btn" onclick="App.navigate('practice')">&larr; Back</button>`;
        html += `<h2 class="section-title">${mode === 'quiz' ? 'Fill-in Quiz' : 'Flashcard Study'} - Select Topic</h2>`;
        html += `<div class="batch-grid" style="grid-template-columns:repeat(auto-fill,minmax(140px,1fr))">`;

        for (const topic of PRACTICE_DATA) {
            const count = topic.sections.reduce((s, sec) => s + sec.phrases.length, 0);
            const blankCount = topic.sections.reduce((s, sec) =>
                s + sec.phrases.filter(p => p.blank).length, 0);

            if (mode === 'quiz') {
                if (blankCount === 0) {
                    html += `<button class="batch-btn locked" title="No quiz items">${topic.topic_de}<br><span style="font-size:0.7rem">${topic.topic_ko}</span><br><span style="font-size:0.65rem;color:#888">no quiz</span></button>`;
                } else {
                    html += `<button class="batch-btn unlocked" onclick="Practice.loadQuiz('${topic.id}')">${topic.topic_de}<br><span style="font-size:0.7rem">${topic.topic_ko}</span><br><span style="font-size:0.65rem;color:#4caf50">${blankCount} Q</span></button>`;
                }
            } else {
                html += `<button class="batch-btn unlocked" onclick="Practice.loadStudy('${topic.id}')">${topic.topic_de}<br><span style="font-size:0.7rem">${topic.topic_ko}</span><br><span style="font-size:0.65rem;color:#4caf50">${count}</span></button>`;
            }
        }

        html += `</div>`;
        document.getElementById("app").innerHTML = html;
    }

    // ===== FLASHCARD STUDY =====
    function loadStudy(topicId) {
        phrases = getAllPhrases(topicId);
        currentIndex = 0;
        isFlipped = false;
        renderCard();
    }

    function renderCard() {
        if (!phrases.length) return;
        const p = phrases[currentIndex];
        isFlipped = false;

        // Front: context/situation + Korean
        let frontHtml = `
            <span class="word-type-badge" style="background:${p.skill === 'schreiben' ? '#1a3a5c' : '#1a3a2a'};color:${p.skill === 'schreiben' ? '#64b5f6' : '#81c784'}">${p.skill}</span>
            <div style="color:#e94560;font-size:0.85rem;margin-bottom:0.5rem">${p.topic_de} — ${p.section_de}</div>
            <div class="korean" style="font-size:1.3rem">${p.ko}</div>
            ${p.note ? `<div style="color:#888;font-size:0.85rem;margin-top:0.5rem">${p.note}</div>` : ""}
            <div style="color:#555;margin-top:1.5rem;font-size:0.8rem">Click to see German</div>
        `;

        // Back: German + grammar
        let backHtml = `
            <span class="word-type-badge" style="background:${p.skill === 'schreiben' ? '#1a3a5c' : '#1a3a2a'};color:${p.skill === 'schreiben' ? '#64b5f6' : '#81c784'}">${p.skill}</span>
            <div style="color:#e94560;font-size:0.85rem;margin-bottom:0.5rem">${p.topic_de} — ${p.section_de}</div>
            <div class="german-word" style="font-size:1.3rem;text-align:center;line-height:1.6">${p.de} ${TTS.btn(p.de, "1rem")}</div>
            <div class="korean" style="margin-top:0.5rem">${p.ko}</div>
        `;

        // Grammar details
        if (p.grammar && p.grammar.length) {
            backHtml += `<div style="background:#12121e;border:1px solid #2a2a3e;border-radius:6px;padding:0.5rem 0.8rem;margin-top:0.8rem;width:100%;text-align:left;font-size:0.82rem">`;
            for (const g of p.grammar) {
                backHtml += `<div style="margin:0.3rem 0"><span style="color:#e94560;font-weight:600">${g.word}</span> <span style="color:#ccc">— ${g.meaning}</span><div style="color:#888;margin-left:0.3rem">&nbsp;&nbsp;→ ${g.explain}</div></div>`;
            }
            backHtml += `</div>`;
        }

        document.getElementById("app").innerHTML = `
            <button class="back-btn" onclick="Practice.renderTopicSelector('study')">&larr; Back to topics</button>
            <div class="card-container">
                <div class="card" onclick="Practice.flip()">
                    <div class="card-front">${frontHtml}</div>
                    <div class="card-back">${backHtml}</div>
                </div>
            </div>
            <div class="card-nav">
                <button onclick="Practice.prev()">&larr; Prev</button>
                <span class="counter">${currentIndex + 1} / ${phrases.length}</span>
                <button onclick="Practice.next()">Next &rarr;</button>
            </div>
        `;
    }

    function flip() {
        const card = document.querySelector(".card");
        if (card) {
            card.classList.toggle("flipped");
            isFlipped = !isFlipped;
        }
    }

    function next() { if (currentIndex < phrases.length - 1) { currentIndex++; renderCard(); } }
    function prev() { if (currentIndex > 0) { currentIndex--; renderCard(); } }

    // ===== FILL-IN-BLANK QUIZ =====
    function loadQuiz(topicId) {
        const allPhrases = getAllPhrases(topicId);
        quizItems = allPhrases.filter(p => p.blank);
        // Shuffle
        for (let i = quizItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [quizItems[i], quizItems[j]] = [quizItems[j], quizItems[i]];
        }
        quizIdx = 0;
        quizScore = 0;
        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        if (quizIdx >= quizItems.length) { renderQuizResult(); return; }
        const q = quizItems[quizIdx];
        const b = q.blank;
        const progress = (quizIdx / quizItems.length) * 100;

        let html = `<div class="quiz-container">
            <div class="quiz-progress"><div class="quiz-progress-bar" style="width:${progress}%"></div></div>
            <div class="quiz-question">
                <div style="color:#e94560;font-size:0.8rem;text-align:center;margin-bottom:0.5rem">${q.topic_de} — ${q.section_de}</div>
                <div class="q-german" style="font-size:1.2rem;line-height:1.6">${b.position.replace('___', '<span style="color:#e94560;font-weight:bold;border-bottom:2px solid #e94560;padding:0 0.3rem">___</span>')}</div>
                ${b.hint ? `<div style="color:#888;text-align:center;margin:0.8rem 0;font-size:0.85rem">${b.hint}</div>` : ""}
                <div class="quiz-options">`;

        // Shuffle options
        const opts = b.options.slice();
        for (let i = opts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opts[i], opts[j]] = [opts[j], opts[i]];
        }
        for (let i = 0; i < opts.length; i++) {
            html += `<button class="quiz-option" onclick="Practice.answerQuiz(${i}, '${opts[i].replace(/'/g, "\\'")}')" data-idx="${i}">${opts[i]}</button>`;
        }

        html += `</div></div>
            <div class="text-center" style="color:#888;font-size:0.85rem">${quizIdx + 1} / ${quizItems.length}</div>
        </div>`;

        document.getElementById("app").innerHTML = html;
        quizAnswered = false;
        // Store shuffled options for answer checking
        Practice._currentOpts = opts;
    }

    function answerQuiz(idx, chosen) {
        if (quizAnswered) return;
        quizAnswered = true;
        const q = quizItems[quizIdx];
        const correct = chosen === q.blank.word;
        if (correct) quizScore++;

        const btns = document.querySelectorAll(".quiz-option");
        const opts = Practice._currentOpts;
        btns.forEach((btn, i) => {
            btn.classList.add("disabled");
            if (opts[i] === q.blank.word) btn.classList.add("correct");
            if (i === idx && !correct) btn.classList.add("wrong");
        });

        setTimeout(() => { quizIdx++; renderQuizQuestion(); }, correct ? 600 : 1500);
    }

    function renderQuizResult() {
        const pct = Math.round((quizScore / quizItems.length) * 100);
        const color = pct >= 80 ? "#4caf50" : pct >= 60 ? "#ff9800" : "#f44336";
        document.getElementById("app").innerHTML = `
            <div class="quiz-score">
                <h2>Practice Quiz Complete!</h2>
                <div class="score-number" style="color:${color}">${pct}%</div>
                <div class="score-detail">${quizScore} / ${quizItems.length} correct</div>
                <div class="mt-1 flex-center">
                    <button class="btn" onclick="Practice.renderTopicSelector('quiz')">Try another topic</button>
                    <button class="btn btn-secondary" onclick="App.navigate('home')">Home</button>
                </div>
            </div>`;
    }

    return { renderModeSelector, renderTopicSelector, loadStudy, renderCard, flip, next, prev, loadQuiz, renderQuizQuestion, answerQuiz, _currentOpts: [] };
})();

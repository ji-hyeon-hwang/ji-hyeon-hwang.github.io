// Main app router (static version)
const App = (() => {
    let currentPage = "home";
    let pageParams = {};

    function init() {
        document.querySelectorAll(".nav-btn").forEach(btn => {
            btn.addEventListener("click", () => navigate(btn.dataset.page));
        });
        navigate("home");
    }

    function navigate(page, params = {}) {
        currentPage = page;
        pageParams = params;
        document.querySelectorAll(".nav-btn").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.page === page);
        });

        switch (page) {
            case "home": renderHome(); break;
            case "study": renderStudy(); break;
            case "quiz": renderQuiz(); break;
            case "grammar": renderGrammar(); break;
            case "progress": renderProgress(); break;
        }
    }

    function renderHome() {
        const levels = Data.getLevels();
        let html = `<div class="home-section">
            <h2>German Vocabulary Trainer</h2>
            <p style="color:#888">A1 + A2 | 1,240 words with spaced repetition</p>
            <div class="level-cards">`;

        for (const lvl of levels) {
            const stats = Progress.getStats(lvl.id);
            const seen = stats.learning + stats.review + stats.mastered;
            html += `<div class="level-card" onclick="App.navigate('study', {level:'${lvl.id}'})">
                <h3>${lvl.id}</h3>
                <p>${lvl.total_words} words / ${lvl.total_batches} batches</p>
                <p style="color:#4caf50;font-size:0.85rem">${seen} studied</p>
            </div>`;
        }
        html += `</div></div>`;
        document.getElementById("app").innerHTML = html;
    }

    function renderStudy() {
        const app = document.getElementById("app");
        if (pageParams.level) {
            app.innerHTML = Study.renderBatchSelector(pageParams.level);
        } else {
            const levels = Data.getLevels();
            let html = `<h2 class="section-title">Study - Select Level</h2><div class="level-cards">`;
            for (const lvl of levels) {
                html += `<div class="level-card" onclick="App.navigate('study', {level:'${lvl.id}'})">
                    <h3>${lvl.id}</h3><p>${lvl.total_words} words</p>
                </div>`;
            }
            html += `</div>`;
            app.innerHTML = html;
        }
    }

    function renderQuiz() {
        const app = document.getElementById("app");
        if (pageParams.level && pageParams.batch) {
            Quiz.loadQuiz(pageParams.level, pageParams.batch);
        } else if (pageParams.level) {
            app.innerHTML = Quiz.renderBatchSelector(pageParams.level);
        } else {
            const levels = Data.getLevels();
            let html = `<h2 class="section-title">Quiz - Select Level</h2><div class="level-cards">`;
            for (const lvl of levels) {
                html += `<div class="level-card" onclick="App.navigate('quiz', {level:'${lvl.id}'})">
                    <h3>${lvl.id}</h3><p>${lvl.total_words} words</p>
                </div>`;
            }
            html += `</div>`;
            app.innerHTML = html;
        }
    }

    function renderGrammar() {
        document.getElementById("app").innerHTML = Grammar.renderList();
    }

    function renderProgress() {
        const levels = Data.getLevels();
        let html = `<h2 class="section-title">Progress</h2>`;

        for (const lvl of levels) {
            const stats = Progress.getStats(lvl.id);
            const total = lvl.total_words;
            const seen = stats.learning + stats.review + stats.mastered;
            const pct = total > 0 ? Math.round((seen / total) * 100) : 0;
            const masteredPct = total > 0 ? Math.round((stats.mastered / total) * 100) : 0;

            html += `<div class="progress-section">
                <h3>${lvl.id}</h3>
                <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
                <div style="color:#888;font-size:0.85rem">${pct}% studied (${seen}/${total})</div>
                <div class="stats-grid">
                    <div class="stat-box"><div class="stat-num">${stats.learning}</div><div class="stat-label">Learning</div></div>
                    <div class="stat-box"><div class="stat-num">${stats.review}</div><div class="stat-label">Review</div></div>
                    <div class="stat-box"><div class="stat-num">${stats.mastered}</div><div class="stat-label">Mastered</div></div>
                    <div class="stat-box"><div class="stat-num">${masteredPct}%</div><div class="stat-label">Mastery</div></div>
                </div>
            </div>`;
        }

        html += `<div class="text-center"><button class="reset-btn" onclick="if(confirm('Reset all progress?')){Progress.resetAll();App.navigate('progress');}">Reset Progress</button></div>`;
        document.getElementById("app").innerHTML = html;
    }

    document.addEventListener("DOMContentLoaded", init);
    return { navigate };
})();

// SM-2 Spaced Repetition + localStorage progress tracking

const Progress = (() => {
    const STORAGE_KEY = "deutsch_progress";

    function load() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        } catch { return {}; }
    }

    function save(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    // Get word status: { status, easeFactor, interval, repetitions, nextReview }
    function getWord(wordId) {
        const data = load();
        return data[wordId] || {
            status: "new",       // new, learning, review, mastered
            easeFactor: 2.5,
            interval: 0,         // days
            repetitions: 0,
            nextReview: null,
            lastSeen: null
        };
    }

    function setWord(wordId, info) {
        const data = load();
        data[wordId] = info;
        save(data);
    }

    // SM-2 update after quiz answer
    // quality: 0-5 (0-2 fail, 3-5 pass)
    function sm2Update(wordId, quality) {
        const w = getWord(wordId);
        const now = new Date().toISOString().split("T")[0];

        if (quality >= 3) {
            // Correct
            if (w.repetitions === 0) {
                w.interval = 1;
            } else if (w.repetitions === 1) {
                w.interval = 6;
            } else {
                w.interval = Math.round(w.interval * w.easeFactor);
            }
            w.repetitions += 1;
        } else {
            // Incorrect - reset
            w.repetitions = 0;
            w.interval = 1;
        }

        w.easeFactor = Math.max(1.3,
            w.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
        );

        // Set next review date
        const next = new Date();
        next.setDate(next.getDate() + w.interval);
        w.nextReview = next.toISOString().split("T")[0];
        w.lastSeen = now;

        // Update status
        if (w.repetitions === 0) {
            w.status = "learning";
        } else if (w.repetitions >= 1 && w.repetitions < 3) {
            w.status = "learning";
        } else if (w.repetitions >= 3 && w.interval >= 21) {
            w.status = "mastered";
        } else {
            w.status = "review";
        }

        setWord(wordId, w);
        return w;
    }

    // Get words due for review today
    function getDueWords(wordIds) {
        const today = new Date().toISOString().split("T")[0];
        return wordIds.filter(id => {
            const w = getWord(id);
            return w.nextReview && w.nextReview <= today;
        });
    }

    // All batches always unlocked — start from any batch you want
    function isBatchUnlocked(level, batchNum, batchSize) {
        return true;
    }

    // Stats
    function getStats(level) {
        const data = load();
        const prefix = level + "_";
        let total = 0, newCount = 0, learning = 0, review = 0, mastered = 0;

        for (const [id, w] of Object.entries(data)) {
            if (!id.startsWith(prefix)) continue;
            total++;
            switch (w.status) {
                case "new": newCount++; break;
                case "learning": learning++; break;
                case "review": review++; break;
                case "mastered": mastered++; break;
            }
        }

        return { total, new: newCount, learning, review, mastered };
    }

    // Wrong words tracking
    const WRONG_KEY = "deutsch_wrong";

    function loadWrong() {
        try { return JSON.parse(localStorage.getItem(WRONG_KEY)) || {}; }
        catch { return {}; }
    }

    function saveWrong(data) {
        localStorage.setItem(WRONG_KEY, JSON.stringify(data));
    }

    function addWrong(wordId, chosen) {
        const data = loadWrong();
        if (!data[wordId]) {
            data[wordId] = { count: 0, last: null, lastChosen: null };
        }
        data[wordId].count += 1;
        data[wordId].last = new Date().toISOString().split("T")[0];
        data[wordId].lastChosen = chosen;
        saveWrong(data);
    }

    function removeWrong(wordId) {
        const data = loadWrong();
        delete data[wordId];
        saveWrong(data);
    }

    function clearAllWrong() {
        localStorage.removeItem(WRONG_KEY);
    }

    function getWrongList() {
        return loadWrong();
    }

    function resetAll() {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(WRONG_KEY);
    }

    return { getWord, setWord, sm2Update, getDueWords, isBatchUnlocked, getStats, resetAll, load, addWrong, removeWrong, clearAllWrong, getWrongList };
})();

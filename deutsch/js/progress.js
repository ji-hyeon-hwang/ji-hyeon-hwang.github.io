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

    // Batch unlock logic: batch N unlocked if >=80% of batch N-1 at review+ status
    function isBatchUnlocked(level, batchNum, batchSize) {
        if (batchNum <= 1) return true;

        const prevStart = (batchNum - 2) * batchSize;
        const prevEnd = prevStart + batchSize;
        const prefix = level + "_";

        let reviewCount = 0;
        let total = 0;
        for (let i = prevStart; i < prevEnd; i++) {
            const num = String(i + 1).padStart(4, "0");
            const id = prefix + num;
            const w = getWord(id);
            total++;
            if (w.status === "review" || w.status === "mastered" || w.status === "learning") {
                reviewCount++;
            }
        }
        return total === 0 || (reviewCount / total) >= 0.8;
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

    function resetAll() {
        localStorage.removeItem(STORAGE_KEY);
    }

    return { getWord, setWord, sm2Update, getDueWords, isBatchUnlocked, getStats, resetAll, load };
})();

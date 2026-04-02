// Data helper module (static, no backend needed)
const Data = (() => {
    const ALL_WORDS = WORDS_A1.concat(WORDS_A2);
    const BATCH_SIZE = 20;

    function getAllWords(level) {
        if (level === "A1") return WORDS_A1;
        if (level === "A2") return WORDS_A2;
        return ALL_WORDS;
    }

    function getBatchWords(level, batchNum) {
        const words = getAllWords(level);
        const start = (batchNum - 1) * BATCH_SIZE;
        return words.slice(start, start + BATCH_SIZE);
    }

    function getTotalBatches(level) {
        return Math.ceil(getAllWords(level).length / BATCH_SIZE);
    }

    function getLevels() {
        return [
            { id: "A1", total_words: WORDS_A1.length, total_batches: getTotalBatches("A1") },
            { id: "A2", total_words: WORDS_A2.length, total_batches: getTotalBatches("A2") }
        ];
    }

    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function sample(arr, n) {
        return shuffle(arr).slice(0, n);
    }

    function getQuizQuestions(level, batchNum, count, includeReview) {
        count = count || 20;
        includeReview = includeReview !== false;
        const currentWords = getBatchWords(level, batchNum);
        if (!currentWords.length) return [];
        const allLevelWords = getAllWords(level);

        const currentCount = Math.min(Math.floor(count * 0.6), currentWords.length);
        const reviewCount = count - currentCount;
        const currentPicks = sample(currentWords, currentCount);

        let reviewWords = [];
        if (includeReview && batchNum > 1) {
            const prevEnd = (batchNum - 1) * BATCH_SIZE;
            const prevWords = allLevelWords.slice(0, prevEnd);
            if (prevWords.length) reviewWords = sample(prevWords, Math.min(reviewCount, prevWords.length));
        }

        const quizWords = shuffle(currentPicks.concat(reviewWords));
        const questions = [];

        for (const word of quizWords) {
            const correct = word.korean;
            const wrongPool = allLevelWords.filter(w => w.korean !== correct).map(w => w.korean);
            const wrongs = sample(wrongPool, Math.min(3, wrongPool.length));
            const options = shuffle(wrongs.concat([correct]));

            questions.push({
                id: word.id,
                german: word.german,
                article: word.article,
                word_type: word.word_type,
                correct: correct,
                options: options,
                is_review: currentWords.indexOf(word) === -1
            });
        }
        return questions;
    }

    function getGrammarSections() { return GRAMMAR_SECTIONS; }

    function getGrammarQuiz(sectionId) {
        if (sectionId) {
            const s = GRAMMAR_SECTIONS.find(x => x.id === sectionId);
            return s ? (s.quiz_items || []) : [];
        }
        const items = [];
        for (const s of GRAMMAR_SECTIONS) items.push(...(s.quiz_items || []));
        return items;
    }

    return { getAllWords, getBatchWords, getTotalBatches, getLevels, getQuizQuestions, getGrammarSections, getGrammarQuiz, BATCH_SIZE };
})();

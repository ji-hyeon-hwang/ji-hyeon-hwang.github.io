// Text-to-Speech utility for German pronunciation
const TTS = (() => {
    function speak(text, lang) {
        lang = lang || "de-DE";
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = lang;
        u.rate = 0.85;
        // Try to pick a German voice if available
        const voices = window.speechSynthesis.getVoices();
        const deVoice = voices.find(v => v.lang.startsWith("de"));
        if (deVoice) u.voice = deVoice;
        window.speechSynthesis.speak(u);
    }

    function speakDe(text) { speak(text, "de-DE"); }

    // Build a speaker button HTML string (inline, click doesn't propagate to card flip)
    function btn(text, size) {
        size = size || "1.1rem";
        const escaped = text.replace(/'/g, "\\'").replace(/"/g, "&quot;");
        return `<button class="tts-btn" onclick="event.stopPropagation();TTS.speakDe('${escaped}')" title="Listen" style="font-size:${size}">&#128264;</button>`;
    }

    // Preload voices (some browsers need this)
    if (window.speechSynthesis) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }

    return { speak, speakDe, btn };
})();

// Helper to detect Korean Batchim (final consonant)
export function checkHasBatchim(word: string): boolean {
  if (!word || word.trim().length === 0) return false;
  const clean = word.trim();
  const lastChar = clean.charCodeAt(clean.length - 1);
  // Hangul Syllables range: 0xAC00 - 0xD7A3 (44032 - 55203)
  if (lastChar >= 44032 && lastChar <= 55203) {
    return (lastChar - 44032) % 28 !== 0;
  }
  return false;
}

// Text to Speech using Web Speech API
export function speakKorean(text: string) {
  if (typeof window === 'undefined') return;
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    return;
  }

  window.speechSynthesis.cancel(); // Stop any pending speech
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ko-KR';
  utterance.rate = 0.85; // Slightly slower for clear learners' pronunciation

  // Try to find native Korean voice
  const voices = window.speechSynthesis.getVoices();
  const koreanVoice = voices.find(v => v.lang.includes('ko') || v.lang.includes('KO'));
  if (koreanVoice) {
    utterance.voice = koreanVoice;
  }

  window.speechSynthesis.speak(utterance);
}

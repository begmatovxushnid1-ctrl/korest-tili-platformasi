'use client';

import React, { useState } from 'react';
import { WordItem } from '../types';
import { speakKorean } from '../utils/korean';

interface FlashcardProps {
  words: WordItem[];
  onWordLearned: (id: string) => void;
  onAddWord: (word: Omit<WordItem, 'id'>) => void;
}

export default function FlashcardDeck({ words, onWordLearned, onAddWord }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterLevel, setFilterLevel] = useState<string>('Barchasi');

  // Form states
  const [newKorean, setNewKorean] = useState('');
  const [newMeaning, setNewMeaning] = useState('');
  const [newPronunciation, setNewPronunciation] = useState('');
  const [newCategory, setNewCategory] = useState('Kundalik');

  const filteredWords = words.filter((w) => {
    if (filterLevel === 'Barchasi') return true;
    if (filterLevel === 'Yodlangan') return w.learned;
    if (filterLevel === 'O\'rganilmoqda') return !w.learned;
    return w.level === filterLevel;
  });

  const currentWord = filteredWords[currentIndex] || filteredWords[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredWords.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handlePlayVoice = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    speakKorean(text);
  };

  const handleMarkAsLearned = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentWord) {
      onWordLearned(currentWord.id);
    }
  };

  const handleSaveWord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKorean.trim() || !newMeaning.trim()) return;

    onAddWord({
      korean: newKorean.trim(),
      meaning: newMeaning.trim(),
      pronunciation: newPronunciation.trim() || `[${newKorean.trim()}]`,
      category: newCategory,
      level: 'Boshlang\'ich',
      learned: false,
    });

    setNewKorean('');
    setNewMeaning('');
    setNewPronunciation('');
    setShowAddModal(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      {/* Top Filter and Add button */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          {['Barchasi', 'O\'rganilmoqda', 'Yodlangan'].map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setFilterLevel(filter);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                filterLevel === filter
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-zinc-800/80 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-sm font-semibold rounded-xl hover:opacity-95 shadow-md shadow-rose-500/20 active:scale-95 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Yangi so&apos;z qo&apos;shish
        </button>
      </div>

      {filteredWords.length === 0 ? (
        <div className="text-center py-16 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-8 w-full">
          <p className="text-zinc-400 mb-4">Bu bo&apos;limda hozircha so&apos;zlar yo&apos;q.</p>
          <button
            onClick={() => setFilterLevel('Barchasi')}
            className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded-xl hover:bg-zinc-700"
          >
            Barcha so&apos;zlarga qaytish
          </button>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center">
          {/* Progress Indicator */}
          <div className="w-full flex items-center justify-between text-xs text-zinc-400 mb-3 px-2">
            <span>Flesh-karta {currentIndex + 1} / {filteredWords.length}</span>
            <span className="flex items-center gap-1">
              {currentWord?.learned ? (
                <span className="text-emerald-400 font-medium">✓ O&apos;zlashtirilgan</span>
              ) : (
                <span className="text-amber-400 font-medium">● O&apos;rganilmoqda</span>
              )}
            </span>
          </div>

          {/* Flashcard container with 3D flip effect */}
          <div
            onClick={handleFlip}
            className="w-full h-80 sm:h-96 cursor-pointer select-none perspective group"
          >
            <div
              className={`relative w-full h-full duration-500 transform-style-3d transition-transform rounded-3xl ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* FRONT: Uzbek Meaning (Prompt side) */}
              <div className="absolute inset-0 backface-hidden w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-850 to-zinc-900 border border-zinc-700/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-black/60 group-hover:border-rose-500/50 transition-colors">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-zinc-800/80 text-zinc-300 text-xs font-semibold rounded-full border border-zinc-700">
                    O&apos;zbekcha ma&apos;nosi
                  </span>
                  <span className="text-xs text-zinc-500 bg-zinc-950/40 px-2.5 py-1 rounded-lg">
                    {currentWord?.category}
                  </span>
                </div>

                <div className="text-center my-auto">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
                    {currentWord?.meaning}
                  </h3>
                  {currentWord?.exampleUzbek && (
                    <p className="mt-3 text-sm text-zinc-400 italic">
                      &quot;{currentWord.exampleUzbek}&quot;
                    </p>
                  )}
                  <p className="mt-6 text-xs text-rose-400/80 font-medium animate-pulse">
                    Koreyschasini ko&apos;rish uchun bosing 👆
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span>단어장 flesh-karta</span>
                  <span>Ustiga bosing</span>
                </div>
              </div>

              {/* BACK: Korean Word & Pronunciation */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full bg-gradient-to-br from-rose-950/40 via-zinc-900 to-zinc-900 border border-rose-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-rose-950/30">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-semibold rounded-full border border-rose-500/30">
                    한국어 (Koreyscha)
                  </span>
                  <button
                    onClick={(e) => handlePlayVoice(e, currentWord.korean)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-500 text-white rounded-xl text-xs font-semibold hover:bg-rose-600 transition-colors shadow-md shadow-rose-600/30"
                    title="Ovozli eshitish"
                  >
                    <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-4 0v17.54l-5-5H1V8.23h4l5-5zm-2 4.41L5.59 10.23H3v3.54h2.59L8 16.36V7.64zm6 2.6v3.52c.85-.43 1.5-1.12 1.5-2.02 0-.9-.65-1.59-1.5-1.5z" />
                    </svg>
                    Eshitish
                  </button>
                </div>

                <div className="text-center my-auto">
                  <h2 className="text-4xl sm:text-5xl font-black text-white tracking-wider font-sans">
                    {currentWord?.korean}
                  </h2>
                  {currentWord?.pronunciation && (
                    <p className="mt-2 text-sm text-rose-300 font-mono">
                      {currentWord.pronunciation}
                    </p>
                  )}
                  {currentWord?.exampleKorean && (
                    <div className="mt-4 p-3 bg-zinc-950/60 rounded-xl border border-zinc-800 text-left">
                      <p className="text-xs text-zinc-400 mb-1">Misol gap:</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-zinc-200 font-medium">{currentWord.exampleKorean}</p>
                        <button
                          onClick={(e) => handlePlayVoice(e, currentWord.exampleKorean!)}
                          className="text-rose-400 hover:text-rose-300 ml-2"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 italic">{currentWord.exampleUzbek}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={handleMarkAsLearned}
                    className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all ${
                      currentWord?.learned
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-zinc-800 text-zinc-300 hover:bg-emerald-600 hover:text-white'
                    }`}
                  >
                    {currentWord?.learned ? '✓ Yodlangan' : 'Yodladim deb belgilash'}
                  </button>
                  <span className="text-xs text-zinc-500">Ortga qaytish uchun bosing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Oldingi
            </button>
            <button
              onClick={handleFlip}
              className="px-6 py-2.5 bg-zinc-700 hover:bg-zinc-600 text-white rounded-xl text-sm font-semibold transition-all active:scale-95"
            >
              Aylantirish 🔄
            </button>
            <button
              onClick={handleNext}
              className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lg shadow-rose-600/20 transition-all active:scale-95"
            >
              Keyingi
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Add Word Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Lug&apos;atga yangi so&apos;z qo&apos;shish</h3>
            <form onSubmit={handleSaveWord} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Koreyscha so&apos;z (Hangul)</label>
                <input
                  type="text"
                  required
                  placeholder="Masalan: 사랑"
                  value={newKorean}
                  onChange={(e) => setNewKorean(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">O&apos;zbekcha ma&apos;nosi</label>
                <input
                  type="text"
                  required
                  placeholder="Masalan: Sevgi, muhabbat"
                  value={newMeaning}
                  onChange={(e) => setNewMeaning(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Talaffuzi (Ixtiyoriy)</label>
                <input
                  type="text"
                  placeholder="Masalan: [sa-rang]"
                  value={newPronunciation}
                  onChange={(e) => setNewPronunciation(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Kategoriya</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-rose-500"
                >
                  <option value="Kundalik">Kundalik</option>
                  <option value="His-tuyg'ular">His-tuyg&apos;ular</option>
                  <option value="Taomlar">Taomlar</option>
                  <option value="Sayohat">Sayohat</option>
                  <option value="Grammatika">Grammatika</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-xl hover:bg-zinc-700 text-sm font-medium"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-rose-500 text-white rounded-xl hover:bg-rose-600 text-sm font-semibold shadow-lg shadow-rose-500/20"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

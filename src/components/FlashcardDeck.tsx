'use client';

import React, { useState } from 'react';
import { WordItem } from '../types';
import { speakKorean } from '../utils/korean';
import { Volume2, Plus, RotateCw, CheckCircle2, Circle, ChevronLeft, ChevronRight, X } from 'lucide-react';

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
    setCurrentIndex((prev) => (prev + 1) % (filteredWords.length || 1));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredWords.length) % (filteredWords.length || 1));
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
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      {/* Top Controls: Filter & Add */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-6 bg-zinc-900/60 backdrop-blur-md p-2.5 rounded-2xl border border-zinc-800/80">
        <div className="flex items-center gap-1.5">
          {['Barchasi', 'O\'rganilmoqda', 'Yodlangan'].map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setFilterLevel(filter);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                filterLevel === filter
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs font-bold rounded-xl hover:opacity-90 shadow-md shadow-rose-500/20 active:scale-95 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Yangi so&apos;z qo&apos;shish
        </button>
      </div>

      {filteredWords.length === 0 ? (
        <div className="text-center py-16 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 w-full shadow-2xl">
          <p className="text-zinc-400 mb-4 font-medium">Bu bo&apos;limda hozircha so&apos;zlar yo&apos;q.</p>
          <button
            onClick={() => setFilterLevel('Barchasi')}
            className="px-5 py-2.5 bg-zinc-800 text-zinc-200 rounded-xl hover:bg-zinc-700 text-xs font-bold transition-all"
          >
            Barcha so&apos;zlarga qaytish
          </button>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center">
          {/* Progress Header */}
          <div className="w-full flex items-center justify-between text-xs text-zinc-400 mb-3 px-2 font-medium">
            <span>
              Flesh-karta: <strong className="text-white">{currentIndex + 1}</strong> / {filteredWords.length}
            </span>
            <div className="flex items-center gap-1.5">
              {currentWord?.learned ? (
                <span className="flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" /> O&apos;zlashtirilgan
                </span>
              ) : (
                <span className="flex items-center gap-1 text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  <Circle className="w-3.5 h-3.5" /> O&apos;rganilmoqda
                </span>
              )}
            </div>
          </div>

          {/* Flashcard with 3D Flip */}
          <div
            onClick={handleFlip}
            className="w-full h-80 sm:h-96 cursor-pointer select-none perspective-1000 group"
          >
            <div
              className={`relative w-full h-full duration-500 transform-style-3d transition-transform rounded-3xl ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* FRONT: Uzbek prompt */}
              <div className="absolute inset-0 backface-hidden w-full h-full bg-zinc-900/90 backdrop-blur-2xl border border-zinc-700/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-black/80 group-hover:border-rose-500/50 transition-all">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-bold rounded-full border border-zinc-700">
                    O&apos;zbekcha ma&apos;nosi
                  </span>
                  <span className="text-xs text-zinc-400 bg-zinc-950/60 px-2.5 py-1 rounded-lg border border-zinc-800">
                    {currentWord?.category}
                  </span>
                </div>

                <div className="text-center my-auto py-4">
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-wide">
                    {currentWord?.meaning}
                  </h3>
                  {currentWord?.exampleUzbek && (
                    <p className="mt-3 text-sm text-zinc-400 italic">
                      &quot;{currentWord.exampleUzbek}&quot;
                    </p>
                  )}
                  <p className="mt-6 text-xs text-rose-400 font-semibold flex items-center justify-center gap-1.5 animate-pulse">
                    <span>Koreyschasini ko&apos;rish uchun bosing</span>
                    <span>👆</span>
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span>단어장 flesh-karta</span>
                  <span>Aylantirish uchun bosing</span>
                </div>
              </div>

              {/* BACK: Korean Hangul */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full bg-gradient-to-br from-rose-950/80 via-zinc-900/95 to-zinc-900/95 backdrop-blur-2xl border border-rose-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-rose-950/40">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded-full border border-rose-500/30">
                    한국어 (Koreyscha)
                  </span>
                  <button
                    onClick={(e) => handlePlayVoice(e, currentWord.korean)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-rose-600/30 cursor-pointer"
                    title="Talaffuzni eshitish"
                  >
                    <Volume2 className="w-4 h-4" />
                    Eshitish
                  </button>
                </div>

                <div className="text-center my-auto py-2">
                  <h2 className="text-4xl sm:text-5xl font-black text-white tracking-wider">
                    {currentWord?.korean}
                  </h2>
                  {currentWord?.pronunciation && (
                    <p className="mt-2 text-sm text-rose-300 font-mono font-semibold">
                      {currentWord.pronunciation}
                    </p>
                  )}
                  {currentWord?.exampleKorean && (
                    <div className="mt-4 p-3 bg-zinc-950/70 rounded-2xl border border-zinc-800 text-left">
                      <p className="text-[11px] text-zinc-400 mb-1">Misol gap:</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-zinc-100 font-semibold">{currentWord.exampleKorean}</p>
                        <button
                          onClick={(e) => handlePlayVoice(e, currentWord.exampleKorean!)}
                          className="text-rose-400 hover:text-rose-300 p-1 cursor-pointer"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 italic">{currentWord.exampleUzbek}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={handleMarkAsLearned}
                    className={`text-xs px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                      currentWord?.learned
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-zinc-800 text-zinc-200 hover:bg-emerald-600 hover:text-white'
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
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="px-4 sm:px-5 py-2.5 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              Oldingi
            </button>
            <button
              onClick={handleFlip}
              className="px-5 sm:px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-lg"
            >
              <RotateCw className="w-4 h-4" />
              Aylantirish
            </button>
            <button
              onClick={handleNext}
              className="px-4 sm:px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-lg shadow-rose-600/30 transition-all active:scale-95 cursor-pointer"
            >
              Keyingi
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Add Word Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-zinc-900 border border-zinc-700/80 rounded-3xl w-full max-w-md p-6 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-white">Lug&apos;atga yangi so&apos;z qo&apos;shish</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveWord} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                  Koreyscha so&apos;z (Hangul)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masalan: 사랑"
                  value={newKorean}
                  onChange={(e) => setNewKorean(e.target.value)}
                  className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                  O&apos;zbekcha ma&apos;nosi
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masalan: Sevgi, muhabbat"
                  value={newMeaning}
                  onChange={(e) => setNewMeaning(e.target.value)}
                  className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                  Talaffuzi (Ixtiyoriy)
                </label>
                <input
                  type="text"
                  placeholder="Masalan: [sa-rang]"
                  value={newPronunciation}
                  onChange={(e) => setNewPronunciation(e.target.value)}
                  className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Kategoriya</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-rose-500"
                >
                  <option value="Kundalik">Kundalik</option>
                  <option value="His-tuyg'ular">His-tuyg&apos;ular</option>
                  <option value="Taomlar">Taomlar</option>
                  <option value="Sayohat">Sayohat</option>
                  <option value="Grammatika">Grammatika</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs font-bold cursor-pointer transition-all"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl text-xs font-bold hover:opacity-95 shadow-md shadow-rose-500/20 cursor-pointer transition-all"
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

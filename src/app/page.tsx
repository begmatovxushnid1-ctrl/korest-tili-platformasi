'use client';

import React, { useState, useEffect } from 'react';
import FlashcardDeck from '../components/FlashcardDeck';
import GrammarWorkbook from '../components/GrammarWorkbook';
import Leaderboard from '../components/Leaderboard';
import { initialWords, grammarExercises, initialLeaderboard } from '../data/mockData';
import { WordItem, LeaderboardUser } from '../types';
import { speakKorean } from '../utils/korean';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'study' | 'grammar' | 'leaderboard'>('study');
  const [words, setWords] = useState<WordItem[]>(initialWords);
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>(initialLeaderboard);
  const [streak, setStreak] = useState(5);
  const [points, setPoints] = useState(1520);
  const [dailyGoalMet, setDailyGoalMet] = useState(false);

  const learnedCount = words.filter((w) => w.learned).length;

  useEffect(() => {
    if (learnedCount >= 5 && !dailyGoalMet) {
      setDailyGoalMet(true);
      setStreak((prev) => prev + 1);
    }
  }, [learnedCount, dailyGoalMet]);

  const handleWordLearned = (id: string) => {
    setWords((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          const updatedLearned = !w.learned;
          if (updatedLearned) {
            setPoints((p) => p + 15);
            setLeaderboard((l) =>
              l.map((u) => (u.isCurrentUser ? { ...u, points: u.points + 15 } : u))
            );
          }
          return { ...w, learned: updatedLearned };
        }
        return w;
      })
    );
  };

  const handleAddWord = (newWordData: Omit<WordItem, 'id'>) => {
    const newWord: WordItem = {
      ...newWordData,
      id: `w-${Date.now()}`,
    };
    setWords((prev) => [newWord, ...prev]);
    setPoints((p) => p + 10);
  };

  const handleExerciseComplete = (gainedPoints: number) => {
    setPoints((prev) => prev + gainedPoints);
    setLeaderboard((l) =>
      l.map((u) => (u.isCurrentUser ? { ...u, points: u.points + gainedPoints } : u))
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-rose-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-orange-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-rose-600/30">
              한
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
                HanguGo <span className="text-xs px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-400 font-semibold border border-rose-500/30">v1.0 Pro</span>
              </h1>
              <p className="text-[11px] text-zinc-400 hidden sm:block">Koreys tili aqlli o&apos;rganish platformasi</p>
            </div>
          </div>

          {/* Gamification Bar (Streak, Points, Audio) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
                dailyGoalMet
                  ? 'bg-orange-500/20 border-orange-500/50 text-orange-400 animate-pulse'
                  : 'bg-zinc-800/80 border-zinc-700/80 text-orange-400'
              }`}
              title="Kunlik faollik olovi (Streak)"
            >
              <span className="text-base">🔥</span>
              <span>{streak} kun</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-amber-400 text-xs sm:text-sm font-bold">
              <span>⚡</span>
              <span>{points} XP</span>
            </div>

            <button
              onClick={() => speakKorean('안녕하세요! 한국어 공부를 환영합니다.')}
              className="p-2 bg-zinc-800 hover:bg-zinc-700 text-rose-400 rounded-xl transition-all"
              title="Salomlashish ovozini eshitish"
            >
              🔊
            </button>
          </div>
        </div>
      </header>

      {/* Hero / Quick Action Banner */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="bg-gradient-to-r from-rose-950/40 via-zinc-900 to-zinc-900 border border-rose-500/20 rounded-3xl p-6 sm:p-8 mb-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-rose-500/10 to-transparent pointer-events-none" />
          <div className="max-w-xl">
            <span className="px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded-full border border-rose-500/30 uppercase tracking-wider">
              Bugungi dars rejasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Koreys tilini qulay va oson o&apos;rganing!
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Raqamli 단어장 orqali so&apos;zlarni yodlang, 받침 (Batchim) grammatika daftarchasida mashq qiling va reytingda peshqadam bo&apos;ling.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              <button
                onClick={() => setActiveTab('study')}
                className="px-5 py-2.5 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold text-sm rounded-xl hover:opacity-95 shadow-lg shadow-rose-500/25 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>🔥</span> Bugungi mashqlar
              </button>
              <button
                onClick={() => setActiveTab('grammar')}
                className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-sm rounded-xl active:scale-95 transition-all"
              >
                Grammatika 연습장
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-zinc-800 mb-8 overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab('study')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'study'
                ? 'border-rose-500 text-rose-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>🗂️</span> Raqamli 단어장 (Aqlli lug&apos;at)
          </button>
          <button
            onClick={() => setActiveTab('grammar')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'grammar'
                ? 'border-rose-500 text-rose-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>✍️</span> Grammatika 연습장 (Batchim test)
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'leaderboard'
                ? 'border-rose-500 text-rose-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>🏆</span> Reyting Doskasi
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'study' && (
          <FlashcardDeck
            words={words}
            onWordLearned={handleWordLearned}
            onAddWord={handleAddWord}
          />
        )}

        {activeTab === 'grammar' && (
          <GrammarWorkbook
            exercises={grammarExercises}
            onExerciseComplete={handleExerciseComplete}
          />
        )}

        {activeTab === 'leaderboard' && (
          <Leaderboard users={leaderboard} />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-zinc-850 py-8 text-center text-xs text-zinc-500">
        <p>HanguGo • Koreys tili platformasi © 2026. Next.js & Tailwind CSS.</p>
        <p className="mt-1">So&apos;zlar, grammatika, ovozli talaffuz va gamifikatsiya bilan quvvatlangan.</p>
      </footer>
    </div>
  );
}

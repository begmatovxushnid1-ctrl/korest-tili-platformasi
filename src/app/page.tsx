'use client';

import React, { useState, useEffect } from 'react';
import FlashcardDeck from '../components/FlashcardDeck';
import GrammarWorkbook from '../components/GrammarWorkbook';
import Leaderboard from '../components/Leaderboard';
import AITutorChat from '../components/AITutorChat';
import { initialWords, grammarExercises, initialLeaderboard } from '../data/mockData';
import { WordItem, LeaderboardUser } from '../types';
import { speakKorean } from '../utils/korean';
import { Flame, Zap, Volume2, BookOpen, PenTool, Trophy, Sparkles, Bot } from 'lucide-react';
import { Language, translations } from '../data/translations';

export default function Home() {
  const [lang, setLang] = useState<Language>('uz');
  const t = translations[lang];

  const [activeTab, setActiveTab] = useState<'study' | 'grammar' | 'leaderboard' | 'ai'>('ai');
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
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-rose-500 selection:text-white">
      {/* Authentic Korea Background Wallpaper */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-25 filter blur-[1px]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Atmospheric Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/95 to-zinc-950" />
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-600/20 blur-[130px] pointer-events-none z-0 rounded-full" />
      <div className="fixed -bottom-40 right-10 w-[500px] h-[300px] bg-amber-600/15 blur-[140px] pointer-events-none z-0 rounded-full" />

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-rose-600/30">
                한
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
                  {t.appName} <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-bold border border-rose-500/30">{t.appBadge}</span>
                </h1>
                <p className="text-[11px] text-zinc-400 hidden sm:block">{t.appSubtitle}</p>
              </div>
            </div>

            {/* Right Side: Interactive Language Buttons + Gamification */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
              {/* Language Selector: 3 Clickable Flag Buttons */}
              <div className="flex items-center bg-zinc-900/90 border border-zinc-700/80 rounded-2xl p-1 shadow-md gap-1">
                {/* Uzbek */}
                <button
                  type="button"
                  onClick={() => setLang('uz')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    lang === 'uz'
                      ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 scale-105'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  }`}
                  title="O'zbek tili"
                >
                  <span className="text-sm">🇺🇿</span>
                  <span className="hidden sm:inline">UZ</span>
                </button>

                {/* Russian */}
                <button
                  type="button"
                  onClick={() => setLang('ru')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    lang === 'ru'
                      ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 scale-105'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  }`}
                  title="Русский язык"
                >
                  <span className="text-sm">🇷🇺</span>
                  <span className="hidden sm:inline">RU</span>
                </button>

                {/* English */}
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    lang === 'en'
                      ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 scale-105'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  }`}
                  title="English"
                >
                  <span className="text-sm">🇬🇧</span>
                  <span className="hidden sm:inline">EN</span>
                </button>
              </div>

              {/* Streak */}
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-bold transition-all shadow-md ${
                  dailyGoalMet
                    ? 'bg-orange-500/20 border-orange-500/50 text-orange-400 animate-pulse'
                    : 'bg-zinc-850/80 border-zinc-700/80 text-orange-400'
                }`}
                title="Streak"
              >
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span>{streak} {t.streakDays}</span>
              </div>

              {/* Points */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-850/80 border border-zinc-700/80 text-amber-400 text-xs sm:text-sm font-bold shadow-md">
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>{points} XP</span>
              </div>

              {/* Korean Speech Button */}
              <button
                onClick={() => speakKorean('안녕하세요! 한국어 공부를 환영합니다.')}
                className="p-2 bg-zinc-800/90 hover:bg-zinc-700 text-rose-400 rounded-xl transition-all cursor-pointer border border-zinc-700/60 shadow-md"
                title={t.listenGreeting}
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="bg-gradient-to-r from-rose-950/60 via-zinc-900/90 to-zinc-900/90 backdrop-blur-xl border border-rose-500/30 rounded-3xl p-6 sm:p-8 mb-8 relative overflow-hidden shadow-2xl">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-rose-500/10 to-transparent pointer-events-none" />
            
            <div className="max-w-xl relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded-full border border-rose-500/30 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> {t.todayPlanBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 leading-tight">
                {t.heroTitle}
              </h2>
              <p className="text-zinc-300 text-sm mt-2 leading-relaxed">
                {t.heroDesc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={() => setActiveTab('ai')}
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl hover:opacity-95 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Bot className="w-4 h-4" /> {t.btnAiChat}
                </button>
                <button
                  onClick={() => setActiveTab('study')}
                  className="px-5 py-2.5 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold text-xs sm:text-sm rounded-xl hover:opacity-95 shadow-lg shadow-rose-500/25 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Flame className="w-4 h-4" /> {t.btnTodayWords}
                </button>
                <button
                  onClick={() => setActiveTab('grammar')}
                  className="px-5 py-2.5 bg-zinc-850 hover:bg-zinc-750 border border-zinc-700/80 text-zinc-200 font-bold text-xs sm:text-sm rounded-xl active:scale-95 transition-all cursor-pointer shadow-md"
                >
                  {t.btnGrammarWorkbook}
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-zinc-800/90 mb-8 overflow-x-auto gap-2">
            <button
              onClick={() => setActiveTab('ai')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'ai'
                  ? 'border-emerald-500 text-emerald-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Bot className="w-4 h-4" /> {t.tabAiChat}
            </button>
            <button
              onClick={() => setActiveTab('study')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'study'
                  ? 'border-rose-500 text-rose-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <BookOpen className="w-4 h-4" /> {t.tabDictionary}
            </button>
            <button
              onClick={() => setActiveTab('grammar')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'grammar'
                  ? 'border-rose-500 text-rose-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <PenTool className="w-4 h-4" /> {t.tabGrammar}
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'leaderboard'
                  ? 'border-rose-500 text-rose-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Trophy className="w-4 h-4" /> {t.tabLeaderboard}
            </button>
          </div>

          {/* Tab Views */}
          {activeTab === 'ai' && (
            <AITutorChat currentLang={lang} />
          )}

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
        <footer className="mt-20 border-t border-zinc-800/80 py-8 text-center text-xs text-zinc-500 bg-zinc-950/60 backdrop-blur-md">
          <p>{t.footerRights}</p>
          <p className="mt-1">{t.footerTagline}</p>
        </footer>
      </div>
    </div>
  );
}

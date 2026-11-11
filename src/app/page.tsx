'use client';

import React, { useState, useEffect } from 'react';
import FlashcardDeck from '../components/FlashcardDeck';
import GrammarWorkbook from '../components/GrammarWorkbook';
import GrammarLessons from '../components/GrammarLessons';
import Leaderboard from '../components/Leaderboard';
import AITutorChat from '../components/AITutorChat';
import DualClock from '../components/DualClock';
import AuthModal, { AuthUser } from '../components/AuthModal';
import { initialWords, grammarExercises, initialLeaderboard } from '../data/mockData';
import { WordItem, LeaderboardUser } from '../types';
import { speakKorean } from '../utils/korean';
import { Flame, Zap, Volume2, BookOpen, PenTool, Trophy, Sparkles, Bot, GraduationCap, UserCircle, LogOut } from 'lucide-react';
import { Language, translations } from '../data/translations';

export default function Home() {
  const [lang, setLang] = useState<Language>('uz');
  const t = translations[lang];

  const [activeTab, setActiveTab] = useState<'lessons' | 'ai' | 'study' | 'grammar' | 'leaderboard'>('lessons');
  const [words, setWords] = useState<WordItem[]>(initialWords);
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>(initialLeaderboard);
  const [streak, setStreak] = useState(5);
  const [points, setPoints] = useState(1680);
  const [dailyGoalMet, setDailyGoalMet] = useState(false);

  // User Authentication State
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('hangugo_user');
      if (savedUser) {
        try {
          const parsed: AuthUser = JSON.parse(savedUser);
          setUser(parsed);
          setPoints(parsed.points || 1680);
          setStreak(parsed.streak || 5);
          setLeaderboard((prev) =>
            prev.map((u) =>
              u.isCurrentUser
                ? { ...u, name: parsed.name, avatar: parsed.avatar }
                : u
            )
          );
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  const handleLoginSuccess = (newUser: AuthUser) => {
    setUser(newUser);
    setPoints(newUser.points);
    setStreak(newUser.streak);
    setLeaderboard((prev) =>
      prev.map((u) =>
        u.isCurrentUser
          ? { ...u, name: newUser.name, avatar: newUser.avatar, points: newUser.points }
          : u
      )
    );
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('hangugo_user');
    }
    setUser(null);
  };

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
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500 selection:text-white">
      {/* Soft Korea Skyline Wallpaper */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-50 filter saturate-125"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=2200&q=85')`
        }}
      />
      
      {/* Atmosphere Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-indigo-950/60 via-slate-950/75 to-slate-950/90" />
      <div className="fixed top-10 left-1/4 w-[500px] h-[300px] bg-rose-500/25 blur-[120px] pointer-events-none z-0 rounded-full" />
      <div className="fixed bottom-20 right-10 w-[550px] h-[350px] bg-sky-500/20 blur-[130px] pointer-events-none z-0 rounded-full" />

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 bg-slate-900/85 backdrop-blur-xl border-b border-slate-700/60 shadow-xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 py-2 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 via-rose-600 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-rose-500/30">
                한
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
                  {t.appName} <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/40">{t.appBadge}</span>
                </h1>
                <p className="text-[11px] text-slate-300 hidden sm:block">{t.appSubtitle}</p>
              </div>
            </div>

            {/* Middle: Live Dual Clock (Tashkent & Seoul) */}
            <div className="hidden lg:flex items-center">
              <DualClock />
            </div>

            {/* Right Side: Auth Button + Languages + Gamification */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
              {/* Language Selector: 3 Clickable Flag Buttons with clean text */}
              <div className="flex items-center bg-slate-900/90 border border-slate-700 rounded-2xl p-1 shadow-md gap-1">
                <button
                  type="button"
                  onClick={() => setLang('uz')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    lang === 'uz'
                      ? 'bg-rose-500 text-white shadow-md shadow-rose-500/40 scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                  title="O'zbek tili"
                >
                  <span className="text-sm">🇺🇿</span>
                  <span>UZ</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLang('ru')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    lang === 'ru'
                      ? 'bg-rose-500 text-white shadow-md shadow-rose-500/40 scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                  title="Русский язык"
                >
                  <span className="text-sm">🇷🇺</span>
                  <span>RU</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    lang === 'en'
                      ? 'bg-rose-500 text-white shadow-md shadow-rose-500/40 scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                  title="English"
                >
                  <span className="text-sm">🇬🇧</span>
                  <span>EN</span>
                </button>
              </div>

              {/* Streak */}
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-bold transition-all shadow-md ${
                  dailyGoalMet
                    ? 'bg-orange-500/25 border-orange-500/60 text-orange-400 animate-pulse'
                    : 'bg-slate-850/90 border-slate-700/80 text-orange-400'
                }`}
                title="Streak"
              >
                <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span>{streak} {t.streakDays}</span>
              </div>

              {/* Points */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-850/90 border border-slate-700/80 text-amber-300 text-xs sm:text-sm font-bold shadow-md">
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>{points} XP</span>
              </div>

              {/* User Profile / Register Button */}
              {user ? (
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-2xl shadow-md">
                  <span className="text-lg">{user.avatar}</span>
                  <span className="text-xs font-bold text-white max-w-[90px] truncate">{user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="text-slate-400 hover:text-rose-400 p-1 cursor-pointer transition-colors"
                    title="Chiqish (Logout)"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-rose-500 to-amber-500 hover:opacity-95 text-white rounded-xl text-xs font-bold shadow-lg shadow-rose-500/25 active:scale-95 transition-all cursor-pointer"
                >
                  <UserCircle className="w-4 h-4" />
                  <span>{lang === 'ru' ? 'Войти' : lang === 'en' ? 'Sign In' : 'Kirish'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Clock banner */}
          <div className="lg:hidden max-w-6xl mx-auto px-4 pt-1 pb-2 flex justify-center">
            <DualClock />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* 1-QATOR: Asosiy Navigatsiya Menyulari (Eng tepada, birinchi qatorda!) */}
          <div className="sticky top-20 z-30 bg-slate-950/80 backdrop-blur-xl p-2 rounded-2xl border border-slate-800/80 mb-6 shadow-xl overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max">
              <button
                onClick={() => setActiveTab('lessons')}
                className={`py-2.5 px-4 text-xs sm:text-sm font-black rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'lessons'
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 ring-1 ring-rose-400 scale-[1.02]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                <GraduationCap className="w-4 h-4" /> {t.tabGrammarLessons}
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`py-2.5 px-4 text-xs sm:text-sm font-black rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'ai'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 ring-1 ring-emerald-400 scale-[1.02]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                <Bot className="w-4 h-4" /> {t.tabAiChat}
              </button>
              <button
                onClick={() => setActiveTab('study')}
                className={`py-2.5 px-4 text-xs sm:text-sm font-black rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'study'
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 ring-1 ring-rose-400 scale-[1.02]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                <BookOpen className="w-4 h-4" /> {t.tabDictionary}
              </button>
              <button
                onClick={() => setActiveTab('grammar')}
                className={`py-2.5 px-4 text-xs sm:text-sm font-black rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'grammar'
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 ring-1 ring-rose-400 scale-[1.02]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                <PenTool className="w-4 h-4" /> {t.tabGrammar}
              </button>
              <button
                onClick={() => setActiveTab('leaderboard')}
                className={`py-2.5 px-4 text-xs sm:text-sm font-black rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'leaderboard'
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 ring-1 ring-rose-400 scale-[1.02]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                <Trophy className="w-4 h-4" /> {t.tabLeaderboard}
              </button>
            </div>
          </div>

          {/* Hero Banner (Qulay, ixcham va zamonaviy) */}
          <div className="bg-gradient-to-r from-rose-950/70 via-slate-900/90 to-indigo-950/70 backdrop-blur-2xl border border-rose-500/30 rounded-3xl p-6 sm:p-7 mb-8 relative overflow-hidden shadow-2xl">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-rose-500/15 to-transparent pointer-events-none" />
            
            <div className="max-w-xl relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded-full border border-rose-500/40 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> {t.todayPlanBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2.5 leading-tight">
                {t.heroTitle}
              </h2>
              <p className="text-slate-200 text-sm mt-2 leading-relaxed">
                {t.heroDesc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2.5 mt-5">
                <button
                  onClick={() => setActiveTab('lessons')}
                  className={`px-4 py-2 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                    activeTab === 'lessons'
                      ? 'bg-rose-600 ring-2 ring-white/50'
                      : 'bg-rose-500 hover:bg-rose-600'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" /> {t.tabGrammarLessons}
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-4 py-2 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                    activeTab === 'ai'
                      ? 'bg-teal-700 ring-2 ring-white/50'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-95'
                  }`}
                >
                  <Bot className="w-4 h-4" /> {t.btnAiChat}
                </button>
                <button
                  onClick={() => setActiveTab('study')}
                  className={`px-4 py-2 text-slate-100 font-bold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                    activeTab === 'study'
                      ? 'bg-slate-700 ring-2 ring-white/50'
                      : 'bg-slate-800/90 hover:bg-slate-700'
                  }`}
                >
                  <Flame className="w-4 h-4" /> {t.btnTodayWords}
                </button>
              </div>
            </div>
          </div>

          {/* Tab Views */}
          {activeTab === 'lessons' && (
            <GrammarLessons currentLang={lang} />
          )}

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
        <footer className="mt-20 border-t border-slate-800/80 py-8 text-center text-xs text-slate-400 bg-slate-950/80 backdrop-blur-md">
          <p>{t.footerRights}</p>
          <p className="mt-1">{t.footerTagline}</p>
        </footer>
      </div>

      {/* Auth Modal (Register / Login) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        currentLang={lang}
      />
    </div>
  );
}

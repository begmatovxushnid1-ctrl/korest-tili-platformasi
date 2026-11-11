'use client';

import React, { useState } from 'react';
import { comprehensiveLessons, GrammarLessonDetail } from '../data/comprehensiveLessons';
import { speakKorean } from '../utils/korean';
import { Volume2, BookOpen, Sparkles, CheckCircle2, XCircle, ArrowRight, Bookmark, MessageSquare, HelpCircle, GraduationCap } from 'lucide-react';
import { Language } from '../data/translations';

interface GrammarLessonsProps {
  currentLang: Language;
}

export default function GrammarLessons({ currentLang }: GrammarLessonsProps) {
  const [selectedLesson, setSelectedLesson] = useState<GrammarLessonDetail>(comprehensiveLessons[0]);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleLessonChange = (lesson: GrammarLessonDetail) => {
    setSelectedLesson(lesson);
    setQuizAnswer(null);
    setShowExplanation(false);
  };

  const handleQuizSelect = (index: number) => {
    setQuizAnswer(index);
    setShowExplanation(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Sidebar: Comprehensive Lesson Navigator */}
      <div className="lg:col-span-4 space-y-2.5">
        <div className="p-4 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/80 mb-3 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5 text-rose-400" />
            <div>
              <h3 className="text-sm font-black text-white">Mukammal Darslar</h3>
              <p className="text-[11px] text-slate-400">1-Darsdan boshlab bosqichma-bosqich</p>
            </div>
          </div>
          <span className="text-xs bg-rose-500/20 text-rose-300 font-bold px-2.5 py-1 rounded-full border border-rose-500/30">
            {comprehensiveLessons.length} ta dars
          </span>
        </div>

        {/* Scrollable list of lessons */}
        <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1.5 custom-scrollbar">
          {comprehensiveLessons.map((l) => {
            const isSelected = selectedLesson.id === l.id;
            return (
              <div
                key={l.id}
                onClick={() => handleLessonChange(l)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'bg-gradient-to-r from-rose-950/80 via-slate-900 to-slate-900 border-rose-500 shadow-xl shadow-rose-950/40 ring-1 ring-rose-500/40 translate-x-1'
                    : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span className="font-bold text-amber-400">{l.level}</span>
                  <Bookmark className={`w-3.5 h-3.5 ${isSelected ? 'text-rose-400 fill-rose-400' : 'text-slate-600'}`} />
                </div>
                <h4 className="text-sm font-black text-white leading-snug">{l.title}</h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">{l.summary}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Detailed Structured Lesson Viewer */}
      <div className="lg:col-span-8 bg-slate-900/90 backdrop-blur-2xl border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Lesson Header */}
        <div className="border-b border-slate-800 pb-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold px-3 py-1 bg-rose-500/15 text-rose-300 rounded-full border border-rose-500/30">
              {selectedLesson.level}
            </span>
            <span className="text-xs font-mono text-slate-400 bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800">
              {selectedLesson.koreanTitle}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            {selectedLesson.title}
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {selectedLesson.conceptExplanation}
          </p>
        </div>

        {/* Formula & Batchim Rule Analysis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Grammatik Qolip (Formula):
            </span>
            <p className="text-sm sm:text-base font-mono font-bold text-amber-300">
              {selectedLesson.structure}
            </p>
          </div>
          <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              받침 (Batchim) qoidasi:
            </span>
            <p className="text-xs font-semibold text-rose-300">
              {selectedLesson.batchimDetail.hasBatchim}
            </p>
            <p className="text-xs text-slate-300 mt-1">
              {selectedLesson.batchimDetail.noBatchim}
            </p>
          </div>
        </div>

        {/* Key Rules list */}
        <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-2xl">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Muhim Eslatmalar va Qoidalar:
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-disc list-inside">
            {selectedLesson.keyRules.map((rule, idx) => (
              <li key={idx} className="leading-relaxed">{rule}</li>
            ))}
          </ul>
        </div>

        {/* Lesson Vocabulary Table */}
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-rose-400" /> Darsdagi Yangi So&apos;zlar (Lug&apos;at):
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {selectedLesson.vocabulary.map((v, idx) => {
              const trans =
                currentLang === 'ru' ? v.russian : currentLang === 'en' ? v.english : v.uzbek;
              return (
                <div
                  key={idx}
                  className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl flex items-center justify-between gap-2"
                >
                  <div>
                    <span className="text-sm font-black text-white">{v.korean}</span>
                    <span className="text-[11px] text-rose-300 block font-mono">{v.pronunciation}</span>
                    <span className="text-xs text-slate-400 block mt-0.5">{trans}</span>
                  </div>
                  <button
                    onClick={() => speakKorean(v.korean)}
                    className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-rose-600 rounded-lg transition-all cursor-pointer shrink-0"
                    title="Talaffuz"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Practical Dialogue */}
        {selectedLesson.dialogue && (
          <div className="p-4 bg-gradient-to-r from-slate-950/80 to-slate-900 border border-slate-800 rounded-2xl">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-sky-400" /> Amaliy Dialog (Real Suhbat):
            </h4>
            <div className="space-y-3">
              {/* Speaker A */}
              <div className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-xs font-bold px-2 py-0.5 bg-rose-500/20 text-rose-300 rounded-md shrink-0">
                  {selectedLesson.dialogue.speakerA}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-white">{selectedLesson.dialogue.lineA_Korean}</p>
                    <button
                      onClick={() => speakKorean(selectedLesson.dialogue!.lineA_Korean)}
                      className="text-rose-400 hover:text-rose-300 p-1 cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 italic mt-0.5">{selectedLesson.dialogue.lineA_Uzbek}</p>
                </div>
              </div>

              {/* Speaker B */}
              <div className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-xs font-bold px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded-md shrink-0">
                  {selectedLesson.dialogue.speakerB}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-white">{selectedLesson.dialogue.lineB_Korean}</p>
                    <button
                      onClick={() => speakKorean(selectedLesson.dialogue!.lineB_Korean)}
                      className="text-rose-400 hover:text-rose-300 p-1 cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 italic mt-0.5">{selectedLesson.dialogue.lineB_Uzbek}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Examples with Voice Audio */}
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-amber-400" /> Misol Gaplar va Ovozli Eshitish:
          </h4>
          <div className="space-y-2.5">
            {selectedLesson.examples.map((ex, idx) => {
              const translation =
                currentLang === 'ru' ? ex.russian : currentLang === 'en' ? ex.english : ex.uzbek;
              return (
                <div
                  key={idx}
                  className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-2xl flex items-center justify-between gap-3 hover:border-slate-700 transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base font-black text-white">{ex.korean}</span>
                      <span className="text-xs text-rose-300 font-mono">{ex.pronunciation}</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 italic">&quot;{translation}&quot;</p>
                  </div>
                  <button
                    onClick={() => speakKorean(ex.korean)}
                    className="p-2.5 bg-slate-800 hover:bg-rose-600 text-slate-200 hover:text-white rounded-xl transition-all cursor-pointer shadow-md shrink-0"
                    title="Ovozli eshitish"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Mini Quiz for the Lesson */}
        <div className="p-5 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-slate-950 border border-indigo-500/30 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold px-2.5 py-1 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" /> Darsni Mustahkamlash Testi
            </span>
          </div>

          <h5 className="text-sm sm:text-base font-extrabold text-white mb-3">
            {selectedLesson.miniQuiz.question}
          </h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
            {selectedLesson.miniQuiz.options.map((opt, idx) => {
              const isSelected = quizAnswer === idx;
              const isCorrect = idx === selectedLesson.miniQuiz.correctIndex;

              let btnClass = 'bg-slate-900 border-slate-700/80 text-slate-200 hover:bg-slate-800';
              if (showExplanation) {
                if (isCorrect) {
                  btnClass = 'bg-emerald-600 text-white border-emerald-500 ring-2 ring-emerald-400';
                } else if (isSelected) {
                  btnClass = 'bg-rose-600 text-white border-rose-500 ring-2 ring-rose-400';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleQuizSelect(idx)}
                  className={`p-3 text-xs sm:text-sm font-bold rounded-xl border text-left transition-all cursor-pointer ${btnClass}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div
              className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs ${
                quizAnswer === selectedLesson.miniQuiz.correctIndex
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
              }`}
            >
              {quizAnswer === selectedLesson.miniQuiz.correctIndex ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-bold">
                  {quizAnswer === selectedLesson.miniQuiz.correctIndex ? 'To\'g\'ri topdingiz!' : 'Noto\'g\'ri javob!'}
                </p>
                <p className="mt-0.5 text-slate-300">{selectedLesson.miniQuiz.explanation}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

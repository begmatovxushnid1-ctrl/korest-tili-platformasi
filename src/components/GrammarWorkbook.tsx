'use client';

import React, { useState } from 'react';
import { GrammarExercise } from '../types';
import { speakKorean, checkHasBatchim } from '../utils/korean';
import { Volume2, Sparkles, Check, AlertCircle, ArrowRight } from 'lucide-react';

interface GrammarWorkbookProps {
  exercises: GrammarExercise[];
  onExerciseComplete: (pointsGained: number) => void;
}

export default function GrammarWorkbook({ exercises, onExerciseComplete }: GrammarWorkbookProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [mode, setMode] = useState<'choice' | 'type'>('choice');
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [streakCount, setStreakCount] = useState(0);

  const ex = exercises[currentIdx];

  const handleSelectOption = (opt: string) => {
    if (feedback !== 'idle') return;
    setSelectedOption(opt);

    if (opt === ex.correctSuffix) {
      setFeedback('correct');
      setStreakCount((prev) => prev + 1);
      onExerciseComplete(20);
      speakKorean(`${ex.targetWord}${opt}`);
    } else {
      setFeedback('wrong');
      setStreakCount(0);
    }
  };

  const handleCheckTyped = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback !== 'idle' || !typedAnswer.trim()) return;

    const cleanInput = typedAnswer.trim();
    const isCorrect =
      cleanInput === ex.correctSuffix ||
      cleanInput === `${ex.targetWord}${ex.correctSuffix}` ||
      cleanInput === `-${ex.correctSuffix}`;

    if (isCorrect) {
      setFeedback('correct');
      setStreakCount((prev) => prev + 1);
      onExerciseComplete(30);
      speakKorean(`${ex.targetWord}${ex.correctSuffix}`);
    } else {
      setFeedback('wrong');
      setStreakCount(0);
    }
  };

  const handleNext = () => {
    setFeedback('idle');
    setSelectedOption(null);
    setTypedAnswer('');
    setCurrentIdx((prev) => (prev + 1) % exercises.length);
  };

  const targetHasBatchim = checkHasBatchim(ex.targetWord);

  return (
    <div className="w-full max-w-2xl mx-auto bg-zinc-900/90 backdrop-blur-2xl border border-zinc-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl">
      {/* Exercise Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
        <div>
          <span className="text-[11px] font-bold px-2.5 py-1 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20">
            연습장 • {ex.pattern}
          </span>
          <h2 className="text-lg sm:text-xl font-black text-white mt-2">{ex.title}</h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-zinc-400 font-medium">Savol {currentIdx + 1} / {exercises.length}</span>
          {streakCount > 1 && (
            <div className="text-xs text-orange-400 font-bold flex items-center justify-end gap-1 mt-1">
              <span>🔥 {streakCount} ketma-ket to&apos;g&apos;ri!</span>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Batchim Inspector Box */}
      <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 mb-6">
        <div className="flex flex-wrap items-center justify-between text-xs text-zinc-400 mb-2 gap-2">
          <span>Qoida va 받침 (Batchim) tahlili:</span>
          <span className="text-rose-400 font-mono font-semibold">{ex.batchimRule}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 bg-zinc-800 rounded-xl font-mono text-base font-bold text-white border border-zinc-700">
            {ex.targetWord}
          </div>
          <p className="text-xs sm:text-sm text-zinc-300">
            So&apos;z oxirida 받침:{' '}
            <strong className={targetHasBatchim ? 'text-emerald-400 font-bold' : 'text-blue-400 font-bold'}>
              {targetHasBatchim ? 'Bor (Undosh bilan tugagan)' : 'Yo\'q (Unli bilan tugagan)'}
            </strong>
          </p>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <button
          onClick={() => {
            setMode('choice');
            setFeedback('idle');
          }}
          className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            mode === 'choice' ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Variant tanlash
        </button>
        <button
          onClick={() => {
            setMode('type');
            setFeedback('idle');
          }}
          className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
            mode === 'type' ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Klaviaturada yozish (+30 XP)
        </button>
      </div>

      {/* Sentence Stem */}
      <div className="text-center py-6 px-4 bg-zinc-950/50 rounded-2xl border border-zinc-800/80 mb-6">
        <p className="text-2xl sm:text-3xl font-black text-white tracking-wide">
          {ex.questionStem.replace(
            '[____]',
            feedback === 'correct' ? `[ ${ex.correctSuffix} ]` : '[ ___ ]'
          )}
        </p>
        <p className="text-sm text-zinc-400 mt-2 italic">&quot;{ex.fullSentenceUzbek}&quot;</p>
      </div>

      {/* Input / Choice Area */}
      {mode === 'choice' ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {ex.options.map((option) => {
            let btnStyle = 'bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-100 border-zinc-700/70';

            if (feedback !== 'idle' && option === ex.correctSuffix) {
              btnStyle = 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-400';
            } else if (feedback === 'wrong' && selectedOption === option) {
              btnStyle = 'bg-rose-600 text-white border-rose-500 ring-2 ring-rose-400';
            }

            return (
              <button
                key={option}
                onClick={() => handleSelectOption(option)}
                disabled={feedback !== 'idle'}
                className={`py-3.5 text-lg font-bold rounded-2xl border transition-all active:scale-95 cursor-pointer disabled:cursor-default ${btnStyle}`}
              >
                -{option}
              </button>
            );
          })}
        </div>
      ) : (
        <form onSubmit={handleCheckTyped} className="flex gap-2 mb-6">
          <input
            type="text"
            disabled={feedback !== 'idle'}
            placeholder={`Qo'shimchani yozing: masalan "${ex.correctSuffix}"`}
            value={typedAnswer}
            onChange={(e) => setTypedAnswer(e.target.value)}
            className="flex-1 bg-zinc-800/80 border border-zinc-700 rounded-xl px-4 py-3 text-white text-center text-lg font-bold placeholder:text-zinc-500 focus:outline-none focus:border-rose-500"
          />
          <button
            type="submit"
            disabled={feedback !== 'idle' || !typedAnswer.trim()}
            className="px-6 py-3 bg-rose-500 text-white font-bold rounded-xl hover:bg-rose-600 disabled:opacity-50 transition-all cursor-pointer shadow-md shadow-rose-500/20"
          >
            Tekshirish
          </button>
        </form>
      )}

      {/* Feedback Alert */}
      {feedback !== 'idle' && (
        <div
          className={`p-4 rounded-2xl mb-6 flex items-start gap-3 border ${
            feedback === 'correct'
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
              : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
          }`}
        >
          {feedback === 'correct' ? (
            <Check className="w-6 h-6 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-6 h-6 text-rose-400 shrink-0" />
          )}
          <div className="flex-1">
            <h4 className="font-bold text-sm">
              {feedback === 'correct' ? 'To\'g\'ri javob! Qoyil!' : 'Xato qildingiz, tushuntirish:'}
            </h4>
            <p className="text-xs mt-1 text-zinc-300">{ex.ruleExplanation}</p>
          </div>
          <button
            onClick={() => speakKorean(`${ex.targetWord}${ex.correctSuffix}`)}
            className="p-2 bg-zinc-800/90 rounded-xl hover:bg-zinc-700 text-white cursor-pointer"
            title="Talaffuzni eshitish"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Next Question Button */}
      {feedback !== 'idle' && (
        <button
          onClick={handleNext}
          className="w-full py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-rose-500/20 hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          Keyingi mashqqa o&apos;tish
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

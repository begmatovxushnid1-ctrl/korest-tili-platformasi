'use client';

import React, { useState } from 'react';
import { grammarTopicsList, GrammarTopic } from '../data/grammarLessons';
import { speakKorean } from '../utils/korean';
import { Volume2, BookCheck, Sparkles, ChevronRight, Bookmark } from 'lucide-react';
import { Language } from '../data/translations';

interface GrammarLessonsProps {
  currentLang: Language;
}

export default function GrammarLessons({ currentLang }: GrammarLessonsProps) {
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic>(grammarTopicsList[0]);

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Left List of Topics */}
      <div className="md:col-span-5 space-y-2.5">
        <div className="p-3 bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-700/60 mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookCheck className="w-5 h-5 text-rose-400" />
            <h3 className="text-sm font-black text-white">Grammatika Qo&apos;llanmasi</h3>
          </div>
          <span className="text-[11px] bg-rose-500/20 text-rose-300 font-bold px-2 py-0.5 rounded-full border border-rose-500/30">
            {grammarTopicsList.length} ta dars
          </span>
        </div>

        <div className="space-y-2 max-h-[550px] overflow-y-auto pr-1">
          {grammarTopicsList.map((topic) => {
            const isSelected = selectedTopic.id === topic.id;
            return (
              <div
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'bg-gradient-to-r from-rose-950/80 via-zinc-900 to-zinc-900 border-rose-500 shadow-lg shadow-rose-950/50 ring-1 ring-rose-500/40 translate-x-1'
                    : 'bg-zinc-900/60 border-zinc-800/80 hover:bg-zinc-850/80 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
                  <span className="font-bold text-amber-400/90">{topic.level}</span>
                  <Bookmark className={`w-3.5 h-3.5 ${isSelected ? 'text-rose-400 fill-rose-400' : 'text-zinc-600'}`} />
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-white">{topic.title}</h4>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{topic.meaning}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Detailed Lesson Viewer */}
      <div className="md:col-span-7 bg-zinc-900/90 backdrop-blur-2xl border border-zinc-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="border-b border-zinc-800 pb-4 mb-6">
            <span className="text-[11px] font-bold px-2.5 py-1 bg-rose-500/10 text-rose-400 rounded-lg border border-rose-500/20">
              {selectedTopic.level}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 flex items-center gap-2">
              {selectedTopic.title}
            </h2>
            <p className="text-sm text-zinc-300 mt-1">{selectedTopic.meaning}</p>
          </div>

          {/* Structure & Batchim Rule */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="p-4 bg-zinc-950/70 border border-zinc-800 rounded-2xl">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                Qolip (Formula):
              </span>
              <p className="text-sm font-mono font-bold text-amber-300">{selectedTopic.structure}</p>
            </div>
            <div className="p-4 bg-zinc-950/70 border border-zinc-800 rounded-2xl">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                받침 (Batchim) qoidasi:
              </span>
              <p className="text-xs font-semibold text-rose-300">{selectedTopic.batchimRule}</p>
            </div>
          </div>

          {/* Examples with Voice Audio */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Misollar va Ovozli Talaffuz:
            </h4>
            <div className="space-y-3">
              {selectedTopic.examples.map((ex, idx) => {
                const translation =
                  currentLang === 'ru'
                    ? ex.russian
                    : currentLang === 'en'
                    ? ex.english
                    : ex.uzbek;

                return (
                  <div
                    key={idx}
                    className="p-3.5 bg-zinc-950/60 hover:bg-zinc-950 border border-zinc-800/80 rounded-2xl flex items-center justify-between gap-3 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-black text-white">{ex.korean}</span>
                        <span className="text-xs text-rose-400/80 font-mono">{ex.pronunciation}</span>
                      </div>
                      <p className="text-xs text-zinc-300 mt-1 italic">&quot;{translation}&quot;</p>
                    </div>

                    <button
                      onClick={() => speakKorean(ex.korean)}
                      className="p-2.5 bg-zinc-800 hover:bg-rose-600 text-zinc-200 hover:text-white rounded-xl transition-all cursor-pointer shadow-md shrink-0"
                      title="Talaffuzni eshitish"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer info tip */}
        <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
          <span>Ustiga bosib ovozli talaffuzni eshiting</span>
          <span className="text-rose-400 font-semibold">HanguGo Grammar v1</span>
        </div>
      </div>
    </div>
  );
}

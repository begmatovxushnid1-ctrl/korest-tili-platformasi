'use client';

import React, { useState, useRef, useEffect } from 'react';
import { speakKorean } from '../utils/korean';
import { Bot, Send, Volume2, Sparkles, User, RefreshCw } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

interface AITutorChatProps {
  currentLang: Language;
}

export default function AITutorChat({ currentLang }: AITutorChatProps) {
  const t = translations[currentLang];

  const initialWelcome =
    currentLang === 'ru'
      ? '안녕하세요! (An-nyeong-ha-se-yo!) 👋\nЯ ваш персональный AI-учитель корейского языка. Спросите меня о грамматике, словах, 받침 (батчим) или подготовке к TOPIK!'
      : currentLang === 'en'
      ? '안녕하세요! (An-nyeong-ha-se-yo!) 👋\nI am your personal AI Korean Teacher. Feel free to ask me anything about Korean grammar, words, 받침 (Batchim), or culture!'
      : '안녕하세요! (An-nyeong-ha-se-yo!) 👋\nMen sizning aqlli AI Koreys tili ustozingizman. Koreys tili grammatikasi, so\'zlar, 받침 (Batchim) yoki kundalik iboralar bo\'yicha istalgan savolingizni berishingiz mumkin!';

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'ai',
      text: initialWelcome,
      timestamp: 'Hozir',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsgText = input.trim();
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsgText, lang: currentLang }),
      });

      const data = await res.json();
      const aiReply = data.reply || (currentLang === 'ru' ? 'Извините, не удалось получить ответ.' : 'Kechirasiz, javob olishda xatolik yuz berdi.');

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: aiReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: 'Internet yoki server bilan aloqada xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeak = (text: string) => {
    speakKorean(text);
  };

  const quickPrompts =
    currentLang === 'ru'
      ? ['Что такое 받침 (Батчим)?', 'Как здороваться по-корейски?', 'Разница -이/가 и -은/는?']
      : currentLang === 'en'
      ? ['What is 받침 (Batchim)?', 'How to say hello in Korean?', 'Difference: -이/가 vs -은/는?']
      : ['받침 (Batchim) qoidasi nima?', 'Koreyscha salomlashish turlari?', '-이/가 va -은/는 farqi nima?'];

  return (
    <div className="w-full max-w-2xl mx-auto bg-zinc-900/90 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col h-[560px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-rose-500/20">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-white flex items-center gap-2">
              {t.tabAiChat} <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30">{t.online}</span>
            </h3>
            <p className="text-xs text-zinc-400">{t.aiTutorRole}</p>
          </div>
        </div>

        <button
          onClick={() =>
            setMessages([
              {
                id: 'm1',
                sender: 'ai',
                text: initialWelcome,
                timestamp: 'Hozir',
              },
            ])
          }
          className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-all cursor-pointer"
          title={t.clearChat}
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto space-y-3.5 pr-2">
        {messages.map((m) => {
          const isAi = m.sender === 'ai';
          return (
            <div
              key={m.id}
              className={`flex items-start gap-2.5 ${isAi ? 'justify-start' : 'justify-end'}`}
            >
              {isAi && (
                <div className="w-7 h-7 rounded-lg bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm whitespace-pre-wrap leading-relaxed shadow-md ${
                  isAi
                    ? 'bg-zinc-800/80 border border-zinc-700/60 text-zinc-100 rounded-tl-sm'
                    : 'bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-tr-sm font-medium'
                }`}
              >
                {m.text}

                {/* Speak button for AI responses */}
                {isAi && (
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-700/50 text-[10px] text-zinc-400">
                    <button
                      onClick={() => handleSpeak(m.text)}
                      className="flex items-center gap-1 hover:text-rose-400 transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      {currentLang === 'ru' ? 'Послушать корейский' : currentLang === 'en' ? 'Listen pronunciation' : 'Ovozli tinglash'}
                    </button>
                    <span>{m.timestamp}</span>
                  </div>
                )}
              </div>

              {!isAi && (
                <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-rose-400 p-2 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>{t.aiThinking}</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Questions */}
      <div className="flex items-center gap-1.5 py-2 overflow-x-auto text-[11px] text-zinc-400">
        <span className="shrink-0 font-medium">{t.quickPromptLabel}</span>
        {quickPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setInput(p)}
            className="px-2.5 py-1 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 rounded-lg whitespace-nowrap cursor-pointer transition-colors"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <form onSubmit={handleSend} className="flex items-center gap-2 pt-2 border-t border-zinc-800">
        <input
          type="text"
          placeholder={t.inputPlaceholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-zinc-800/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm placeholder:text-zinc-500 focus:outline-none focus:border-rose-500 transition-all"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="p-2.5 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl hover:opacity-95 disabled:opacity-50 transition-all cursor-pointer shadow-md shadow-rose-500/20"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

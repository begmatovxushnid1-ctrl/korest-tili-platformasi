'use client';

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function DualClock() {
  const [tashkentTime, setTashkentTime] = useState('');
  const [seoulTime, setSeoulTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Toshkent vaqti (UTC+5)
      const uz = new Intl.DateTimeFormat('uz-UZ', {
        timeZone: 'Asia/Tashkent',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);

      // Seul vaqti (UTC+9)
      const kr = new Intl.DateTimeFormat('ko-KR', {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);

      setTashkentTime(uz);
      setSeoulTime(kr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!tashkentTime) return null;

  return (
    <div className="flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/80 rounded-2xl px-3 py-1.5 shadow-md">
      {/* Tashkent Time */}
      <div className="flex items-center gap-1.5 text-xs text-zinc-300">
        <span className="text-sm">🇺🇿</span>
        <span className="text-zinc-400 font-semibold hidden md:inline">Toshkent:</span>
        <span className="font-mono font-bold text-white tracking-wider">{tashkentTime}</span>
      </div>

      <div className="w-[1px] h-4 bg-zinc-700 mx-1" />

      {/* Seoul Time */}
      <div className="flex items-center gap-1.5 text-xs text-zinc-300">
        <span className="text-sm">🇰🇷</span>
        <span className="text-rose-400 font-semibold hidden md:inline">Seul (서울):</span>
        <span className="font-mono font-bold text-rose-300 tracking-wider">{seoulTime}</span>
      </div>
    </div>
  );
}

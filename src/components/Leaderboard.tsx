'use client';

import React from 'react';
import { LeaderboardUser } from '../types';

interface LeaderboardProps {
  users: LeaderboardUser[];
  userRank?: number;
}

export default function Leaderboard({ users }: LeaderboardProps) {
  // Sort users by points descending
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-b from-rose-950/20 via-zinc-900 to-zinc-900 border border-rose-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
          🏆 Jonli Reyting Doskasi
        </div>
        <h2 className="text-2xl font-black text-white">Eng Faol O&apos;quvchilar</h2>
        <p className="text-xs text-zinc-400 mt-1">
          Har kuni 10 ta so&apos;z yodlang, testlarni bajaring va yuqori o&apos;rinlarni egallang!
        </p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 items-end mb-8 pt-4">
        {/* 2nd place */}
        {sortedUsers[1] && (
          <div className="flex flex-col items-center bg-zinc-850/80 border border-zinc-700/60 rounded-2xl p-3 pb-4">
            <span className="text-2xl mb-1">{sortedUsers[1].avatar}</span>
            <span className="text-xs font-bold text-zinc-300 truncate w-full text-center">
              {sortedUsers[1].name}
            </span>
            <span className="text-xs text-rose-400 font-semibold">{sortedUsers[1].points} ball</span>
            <div className="mt-2 w-full py-1 bg-zinc-700/50 rounded-lg text-center text-xs font-bold text-zinc-300">
              🥈 2-o&apos;rin
            </div>
          </div>
        )}

        {/* 1st place */}
        {sortedUsers[0] && (
          <div className="flex flex-col items-center bg-gradient-to-b from-rose-900/40 to-zinc-800/90 border border-amber-500/50 rounded-2xl p-4 pb-5 shadow-xl shadow-amber-500/10 scale-105">
            <div className="relative">
              <span className="text-4xl">{sortedUsers[0].avatar}</span>
              <span className="absolute -top-3 -right-2 text-xl">👑</span>
            </div>
            <span className="text-sm font-extrabold text-white mt-1 truncate w-full text-center">
              {sortedUsers[0].name}
            </span>
            <span className="text-sm text-amber-400 font-black">{sortedUsers[0].points} ball</span>
            <div className="mt-2 w-full py-1.5 bg-gradient-to-r from-amber-500 to-rose-500 rounded-lg text-center text-xs font-black text-black">
              🥇 1-o&apos;rin
            </div>
          </div>
        )}

        {/* 3rd place */}
        {sortedUsers[2] && (
          <div className="flex flex-col items-center bg-zinc-850/80 border border-zinc-700/60 rounded-2xl p-3 pb-4">
            <span className="text-2xl mb-1">{sortedUsers[2].avatar}</span>
            <span className="text-xs font-bold text-zinc-300 truncate w-full text-center">
              {sortedUsers[2].name}
            </span>
            <span className="text-xs text-rose-400 font-semibold">{sortedUsers[2].points} ball</span>
            <div className="mt-2 w-full py-1 bg-amber-900/40 text-amber-300 rounded-lg text-center text-xs font-bold">
              🥉 3-o&apos;rin
            </div>
          </div>
        )}
      </div>

      {/* List */}
      <div className="space-y-2">
        {sortedUsers.map((user, idx) => {
          const isMe = user.isCurrentUser;
          return (
            <div
              key={user.id}
              className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                isMe
                  ? 'bg-rose-500/15 border-rose-500/50 shadow-lg shadow-rose-500/10 ring-1 ring-rose-500/40'
                  : 'bg-zinc-800/40 border-zinc-800 hover:bg-zinc-800/70'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-6 text-center text-xs font-bold ${
                    idx < 3 ? 'text-amber-400' : 'text-zinc-500'
                  }`}
                >
                  #{idx + 1}
                </span>
                <span className="text-xl">{user.avatar}</span>
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                    {user.name}
                    {isMe && (
                      <span className="text-[10px] bg-rose-500 text-white font-bold px-1.5 py-0.5 rounded-md">
                        SIZ
                      </span>
                    )}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                    <span>🔥 {user.streak} kunlik streak</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm font-bold text-rose-400">{user.points}</span>
                <span className="text-xs text-zinc-400 ml-1">ball</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

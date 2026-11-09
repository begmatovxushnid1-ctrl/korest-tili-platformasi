'use client';

import React, { useState } from 'react';
import { User, Lock, Mail, X, Check, LogIn, UserPlus } from 'lucide-react';
import { Language } from '../data/translations';

export interface AuthUser {
  name: string;
  email: string;
  streak: number;
  points: number;
  avatar: string;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: AuthUser) => void;
  currentLang: Language;
}

export default function AuthModal({ isOpen, onClose, onLoginSuccess, currentLang }: AuthModalProps) {
  const [isRegister, setIsRegister] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🎓');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const avatars = ['🎓', '🇰🇷', '🔥', '👑', '⚡', '🌸', '🥋', '🦊'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError(currentLang === 'ru' ? 'Заполните все поля!' : currentLang === 'en' ? 'Fill all fields!' : 'Barcha maydonlarni to\'ldiring!');
      return;
    }

    if (password.length < 4) {
      setError(currentLang === 'ru' ? 'Пароль должен быть от 4 символов!' : currentLang === 'en' ? 'Password must be 4+ chars!' : 'Parol kamida 4 ta belgidan iborat bo\'lishi kerak!');
      return;
    }

    const userName = name.trim() || email.split('@')[0];

    const newUser: AuthUser = {
      name: userName,
      email: email.trim(),
      streak: 5,
      points: 1520,
      avatar: selectedAvatar,
    };

    // Save to localStorage for persistent state across devices/refresh
    if (typeof window !== 'undefined') {
      localStorage.setItem('hangugo_user', JSON.stringify(newUser));
    }

    onLoginSuccess(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-md p-6 sm:p-8 shadow-2xl relative text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-xl transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 mx-auto flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-rose-500/30 mb-3">
            한
          </div>
          <h3 className="text-2xl font-black text-white">
            {isRegister
              ? currentLang === 'ru'
                ? 'Регистрация'
                : currentLang === 'en'
                ? 'Create Account'
                : 'Ro\'yxatdan o\'tish'
              : currentLang === 'ru'
              ? 'Вход в аккаунт'
              : currentLang === 'en'
              ? 'Welcome Back'
              : 'Akkauntga kirish'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {isRegister
              ? currentLang === 'ru'
                ? 'Сохраняйте прогресс, слова и соревнуйтесь в рейтинге!'
                : currentLang === 'en'
                ? 'Save your progress, vocab & compete on leaderboard!'
                : 'Yutuqlaringiz, o\'rgangan so\'zlaringiz saqlanadi va reytingda ko\'rinasiz!'
              : currentLang === 'ru'
              ? 'Введите свои данные для продолжения учебы'
              : currentLang === 'en'
              ? 'Enter your credentials to continue learning'
              : 'O\'qishni davom ettirish uchun ma\'lumotlaringizni kiriting'}
          </p>
        </div>

        {/* Tab switch */}
        <div className="grid grid-cols-2 p-1 bg-slate-950/70 border border-slate-800 rounded-2xl mb-6">
          <button
            type="button"
            onClick={() => {
              setIsRegister(true);
              setError('');
            }}
            className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              isRegister ? 'bg-rose-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            {currentLang === 'ru' ? 'Регистрация' : currentLang === 'en' ? 'Register' : 'Ro\'yxatdan o\'tish'}
          </button>
          <button
            type="button"
            onClick={() => {
              setIsRegister(false);
              setError('');
            }}
            className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              !isRegister ? 'bg-rose-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            {currentLang === 'ru' ? 'Вход' : currentLang === 'en' ? 'Login' : 'Kirish'}
          </button>
        </div>

        {error && (
          <div className="p-3 mb-4 bg-rose-950/50 border border-rose-500/40 rounded-xl text-xs text-rose-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Avatar Picker (for registration) */}
          {isRegister && (
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                {currentLang === 'ru' ? 'Выберите аватар:' : currentLang === 'en' ? 'Choose Avatar:' : 'Avatarni tanlang:'}
              </label>
              <div className="flex items-center justify-between gap-1">
                {avatars.map((av) => (
                  <button
                    key={av}
                    type="button"
                    onClick={() => setSelectedAvatar(av)}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all cursor-pointer ${
                      selectedAvatar === av
                        ? 'bg-rose-500 scale-110 shadow-lg shadow-rose-500/40 ring-2 ring-white'
                        : 'bg-slate-800 hover:bg-slate-750 text-slate-300'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Name Field */}
          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                {currentLang === 'ru' ? 'Ваше имя' : currentLang === 'en' ? 'Your Name' : 'Ismingiz'}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder={currentLang === 'ru' ? 'Например: Алишер' : currentLang === 'en' ? 'e.g. Alex' : 'Masalan: Sardor'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-10 pr-3.5 py-2.5 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500 transition-colors"
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Email / Pochta</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                placeholder="misol@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-10 pr-3.5 py-2.5 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500 transition-colors"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              {currentLang === 'ru' ? 'Пароль' : currentLang === 'en' ? 'Password' : 'Parol'}
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-10 pr-3.5 py-2.5 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500 transition-colors"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 text-white font-extrabold text-sm rounded-xl hover:opacity-95 shadow-lg shadow-rose-500/30 active:scale-98 transition-all cursor-pointer mt-2"
          >
            {isRegister
              ? currentLang === 'ru'
                ? 'Зарегистрироваться'
                : currentLang === 'en'
                ? 'Sign Up'
                : 'Ro\'yxatdan o\'tish'
              : currentLang === 'ru'
              ? 'Войти'
              : currentLang === 'en'
              ? 'Sign In'
              : 'Kirish'}
          </button>
        </form>
      </div>
    </div>
  );
}

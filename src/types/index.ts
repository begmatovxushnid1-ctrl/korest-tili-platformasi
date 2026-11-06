export interface WordItem {
  id: string;
  korean: string;
  meaning: string;
  pronunciation?: string;
  exampleKorean?: string;
  exampleUzbek?: string;
  category: string;
  level: 'Boshlang\'ich' | 'O\'rta' | 'Yuqori';
  learned?: boolean;
}

export interface GrammarExercise {
  id: string;
  title: string;
  ruleExplanation: string;
  pattern: string; // e.g., "-이 / -가"
  batchimRule: string; // e.g., "Agar oxirgi bo'g'inda 받침 (undosh) bo'lsa -> -이, bo'lmasa -> -가"
  questionStem: string; // e.g. "선생님 [____] 학생을 가르칩니다."
  targetWord: string; // "선생님"
  hasBatchim: boolean;
  correctSuffix: string;
  options: string[];
  fullSentenceUzbek: string;
}

export interface UserStats {
  streak: number;
  lastActiveDate: string;
  points: number;
  wordsLearned: number;
  exercisesCompleted: number;
}

export interface LeaderboardUser {
  id: string;
  name: string;
  points: number;
  streak: number;
  avatar: string;
  isCurrentUser?: boolean;
}

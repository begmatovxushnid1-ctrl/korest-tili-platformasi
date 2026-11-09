export type Language = 'uz' | 'ru' | 'en';

export interface Translations {
  appName: string;
  appBadge: string;
  appSubtitle: string;
  streakDays: string;
  listenGreeting: string;
  todayPlanBadge: string;
  heroTitle: string;
  heroDesc: string;
  btnTodayWords: string;
  btnGrammarWorkbook: string;
  btnAiChat: string;
  tabAiChat: string;
  tabGrammarLessons: string;
  tabDictionary: string;
  tabGrammar: string;
  tabLeaderboard: string;
  online: string;
  aiTutorRole: string;
  clearChat: string;
  aiThinking: string;
  quickPromptLabel: string;
  inputPlaceholder: string;
  flashcardOf: string;
  learned: string;
  learning: string;
  markLearned: string;
  turnCard: string;
  turnCardHint: string;
  next: string;
  prev: string;
  filterAll: string;
  addNewWord: string;
  addWordModalTitle: string;
  koreanWordLabel: string;
  meaningLabel: string;
  pronunciationLabel: string;
  categoryLabel: string;
  cancel: string;
  save: string;
  meaningSide: string;
  koreanSide: string;
  exampleSentence: string;
  batchimRuleLabel: string;
  batchimHasConsonant: string;
  batchimNoConsonant: string;
  modeSelectOption: string;
  modeTypeKeyboard: string;
  check: string;
  correctAnswer: string;
  wrongAnswer: string;
  nextExercise: string;
  leaderboardTitle: string;
  leaderboardDesc: string;
  place1: string;
  place2: string;
  place3: string;
  youBadge: string;
  footerRights: string;
  footerTagline: string;
}

export const translations: Record<Language, Translations> = {
  uz: {
    appName: 'HanguGo',
    appBadge: 'AI PRO',
    appSubtitle: 'Koreys tili aqlli o\'rganish platformasi',
    streakDays: 'kun',
    listenGreeting: 'Salomlashish ovozini eshitish',
    todayPlanBadge: 'Bugungi dars rejasi',
    heroTitle: 'Koreys tilini AI Ustozingiz bilan o\'rganing!',
    heroDesc: 'Raqamli 단어장, to\'liq grammatika darslari, interaktiv 받침 testlari va jonli Seul soati.',
    btnTodayWords: 'Bugungi so\'zlar',
    btnGrammarWorkbook: 'Grammatika 연습장',
    btnAiChat: 'AI Ustoz bilan suhbat',
    tabAiChat: 'AI Koreys Ustoz',
    tabGrammarLessons: 'Grammatika Darslari',
    tabDictionary: 'Raqamli 단어장 (Lug\'at)',
    tabGrammar: '연습장 (Batchim Test)',
    tabLeaderboard: 'Reyting Doskasi',
    online: 'ONLINE',
    aiTutorRole: 'Grammatika, talaffuz va so\'zlar bo\'yicha sun\'iy intellekt',
    clearChat: 'Suhbatni tozalash',
    aiThinking: 'AI ustoz o\'ylamoqda va javob tayyorlamoqda...',
    quickPromptLabel: 'Tezkor savollar:',
    inputPlaceholder: 'Koreys tili bo\'yicha savolingizni yozing...',
    flashcardOf: 'Flesh-karta',
    learned: 'O\'zlashtirilgan',
    learning: 'O\'rganilmoqda',
    markLearned: 'Yodladim deb belgilash',
    turnCard: 'Aylantirish',
    turnCardHint: 'Koreyschasini ko\'rish uchun bosing',
    next: 'Keyingi',
    prev: 'Oldingi',
    filterAll: 'Barchasi',
    addNewWord: 'Yangi so\'z qo\'shish',
    addWordModalTitle: 'Lug\'atga yangi so\'z kiritish',
    koreanWordLabel: 'Koreyscha so\'z (Hangul)',
    meaningLabel: 'Tarjimasi va ma\'nosi',
    pronunciationLabel: 'Talaffuzi (Ixtiyoriy)',
    categoryLabel: 'Kategoriya',
    cancel: 'Bekor qilish',
    save: 'Saqlash',
    meaningSide: 'O\'zbekcha ma\'nosi',
    koreanSide: '한국어 (Koreyscha)',
    exampleSentence: 'Misol gap',
    batchimRuleLabel: 'Qoida va 받침 (Batchim) tahlili:',
    batchimHasConsonant: 'Bor (Undosh bilan tugagan)',
    batchimNoConsonant: 'Yo\'q (Unli bilan tugagan)',
    modeSelectOption: 'Variant tanlash',
    modeTypeKeyboard: 'Klaviaturada yozish (+30 XP)',
    check: 'Tekshirish',
    correctAnswer: 'To\'g\'ri javob! Qoyil!',
    wrongAnswer: 'Xato qildingiz, tushuntirish:',
    nextExercise: 'Keyingi mashqqa o\'tish',
    leaderboardTitle: 'Eng Faol O\'quvchilar',
    leaderboardDesc: 'Har kuni 10 ta so\'z yodlang, testlarni bajaring va yuqori o\'rinlarni egallang!',
    place1: '1-o\'rin',
    place2: '2-o\'rin',
    place3: '3-o\'rin',
    youBadge: 'SIZ',
    footerRights: 'HanguGo • Koreys tili platformasi © 2026. Sun\'iy Intellekt, Next.js & Tailwind CSS.',
    footerTagline: 'So\'zlar, grammatika darslari, ovozli talaffuz va gamifikatsiya bilan quvvatlangan.',
  },
  ru: {
    appName: 'HanguGo',
    appBadge: 'AI PRO',
    appSubtitle: 'Умная платформа изучения корейского языка',
    streakDays: 'дней',
    listenGreeting: 'Послушать приветствие',
    todayPlanBadge: 'План занятий на сегодня',
    heroTitle: 'Учите корейский язык с персональным AI-репетитором!',
    heroDesc: 'Цифровой словарь 단어장, полные уроки грамматики, интерактивные тесты 받침 и живые часы Сеула.',
    btnTodayWords: 'Слова на сегодня',
    btnGrammarWorkbook: 'Грамматика 연습장',
    btnAiChat: 'Чат с AI-учителем',
    tabAiChat: 'AI-Учитель (Чат)',
    tabGrammarLessons: 'Уроки грамматики',
    tabDictionary: 'Словарь 단어장',
    tabGrammar: '연습장 (Тесты батчим)',
    tabLeaderboard: 'Таблица лидеров',
    online: 'ОНЛАЙН',
    aiTutorRole: 'Искусственный интеллект для грамматики и лексики',
    clearChat: 'Очистить диалог',
    aiThinking: 'AI-учитель думает и пишет ответ...',
    quickPromptLabel: 'Быстрые вопросы:',
    inputPlaceholder: 'Задайте любой вопрос по корейскому языку...',
    flashcardOf: 'Карточка',
    learned: 'Изучено',
    learning: 'В процессе',
    markLearned: 'Отметить как выученное',
    turnCard: 'Перевернуть',
    turnCardHint: 'Нажмите, чтобы увидеть перевод',
    next: 'Следующее',
    prev: 'Предыдущее',
    filterAll: 'Все',
    addNewWord: 'Добавить слово',
    addWordModalTitle: 'Добавить новое слово в словарь',
    koreanWordLabel: 'Слово на корейском (Хангыль)',
    meaningLabel: 'Значение и перевод',
    pronunciationLabel: 'Произношение (опционально)',
    categoryLabel: 'Категория',
    cancel: 'Отмена',
    save: 'Сохранить',
    meaningSide: 'Русский перевод',
    koreanSide: '한국어 (Корейский)',
    exampleSentence: 'Пример предложения',
    batchimRuleLabel: 'Правило и анализ 받침 (Батчим):',
    batchimHasConsonant: 'Есть (заканчивается на согласную)',
    batchimNoConsonant: 'Нет (заканчивается на гласную)',
    modeSelectOption: 'Выбрать вариант',
    modeTypeKeyboard: 'Ввод с клавиатуры (+30 XP)',
    check: 'Проверить',
    correctAnswer: 'Правильно! Отлично!',
    wrongAnswer: 'Неверно, пояснение:',
    nextExercise: 'Перейти к следующему',
    leaderboardTitle: 'Лучшие ученики',
    leaderboardDesc: 'Учите слова каждый день, проходите тесты и занимайте первые места!',
    place1: '1-е место',
    place2: '2-е место',
    place3: '3-е место',
    youBadge: 'ВЫ',
    footerRights: 'HanguGo • Платформа корейского языка © 2026. AI, Next.js & Tailwind CSS.',
    footerTagline: 'Обогащено словарным запасом, уроками грамматики, аудио и геймификацией.',
  },
  en: {
    appName: 'HanguGo',
    appBadge: 'AI PRO',
    appSubtitle: 'Smart Korean Learning Platform',
    streakDays: 'days',
    listenGreeting: 'Listen to greetings',
    todayPlanBadge: 'Today\'s Lesson Plan',
    heroTitle: 'Learn Korean with your personal AI Tutor!',
    heroDesc: 'Digital vocabulary 단어장, structured grammar lessons, interactive 받침 quizzes, and live Seoul clock.',
    btnTodayWords: 'Today\'s Words',
    btnGrammarWorkbook: 'Grammar 연습장',
    btnAiChat: 'Chat with AI Tutor',
    tabAiChat: 'AI Korean Tutor',
    tabGrammarLessons: 'Grammar Lessons',
    tabDictionary: 'Vocabulary 단어장',
    tabGrammar: '연습장 (Batchim Quiz)',
    tabLeaderboard: 'Leaderboard',
    online: 'ONLINE',
    aiTutorRole: 'AI Assistant for Grammar, Vocab & Pronunciation',
    clearChat: 'Reset Chat',
    aiThinking: 'AI Tutor is preparing your explanation...',
    quickPromptLabel: 'Quick Questions:',
    inputPlaceholder: 'Ask anything about Korean language...',
    flashcardOf: 'Flashcard',
    learned: 'Mastered',
    learning: 'Learning',
    markLearned: 'Mark as Mastered',
    turnCard: 'Flip Card',
    turnCardHint: 'Click to reveal Korean translation',
    next: 'Next',
    prev: 'Prev',
    filterAll: 'All',
    addNewWord: 'Add Word',
    addWordModalTitle: 'Add New Word to Vocabulary',
    koreanWordLabel: 'Korean Word (Hangul)',
    meaningLabel: 'Meaning & Translation',
    pronunciationLabel: 'Pronunciation (Optional)',
    categoryLabel: 'Category',
    cancel: 'Cancel',
    save: 'Save',
    meaningSide: 'Meaning',
    koreanSide: '한국어 (Korean)',
    exampleSentence: 'Example Sentence',
    batchimRuleLabel: 'Rule & 받침 (Batchim) Analysis:',
    batchimHasConsonant: 'Present (Ends with Consonant)',
    batchimNoConsonant: 'None (Ends with Vowel)',
    modeSelectOption: 'Multiple Choice',
    modeTypeKeyboard: 'Type Keyboard (+30 XP)',
    check: 'Check Answer',
    correctAnswer: 'Correct! Awesome job!',
    wrongAnswer: 'Incorrect, explanation:',
    nextExercise: 'Next Exercise',
    leaderboardTitle: 'Top Learners',
    leaderboardDesc: 'Memorize words daily, practice grammar, and reach the top of the leaderboard!',
    place1: '1st Place',
    place2: '2nd Place',
    place3: '3rd Place',
    youBadge: 'YOU',
    footerRights: 'HanguGo • Korean Platform © 2026. AI, Next.js & Tailwind CSS.',
    footerTagline: 'Empowered by Vocab, Grammar Lessons, Audio TTS, and Gamification.',
  },
};

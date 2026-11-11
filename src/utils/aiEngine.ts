import { Language } from '../data/translations';

export function getLocalAIResponse(message: string, lang: Language): string {
  const lower = message.toLowerCase().trim();

  // 1. Salomlashish
  if (/salom|assalom|annyeong|안녕|privet|hello|hi|qale|qalaysiz/i.test(lower)) {
    if (lang === 'ru') {
      return `안녕하세요! [An-nyeong-ha-se-yo!] 👋\n\nЗдравствуйте! Я ваш персональный AI-учитель корейского языка. О чём вы хотите узнать? Задавайте любые вопросы по словам, грамматике или произношению!`;
    } else if (lang === 'en') {
      return `안녕하세요! [An-nyeong-ha-se-yo!] 👋\n\nHello! I am your AI Korean language teacher. Feel free to ask me anything about Korean words, grammar rules, or pronunciation!`;
    } else {
      return `안녕하세요! (An-nyeong-ha-se-yo!) 👋\n\nAssalomu alaykum! Men sizning shaxsiy AI Koreys tili ustozingizman. Bugun qaysi mavzu yoki so'zlarni birga o'rganamiz? Marhamat, savolingizni bering!`;
    }
  }

  // 2. Batchim (받침)
  if (/batchim|badchim|받침|подслог|consonant/i.test(lower)) {
    if (lang === 'ru') {
      return `📚 **Что такое 받침 (Батчим)?**\n\nБатчим — это нижняя согласная буква в конце корейского слога.\n\n🔹 **Примеры:**\n• **책** [chaek] — снизу буква **ㄱ** (есть батчим).\n• **사과** [sa-gwa] — заканчивается на гласную (батчима нет).\n\n💡 **Зачем он нужен?**\nОт наличия батчима зависит выбор окончаний: например, именительный падеж с батчимом **-이**, без батчима **-가**!`;
    } else if (lang === 'en') {
      return `📚 **What is 받침 (Batchim)?**\n\nBatchim is the final consonant at the bottom of a Korean syllable block.\n\n🔹 **Examples:**\n• **책** [chaek] — ends with consonant **ㄱ** at the bottom (has Batchim).\n• **사과** [sa-gwa] — ends with a vowel (no Batchim).\n\n💡 **Why it matters:**\nSubject markers: with Batchim **-이**, without Batchim **-가**!`;
    } else {
      return `📚 **받침 (Batchim) nima va nima uchun muhim?**\n\n받침 — bu koreyscha bo'g'inning eng pastidagi **undosh harf**dir!\n\n🔹 **Misollar:**\n• **책** [chaek] — so'z tagida **ㄱ** undoshi bor, demak unda 받침 mavjud.\n• **사과** [sa-gwa] — unli bilan tugagan, ya'ni 받침 yo'q.\n\n💡 **Qo'llanishi:**\nQo'shimchalar tanlashda: 받침 bo'lsa **-이** (선생님이), 받침 bo'lmasa **-가** (사과가) qo'shiladi!`;
    }
  }

  // 3. -이/가 va -은/는 farqi
  if (/이|가|은|는|qo'shimcha|частиц|particle/i.test(lower)) {
    if (lang === 'ru') {
      return `⚖️ **Разница между -은/는 и -이/가:**\n\n1. **-이 / -가** (Именительный падеж):\n• Указывает на конкретного исполнителя действия.\n• С батчимом: **-이** (선생님이), без батчима: **-가** (비가 와요).\n\n2. **-은 / -는** (Тематическая частица):\n• Подчеркивает тему разговора или противопоставление ("что касается меня...").\n• С батчимом: **-은** (학생은), без батчима: **-는** (저는).`;
    } else {
      return `⚖️ **-이/가 va -은/는 qo'shimchalari farqi:**\n\n1. **-이 / -가** (Ega kelishigi):\n• Harakatni kim bajarayotganiga to'g'ridan-to'g'ri urg'u beradi ("누가? 무엇이?").\n• 받침 bor: **-이** (선생님이), 받침 yo'q: **-가** (친구가).\n\n2. **-은 / -는** (Mavzu / Ta'kidlash):\n• Gap mavzusini belgilash yoki taqqoslash uchun ("Menga kelsak...", "Boshqalardan farqli o'laroq...").\n• Masalan: 저는 학생입니다 [Jeo-neun hak-saeng-im-ni-da] — "Men talabaman."`;
    }
  }

  // 4. Raqamlar / Sanash
  if (/son|raqam|sanash|chislo|number|hisob/i.test(lower)) {
    return `🔢 **Koreys tilida 2 xil raqam tizimi mavjud:**\n\n1. **Sino-Korean (Xitoycha):**\n일 (1), 이 (2), 삼 (3), 사 (4), 오 (5), 육 (6), 칠 (7), 팔 (8), 구 (9), 십 (10)\n👉 Pul, telefon raqam, sana, qavat va daqiqalar uchun.\n\n2. **Native Korean (Asl koreyscha):**\n하나 (1), 둘 (2), 셋 (3), 넷 (4), 다섯 (5), 여섯 (6), 일곱 (7), 여덟 (8), 아홉 (9), 열 (10)\n👉 Yosh, soat (vaqt) va buyumlarni sanashda ishlatiladi.`;
  }

  // 5. Minnatdorchilik
  if (/rahmat|kamsahamnida|gamsahamnida|spasibo|thank/i.test(lower)) {
    return `천만에요! [Cheon-man-e-yo!] — Arzimaydi! Sizga koreys tilini o'rgatishdan doimo xursandman. Yana qanday savollaringiz bor? ✨`;
  }

  // 6. Xayrlashuv
  if (/xayr|ko'rishguncha|poka|bye/i.test(lower)) {
    return `안녕히 가세요! [An-nyeong-hi ga-se-yo!] — Yaxshi boring! (Ketayotgan kishiga)\n안녕히 계세요! [An-nyeong-hi gye-se-yo!] — Yaxshi qoling! (Qolayotgan kishiga)\n\nYana darslarimizda kutib qolaman! 🎓`;
  }

  // 7. Gap tuzilishi va boshqa savollar
  if (lang === 'ru') {
    return `💡 **Ответ AI-учителя:**\nПо поводу вашего вопроса: "${message}"\n\nВ корейском языке порядок слов: **Подлежащее + Дополнение + Глагол-сказуемое (SOV)**.\n\nПример:\n• **저는 한국어를 공부해요.**\n[Jeo-neun han-guk-eo-reul gong-bu-hae-yo.]\n"Я изучаю корейский язык."\n\nЗадайте любой дополнительный вопрос, я с радостью помогу!`;
  } else if (lang === 'en') {
    return `💡 **AI Teacher Response:**\nRegarding your question: "${message}"\n\nIn Korean, the fundamental sentence structure is **Subject + Object + Verb (SOV)**.\n\nExample:\n• **저는 한국어를 공부해요.**\n[Jeo-neun han-guk-eo-reul gong-bu-hae-yo.]\n"I study Korean."\n\nFeel free to ask more specific questions!`;
  } else {
    return `💡 **AI Ustoz javobi:**\n"${message}" mavzusi bo'yicha shuni bilish muhim:\n\nKoreys tilida gap tuzilishi: **Ega + To'ldiruvchi + Kesim (SOV)** tartibida bo'ladi.\n\nMisol:\n• **저는 한국어를 공부해요.**\n[Jeo-neun han-guk-eo-reul gong-bu-hae-yo.]\n"Men koreys tilini o'rganyapman."\n\nUshbu mavzu bo'yicha yana qanday savolingiz bor?`;
  }
}

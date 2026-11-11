import { Language } from '../data/translations';

// Kengaytirilgan Koreys tili bilimlar bazasi
interface KnowledgeItem {
  keywords: RegExp;
  uz: string;
  ru: string;
  en: string;
}

const knowledgeBase: KnowledgeItem[] = [
  // 1. Salomlashish va odob
  {
    keywords: /salom|assalom|annyeong|안녕|privet|hello|hi|salomlash/i,
    uz: `👋 **Koreys tilida salomlashish turlari:**\n\n1. **안녕하세요!** [an-nyeong-ha-se-yo] — Assalomu alaykum! (Kattalar va tengdoshlarga hurmat bilan).\n2. **안녕하십니까?** [an-nyeong-ha-sim-ni-kka] — Rasmiy salomlashish (radio, televideniye, armiya yoki muhim yig'ilishda).\n3. **안녕!** [an-nyeong] — Salom! (Faqat yaqin do'stlar va yoshi kichiklarga).\n4. **만나서 반갑습니다!** [man-na-seo ban-gap-seum-ni-da] — Sizni ko'rganimdan xursandman!`,
    ru: `👋 **Приветствия в корейском языке:**\n\n1. **안녕하세요!** [an-nyeong-ha-se-yo] — Здравствуйте! (Уважительно к взрослым и ровесникам).\n2. **안녕하십니까?** [an-nyeong-ha-sim-ni-kka] — Здравствуйте! (Официальный вежливый стиль).\n3. **안녕!** [an-nyeong] — Привет! (Только для близких друзей и младших).\n4. **만на서 반갑습니다!** — Приятно познакомиться!`,
    en: `👋 **Greetings in Korean:**\n\n1. **안녕하세요!** [an-nyeong-ha-se-yo] — Hello! (Polite form for everyone).\n2. **안녕하십니까?** [an-nyeong-ha-sim-ni-kka] — Formal hello (official settings, news).\n3. **안녕!** [an-nyeong] — Hi! (Casual, only for close friends).\n4. **만나서 반갑습니다!** — Nice to meet you!`
  },
  // 2. Rahmat va minnatdorchilik
  {
    keywords: /rahmat|tashakkur|kamsahamnida|gamsahamnida|감사|고마|spasibo|thank/i,
    uz: `🙏 **Rahmat aytish va javob berish:**\n\n• **감사합니다!** [gam-sa-ham-ni-da] — Katta rahmat! (Eng ko'p qo'llanadigan hurmat shakli).\n• **고맙습니다!** [go-map-seum-ni-da] — Rahmat!\n• **고마워!** [go-ma-wo] — Rahmat (Do'stlar orasida).\n\n🔹 **Javob berish (Arzimaydi):**\n• **천만에요!** [cheon-man-e-yo] — Arzimaydi!\n• **아니에요!** [a-ni-e-yo] — Hechqisi yo'q / Arzimaydi (Kundalik hayotda eng mashhuri).`,
    ru: `🙏 **Благодарность на корейском:**\n\n• **감사합니다!** [gam-sa-ham-ni-da] — Большое спасибо! (Официально-вежливо).\n• **고맙습니다!** [go-map-seum-ni-da] — Спасибо!\n• **천만에요!** [cheon-man-e-yo] / **아니에요!** [a-ni-e-yo] — Не за что! / Пожалуйста!`,
    en: `🙏 **Saying Thank You in Korean:**\n\n• **감사합니다!** [gam-sa-ham-ni-da] — Thank you very much! (Most common).\n• **고맙습니다!** [go-map-seum-ni-da] — Thank you!\n• **천만에요!** [cheon-man-e-yo] or **아니에요!** — You're welcome!`
  },
  // 3. Xayrlashuv
  {
    keywords: /xayr|ketdim|ketmoqchiman|poka|goodbye|bye|안녕히/i,
    uz: `👋 **Koreys tilida xayrlashishning 2 xil nozik qoidasi bor:**\n\n1. **안녕히 가세요!** [an-nyeong-hi ga-se-yo] — "Yaxshi boring!" (Siz joyingizda qolib, ketayotgan mehmonga aytasiz).\n2. **안녕히 계세요!** [an-nyeong-hi gye-se-yo] — "Yaxshi qoling!" (Siz uydan yoki joydan chiqib ketayotganingizda qolayotganlarga aytasiz).\n3. **잘 가!** [jal ga] — Yaxshi bor (Do'stlarga).`,
    ru: `👋 **Два вида прощания в корейском языке:**\n\n1. **안녕히 가세요!** [an-nyeong-hi ga-se-yo] — «Счастливого пути!» (Говорят уходящему человеку).\n2. **안녕히 계세요!** [an-nyeong-hi gye-se-yo] — «Счастливо оставаться!» (Говорит тот, кто уходит).\n3. **또 봐요!** [tto bwa-yo] — До скорой встречи!`,
    en: `👋 **Two Ways to Say Goodbye in Korean:**\n\n1. **안녕히 가세요!** [an-nyeong-hi ga-se-yo] — "Go in peace!" (Said to the person who is leaving).\n2. **안녕히 계세요!** [an-nyeong-hi gye-se-yo] — "Stay in peace!" (Said when YOU are the one leaving).\n3. **또 만나요!** — See you again!`
  },
  // 4. Batchim (받침)
  {
    keywords: /batchim|badchim|patchim|받침|подслог|пачим/i,
    uz: `📚 **받침 (Batchim) haqida to'liq tushuntirish:**\n\n받침 — bu koreyscha bo'g'inning **eng pastki qismiga yoziladigan undosh harf**dir!\n\n🔹 **Misollar:**\n• **산** (tog') -> "ㅅ"(bosh undosh) + "ㅏ"(unli) + **"ㄴ" (받침)**.\n• **책** (kitob) -> "ㅊ" + "ㅐ" + **"ㄱ" (받침)**.\n• **나무** (daraxt) -> Unda 받침 yo'q (ikkala bo'g'in ham unli bilan tugagan).\n\n💡 **Nega juda muhim?**\nKoreys tili grammatikasidagi 80% qo'shimchalar so'zda 받침 bor yoki yo'qligiga qarab ulanadi: Masalan: -이/가, -은/는, -을/를, -습니다/ㅂ니다.`,
    ru: `📚 **Полное руководство по 받침 (Батчим):**\n\nБатчим — это согласная буква, которая пишется в самом низу корейского слогового блока.\n\n🔹 **Примеры:**\n• **책** (книга) -> внизу согласная **ㄱ** (есть батчим).\n• **사과** (яблоко) -> заканчивается на гласную (нет батчима).\n\n💡 **Значение:**\nБольшинство грамматических окончаний зависят от батчима: например, -이/가, -은/는, -을/를!`,
    en: `📚 **Comprehensive Guide to 받침 (Batchim):**\n\nBatchim is the final consonant placed at the bottom of a Korean syllable block.\n\n🔹 **Examples:**\n• **책** (book) -> consonant **ㄱ** at the bottom (has Batchim).\n• **사과** (apple) -> ends with a vowel (no Batchim).\n\n💡 **Importance:**\nIt decides whether to attach -이/-가, -은/-는, -을/-를, or -(으)ㄹ 거예요!`
  },
  // 5. Ega va mavzu qo'shimchalari: -이/가 vs -은/는
  {
    keywords: /이\/가|은\/는|ega|mavzu|subyekt|farqi|отличи/i,
    uz: `⚖️ **-이/가 va -은/는 qo'shimchalarining asosiy farqi:**\n\n1. **-이 / -가 (Ega kelishigi):**\n• Savolga to'g'ridan-to'g'ri javob berishda va yangi axborotda ishlatiladi ("Kim qildi? Nima bo'ldi?").\n• Masalan: 누가 왔어요? -> **민수가** 왔어요 (Minsu keldi).\n• 받침 bor: **-이** (선생님이), 받침 yo'q: **-가** (사과가).\n\n2. **-은 / -는 (Mavzu / Ta'kidlash):**\n• Suhbat nima haqida ketayotganini va boshqalar bilan taqqoslashni bildiradi ("Menga kelsak...", "Boshqalarga o'xshamagan holda...").\n• Masalan: **저는** 학생이에요 (Men esa talabaman).\n• 받침 bor: **-은** (책은), 받침 yo'q: **-는** (친구는).`,
    ru: `⚖️ **Разница между -이/가 и -은/는:**\n\n1. **-이 / -가** (Именительный падеж):\n• Выделяет конкретного исполнителя (ответ на вопрос «Кто?» или «Что?»).\n• С батчимом: **-이**, без батчима: **-가**.\n\n2. **-은 / -는** (Тематическая частица):\n• Обозначает тему разговора или противопоставление («Что касается меня...»).\n• С батчимом: **-은**, без батчима: **-는**.`,
    en: `⚖️ **Difference between -이/가 and -은/는:**\n\n1. **-이 / -가** (Subject markers):\n• Focuses on WHO or WHAT performs the action.\n• With Batchim: **-이**, without: **-가**.\n\n2. **-은 / -는** (Topic markers):\n• Sets the main topic or highlights contrast ("As for me...", "Compared to others...").\n• With Batchim: **-은**, without: **-는**.`
  },
  // 6. Raqamlar va sanash
  {
    keywords: /raqam|son|sanash|sino|native|chislo|number|счет|счёт/i,
    uz: `🔢 **Koreys tilida 2 xil raqamlar tizimi:**\n\n1️⃣ **Xitoycha-koreyscha (Sino-Korean):**\n일 (1), 이 (2), 삼 (3), 사 (4), 오 (5), 육 (6), 칠 (7), 팔 (8), 구 (9), 십 (10), 백 (100), 천 (1,000), 만 (10,000).\n👉 **Qayerda ishlatiladi:** Pul (won), telefon raqamlari, sana (yil, oy, kun), qavatlar va daqiqalar (분).\n\n2️⃣ **Asl koreyscha (Native Korean):**\n하나 (1), 둘 (2), 셋 (3), 넷 (4), 다섯 (5), 여섯 (6), 일곱 (7), 여덟 (8), 아홉 (9), 열 (10), 스물 (20), 서른 (30).\n👉 **Qayerda ishlatiladi:** Yosh (yoshni aytganda), soat (시), va narsalarni donalab sanaganda (개, 명, 병, 권).`,
    ru: `🔢 **Две системы чисел в корейском языке:**\n\n1️⃣ **Китайско-корейские (Сино-корейские):**\n일 (1), 이 (2), 삼 (3), 사 (4), 오 (5), 육 (6), 칠 (7), 팔 (8), 구 (9), 십 (10).\n👉 Для денег, номеров телефонов, дат и минут.\n\n2️⃣ **Исконно корейские:**\n하나 (1), 둘 (2), 셋 (3), 넷 (4), 다섯 (5), 여섯 (6), 일곱 (7), 여덟 (8), 아홉 (9), 열 (10).\n👉 Для возраста, часов (времени) и счетных слов (штуки, люди).`,
    en: `🔢 **Two Counting Systems in Korean:**\n\n1️⃣ **Sino-Korean:**\n일 (1), 이 (2), 삼 (3), 사 (4), 오 (5), 육 (6), 칠 (7), 팔 (8), 구 (9), 십 (10).\n👉 Used for money, phone numbers, dates, and minutes.\n\n2️⃣ **Native Korean:**\n하나 (1), 둘 (2), 셋 (3), 넷 (4), 다섯 (5), 여섯 (6), 일곱 (7), 여덟 (8), 아홉 (9), 열 (10).\n👉 Used for age, hours, and counting objects/people.`
  },
  // 7. Gap tuzilishi va tartibi
  {
    keywords: /gap tuzil|tuzilish|qoida|sov|tartib|poryadok|structure|sentence/i,
    uz: `📐 **Koreys tilida gap tuzish tartibi:**\n\nO'zbek tili bilan bir xil: **Ega (S) + To'ldiruvchi (O) + Kesim (V)** tartibida bo'ladi!\n\n🔹 **Misol:**\n• 저는 (Men - Ega)\n• 한국어를 (Koreys tilini - Obyekt)\n• 공부해요 (O'rganyapman - Fe'l kesim).\n\n💡 **Oltin qoida:** Fe'l yoki sifat har doim gapning **eng oxirida** kelishi shart! Fe'lsiz gap tugamaydi.`,
    ru: `📐 **Порядок слов в корейском предложении:**\n\nСтруктура: **Подлежащее (S) + Дополнение (O) + Сказуемое (V)**.\n\n🔹 **Пример:**\n• 저는 (Я - подлежащее)\n• 사과를 (Яблоко - дополнение)\n• 먹어요 (Ем - сказуемое в конце).\n\n💡 **Главное правило:** Глагол всегда находится в самом конце предложения!`,
    en: `📐 **Korean Sentence Structure (SOV):**\n\nPattern: **Subject (S) + Object (O) + Verb (V)**.\n\n🔹 **Example:**\n• 저는 (I - Subject)\n• 물을 (Water - Object)\n• 마셔요 (Drink - Verb at the end).\n\n💡 **Key Rule:** The verb ALWAYS comes at the very end of the sentence!`
  },
  // 8. O'tgan va kelasi zamon
  {
    keywords: /zamon|o'tgan|kelasi|hozirgi|past|future|present|vremya|время/i,
    uz: `⏳ **Koreys tilida 3 asosiy zamon:**\n\n1. **Hozirgi zamon:** Fe'l o'zagi + **-아요 / -어요 / -해요**\n• 가요 (boryapman), 먹어요 (yeyapman), 공부해요 (o'qiyapman).\n\n2. **O'tgan zamon:** Fe'l o'zagi + **-았어요 / -었어요 / -했어요**\n• 갔어요 (bordim), 먹었어요 (yedim), 공부했어요 (o'qidim).\n\n3. **Kelasi zamon:** Fe'l o'zagi + **-(으)ㄹ 거예요**\n• 갈 거예요 (boraman), 먹을 거예요 (yeyman), 공부할 거예요 (o'qiyman).`,
    ru: `⏳ **3 основных времени в корейском языке:**\n\n1. **Настоящее время:** **-아요 / -어요 / -해요**\n• 가요 (иду), 먹어요 (ем), 공부해요 (учусь).\n\n2. **Прошедшее время:** **-았어요 / -었어요 / -했어요**\n• 갔어요 (пошел), 먹었어요 (поел), 공부했어요 (учился).\n\n3. **Будущее время:** **-(으)ㄹ 거예요**\n• 갈 거예요 (пойду), 먹을 거예요 (буду есть).`,
    en: `⏳ **3 Main Tenses in Korean:**\n\n1. **Present Tense:** **-아요 / -어요 / -해요**\n• 가요 (go), 먹어요 (eat), 공부해요 (study).\n\n2. **Past Tense:** **-았어요 / -었어요 / -했어요**\n• 갔어요 (went), 먹었어요 (ate), 공부했어요 (studied).\n\n3. **Future Tense:** **-(으)ㄹ 거예요**\n• 갈 거예요 (will go), 먹을 거예요 (will eat).`
  },
  // 9. TOPIK imtihoni
  {
    keywords: /topik|topik 1|topik 2|imtihon|sertifikat|ball|daraja/i,
    uz: `🎓 **TOPIK (Test of Proficiency in Korean) imtihoni haqida:**\n\n• **TOPIK I (Boshlang'ich):** 1- va 2-darajalar. Faqat 2 ta bo'limdan iborat: Tinglab tushunish (듣기 - 30 savol) va O'qish (읽기 - 40 savol). Jami 200 ball.\n  - 80 balldan yuqori: 1-daraja.\n  - 140 balldan yuqori: 2-daraja.\n\n💡 **Maslahat:** Platformamizdagi "Mukammal Darslar" va "단어장 (Lug'at)" bo'limlari to'liq TOPIK I darajasini qamrab oladi!`,
    ru: `🎓 **О международном экзамене TOPIK:**\n\n• **TOPIK I (Начальный уровень):** 1-й и 2-й гып. Включает 2 секции: Аудирование (듣기) и Чтение (읽기). Всего 200 баллов.\n• 80+ баллов: 1-й гып.\n• 140+ баллов: 2-й гып.\n\n💡 Уроки нашей платформы специально подготовлены под программу TOPIK I!`,
    en: `🎓 **About the TOPIK Exam:**\n\n• **TOPIK I (Beginner):** Levels 1 & 2. Consists of Listening (듣기) and Reading (읽기). Total: 200 points.\n• 80+ points: Level 1.\n• 140+ points: Level 2.\n\n💡 All lessons on this platform cover the full TOPIK I curriculum!`
  },
  // 10. Taomlar va Madaniyat
  {
    keywords: /taom|ovqat|madaniyat|kimchi|k drama|ramyon|еда|блюд|culture/i,
    uz: `🍜 **Mashhur koreys taomlari va madaniyati:**\n\n• **김치** [gim-chi] — Kimchi (achchiq achitilgan karam, koreys dasturxonining yuragi).\n• **불고기** [bul-go-gi] — Bulgogi (shirin sousda marinadlangan mol go'shti).\n• **비빔밥** [bi-bim-bap] — Bibimbap (guruch, sabzavotlar, tuxum va gochujang sousi aralashmasi).\n• **라면** [ra-myeon] — Ramyon (koreyscha tezpishar lag'mon).\n• **잘 먹겠습니다!** [jal meok-get-seum-ni-da] — "Yoqimli ishtaha!" (Ovqatdan oldin aytiladi).`,
    ru: `🍜 **Корейская кухня и этикет:**\n\n• **김치** [кимчхи] — Кимчи (главная закуска Кореи).\n• **불고기** [пулькоги] — Маринованная говядина.\n• **비빔밥** [пибимпап] — Рис с овощами, мясом и яйцом.\n• **잘 먹겠습니다!** — Приятного аппетита (дословно: «Я вкусно поем!»).`,
    en: `🍜 **Korean Food and Culture:**\n\n• **김치** [Kimchi] — Fermented spicy cabbage.\n• **불고기** [Bulgogi] — Marinated sliced beef.\n• **비빔밥** [Bibimbap] — Mixed rice with vegetables and egg.\n• **잘 먹겠습니다!** — Said before eating ("I will eat well!").`
  }
];

export function getLocalAIResponse(message: string, lang: Language): string {
  const clean = message.trim();

  // Bilimlar bazasidan mos javobni topish
  for (const item of knowledgeBase) {
    if (item.keywords.test(clean)) {
      if (lang === 'ru') return item.ru;
      if (lang === 'en') return item.en;
      return item.uz;
    }
  }

  // Agar aniq kalit so'z topilmasa, o'quvchining savolini tahlil qilib, mazmunli javob berish
  if (lang === 'ru') {
    return `💡 **Ответ AI-учителя корейского языка:**\n\nВы спросили: «${clean}»\n\nВ корейском языке для этой темы важно помнить:\n1. Слова делятся на основы с 받침 (согласная внизу) и без него.\n2. Предложение строится по схеме: **Подлежащее + Дополнение + Глагол**.\n3. Пример: **한국어를 공부해요** [han-guk-eo-reul gong-bu-hae-yo] — «Я учу корейский».\n\nЗадайте вопрос конкретнее (например: про *батчим*, *окончания -이/가*, *числа* или *приветствия*), и я подробно распишу! ✨`;
  } else if (lang === 'en') {
    return `💡 **AI Korean Teacher Response:**\n\nYou asked: "${clean}"\n\nKey fundamental rules to remember:\n1. Korean words depend heavily on whether they have 받침 (final consonant).\n2. Korean sentence order is strictly: **Subject + Object + Verb (SOV)**.\n3. Example: **한국어를 공부해요** [han-guk-eo-reul gong-bu-hae-yo] — "I study Korean".\n\nAsk me specifically about *Batchim*, *particles -이/가*, *numbers*, or *greetings*! ✨`;
  } else {
    return `💡 **AI Koreys Tili Ustozi Javobi:**\n\nSizning savolingiz: "${clean}"\n\nBu borada koreys tilining muhim qoidasi:\n1. Koreys tilida barcha so'zlar **받침 (Batchim — pastki undosh)** bor yoki yo'qligiga qarab turli qo'shimchalar oladi.\n2. Gap tartibi o'zbek tili bilan bir xil: **Ega + To'ldiruvchi + Fe'l kesim** shaklida quriladi.\n3. Misol jumla: **저는 한국어를 공부해요.** [jeo-neun han-guk-eo-reul gong-bu-hae-yo] — "Men koreys tilini o'rganyapman."\n\nAniqroq mavzuni so'rang (masalan: *Batchim qoidasi*, *-이/가 va -은/는 farqi*, *koreyscha raqamlar* yoki *salomlashish*), sizga to'liq tushuntirib beraman! ✨`;
  }
}

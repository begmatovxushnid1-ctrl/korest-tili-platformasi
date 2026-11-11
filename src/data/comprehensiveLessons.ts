export interface GrammarLessonDetail {
  id: string;
  lessonNumber: number;
  level: string; // "TOPIK 1 • 1-Daraja", "TOPIK 1 • 2-Daraja"
  title: string;
  koreanTitle: string;
  summary: string;
  conceptExplanation: string;
  structure: string;
  batchimDetail: {
    hasBatchim: string;
    noBatchim: string;
    irregularNote?: string;
  };
  keyRules: string[];
  vocabulary: {
    korean: string;
    pronunciation: string;
    uzbek: string;
    russian: string;
    english: string;
  }[];
  dialogue?: {
    speakerA: string;
    speakerB: string;
    lineA_Korean: string;
    lineA_Pronunciation: string;
    lineA_Uzbek: string;
    lineB_Korean: string;
    lineB_Pronunciation: string;
    lineB_Uzbek: string;
  };
  examples: {
    korean: string;
    pronunciation: string;
    uzbek: string;
    russian: string;
    english: string;
  }[];
  miniQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const comprehensiveLessons: GrammarLessonDetail[] = [
  {
    id: 'lesson-1',
    lessonNumber: 1,
    level: 'TOPIK 1 • Boshlang\'ich (1-Daraja)',
    title: '1-Dars: Hangul (한글) Alifbosi va Bo\'g\'in Tuzilishi',
    koreanTitle: '한글 자모와 음절 구조',
    summary: 'Koreys yozuvining asosi: 10 ta asosiy unli, 14 ta asosiy undosh va bo\'g\'in yasash tartibi.',
    conceptExplanation: 'Koreys alifbosi — Hangul (한글) 1443-yilda Buyuk Qirol Sejong tomonidan ixtiro qilingan. Undoshlar nutq a\'zolarining harakatiga, unlilar esa Osmon (•), Yer (ㅡ) va Inson (ㅣ) falsafasiga asoslangan.',
    structure: 'Undosh (C) + Unli (V) yoki Undosh (C) + Unli (V) + 받침 (C)',
    batchimDetail: {
      hasBatchim: 'Bo\'g\'in ostidagi undosh 받침 (Batchim) deyiladi: Masalan, "한" da "ㄴ" harfi.',
      noBatchim: 'Oddiy ochiq bo\'g\'in faqat undosh va unlidan iborat: Masalan, "가", "나".',
      irregularNote: 'Undosh bilan boshlanadigan tovushlarda boshiga talaffuz qilinmaydigan "ㅇ" (i-eung) qo\'yiladi: Masalan, "아", "오".'
    },
    keyRules: [
      'Unlilar: ㅏ (a), ㅑ (ya), ㅓ (eo), ㅕ (yeo), ㅗ (o), ㅛ (yo), ㅜ (u), ㅠ (yu), ㅡ (eu), ㅣ (i).',
      'Asosiy undoshlar: ㄱ (g/k), ㄴ (n), ㄷ (d/t), ㄹ (r/l), ㅁ (m), ㅂ (b/p), ㅅ (s), ㅇ (ng/boshida o\'qilmaydi), ㅈ (j), ㅊ (ch), ㅋ (k), ㅌ (t), ㅍ (p), ㅎ (h).',
      'Bo\'g\'inlar doimo chapdan o\'ngga va yuqoridan pastga qarab o\'qiladi va yoziladi.'
    ],
    vocabulary: [
      { korean: '한글', pronunciation: '[han-geul]', uzbek: 'Koreys alifbosi', russian: 'Корейский алфавит', english: 'Korean Alphabet' },
      { korean: '아이', pronunciation: '[a-i]', uzbek: 'Bola', russian: 'Ребёнок', english: 'Child' },
      { korean: '우유', pronunciation: '[u-yu]', uzbek: 'Sut', russian: 'Молоко', english: 'Milk' },
      { korean: '모자', pronunciation: '[mo-ja]', uzbek: 'Shlyapa / Bosh kiyim', russian: 'Шапка / Кепка', english: 'Hat / Cap' },
      { korean: '나무', pronunciation: '[na-mu]', uzbek: 'Daraxt', russian: 'Дерево', english: 'Tree' }
    ],
    dialogue: {
      speakerA: 'Minsu',
      speakerB: 'Sardor',
      lineA_Korean: '안녕하세요! 한국어 공부를 시작해요?',
      lineA_Pronunciation: '[an-nyeong-ha-se-yo! han-guk-eo gong-bu-reul si-jak-hae-yo?]',
      lineA_Uzbek: 'Assalomu alaykum! Koreys tilini o\'rganishni boshlayapsizmi?',
      lineB_Korean: '네, 한글부터 열심히 배우고 있어요.',
      lineB_Pronunciation: '[ne, han-geul-bu-teo yeol-shim-hi bae-u-go iss-eo-yo]',
      lineB_Uzbek: 'Ha, Hangul alifbosidan boshlab qunt bilan o\'rganyapman.'
    },
    examples: [
      { korean: '한국어는 재미있어요.', pronunciation: '[han-guk-eo-neun jae-mi-iss-eo-yo]', uzbek: 'Koreys tili juda qiziqarli.', russian: 'Корейский язык интересный.', english: 'Korean language is fun.' },
      { korean: '한글을 읽어요.', pronunciation: '[han-geul-eul ilg-eo-yo]', uzbek: 'Hangul yozuvini o\'qiyapman.', russian: 'Я читаю хангыль.', english: 'I read Hangul.' }
    ],
    miniQuiz: {
      question: '"우유" (Sut) so\'zi qaysi unlilardan tashkil topgan?',
      options: ['ㅏ va ㅣ', 'ㅜ va ㅠ', 'ㅓ va ㅕ', 'ㅗ va ㅏ'],
      correctIndex: 1,
      explanation: '"우유" so\'zida birinchi bo\'g\'inda "ㅜ" (u), ikkinchisida "ㅠ" (yu) unlilari bor.'
    }
  },
  {
    id: 'lesson-2',
    lessonNumber: 2,
    level: 'TOPIK 1 • 1-Daraja',
    title: '2-Dars: -이에요 / -예요 (Kimlik va Narsa aniqlash: "...dir")',
    koreanTitle: '-이에요 / -예요 (이다)',
    summary: 'O\'zbek tilidagi "...dir", rus tilidagi "это есть", ingliz tilidagi "am/is/are" ma\'nosida narsalar va shaxslarni tanishtirish.',
    conceptExplanation: 'Norasmiy hurmat shakli (해요체). So\'zlovchi o\'zining kimligini yoki buyum nima ekanligini aytganda otga qo\'shiladi.',
    structure: 'Ot + 이에요 / 예요',
    batchimDetail: {
      hasBatchim: 'Agar so\'z oxirida 받침 (undosh) bo\'lsa -> "-이에요" qo\'shiladi. Masalan: 학생 (talaba) -> 학생이에요.',
      noBatchim: 'Agar so\'z oxirida 받침 yo\'q (unli) bo\'lsa -> "-예요" qo\'shiladi. Masalan: 의사 (shifokor) -> 의사예요.'
    },
    keyRules: [
      'Inkor shakli: Ot + 이/가 아닙니다 yoki 이/가 아니에요 ("...emasdir").',
      'Savol shaklida ham xuddi shu qolip ishlatiladi, faqat oxirgi ohang ko\'tariladi: 학생이에요? (Talabamisiz?)'
    ],
    vocabulary: [
      { korean: '학생', pronunciation: '[hak-saeng]', uzbek: 'Talaba / O\'quvchi', russian: 'Студент / Ученик', english: 'Student' },
      { korean: '선생님', pronunciation: '[seon-saeng-nim]', uzbek: 'Ustoz / O\'qituvchi', russian: 'Учитель', english: 'Teacher' },
      { korean: '의사', pronunciation: '[ui-sa]', uzbek: 'Shifokor / Vrach', russian: 'Врач', english: 'Doctor' },
      { korean: '가방', pronunciation: '[ga-bang]', uzbek: 'Sumka', russian: 'Сумка / Рюкзак', english: 'Bag' },
      { korean: '시계', pronunciation: '[si-gye]', uzbek: 'Soat', russian: 'Часы', english: 'Watch / Clock' }
    ],
    dialogue: {
      speakerA: 'Jisoo',
      speakerB: 'Aziz',
      lineA_Korean: '어느 나라 사람이에요?',
      lineA_Pronunciation: '[eo-neu na-ra sa-ram-i-e-yo?]',
      lineA_Uzbek: 'Qaysi davlatdansiz (qayerliksiz)?',
      lineB_Korean: '저는 우즈베키스탄 사람이에요.',
      lineB_Pronunciation: '[jeo-neun u-jeu-be-ki-seu-tan sa-ram-i-e-yo]',
      lineB_Uzbek: 'Men o\'zbekistonlikman.'
    },
    examples: [
      { korean: '저는 학생이에요.', pronunciation: '[jeo-neun hak-saeng-i-e-yo]', uzbek: 'Men talabaman.', russian: 'Я студент.', english: 'I am a student.' },
      { korean: '이것은 제 가방이에요.', pronunciation: '[i-geot-eun je ga-bang-i-e-yo]', uzbek: 'Bu mening sumkam.', russian: 'Это моя сумка.', english: 'This is my bag.' },
      { korean: '누나는 회사원이에요.', pronunciation: '[nu-na-neun hoe-sa-won-i-e-yo]', uzbek: 'Opam firma xodimi.', russian: 'Сестра офисный работник.', english: 'My older sister is an office worker.' }
    ],
    miniQuiz: {
      question: '"사과" (olma) so\'ziga qaysi qo\'shimcha to\'g\'ri keladi?',
      options: ['사과이에요', '사과예요', '사과은', '사과이'],
      correctIndex: 1,
      explanation: '사과 so\'zi unli bilan tugagan (받침 yo\'q), shuning uchun -예요 qo\'shilib "사과예요" bo\'ladi.'
    }
  },
  {
    id: 'lesson-3',
    lessonNumber: 3,
    level: 'TOPIK 1 • 1-Daraja',
    title: '3-Dars: -이 / -가 (Ega Kelishigi)',
    koreanTitle: '주격 조사 -이/가',
    summary: 'Gapning grammatik egasini, yangi kiritilgan ma\'lumotni yoki savolga javobni belgilovchi bosh qo\'shimcha.',
    conceptExplanation: 'Harakatni aynan kim yoki nima bajarayotganini aniqlab beradi. Ko\'pincha "누가?" (kim?), "무엇이?" (nima?) savollariga javob beradi.',
    structure: 'Ot + 이 / 가',
    batchimDetail: {
      hasBatchim: '받침 bor bo\'lsa -> "-이". Masalan: 가방 + 이 = 가방이, 책 + 이 = 책이.',
      noBatchim: '받침 yo\'q bo\'lsa -> "-가". Masalan: 날씨 + 가 = 날씨가, 친구 + 가 = 친구가.'
    },
    keyRules: [
      '저 (men) + 가 = 제가 (to\'g\'ri), 저가 (xato!).',
      '나 (men - norasmiy) + 가 = 내가.',
      '누구 (kim) + 가 = 누가.'
    ],
    vocabulary: [
      { korean: '날씨', pronunciation: '[nal-ssi]', uzbek: 'Ob-havo', russian: 'Погода', english: 'Weather' },
      { korean: '비', pronunciation: '[bi]', uzbek: 'Yomg\'ir', russian: 'Дождь', english: 'Rain' },
      { korean: '눈', pronunciation: '[nun]', uzbek: 'Qor / Ko\'z', russian: 'Снег / Глаз', english: 'Snow / Eye' },
      { korean: '돈', pronunciation: '[don]', uzbek: 'Pul', russian: 'Деньги', english: 'Money' },
      { korean: '시간', pronunciation: '[si-gan]', uzbek: 'Vaqt', russian: 'Время', english: 'Time' }
    ],
    dialogue: {
      speakerA: 'O\'qituvchi',
      speakerB: 'O\'quvchi',
      lineA_Korean: '누가 질문이 있어요?',
      lineA_Pronunciation: '[nu-ga jil-mun-i iss-eo-yo?]',
      lineA_Uzbek: 'Kimda savol bor?',
      lineB_Korean: '제가 질문이 있습니다!',
      lineB_Pronunciation: '[je-ga jil-mun-i iss-seum-ni-da!]',
      lineB_Uzbek: 'Menda savol bor!'
    },
    examples: [
      { korean: '비가 와요.', pronunciation: '[bi-ga wa-yo]', uzbek: 'Yomg\'ir yog\'yapti.', russian: 'Идет дождь.', english: 'It is raining.' },
      { korean: '시간이 없어요.', pronunciation: '[si-gan-i eops-eo-yo]', uzbek: 'Vaqt yo\'q.', russian: 'Нет времени.', english: 'There is no time.' },
      { korean: '한국 음식이 맛있어요.', pronunciation: '[han-guk eum-sik-i mas-iss-eo-yo]', uzbek: 'Koreys taomlari juda mazali.', russian: 'Корейская еда вкусная.', english: 'Korean food is delicious.' }
    ],
    miniQuiz: {
      question: '"선생님" (o\'qituvchi) so\'ziga qaysi ega qo\'shimchasi to\'g\'ri keladi?',
      options: ['선생님가', '선생님이', '선생님를', '선생님에서'],
      correctIndex: 1,
      explanation: '선생님 so\'zi "ㅁ" (받침) bilan tugagani uchun unga "-이" qo\'shiladi: 선생님이.'
    }
  },
  {
    id: 'lesson-4',
    lessonNumber: 4,
    level: 'TOPIK 1 • 1-Daraja',
    title: '4-Dars: -은 / -는 (Mavzu va Taqqoslash Qo\'shimchasi)',
    koreanTitle: '보조사 -은/는 (주제/대조)',
    summary: 'Suhbat mavzusi kim yoki nima haqida ekanligini ta\'kidlash yoki boshqa narsa bilan taqqoslash.',
    conceptExplanation: 'O\'zbek tilida "...ga kelsak", "...esa", "...bo\'lsa" ma\'nolariga yaqin. -이/가 bilan solishtirganda, -은/는 butun gapning umumiy temasini ko\'rsatadi.',
    structure: 'Ot + 은 / 는',
    batchimDetail: {
      hasBatchim: '받침 bor bo\'lsa -> "-은". Masalan: 오늘은 (bugunga kelsak), 사람은.',
      noBatchim: '받침 yo\'q bo\'lsa -> "-는". Masalan: 저는 (menga kelsak), 친구는.'
    },
    keyRules: [
      'O\'zini tanishtirganda doimo "저는 ...입니다" (Men esa ...) ishlatiladi.',
      'Taqqoslashda: "Olma shirin, nok esa nordon" kabi gaplarda ikkala otga ham -은/는 qo\'yiladi.'
    ],
    vocabulary: [
      { korean: '오늘', pronunciation: '[o-neul]', uzbek: 'Bugun', russian: 'Сегодня', english: 'Today' },
      { korean: '내일', pronunciation: '[nae-il]', uzbek: 'Ertaga', russian: 'Завтра', english: 'Tomorrow' },
      { korean: '어제', pronunciation: '[eo-je]', uzbek: 'Kecha', russian: 'Вчера', english: 'Yesterday' },
      { korean: '한국', pronunciation: '[han-guk]', uzbek: 'Janubiy Koreya', russian: 'Корея', english: 'Korea' },
      { korean: '우즈베키스탄', pronunciation: '[u-jeu-be-ki-seu-tan]', uzbek: 'O\'zbekiston', russian: 'Узбекистан', english: 'Uzbekistan' }
    ],
    dialogue: {
      speakerA: 'Minho',
      speakerB: 'Nodir',
      lineA_Korean: '저는 사과를 좋아해요. 노디르 씨는요?',
      lineA_Pronunciation: '[jeo-neun sa-gwa-reul jo-a-hae-yo. no-di-reu ssi-neun-yo?]',
      lineA_Uzbek: 'Men olmani yaxshi ko\'raman. Nodir siz-chi?',
      lineB_Korean: '저는 수박을 더 좋아해요.',
      lineB_Pronunciation: '[jeo-neun su-bak-eul deo jo-a-hae-yo]',
      lineB_Uzbek: 'Men esa tarvuzni ko\'proq yoqtiraman.'
    },
    examples: [
      { korean: '저는 우즈베키스탄 사람입니다.', pronunciation: '[jeo-neun u-jeu-be-ki-seu-tan sa-ram-im-ni-da]', uzbek: 'Men o\'zbekistonlikman.', russian: 'Я узбекистанец.', english: 'I am from Uzbekistan.' },
      { korean: '오늘은 바빠요. 내일은 한가해요.', pronunciation: '[o-neul-eun ba-ppa-yo. nae-il-eun han-ga-hae-yo]', uzbek: 'Bugun bandman. Ertaga esa bo\'shman.', russian: 'Сегодня я занят, а завтра свободен.', english: 'Today I am busy. Tomorrow I am free.' }
    ],
    miniQuiz: {
      question: '"저" (men) olmoshiga qaysi mavzu qo\'shimchasi qo\'shiladi?',
      options: ['저은', '저는', '저이', '저을'],
      correctIndex: 1,
      explanation: '"저" so\'zi unli bilan tugagan, shuning uchun "저는" bo\'ladi.'
    }
  },
  {
    id: 'lesson-5',
    lessonNumber: 5,
    level: 'TOPIK 1 • 1-Daraja',
    title: '5-Dars: -을 / -를 (Tushum Kelishigi: Harakat Obyekti)',
    koreanTitle: '목적격 조사 -을/를',
    summary: 'Harakat bevosita kimga yoki nimaga qaratilganligini ifodalaydi ("...ni").',
    conceptExplanation: 'Koreys tilida gap tartibi SOV (Ega + To\'ldiruvchi + Fe\'l). Fe\'ldan oldin kelgan harakat obyektiga -을 yoki -를 qo\'shiladi.',
    structure: 'Ot + 을 / 를 + Fe\'l',
    batchimDetail: {
      hasBatchim: '받침 bor bo\'lsa -> "-을". Masalan: 책을 읽어요 (kitobni o\'qiyman), 밥을 먹어요 (ovqat yeyman).',
      noBatchim: '받침 yo\'q bo\'lsa -> "-를". Masalan: 커피를 마셔요 (qahva ichaman), 영화를 봐요 (kino ko\'raman).'
    },
    keyRules: [
      'So\'zlashuv tilida -을/를 ba\'zan tushib qolishi mumkin, ammo yozuvda va TOPIK testlarida tushirib qoldirish xato hisoblanadi.'
    ],
    vocabulary: [
      { korean: '밥', pronunciation: '[bap]', uzbek: 'Ovqat / Guruch', russian: 'Еда / Рис', english: 'Meal / Rice' },
      { korean: '물', pronunciation: '[mul]', uzbek: 'Suv', russian: 'Вода', english: 'Water' },
      { korean: '커피', pronunciation: '[keo-pi]', uzbek: 'Qahva (kofe)', russian: 'Кофе', english: 'Coffee' },
      { korean: '책', pronunciation: '[chaek]', uzbek: 'Kitob', russian: 'Книга', english: 'Book' },
      { korean: '영화', pronunciation: '[yeong-hwa]', uzbek: 'Film / Kino', russian: 'Фильм', english: 'Movie' }
    ],
    dialogue: {
      speakerA: 'Sora',
      speakerB: 'Bekzod',
      lineA_Korean: '지금 무엇을 하고 있어요?',
      lineA_Pronunciation: '[ji-geum mu-eot-eul ha-go iss-eo-yo?]',
      lineA_Uzbek: 'Hozir nima qilyapsiz?',
      lineB_Korean: '한국어 책을 읽고 있어요.',
      lineB_Pronunciation: '[han-guk-eo chaek-eul ilg-go iss-eo-yo]',
      lineB_Uzbek: 'Koreys tili kitobini o\'qiyapman.'
    },
    examples: [
      { korean: '아침에 커피를 마셔요.', pronunciation: '[a-chim-e keo-pi-reul ma-syeo-yo]', uzbek: 'Ertalab qahva ichaman.', russian: 'Утром я пью кофе.', english: 'I drink coffee in the morning.' },
      { korean: '한국어를 열심히 공부해요.', pronunciation: '[han-guk-eo-reul yeol-shim-hi gong-bu-hae-yo]', uzbek: 'Koreys tilini tirishqoqlik bilan o\'rganyapman.', russian: 'Усердно изучаю корейский язык.', english: 'I study Korean hard.' }
    ],
    miniQuiz: {
      question: '"책" (kitob) so\'ziga qaysi tushum qo\'shimchasi to\'g\'ri keladi?',
      options: ['책를', '책을', '책이', '책가'],
      correctIndex: 1,
      explanation: '책 so\'zida "ㄱ" 받침 bor, shuning uchun "-을" to\'g\'ri keladi: 책을.'
    }
  },
  {
    id: 'lesson-6',
    lessonNumber: 6,
    level: 'TOPIK 1 • 1-Daraja',
    title: '6-Dars: -아요 / -어요 / -해요 (Hozirgi Zamon Norasmiy Hurmat)',
    koreanTitle: '현재 시제 해요체 (-아요/어요/해요)',
    summary: 'Kundalik hayotda eng ko\'p ishlatiladigan hozirgi va yaqin kelasi zamon fe\'l shakli.',
    conceptExplanation: 'Koreys tilida barcha fe\'llar lug\'atda "-다" bilan tugaydi (masalan: 가다, 먹다). Zamonga qo\'yish uchun "-다" olib tashlanadi va o\'zakdagi oxirgi unliga qarab quyidagi qoidalar qo\'llanadi.',
    structure: 'Fe\'l o\'zagi + 아요 / 어요 / 해요',
    batchimDetail: {
      hasBatchim: 'O\'zakdagi oxirgi unli "ㅏ" yoki "ㅗ" bo\'lsa -> "-아요" (살다 -> 살아요, 받다 -> 받아요).',
      noBatchim: 'Boshqa barcha unlilar ("ㅓ, ㅜ, ㅣ, ㅡ" va boshqalar) bo\'lsa -> "-어요" (먹다 -> 먹어요, 읽다 -> 읽어요).',
      irregularNote: '"하다" bilan tugagan barcha fe\'llar -> "-해요" ga aylanadi (공부하다 -> 공부해요, 사랑하다 -> 사랑해요).'
    },
    keyRules: [
      'Unlilar qisqarishi: 가다 -> 가 + 아요 = 가요 (qisqaradi).',
      '보다 -> 보 + 아요 = 봐요.',
      '마시다 -> 마시 + 어요 = 마셔요.'
    ],
    vocabulary: [
      { korean: '가다', pronunciation: '[ga-da]', uzbek: 'Bormoq', russian: 'Идти', english: 'To go' },
      { korean: '오다', pronunciation: '[o-da]', uzbek: 'Kelmoq', russian: 'Приходить', english: 'To come' },
      { korean: '먹다', pronunciation: '[meok-da]', uzbek: 'Yemoq', russian: 'Есть / Кушать', english: 'To eat' },
      { korean: '마시다', pronunciation: '[ma-si-da]', uzbek: 'Ichmoq', russian: 'Пить', english: 'To drink' },
      { korean: '공부하다', pronunciation: '[gong-bu-ha-da]', uzbek: 'Dars qilmoq / O\'rganmoq', russian: 'Учиться', english: 'To study' }
    ],
    dialogue: {
      speakerA: 'Yujin',
      speakerB: 'Temur',
      lineA_Korean: '주말에 뭐 해요?',
      lineA_Pronunciation: '[ju-mal-e mwo hae-yo?]',
      lineA_Uzbek: 'Dam olish kunida nima qilasiz?',
      lineB_Korean: '도서관에서 한국어를 공부해요.',
      lineB_Pronunciation: '[do-seo-gwan-e-seo han-guk-eo-reul gong-bu-hae-yo]',
      lineB_Uzbek: 'Kutubxonada koreys tilini o\'rganaman.'
    },
    examples: [
      { korean: '학교에 가요.', pronunciation: '[hak-gyo-e ga-yo]', uzbek: 'Maktabga boryapman.', russian: 'Иду в школу.', english: 'I go to school.' },
      { korean: '사과를 먹어요.', pronunciation: '[sa-gwa-reul meo-geo-yo]', uzbek: 'Olma yeyapman.', russian: 'Ем яблоко.', english: 'I eat an apple.' },
      { korean: '한국 노래를 들어요.', pronunciation: '[han-guk no-rae-reul deul-eo-yo]', uzbek: 'Koreys qo\'shig\'ini tinglayapman.', russian: 'Слушаю корейскую песню.', english: 'I listen to Korean songs.' }
    ],
    miniQuiz: {
      question: '"운동하다" (sport bilan shug\'ullanmoq) fe\'lining hozirgi zamon shakli qanday?',
      options: ['운동하아요', '운동해요', '운동하어요', '운동합니다요'],
      correctIndex: 1,
      explanation: '하다 fe\'li doimo 해요 shakliga o\'zgaradi, shuning uchun: 운동해요.'
    }
  },
  {
    id: 'lesson-7',
    lessonNumber: 7,
    level: 'TOPIK 1 • 1-Daraja',
    title: '7-Dars: -에 / -에서 (O\'rin-Payt Kelishigi: Qayerga va Qayerda)',
    koreanTitle: '장소와 시간 조사 -에 / -에서',
    summary: 'Harakat boradigan manzil, vaqt yoki harakat amalga oshirilayotgan joyni farqlash.',
    conceptExplanation: 'Ko\'p o\'quvchilar -에 va -에서 ni adashtiradilar. Farqi oddiy:\n1. -에: Yo\'nalish (qayerga boryapsiz?) yoki vaqt (soat nechida?).\n2. -에서: Dinamik faoliyat sodir bo\'layotgan maydon (qayerda qilyapsiz?).',
    structure: 'Joy + 에 (가다/오다/있다) | Joy + 에서 (Harakat fe\'li)',
    batchimDetail: {
      hasBatchim: '받침 bor yoki yo\'qligidan qat\'i nazar har ikkala qo\'shimcha bir xil qo\'shiladi.',
      noBatchim: 'Masalan: 학교에 (maktabga), 시장에서 (bozorda).'
    },
    keyRules: [
      '가다 (bormoq), 오다 (kelmoq), 있다 (bor bo\'lmoq), 없다 (yo\'q bo\'lmoq) fe\'llari bilan faqat "-에" ishlatiladi.',
      '먹다 (yemoq), 공부하다 (o\'qimoq), 일하다 (ishlamoq) kabi harakat fe\'llari bilan esa "-에서" ishlatiladi.'
    ],
    vocabulary: [
      { korean: '학교', pronunciation: '[hak-gyo]', uzbek: 'Maktab', russian: 'Школа', english: 'School' },
      { korean: '집', pronunciation: '[jip]', uzbek: 'Uy', russian: 'Дом', english: 'Home / House' },
      { korean: '회사', pronunciation: '[hoe-sa]', uzbek: 'Kompaniya / Firma', russian: 'Офис / Фирма', english: 'Company' },
      { korean: '시장', pronunciation: '[si-jang]', uzbek: 'Bozor', russian: 'Рынок', english: 'Market' },
      { korean: '식당', pronunciation: '[sik-dang]', uzbek: 'Oshxona / Restoran', russian: 'Ресторан / Столовая', english: 'Restaurant' }
    ],
    dialogue: {
      speakerA: 'Hyunwoo',
      speakerB: 'Shahnoza',
      lineA_Korean: '어디에서 밥을 먹어요?',
      lineA_Pronunciation: '[eo-di-e-seo bab-eul meog-eo-yo?]',
      lineA_Uzbek: 'Qayerda ovqatlanyapsiz?',
      lineB_Korean: '한국 식당에서 먹어요.',
      lineB_Pronunciation: '[han-guk sik-dang-e-seo meog-eo-yo]',
      lineB_Uzbek: 'Koreys restoranida yeyapman.'
    },
    examples: [
      { korean: '내일 한국에 가요.', pronunciation: '[nae-il han-guk-e ga-yo]', uzbek: 'Ertaga Koreyaga ketyapman.', russian: 'Завтра еду в Корею.', english: 'I am going to Korea tomorrow.' },
      { korean: '도서관에서 책을 읽어요.', pronunciation: '[do-seo-gwan-e-seo chaek-eul ilg-eo-yo]', uzbek: 'Kutubxonada kitob o\'qiyapman.', russian: 'Читаю книгу в библиотеке.', english: 'I read a book in the library.' }
    ],
    miniQuiz: {
      question: '"집 [____] 쉬어요." (Uyda dam olyapman) gapiga qaysi qo\'shimcha qo\'yiladi?',
      options: ['에', '에서', '을', '이'],
      correctIndex: 1,
      explanation: 'Dam olish bu faol harakat, shuning uchun joyda faoliyat bajarilayotganda "-에서" ishlatiladi: 집에서 쉬어요.'
    }
  },
  {
    id: 'lesson-8',
    lessonNumber: 8,
    level: 'TOPIK 1 • 2-Daraja',
    title: '8-Dars: -았어요 / -었어요 / -했어요 (O\'tgan Zamon)',
    koreanTitle: '과거 시제 (-았/었/했어요)',
    summary: 'O\'tgan zamonda bajarilgan ish-harakatlarni ifodalash ("qildim", "bordim").',
    conceptExplanation: 'Hozirgi zamon "-아요/어요" qoidasi kabi o\'zakning unlisiga qarab o\'zgaradi: unga "ㅆ" qo\'shilib "-았어요 / -었어요" ga aylanadi.',
    structure: 'Fe\'l o\'zagi + 았어요 / 었어요 / 했어요',
    batchimDetail: {
      hasBatchim: 'Unlisi ㅏ, ㅗ bo\'lsa -> "-았어요" (가다 -> 갔어요, 보다 -> 봤어요, 받다 -> 받았어요).',
      noBatchim: 'Boshqa unlilar bo\'lsa -> "-었어요" (먹다 -> 먹었어요, 마시다 -> 마셨어요).',
      irregularNote: '하다 fe\'llari -> "-했어요" (공부했어요, 운동했어요).'
    },
    keyRules: [
      '이다 (bo\'lmoq) fe\'li o\'tgan zamonda: 받침 bo\'lsa "이었어요", 받침 bo\'lmasa "였어요" bo\'ladi.'
    ],
    vocabulary: [
      { korean: '어제', pronunciation: '[eo-je]', uzbek: 'Kecha', russian: 'Вчера', english: 'Yesterday' },
      { korean: '지난주', pronunciation: '[ji-nan-ju]', uzbek: 'O\'tgan hafta', russian: 'Прошлая неделя', english: 'Last week' },
      { korean: '작년', pronunciation: '[jang-nyeon]', uzbek: 'O\'tgan yil', russian: 'Прошлый год', english: 'Last year' },
      { korean: '만나다', pronunciation: '[man-na-da]', uzbek: 'Uchrashmoq', russian: 'Встречаться', english: 'To meet' },
      { korean: '사다', pronunciation: '[sa-da]', uzbek: 'Sotib olmoq', russian: 'Покупать', english: 'To buy' }
    ],
    dialogue: {
      speakerA: 'Suho',
      speakerB: 'Farrux',
      lineA_Korean: '어제 뭐 했어요?',
      lineA_Pronunciation: '[eo-je mwo haess-eo-yo?]',
      lineA_Uzbek: 'Kecha nima qildingiz?',
      lineB_Korean: '친구를 만났어요. 영화도 봤어요.',
      lineB_Pronunciation: '[chin-gu-reul man-nass-eo-yo. yeong-hwa-do bwass-eo-yo]',
      lineB_Uzbek: 'Do\'stim bilan uchrashdim. Kino ham ko\'rdim.'
    },
    examples: [
      { korean: '어제 한국 음식을 먹었어요.', pronunciation: '[eo-je han-guk eum-sik-eul meog-eoss-eo-yo]', uzbek: 'Kecha koreys ovqatini yedim.', russian: 'Вчера ел корейскую еду.', english: 'Yesterday I ate Korean food.' },
      { korean: '지난달에 새 컴퓨터를 샀어요.', pronunciation: '[ji-nan-dal-e sae keom-pyu-teo-reul sass-eo-yo]', uzbek: 'O\'tgan oyda yangi kompyuter sotib oldim.', russian: 'В прошлом месяце купил новый компьютер.', english: 'Last month I bought a new computer.' }
    ],
    miniQuiz: {
      question: '"오다" (kelmoq) fe\'lining o\'tgan zamoni qanday bo\'ladi?',
      options: ['오았어요', '왔어요', '오었어요', '왔습니다요'],
      correctIndex: 1,
      explanation: '오 + 았어요 birlashib qisqaradi va "왔어요" [wass-eo-yo] shakliga keladi.'
    }
  },
  {
    id: 'lesson-9',
    lessonNumber: 9,
    level: 'TOPIK 1 • 2-Daraja',
    title: '9-Dars: -(으)ㄹ 거예요 (Kelasi Zamon va Rejalar)',
    koreanTitle: '미래 시제 -(으)ㄹ 거예요',
    summary: 'Kelgusida rejalashtirilgan ish-harakatlar yoki ehtimollikni bildirish ("...-moqchiman", "...-aman").',
    conceptExplanation: 'Kelasi zamonda qilinadigan rejalar uchun ishlatiladi. So\'z oxiridagi 받침 ga qarab qulay talaffuz hosil qilinadi.',
    structure: 'Fe\'l o\'zagi + 을 거예요 / ㄹ 거예요',
    batchimDetail: {
      hasBatchim: '받침 bor bo\'lsa -> "-을 거예요" (먹다 -> 먹을 거예요, 읽다 -> 읽을 거예요).',
      noBatchim: '받침 yo\'q bo\'lsa -> pastiga "ㄹ" tushadi: "-ㄹ 거예요" (가다 -> 갈 거예요, 보다 -> 볼 거예요).'
    },
    keyRules: [
      'Agar fe\'l o\'zagi "ㄹ" bilan tugasa (masalan, 만들다 - yasamoq), shunchaki "만들 거예요" bo\'ladi.'
    ],
    vocabulary: [
      { korean: '내일', pronunciation: '[nae-il]', uzbek: 'Ertaga', russian: 'Завтра', english: 'Tomorrow' },
      { korean: '주말', pronunciation: '[ju-mal]', uzbek: 'Dam olish kunlari', russian: 'Выходные', english: 'Weekend' },
      { korean: '방학', pronunciation: '[bang-hak]', uzbek: 'Ta\'til', russian: 'Каникулы', english: 'Vacation' },
      { korean: '여행하다', pronunciation: '[yeo-haeng-ha-da]', uzbek: 'Sayohat qilmoq', russian: 'Путешествовать', english: 'To travel' },
      { korean: '일하다', pronunciation: '[il-ha-da]', uzbek: 'Ishlamoq', russian: 'Работать', english: 'To work' }
    ],
    dialogue: {
      speakerA: 'Bora',
      speakerB: 'Jahongir',
      lineA_Korean: '이번 주말에 뭐 할 거예요?',
      lineA_Pronunciation: '[i-beon ju-mal-e mwo hal geo-ye-yo?]',
      lineA_Uzbek: 'Bu dam olish kunida nima qilmoqchisiz?',
      lineB_Korean: '서울을 여행할 거예요.',
      lineB_Pronunciation: '[seo-ul-eul yeo-haeng-hal geo-ye-yo]',
      lineB_Uzbek: 'Seulni sayohat qilmoqchiman.'
    },
    examples: [
      { korean: '내일 친구를 만날 거예요.', pronunciation: '[nae-il chin-gu-reul man-nal geo-ye-yo]', uzbek: 'Ertaga do\'stim bilan uchrashaman.', russian: 'Завтра встречусь с другом.', english: 'Tomorrow I will meet a friend.' },
      { korean: '저녁에 피자를 먹을 거예요.', pronunciation: '[jeo-nyeok-e pi-ja-reul meog-eul geo-ye-yo]', uzbek: 'Kechqurun pitsa yeyman.', russian: 'Вечером буду есть пиццу.', english: 'I will eat pizza in the evening.' }
    ],
    miniQuiz: {
      question: '"가다" fe\'lining kelasi zamon shakli qaysi?',
      options: ['가을 거예요', '갈 거예요', '가겠어요', '갔을 거예요'],
      correctIndex: 1,
      explanation: '가다 fe\'lida 받침 yo\'q, uning pastiga "ㄹ" tushib "갈 거예요" bo\'ladi.'
    }
  },
  {
    id: 'lesson-10',
    lessonNumber: 10,
    level: 'TOPIK 1 • 2-Daraja',
    title: '10-Dars: -고 싶다 (Xohish va Istaklar: "...-gim kelyapti")',
    koreanTitle: '희망 표현 -고 싶다',
    summary: 'O\'z xohish-istagini ifodalash: "...-ishni xohlayman", "...-gim kelyapti".',
    conceptExplanation: 'O\'zbek tilidagi eng sevimli iboralardan biri. Eng qulayi shundaki, bu qoidada 받침 bor yoki yo\'qligining ahamiyati yo\'q! To\'g\'ridan-to\'g\'ri qo\'shiladi.',
    structure: 'Fe\'l o\'zagi + 고 싶어요',
    batchimDetail: {
      hasBatchim: '받침 bor bo\'lsa ham "-고 싶어요" (먹고 싶어요 - yegim kelyapti).',
      noBatchim: '받침 yo\'q bo\'lsa ham "-고 싶어요" (가고 싶어요 - borgim kelyapti).'
    },
    keyRules: [
      '1-shaxs (men) uchun: -고 싶어요.',
      '3-shaxs (u, boshqa birov) xohlaganda: "-고 싶어해요" ishlatiladi (Masalan: Do\'stim Koreyaga bormoqchi -> 친구가 한국에 가고 싶어해요).'
    ],
    vocabulary: [
      { korean: '쉬다', pronunciation: '[swi-da]', uzbek: 'Dam olmoq', russian: 'Отдыхать', english: 'To rest' },
      { korean: '자다', pronunciation: '[ja-da]', uzbek: 'Uxlamoq', russian: 'Спать', english: 'To sleep' },
      { korean: '배우다', pronunciation: '[bae-u-da]', uzbek: 'O\'rganmoq', russian: 'Учить / Изучать', english: 'To learn' },
      { korean: '보다', pronunciation: '[bo-da]', uzbek: 'Ko\'rmoq / Qamoq', russian: 'Смотреть', english: 'To see / watch' },
      { korean: '살다', pronunciation: '[sal-da]', uzbek: 'Yashamoq', russian: 'Жить', english: 'To live' }
    ],
    dialogue: {
      speakerA: 'Yuna',
      speakerB: 'Anvar',
      lineA_Korean: '한국에서 무엇을 제일 하고 싶어요?',
      lineA_Pronunciation: '[han-guk-e-seo mu-eot-eul je-il ha-go sip-eo-yo?]',
      lineA_Uzbek: 'Koreyada eng ko\'p nimani qilishni xohlaysiz?',
      lineB_Korean: '경복궁에 가고 싶어요. 한복도 입고 싶어요.',
      lineB_Pronunciation: '[gyeong-bok-gung-e ga-go sip-eo-yo. han-bok-do ip-go sip-eo-yo]',
      lineB_Uzbek: 'Gyonbokkun saroyiga borgim va milliy Hanbok kiyimini kiygim kelyapti.'
    },
    examples: [
      { korean: '한국에서 살고 싶어요.', pronunciation: '[han-guk-e-seo sal-go sip-eo-yo]', uzbek: 'Koreyada yashashni xohlayman.', russian: 'Хочу жить в Корее.', english: 'I want to live in Korea.' },
      { korean: '지금 너무 자고 싶어요.', pronunciation: '[ji-geum neo-mu ja-go sip-eo-yo]', uzbek: 'Hozir rosa uxlagim kelyapti.', russian: 'Сейчас очень хочу спать.', english: 'I really want to sleep now.' }
    ],
    miniQuiz: {
      question: '"먹다" (yemoq) fe\'liga xohish shakli qanday qo\'shiladi?',
      options: ['먹을 싶어요', '먹고 싶어요', '먹고 싶어해요', '먹고 싶다요'],
      correctIndex: 1,
      explanation: 'Fe\'l o\'zagiga to\'g\'ridan-to\'g\'ri "-고 싶어요" qo\'shiladi: 먹고 싶어요.'
    }
  }
];

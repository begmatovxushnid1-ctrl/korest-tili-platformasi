export interface GrammarTopic {
  id: string;
  level: string; // e.g. "TOPIK 1 (1-daraja)"
  title: string; // e.g. "-ㅂ니다 / -습니다"
  meaning: string; // "Rasmiy hurmat qo'shimchasi"
  batchimRule: string; // "받침 bor bo'lsa -습니다, yo'q bo'lsa -ㅂ니다"
  structure: string; // "Fe'l o'zagi + ㅂ니다 / 습니다"
  examples: {
    korean: string;
    pronunciation: string;
    uzbek: string;
    russian: string;
    english: string;
  }[];
}

export const grammarTopicsList: GrammarTopic[] = [
  {
    id: 'gt1',
    level: 'TOPIK 1 • 1-Daraja',
    title: '-이 / -가 (Ega qo\'shimchasi)',
    meaning: 'Gapda ish-harakatni bajaruvchi shaxs yoki buyumni ko\'rsatadi.',
    batchimRule: 'So\'z oxirida 받침 (undosh) bo\'lsa -> -이, 받침 yo\'q bo\'lsa -> -가',
    structure: 'Ot + 이 / 가',
    examples: [
      {
        korean: '선생님이 오십니다.',
        pronunciation: '[seon-saeng-nim-i o-shim-ni-da]',
        uzbek: 'O\'qituvchi kelmoqdalar.',
        russian: 'Учитель приходит.',
        english: 'The teacher is coming.',
      },
      {
        korean: '비가 와요.',
        pronunciation: '[bi-ga wa-yo]',
        uzbek: 'Yomg\'ir yog\'yapti.',
        russian: 'Идет дождь.',
        english: 'It is raining.',
      },
      {
        korean: '이것이 책입니다.',
        pronunciation: '[i-geot-i chaek-im-ni-da]',
        uzbek: 'Bu kitobdir.',
        russian: 'Это книга.',
        english: 'This is a book.',
      },
    ],
  },
  {
    id: 'gt2',
    level: 'TOPIK 1 • 1-Daraja',
    title: '-은 / -는 (Mavzu / Ta\'kidlash qo\'shimchasi)',
    meaning: 'Gap mavzusini belgilash yoki boshqa narsa bilan taqqoslash, farqlash uchun ishlatiladi.',
    batchimRule: 'So\'z oxirida 받침 bo\'lsa -> -은, 받침 yo\'q bo\'lsa -> -는',
    structure: 'Ot + 은 / 는',
    examples: [
      {
        korean: '저는 학생입니다.',
        pronunciation: '[jeo-neun hak-saeng-im-ni-da]',
        uzbek: 'Men esa talabaman.',
        russian: 'Что касается меня, я студент.',
        english: 'As for me, I am a student.',
      },
      {
        korean: '오늘은 날씨가 좋아요.',
        pronunciation: '[o-neul-eun nal-ssi-ga jo-a-yo]',
        uzbek: 'Bugun ob-havo juda yaxshi.',
        russian: 'Сегодня отличная погода.',
        english: 'Today the weather is nice.',
      },
    ],
  },
  {
    id: 'gt3',
    level: 'TOPIK 1 • 1-Daraja',
    title: '-을 / -를 (Tushum kelishigi)',
    meaning: 'Harakat kimga yoki nimaga qaratilganini (obyektni) ko\'rsatadi.',
    batchimRule: 'So\'z oxirida 받침 bo\'lsa -> -을, 받침 yo\'q bo\'lsa -> -를',
    structure: 'Ot + 을 / 를 + Fe\'l',
    examples: [
      {
        korean: '사과를 먹어요.',
        pronunciation: '[sa-gwa-reul meo-geo-yo]',
        uzbek: 'Olma yeyapman.',
        russian: 'Я ем яблоко.',
        english: 'I am eating an apple.',
      },
      {
        korean: '한국어를 배워요.',
        pronunciation: '[han-guk-eo-reul bae-wo-yo]',
        uzbek: 'Koreys tilini o\'rganyapman.',
        russian: 'Я учу корейский язык.',
        english: 'I am learning Korean.',
      },
    ],
  },
  {
    id: 'gt4',
    level: 'TOPIK 1 • 1-Daraja',
    title: '-ㅂ니다 / -습니다 (Rasmiy hurmat kesimi)',
    meaning: 'Rasmiy vaziyatlarda (yig\'ilish, suhbat, yangiliklar, hurmatli insonlar bilan) fe\'lni tugatish uslubi.',
    batchimRule: 'Fe\'l o\'zagida 받침 bo\'lmasa -> -ㅂ니다, 받침 bo\'lsa -> -습니다',
    structure: 'Fe\'l o\'zagi + ㅂ니다 / 습니다',
    examples: [
      {
        korean: '만나서 반갑습니다.',
        pronunciation: '[man-na-seo ban-gap-seum-ni-da]',
        uzbek: 'Uchrashganimdan xursandman.',
        russian: 'Приятно познакомиться.',
        english: 'Nice to meet you.',
      },
      {
        korean: '감사합니다.',
        pronunciation: '[gam-sa-ham-ni-da]',
        uzbek: 'Katta rahmat.',
        russian: 'Большое спасибо.',
        english: 'Thank you very much.',
      },
    ],
  },
  {
    id: 'gt5',
    level: 'TOPIK 1 • 2-Daraja',
    title: '-고 싶다 (Xohish / Istak)',
    meaning: '"...-gim kelyapti", "...-ishni xohlayman" ma\'nosini bildiradi.',
    batchimRule: '받침 bor yoki yo\'qligidan qat\'i nazar to\'g\'ridan-to\'g\'ri "-고 싶다" qo\'shiladi.',
    structure: 'Fe\'l o\'zagi + 고 싶어요',
    examples: [
      {
        korean: '한국에 가고 싶어요.',
        pronunciation: '[han-guk-e ga-go ship-eo-yo]',
        uzbek: 'Koreyaga bormoqchiman (borgim kelyapti).',
        russian: 'Я хочу поехать в Корею.',
        english: 'I want to go to Korea.',
      },
      {
        korean: '불고기를 먹고 싶어요.',
        pronunciation: '[bul-go-gi-reul meok-go ship-eo-yo]',
        uzbek: 'Bulgogi yegim kelyapti.',
        russian: 'Я хочу поесть пулькоги.',
        english: 'I want to eat Bulgogi.',
      },
    ],
  },
  {
    id: 'gt6',
    level: 'TOPIK 1 • 2-Daraja',
    title: '-아/어/여야 하다 (Majburiyat: "...-ishim kerak")',
    meaning: 'Biror ish-harakatni bajarish shart yoki zarurligini bildiradi ("...-ishim kerak", "lozim").',
    batchimRule: 'Fe\'l o\'zagi unlisiga qarab: ㅏ, ㅗ bo\'lsa -아야 하다; boshqa unlilar bo\'lsa -어야 하다; 하다 -> 해야 하다.',
    structure: 'Fe\'l o\'zagi + 아/어/해야 해요',
    examples: [
      {
        korean: '열심히 공부해야 해요.',
        pronunciation: '[yeol-shim-hi gong-bu-hae-ya hae-yo]',
        uzbek: 'Qattiq dars qilishim kerak.',
        russian: 'Мне нужно усердно учиться.',
        english: 'I have to study hard.',
      },
      {
        korean: '지금 집에 가야 해요.',
        pronunciation: '[ji-geum jip-e ga-ya hae-yo]',
        uzbek: 'Hozir uyga ketishim kerak.',
        russian: 'Мне нужно сейчас идти домой.',
        english: 'I must go home now.',
      },
    ],
  },
];

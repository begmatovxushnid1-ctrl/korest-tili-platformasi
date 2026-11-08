import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Xabar kiritilmadi' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // System prompt defining the AI Korean Teacher persona
    const systemPrompt = `Siz HanguGo platformasining aqlli AI Koreys tili ustozisiz (Sun'iy Intellekt).
Vazifangiz:
1. O'quvchiga koreys tili grammatikasi, so'zlar, 받침 (batchim), TOPIK darajalari va kundalik koreys madaniyatini tushunarli qilib o'rgatish.
2. Savollarga doimo o'zbek tilida (lotin alifbosida), samimiy, dalda beruvchi va qiziqarli uslubda javob bering.
3. Koreyscha so'z yoki gap keltirganda, albatta uning o'qilishi (talaffuzi) va o'zbekcha tarjimasini yozib bering.
4. Agar o'quvchi xato gap tuzsa, uni muloyimlik bilan to'g'rilab, qoidasini tushuntiring.
5. Kerak bo'lganda so'z yoki iborani o'rganish uchun kichik mashq yoki savol bering.`;

    // If Gemini API key is configured, call Gemini API
    if (apiKey) {
      const { GoogleGenAI } = await import('@google/genai');
      const ai = new GoogleGenAI({ apiKey });

      const contents = [
        {
          role: 'user',
          parts: [{ text: `${systemPrompt}\n\nFoydalanuvchi xabari: ${message}` }],
        },
      ];

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents,
      });

      return NextResponse.json({
        reply: response.text || 'Kechirasiz, javob shakllantirib bo\'lmadi.',
      });
    }

    // Fallback Intelligent Rule-Based AI Tutor if no API key is set yet
    const lower = message.toLowerCase();
    let reply = '';

    if (lower.includes('salom') || lower.includes('assalom') || lower.includes('annyeong')) {
      reply = `안녕하세요! (An-nyeong-ha-se-yo!) 👋\n\nMen sizning shaxsiy AI Koreys tili ustozingizman. Bugun qaysi mavzuni yoki so'zlarni o'rganishni xohlaysiz?`;
    } else if (lower.includes('batchim') || lower.includes('badchim') || lower.includes('받침')) {
      reply = `받침 (Batchim) — bu koreyscha bo'g'in oxiridagi pastki undosh harfdir! 📚\n\nMasalan:\n• 책 [chaek] — oxirida 'ㄱ' bor, bu 받침.\n• 사과 [sa-gwa] — unda 받침 yo'q (unli bilan tugagan).\n\nQo'shimchalar tanlashda 받침 juda muhim: Masalan, mavzu qo'shimchasi: 받침 bo'lsa -이, bo'lmasa -가 qo'shiladi!`;
    } else if (lower.includes('rahmat') || lower.includes('kamsahamnida') || lower.includes('gamsahamnida')) {
      reply = `천만에요! (Cheon-man-e-yo!) — Arzimaydi! Yana qanday savollaringiz bor?`;
    } else if (lower.includes('qanday') || lower.includes('yordam') || lower.includes('topik')) {
      reply = `Koreys tilini o'rganishda 3 ta oltin qoida bor: 🌟\n1. Har kuni kamida 10 ta yangi so'zni Flesh-kartalarda takrorlang.\n2. 받침 (Batchim) qoidalarini mashq daftarchasida sinab boring.\n3. Ovozli eshitish tugmasini bosib, talaffuzingizni charxlang!\n\nMenga xohlagan so'z yoki jumlani yozing, birga tahlil qilamiz!`;
    } else {
      reply = `Savolingiz uchun rahmat! Koreys tilida ushbu mavzu juda qiziq: "${message}" bo'yicha shuni bilish muhimki, koreys tili grammatikasida gap tuzilishi: Ega + To'ldiruvchi + Kesim (SOV) tartibida bo'ladi.\n\nMasalan:\n저는 한국어를 공부해요. [Jeo-neun han-guk-eo-reul gong-bu-hae-yo.]\n"Men koreys tilini o'rganyapman."\n\nYana qanday so'z yoki grammatikani tushuntirib beray?`;
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('AI Tutor error:', error);
    return NextResponse.json(
      { error: 'Serverda xatolik yuz berdi', details: error?.message },
      { status: 500 }
    );
  }
}

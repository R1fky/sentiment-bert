import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);

export const getDashboard = async ({ start, end } = {}) => {
  try {
    const forms = await prisma.form.findMany({
      include: {
        questions: {
          include: {
            answer: {
              where: {
                ...(start && { created_at: { gte: new Date(start) } }),
                ...(end && { created_at: { lte: new Date(end + "T23:59:59") } }),
              },
            },
          },
        },
      },
    });

    const kategoriMap = {};

    forms.forEach((form) => {
      const kategori = form.category || "Tidak Diketahui";

      if (!kategoriMap[kategori]) {
        kategoriMap[kategori] = { positif: 0, netral: 0, negatif: 0, total: 0 };
      }

      form.questions.forEach((q) => {
        q.answer.forEach((a) => {
          if (a.sentiment && kategoriMap[kategori][a.sentiment] !== undefined) {
            kategoriMap[kategori][a.sentiment]++;
            kategoriMap[kategori].total++;
          }
        });
      });
    });

    const labels = Object.keys(kategoriMap);
    const positifData = [];
    const netralData = [];
    const negatifData = [];

    labels.forEach((kategori) => {
      const total = kategoriMap[kategori].total || 1;
      positifData.push(((kategoriMap[kategori].positif / total) * 100).toFixed(2));
      netralData.push(((kategoriMap[kategori].netral / total) * 100).toFixed(2));
      negatifData.push(((kategoriMap[kategori].negatif / total) * 100).toFixed(2));
    });

    const allAnswers = forms.flatMap((form) => form.questions.flatMap((q) => q.answer.map((a) => ({ ...a, question: q }))));

    //activity terbaru
    const latestQuestions = await prisma.question.findMany({
      orderBy: { created_at: "desc" },
      take: 5,
    });

    const latestAnswers = await prisma.answer.findMany({
      orderBy: { created_at: "desc" },
      take: 5,
    });

    // Format aktivitas
    const formattedLatestQuestions = latestQuestions.map((q) => ({
      text: "Pertanyaan Baru di Tambahkan",
      time: dayjs(q.created_at).fromNow(),
      createdAt: q.created_at,
    }));

    const formattedLatestAnswers = latestAnswers.map((a) => ({
      text: "Jawaban Baru di Terima",
      time: dayjs(a.created_at).fromNow(),
      createdAt: a.created_at,
    }));

    const activity = [...formattedLatestQuestions, ...formattedLatestAnswers].sort((a, b) => b.createdAt - a.createdAt).slice(0, 5);

    return {
      all: allAnswers,
      labels,
      positifData,
      netralData,
      negatifData,
      activity,
    };
  } catch (error) {
    console.error("Gagal mengambil data dashboard:", error);
    throw error;
  }
};

//category status
export const getCategoryStatus = async () => {
  const categories = await prisma.form.findMany({
    select: { category: true },
    distinct: ["category"],
  });

  const statusData = await Promise.all(
    categories.map(async ({ category }) => {
      const forms = await prisma.form.findMany({
        where: { category },
        include: {
          questions: {
            include: { answer: true },
          },
        },
      });

      const total = forms.reduce((sum, form) => {
        return sum + form.questions.reduce((s, q) => s + q.answer.length, 0);
      }, 0);

      let status = "Tertunda";
      if (total >= 30) status = "Selesai";
      else if (total >= 10) status = "Diproses";

      return {
        kategori: category,
        responden: total,
        status,
      };
    })
  );

  return statusData;
};

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);

export const getDashboard = async () => {
  try {
    const data = await prisma.answer.findMany({
      include: {
        question: true,
      },
    });

    // Kelompokkan berdasarkan kategori pertanyaan
    const kategoriMap = {};

    data.forEach((item) => {
      const kategori = item.question.question_category || "Tidak Diketahui";
      if (!kategoriMap[kategori]) {
        kategoriMap[kategori] = { positif: 0, netral: 0, negatif: 0, total: 0 };
      }

      kategoriMap[kategori][item.sentiment] += 1;
      kategoriMap[kategori].total += 1;
    });

    const labels = Object.keys(kategoriMap);
    const positifData = [];
    const netralData = [];
    const negatifData = [];

    labels.forEach((kategori) => {
      const total = kategoriMap[kategori].total || 1; // Hindari pembagi nol
      positifData.push(((kategoriMap[kategori].positif / total) * 100).toFixed(2));
      netralData.push(((kategoriMap[kategori].netral / total) * 100).toFixed(2));
      negatifData.push(((kategoriMap[kategori].negatif / total) * 100).toFixed(2));
    });

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
      all: data, // ← tambahkan ini
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
  const categories = await prisma.question.findMany({
    select: { question_category: true },
    distinct: ["question_category"],
  });

  const statusData = await Promise.all(
    categories.map(async ({ question_category }) => {
      const total = await prisma.answer.count({
        where: {
          question: { question_category },
        },
      });

      let status = "Tertunda";
      if (total >= 30) status = "Selesai";
      else if (total >= 10) status = "Diproses";

      return {
        kategori: question_category,
        responden: total,
        status,
      };
    })
  );

  return statusData;
};

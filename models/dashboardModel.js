import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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

    return {
      all: data, // ← tambahkan ini
      labels,
      positifData,
      netralData,
      negatifData,
    };
  } catch (error) {
    console.error("Gagal mengambil data dashboard:", error);
    throw error;
  }
};

//verssi pertama
// export const getDashboard = async () => {
//   try {
//     const questions = await prisma.question.findMany({
//       include: {
//         answer: true,
//       },
//     });

//     const labels = [];
//     const positifData = [];
//     const netralData = [];
//     const negatifData = [];

//     for (const question of questions) {
//       labels.push(question.question_text);
//       const total = question.answer.length || 1;

//       const positif = question.answer.filter((a) => a.sentiment === "positif").length;
//       const netral = question.answer.filter((a) => a.sentiment === "netral").length;
//       const negatif = question.answer.filter((a) => a.sentiment === "negatif").length;

//       positifData.push(((positif / total) * 100).toFixed(1));
//       netralData.push(((netral / total) * 100).toFixed(1));
//       negatifData.push(((negatif / total) * 100).toFixed(1));
//     }
//     return {
//       labels,
//       positifData,
//       netralData,
//       negatifData,
//     };
//   } catch (error) {
//     console.error("Error fetching dashboard data:", error);
//   }
// };

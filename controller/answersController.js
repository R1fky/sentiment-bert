import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const analyzeUnprocessedAnswers = async (req, res) => {
  try {
    const answers = await prisma.answer.findMany({
      where: { sentiment: null },
    });

    if (answers.length === 0) {
      return res.json({ message: "Semua data sudah dianalisis." });
    }

    const texts = answers.map((a) => a.answer_text);

    // ✅ Tambahkan log sebelum request
    console.log("Mengirim ke Flask:", texts);

    const response = await axios.post("http://localhost:5000/predict-batch", { texts });

    const predictions = response.data;
    console.log("Predictions:", predictions); 
    if (predictions.length !== answers.length) {
      console.error("Jumlah prediksi tidak cocok dengan jumlah jawaban!");
      return res.status(500).json({ error: "Jumlah prediksi tidak cocok dengan data jawaban." });
    }

    const updatePromises = predictions.map((item, index) => {
      return prisma.answer.update({
        where: { id: answers[index].id },
        data: {
          preProcess_text: item.preprocessed,
          sentiment: item.sentiment,
        },
      });
    });

    await Promise.all(updatePromises);

    res.json({ message: "Semua jawaban berhasil dianalisis dan disimpan." });
  } catch (err) {
    console.error("❌ ERROR:", err.message);
    console.error("Detail:", err.response?.data || err);
    res.status(500).json({ error: "Gagal menganalisis data", detail: err.message });
  }
};

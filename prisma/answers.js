import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const options = ["sangat puas", "puas", "tidak puas", "netral", "sangat tidak puas"];

async function main() {
  const dummyAnswers = [];

  for (let i = 1; i <= 100; i++) {
    const questionId = ((i - 1) % 24) + 1;
    const nama = `Mahasiswa ${i}`;
    const email = `mhs${i}@example.com`;
    const nim = `202301${String(i).padStart(4, "0")}`;
    const answer_text = options[Math.floor(Math.random() * options.length)];

    // Atur bulan berbeda dari Januari (0) sampai Desember (11) secara berulang
    const month = (i - 1) % 12;
    const day = Math.floor(Math.random() * 28) + 1; // Random tanggal 1-28
    const created_at = new Date(2024, month, day); // tahun 2024

    dummyAnswers.push({
      questionId,
      nama,
      email,
      nim,
      answer_text,
      preProcess_text: null,
      sentiment: null,
      created_at,
    });
  }

  try {
    const result = await prisma.answer.createMany({
      data: dummyAnswers,
      skipDuplicates: true,
    });

    console.log("✅ Data dummy berhasil dimasukkan.");
    console.log("Jumlah:", result.count);
  } catch (error) {
    console.error("❌ Error saat membuat data dummy:", error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

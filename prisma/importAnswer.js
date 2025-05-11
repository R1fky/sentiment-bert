import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const options = ['sangat puas', 'puas', 'tidak puas'];

async function main() {
  const dummyAnswers = [];

  for (let i = 1; i <= 200; i++) {
    const questionId = ((i - 1) % 24) + 1; // Berulang dari 1 sampai 24
    const nama = `Mahasiswa ${i}`;
    const email = `mhs${i}@example.com`;
    const nim = `202301${String(i).padStart(4, '0')}`;
    const answer_text = options[Math.floor(Math.random() * options.length)];

    dummyAnswers.push({
      questionId,
      nama,
      email,
      nim,
      answer_text,
      preProcess_text: null,
      sentiment: null,
    });
  }

  await prisma.answer.createMany({
    data: dummyAnswers,
    skipDuplicates: true, // Opsional: untuk mencegah error jika sudah ada
  });

  console.log('✅ Data dummy answers berhasil dimasukkan.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  
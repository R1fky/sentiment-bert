import { PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();

const questions = [
  {
    question_category: "Metode Pembelajaran",
    question_text: "Seberapa besar penekanan pada metode pembelajaran Perkuliahan dilaksanakan di program studi Anda?",
  },
  {
    question_category: "Metode Pembelajaran",
    question_text: "Seberapa besar penekanan pada metode pembelajaran Demonstrasi / Peragaan dilaksanakan di program studi Anda?",
  },
  {
    question_category: "Metode Pembelajaran",
    question_text: "Seberapa besar penekanan pada metode pembelajaran Partisipasi dalam proyek riset dilaksanakan di program studi Anda?",
  },
  {
    question_category: "Metode Pembelajaran",
    question_text: "Seberapa besar penekanan pada metode pembelajaran Magang / PKL dilaksanakan di program studi Anda?",
  },
  {
    question_category: "Metode Pembelajaran",
    question_text: "Seberapa besar penekanan pada metode pembelajaran Praktikum dilaksanakan di program studi Anda?",
  },
  {
    question_category: "Metode Pembelajaran",
    question_text: "Seberapa besar penekanan pada metode pembelajaran Kerja Lapangan dilaksanakan di program studi Anda?",
  },
  {
    question_category: "Metode Pembelajaran",
    question_text: "Seberapa besar penekanan pada metode pembelajaran Diskusi dilaksanakan di program studi Anda?",
  },
  {
    question_category: "Proses Pembelajaran",
    question_text: "Penilaian Anda terhadap Kinerja Dosen.",
  },
  {
    question_category: "Proses Pembelajaran",
    question_text: "Penilaian Anda terhadap Pembelajaran di kelas.",
  },
  {
    question_category: "Proses Pembelajaran",
    question_text: "Penilaian Anda terhadap Magang / Kerja Lapangan / Praktikum.",
  },
  {
    question_category: "Proses Pembelajaran",
    question_text: "Penilaian Anda terhadap Pengabdian Masyarakat.",
  },
  {
    question_category: "Proses Pembelajaran",
    question_text: "Penilaian Anda terhadap Pelaksanaan Riset / Penulisan Skripsi.",
  },
  {
    question_category: "Proses Pembelajaran",
    question_text: "Penilaian Anda terhadap Organisasi Kemahasiswaan.",
  },
  {
    question_category: "Proses Pembelajaran",
    question_text: "Penilaian Anda terhadap Kegiatan Ekstrakurikuler.",
  },
  {
    question_category: "Proses Pembelajaran",
    question_text: "Penilaian Anda terhadap Rekreasi dan Olahraga.",
  },
  {
    question_category: "Fasilitas dan Sarana",
    question_text: "Penilaian Anda terhadap fasilitas Perpustakaan.",
  },
  {
    question_category: "Fasilitas dan Sarana",
    question_text: "Penilaian Anda terhadap Teknologi Informasi dan Komunikasi.",
  },
  {
    question_category: "Fasilitas dan Sarana",
    question_text: "Penilaian Anda terhadap Modul Belajar.",
  },
  {
    question_category: "Fasilitas dan Sarana",
    question_text: "Penilaian Anda terhadap Ruang Belajar.",
  },
  {
    question_category: "Fasilitas dan Sarana",
    question_text: "Penilaian Anda terhadap Laboratorium.",
  },
  {
    question_category: "Fasilitas dan Sarana",
    question_text: "Penilaian Anda terhadap Akomodasi.",
  },
  {
    question_category: "Fasilitas dan Sarana",
    question_text: "Penilaian Anda terhadap Kantin.",
  },
  {
    question_category: "Fasilitas dan Sarana",
    question_text: "Penilaian Anda terhadap Fasilitas Layanan Kesehatan.",
  },
  {
    question_category: "Fasilitas dan Sarana",
    question_text: "Penilaian Anda terhadap Pelayanan Administrasi Akademik.",
  },
];
async function main() {
  // Hapus data existing (opsional)
  await prisma.question.deleteMany();

  // Insert data baru
  for (const q of questions) {
    await prisma.question.create({
      data: {
        question_text: q.question_text,
        question_category: q.question_category,
        question_type: "radio", // Default value
      },
    });
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

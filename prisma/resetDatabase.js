import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function resetDatabase() {
  try {
    await prisma.answer.deleteMany({});
    await prisma.question.deleteMany({});
    await prisma.form.deleteMany({});
    await prisma.$executeRawUnsafe(`ALTER TABLE form AUTO_INCREMENT = 1;`);
    await prisma.$executeRawUnsafe(`ALTER TABLE answer AUTO_INCREMENT = 1;`);
    await prisma.$executeRawUnsafe(`ALTER TABLE question AUTO_INCREMENT = 1;`);

    console.log("Database sudah di-reset dan auto-increment mulai dari 1.");
  } catch (error) {
    console.error("Gagal reset database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

resetDatabase();

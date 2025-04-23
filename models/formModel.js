import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getQuestion = async () => {
  return await prisma.question.findMany();
};

export const submitForm = async (body) => {
  const { nama, email, nim, answers } = body;

  for (const questionId in answers) {
    const answerText = answers[questionId];

    await prisma.answer.create({
      data: {
        questionId: Number(questionId), // pastikan ini number
        nama,
        email,
        nim,
        answer_text: answerText,
      },
    });
  }
};

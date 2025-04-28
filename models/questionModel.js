import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getQuestion = async () => {
  return await prisma.question.findMany();
};

export const addQuestion = async (body) => {
  const {question_text, question_type} = body
  try {
    const newQuestion = await prisma.question.create({
      data: {
        question_text,
        question_type : question_type || "radio",
      },
    });
    return newQuestion;
  } catch (error) {
    console.log(error);
  }
}

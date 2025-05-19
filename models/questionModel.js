import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getQuestion = async () => {
  return await prisma.question.findMany();
};

export const addQuestion = async (questionsToAdd) => {
  return await prisma.question.create({
    data: {
      question_text,
      question_type: question_type || "radio",
      question_category: question_category,
    },
  });
};

export const filterQuestion = async ({ question_category }) => {
  return await prisma.question.findMany({
    where: { question_category },
  });
};

export const getAllCategories = async () => {
  return await prisma.question.findMany({
    distinct: ["question_category"],
    select: { question_category: true },
  });
};

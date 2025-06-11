import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getQuestion = async () => {
  return await prisma.question.findMany();
};

export const addQuestion = async (questionsToAdd) => {
  return await Promise.all(
    questionsToAdd.map((q) =>
      prisma.question.create({
        data: {
          question_text: q.question_text,
          question_type: q.question_type || "radio",
          question_category: q.question_category,
        },
      })
    )
  );
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

//deleteQuestion
export const questionDelete = async (dataId) => {
  try {
    return await prisma.question.delete({
      include : {
        answer :true
      },
      where: { id: dataId },
    });
  } catch (error) {
    console.log("Message :", error);
  }
};

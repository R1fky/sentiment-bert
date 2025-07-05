import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const listForms = async () => {
  try {
    return await prisma.form.findMany({
      orderBy: { created_at: "desc" },
    });
  } catch (error) {
    console.log({ message: error });
  }
};

export const addFormsWithQuestions = async (title, description, questions, category, types) => {
  try {
    const newForm = await prisma.form.create({
      data: {
        title,
        description,
        category,
        questions: {
          create: questions.map((q, idx) => ({
            question_text: q,
            question_type: types[idx] || "radio",
          })),
        },
      },
    });

    return newForm;
  } catch (error) {
    console.error("Model Error:", error);
    throw error;
  }
};

export const getFormDetailId = async (formId) => {
  try {
    return await prisma.form.findUnique({
      where: { id: formId },
      include: {
        questions: {
          include: {
            answer: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Data failed No Result");
    throw error;
  }
};

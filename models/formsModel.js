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

export const addFormsWithQuestions = async (title, description, questions, categories, types) => {
  try {
    const newForm = await prisma.form.create({
      data: {
        title,
        description,
        questions: {
          create: questions.map((q, i) => ({
            question_text: q,
            question_category: categories[i] || "",
            question_type: types[i] || "radio",
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
      include: { questions: true },
    });
  } catch (error) {
    console.error("Data failed No Result");
    throw error;
  }
};

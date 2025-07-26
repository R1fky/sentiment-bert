import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

export const listForm = async () => {
  try {
    return await prisma.form.findMany({
      orderBy: { created_at: "desc" },
    });
  } catch (error) {
    console.error("Server Error", error);
  }
};

export const getKuesioner = async (formId) => {
  try {
    const form = await prisma.form.findUnique({
      where: { id: formId },
      include: { questions: true },
    });
    return form;
  } catch (error) {
    console.error("Error No Kuesioner In Server", error);
  }
};

export const submitForm = async ({ nama, nim, email, answers }) => {
  try {
    const insertedAnswers = await Promise.all(
      Object.entries(answers).map(([questionId, answerText]) =>
        prisma.answer.create({
          data: {
            questionId: Number(questionId),
            nama,
            nim,
            email,
            answer_text: answerText,
            preProcess_text: null,
            sentiment: null,
          },
        })
      )
    );

    return insertedAnswers;
  } catch (error) {
    console.error("error gagal menyimpan jawaban :", error);
  }
};

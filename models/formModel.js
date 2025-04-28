import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

export const getQuestion = async () => {
  return await prisma.question.findMany();
};

export const submitForm = async (body) => {
  const { nama, email, nim, answers } = body;
  const insertedAnswers = [];

  for (const questionId in answers) {
    const answerText = answers[questionId];
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        text: answerText,
      });

      const { preprocessed_text, sentiment } = response.data;

      await prisma.answer.create({
        data: {
          questionId: Number(questionId), //ini number
          nama,
          email,
          nim,
          answer_text: answerText,
          preProcess_text: preprocessed_text,
          sentiment: sentiment,
        },
      });

      insertedAnswers.push({
        questionId,
        answerText,
        sentiment,
      });
    } catch (error) {
      console.error("Error inserting answer:", error);
    }
  }
  return insertedAnswers;
};

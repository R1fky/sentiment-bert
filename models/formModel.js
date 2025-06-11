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

      const { preprocessed, sentiment } = response.data;

      await prisma.answer.create({
        data: {
          questionId: Number(questionId), //ini number
          nama,
          email,
          nim,
          answer_text: answerText,
          preProcess_text: preprocessed,
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

export const getSentimentUser = async (nama, email, nim) => {
  try {
    const data = await prisma.answer.findMany({
      where: {
        nama,
        email,
        nim,
      },
      include: {
        question: {
          select: {
            question_text: true,
          },
        },
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching sentiment user:", error);
  }
};

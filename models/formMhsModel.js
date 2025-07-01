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

// export const submitForm = async (body) => {
//   const { nama, email, nim, answers } = body;
//   const insertedAnswers = [];

//   for (const questionId in answers) {
//     const answerText = answers[questionId];
//     try {
//       const response = await axios.post("http://localhost:5000/predict", {
//         text: answerText,
//       });

//       const { preprocessed, sentiment } = response.data;

//       await prisma.answer.create({
//         data: {
//           questionId: Number(questionId), //ini number
//           nama,
//           email,
//           nim,
//           answer_text: answerText,
//           preProcess_text: preprocessed,
//           sentiment: sentiment,
//         },
//       });

//       insertedAnswers.push({
//         questionId,
//         answerText,
//         sentiment,
//       });
//     } catch (error) {
//       console.error("Error inserting answer:", error);
//     }
//   }
//   return insertedAnswers;
// };

// export const getSentimentUser = async (nama, email, nim) => {
//   try {
//     const data = await prisma.answer.findMany({
//       where: {
//         nama,
//         email,
//         nim,
//       },
//       include: {
//         question: {
//           select: {
//             question_text: true,
//           },
//         },
//       },
//     });
//     return data;
//   } catch (error) {
//     console.error("Error fetching sentiment user:", error);
//   }
// };

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

// export const getFormDetailId = async (formId) => {
//   try {
//     return await prisma.form.findUnique({
//       where: { id: formId },
//       include: {
//         questions: {
//           include: {
//             answer: true,
//           },
//         },
//       },
//     });
//   } catch (error) {
//     console.error("Data failed No Result");
//     throw error;
//   }
// };

export const getFormDetailId = async (formId, filter = {}) => {
  let { start, end } = filter;

  const whereClause = {};

  if (start && !isNaN(new Date(start))) {
    whereClause.gte = new Date(start);
  }

  if (end && !isNaN(new Date(end))) {
    whereClause.lte = new Date(end + "T23:59:59");
  }

  console.log("👉 Filter created_at:", whereClause);

  return await prisma.form.findUnique({
    where: { id: formId },
    include: {
      questions: {
        include: {
          answer: {
            where: {
              ...(Object.keys(whereClause).length > 0 && {
                created_at: whereClause,
              }),
            },
          },
        },
      },
    },
  });
};

//delete form
export const deleteForm = async (formId) => {
  try {
    return await prisma.form.delete({
      where: { id: formId },
    });
  } catch (error) {
    console.error("Data tidak Berhasil di Hapus");
    throw error;
  }
};

//import
export const importQuestionsToDB = async (questions) => {
  try {
    return await prisma.question.createMany({
      data: questions,
    });
  } catch (error) {
    console.error("Gagal menyimpan pertanyaan:", error);
    throw error;
  }
};

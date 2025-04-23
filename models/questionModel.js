import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getQuestion = async () => {
  return await prisma.question.findMany();
};

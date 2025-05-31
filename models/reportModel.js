import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getSentimentTrends = async () => {
  try {
    return await prisma.$queryRaw`
        SELECT 
            DATE_FORMAT(created_at, '%Y-%m') AS month,
            sentiment,
            COUNT(*) AS count
        FROM answer
        GROUP BY month, sentiment
        ORDER BY month ASC`;
  } catch (error) {
    console.error("Cannot Select", error);
  }
};

export const getSentimentTrendsByYear = async (year) => {
  try {
    const start = new Date(`${year}-01-01`);
    const end = new Date(`${year + 1}-01-01`);
    const answers = await prisma.answer.findMany({
      where: {
        created_at: {
          gte: start,
          lt: end,
        },
      },
      include: {
        question: true,
        user: true,
      },
    });
    return answers;
  } catch (error) {
    console.error("Cannot Select", error);
    return [];
  }
};

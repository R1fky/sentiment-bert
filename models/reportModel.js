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

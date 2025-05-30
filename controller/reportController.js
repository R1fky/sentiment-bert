import * as sentimentReport from "../models/reportModel.js";

export const getTrends = async (req, res) => {
  try {
    const result = await sentimentReport.getSentimentTrends();

    // konversi count ke number
    const convertedResult = result.map((row) => ({
      ...row,
      count: Number(row.count), // Ensure count is a number
    }));

    const labels = [...new Set(convertedResult.map((row) => row.month))];

    const positifData = labels.map((month) => {
      const item = convertedResult.find((r) => r.month === month && r.sentiment === "positif");
      return item ? item.count : 0;
    });

    const netralData = labels.map((month) => {
      const item = convertedResult.find((r) => r.month === month && r.sentiment === "netral");
      return item ? item.count : 0;
    });
    const negatifData = labels.map((month) => {
      const item = convertedResult.find((r) => r.month === month && r.sentiment === "negatif");
      return item ? item.count : 0;
    });

    res.render("report/sentimentTrends", {
      labels: JSON.stringify(labels),
      positifData: JSON.stringify(positifData),
      netralData: JSON.stringify(netralData),
      negatifData: JSON.stringify(negatifData),
      title: "Sentiment Trends",
      layout: "layouts/main",
    });
    console.log("Labels:", labels), console.log("Positif:", positifData), console.log("Netral:", netralData), console.log("Negatif:", negatifData);
  } catch (error) {
    throw new Error("Database error: " + error.message);
  }
};

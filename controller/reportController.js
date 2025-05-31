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

    // Hitung total seluruh sentimen
    const totalResponden = convertedResult.reduce((sum, row) => sum + row.count, 0);
    // Hitung total per sentimen
    const positifTotal = convertedResult.filter((r) => r.sentiment === "positif").reduce((sum, r) => sum + r.count, 0);
    const netralTotal = convertedResult.filter((r) => r.sentiment === "netral").reduce((sum, r) => sum + r.count, 0);
    const negatifTotal = convertedResult.filter((r) => r.sentiment === "negatif").reduce((sum, r) => sum + r.count, 0);

    // Hitung persentase
    const toPercent = (val) => (totalResponden === 0 ? 0 : ((val / totalResponden) * 100).toFixed(1));
    const positifPersen = toPercent(positifTotal);
    const netralPersen = toPercent(netralTotal);
    const negatifPersen = toPercent(negatifTotal);
    // end total

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
      positifTotal,
      netralTotal,
      negatifTotal,
      positifPersen,
      netralPersen,
      negatifPersen,
      title: "Sentiment Trends",
      layout: "layouts/main",
    });

    console.log("Labels:", labels), console.log("Positif:", positifData), console.log("Netral:", netralData), console.log("Negatif:", negatifData);
  } catch (error) {
    throw new Error("Database error: " + error.message);
  }
};

export const sentimentTrends = async (req, res) => {
  try {
    const year = parseInt(req.query.year) || new Date().getFullYear();

    const answers = await sentimentReport.getSentimentTrendsByYear(year);
    
  } catch(error) {
    console.log("Error fetching sentiment trends:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    })
  }
};

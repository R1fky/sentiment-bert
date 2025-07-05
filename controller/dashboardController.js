import * as dashboardModel from "../models/dashboardModel.js";

export const showDashboard = async (req, res) => {
  try {
    const data = await dashboardModel.getDashboard();
    const categoryStatus = await dashboardModel.getCategoryStatus();

    const summary = {
      positif: data.all.filter((d) => d.sentiment === "positif").length,
      netral: data.all.filter((d) => d.sentiment === "netral").length,
      negatif: data.all.filter((d) => d.sentiment === "negatif").length,
    };

    res.render("dashboard", {
      title: "Dashboard",
      layout: "layouts/main",
      labels: data.labels,
      positifData: data.positifData,
      netralData: data.netralData,
      negatifData: data.negatifData,
      summary,
      activity: data.activity,
      categoryStatus,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

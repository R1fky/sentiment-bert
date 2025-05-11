import * as dashboardModel from "../models/dashboardModel.js";

export const showDashboard = async (req, res) => {
  try {
    const data = await dashboardModel.getDashboard();

    const summary = {
      positif: data.all.filter((d) => d.sentiment === "positif").length,
      netral: data.all.filter((d) => d.sentiment === "netral").length,
      negatif: data.all.filter((d) => d.sentiment === "negatif").length,
    };

    res.render("dashboard", {
      title: "Dashboard Page",
      layout: "layouts/main",
      labels: data.labels,
      positifData: data.positifData,
      netralData: data.netralData,
      negatifData: data.negatifData,
      summary,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// export const showDashboard = async (req, res) => {
//   try {
//     const { labels, positifData, netralData, negatifData } = await dashboardModel.getDashboard();
//     res.render("dashboard", {
//       title: "Dashboard",
//       layout: "layouts/main",
//       labels,
//       positifData,
//       netralData,
//       negatifData,
//     });
//   } catch (error) {
//     console.error("Error fetching dashboard data:", error);
//   }
// };

import axios from "axios";

export const getDashboardFromFlask = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5000/api/sentiment-summary");
    const sentimentCount = response.data;
    res.render("dashboard", {
      title: "Dashboard Page",
      layout: "layouts/main",
      sentimentCount : sentimentCount,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Gagal Konek API Flask", error.message);
    }
    res.json({
      message: "Gagal ambil data dari API Flask",
      error: error.message,
    });
  }
};

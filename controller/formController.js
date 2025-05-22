import * as formModel from "../models/formModel.js";
export const getAllQuestion = async (req, res) => {
  try {
    const questions = await formModel.getQuestion();
    res.render("formMhs", {
      title: "Form Question",
      questions,
      layout: "layouts/main",
    });
  } catch (error) {
    console.log(error);
  }
};

export const submitForm = async (req, res) => {
  const insertedAnswers = await formModel.submitForm(req.body);
  try {
    res.status(201).json({
      success: true,
      sentiment: insertedAnswers,
      message: "Submit Success",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const showSentimentUser = async (req, res) => {
  try {
    const { nama, email, nim } = req.query;
    const data = await formModel.getSentimentUser(nama, email, nim);

    // Hitung jumlah sentimen
    const sentimentCounts = {
      positif: data.filter((d) => d.sentiment === "positif").length,
      netral: data.filter((d) => d.sentiment === "netral").length,
      negatif: data.filter((d) => d.sentiment === "negatif").length,
    };

    res.render("sentimentUser", {
      title: "Sentimen User",
      layout: "layouts/main",
      data,
      sentimentCounts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};


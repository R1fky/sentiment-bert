import * as questionModel from "../models/questionModel.js";

export const showQuestion = async (req, res) => {
  try {
    const questions = await questionModel.getQuestion();
    res.render("question", {
      title: "Question Page",
      questions,
      layout: "layouts/main",
    });
  } catch (error) {
    console.log(error);
  }
};

export const addQuestion = async (req, res) => {
  const newQuestion = await questionModel.addQuestion(req.body);
  try {
    if (req.header["content-type"] === "application/json") {
      return res.json({
        status: "success",
        message: "Pertanyaan berhasil ditambahkan",
        questions: newQuestion,
      });
    }
  } catch (error) {
    console.error(error);
    if (req.headers["content-type"] === "application/json") {
      return res.status(500).json({
        success: false,
        message: "Gagal menambahkan pertanyaan",
        error: error.message,
      });
    }
  }
};

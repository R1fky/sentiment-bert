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
  try {
    const newQuestion = await questionModel.addQuestion(req.body);

    if (req.is("application/json")) {
      return res.status(200).json({
        success: true,
        message: "Berhasil menambahkan pertanyaan",
        questions : newQuestion 
        // questions: await questionModel.getQuestion(newQuestion.id),
      });
    } else {
      return res.redirect("/question");
    }
  } catch (error) {
    console.error(error);
    if (req.is("application/json")) {
      return res.status(500).json({
        success: false,
        message: "Gagal menambahkan pertanyaan",
        error: error.message,
      });
    } else {
      res.status(500).send("Gagal menambahkan pertanyaan.");
    }
  }
};

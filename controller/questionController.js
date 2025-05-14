import * as questionModel from "../models/questionModel.js";

export const showQuestion = async (req, res) => {
  try {
    const questions = await questionModel.getQuestion();
    const questions_category = await questionModel.getAllCategories();

   
    // if (!user) {
    //   return res.redirect("/");
    // }
    res.render("question", {
      title: "Question Page",
      layout: "layouts/main",
      questions,
      questions_category,
    });
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const filterQuestion = async (req, res) => {
  const questions = await questionModel.filterQuestion(req.params);
  const questions_category = await questionModel.getAllCategories();

  res.render("question", {
    title: `${req.params.question_category}`,
    layout: "layouts/main",
    questions,
    questions_category,
  });
};

export const createQuestion = async (req, res) => {
  try {
    await questionModel.addQuestion(req.body);
    res.status(200).json({
      success: true,
      message: "Question Baru di Tambahkan",
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Question Baru di Tambahkan",
    });
  }
};

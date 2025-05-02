import * as questionModel from "../models/questionModel.js";

export const showQuestion = async (req, res) => {
  const questions = await questionModel.getQuestion();
  const questions_category = await questionModel.getAllCategories();

  res.render("question", {
    title: "Question Page",
    layout: "layouts/main",
    questions,
    questions_category
  });
};

export const filterQuestion = async (req, res) => {
  const questions = await questionModel.filterQuestion(req.params);
  const questions_category = await questionModel.getAllCategories();

  res.render("question", {
    title: `${req.params.question_category}`,
    layout: "layouts/main",
    questions,
    questions_category
  });
};

export const createQuestion = async (req, res) => {
  await questionModel.addQuestion(req.body);
  res.redirect("/question");
};

import * as questionModel from "../models/questionModel.js";

export const getQuestions = async (req, res) => {
  try {
    const questions = await questionModel.getQuestion();
    res.render("question", {
      layout : 'layouts/main',
      questions,
    });
  } catch (error) {
    console.log(error);
  }
};

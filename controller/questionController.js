
import * as questionModel from "../models/questionModel.js";

export const showQuestion = async (req, res) => {
  try {
    const questions = await questionModel.getQuestion();
    res.render("question", {
      title : "Question Page",
      questions,
      layout : 'layouts/main',
    });
  } catch (error) {
    console.log(error);
  }
};

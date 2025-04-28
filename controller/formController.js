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

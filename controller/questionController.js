import * as questionModel from "../models/questionModel.js";

export const showQuestion = async (req, res) => {
  try {
    const questions = await questionModel.getQuestion();
    const questions_category = await questionModel.getAllCategories();
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
    const { question_text, category, answer_type } = req.body;
    if (!Array.isArray(question_text)) {
      return res.status(400).json({
        success: false,
        message: "Invalid input format",
      });
    }
    // const questionsToAdd = question_text.map((text, index) => ({
    //   question_text: text,
    //   question_type: answer_type[index] || "radio",
    //   question_category: category[index],
    // }));

    // debug
    const questionsToAdd = question_text.map((text, index) => {
      const cat = category[index];
      if (!cat) {
        throw new Error(`Kategori tidak ditemukan untuk pertanyaan ke-${index + 1}`);
      }

      return {
        question_text: text,
        question_type: answer_type[index] || "radio",
        question_category: cat,
      };
    });
    // console.log("Data yang dikirim ke database:", questionsToAdd);

    await questionModel.addQuestion(questionsToAdd);

    res.status(200).json({
      success: true,
      message: "Question Baru di Tambahkan",
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Question Gagal di Tambahkan",
      error: error.message,
    });
  }
};

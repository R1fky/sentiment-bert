import * as formsModel from "../models/formsModel.js";

export const listForms = async (req, res) => {
  try {
    const forms = await formsModel.listForms();
    res.render("forms/index", {
      title: "List Forms",
      layout: "layouts/main",
      forms: forms,
    });
  } catch (error) {
    res.status(400).json({
      message: "Internal Server Error",
    });
  }
};

export const addForms = (req, res) => {
  res.render("forms/addForms", {
    title: "Buat Formulir baru",
    layout: "layouts/main",
  });
};

export const addFormsQuestions = async (req, res) => {
  try {
    const { title, description, questions, category, types } = req.body;

    if (!Array.isArray(questions) || !title) {
      return res.status(400).json({ message: "Data tidak lengkap" });
    }

    await formsModel.addFormsWithQuestions(title, description, questions, category, types);

    res.status(200).json({ message: "Berhasil" });
  } catch (error) {
    console.error("Gagal menyimpan form:", error);
    res.status(500).json({ message: "Gagal menyimpan form" });
  }
};

export const getFormDetail = async (req, res) => {
  try {
    const formId = parseInt(req.params.id);

    const form = await formsModel.getFormDetailId(formId);

    if (!form) {
      res.status(400).json({
        message: "Formulir tidak ditemukan",
      });
    }

    const pertanyaanRekapSentiment = form.questions.map((q) => {
      const counts = {
        positif: 0,
        netral: 0,
        negatif: 0,
      };

      q.answer.forEach((ans) => {
        if (ans.sentiment && counts.hasOwnProperty(ans.sentiment)) {
          counts[ans.sentiment]++;
        }
      });

      return {
        id: q.id,
        question_text: q.question_text,
        question_category: q.question_category,
        question_type: q.question_type,
        sentiments: counts,
        totalJawaban: q.answer.length,
      };
    });

    res.render("forms/detailForms", {
      title: `Detail form - ${form.title}`,
      layout: "layouts/main",
      form,
      pertanyaanRekapSentiment,
    });
  } catch (error) {
    console.error("Gagal menampilkan detail : ", error);
    res.status(500).json({ message: "Gagal Menampilkan detail" });
  }
};

import * as formsModel from "../models/formsModel.js";
import PDFDocument from "pdfkit";
import ExcelJS from "exceljs";

import csv from "csv-parser";
import { Readable } from "stream";

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

// delete forms
export const deleteForms = async (req, res) => {
  try {
    const formId = parseInt(req.params.id);
    await formsModel.deleteForm(formId);
    res.status(200).json({ message: "Form Bergasil di hapus" });
  } catch (error) {
    res.status(404).json({
      message: "Form Tidak di Temukan",
      error: error,
    });
  }
};

//import question pdf
export const importQuestions = async (req, res) => {
  const formId = parseInt(req.body.formId);
  const results = [];

  if (!req.file) {
    return res.status(400).json({ message: "File CSV tidak ditemukan." });
  }

  try {
    const stream = Readable.from(req.file.buffer);
    stream
      .pipe(csv())
      .on("data", (row) => {
        if (row.question_text) {
          results.push({
            formId: formId,
            question_text: row.question_text.trim(),
            question_type: "radio",
          });
        }
      })
      .on("end", async () => {
        if (results.length === 0) {
          return res.status(400).json({ message: "Data kosong atau tidak valid." });
        }

        // Pindahkan ke model
        await formsModel.importQuestionsToDB(results);
        res.json({ message: `${results.length} pertanyaan berhasil diimport.` });
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal mengimpor pertanyaan.", error: err });
  }
};

// eksport
export const exportToPDF = async (req, res) => {
  const formId = parseInt(req.params.formId);

  try {
    const form = await formsModel.getFormDetailId(formId);
    if (!form) {
      return res.status(404).json({ message: "Form tidak ditemukan" });
    }

    const doc = new PDFDocument({ margin: 50, size: "A4" });

    // Response header
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=laporan_form_${formId}.pdf`);

    // Pipe stream
    doc.pipe(res);

    // Judul Formulir
    doc.fontSize(16).text(`Laporan Sentimen - ${form.title}`, { align: "center" }).moveDown(1);
    doc
      .fontSize(12)
      .text(`Deskripsi: ${form.description || "Tidak ada deskripsi"}`)
      .moveDown(1);

    // Tabel Ringkasan
    form.questions.forEach((q, index) => {
      const total = q.answer.length;
      const positif = q.answer.filter((a) => a.sentiment === "positif").length;
      const netral = q.answer.filter((a) => a.sentiment === "netral").length;
      const negatif = q.answer.filter((a) => a.sentiment === "negatif").length;

      doc.font("Helvetica-Bold").text(`${index + 1}. ${q.question_text}`);
      doc.font("Helvetica").text(`Total Jawaban: ${total}`);
      doc.text(`• Positif: ${positif}`);
      doc.text(`• Netral : ${netral}`);
      doc.text(`• Negatif: ${negatif}`);
      doc.moveDown();
    });

    doc.end();
  } catch (error) {
    console.error("Gagal ekspor PDF:", error);
    res.status(500).json({ message: "Gagal mengekspor PDF" });
  }
};

// eskport execel 
export const exportToExcel = async (req, res) => {
  const formId = parseInt(req.params.formId);

  try {
    const form = await formsModel.getFormDetailId(formId);
    if (!form) return res.status(404).json({ message: "Formulir tidak ditemukan." });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(`Laporan Form ${formId}`);

    // Header
    worksheet.columns = [
      { header: "No", key: "no", width: 5 },
      { header: "Pertanyaan", key: "question_text", width: 50 },
      { header: "Tipe", key: "question_type", width: 15 },
      { header: "Total Jawaban", key: "total", width: 15 },
      { header: "Positif", key: "positif", width: 10 },
      { header: "Netral", key: "netral", width: 10 },
      { header: "Negatif", key: "negatif", width: 10 },
    ];

    // Data
    form.questions.forEach((q, index) => {
      const total = q.answer.length;
      const positif = q.answer.filter((a) => a.sentiment === "positif").length;
      const netral = q.answer.filter((a) => a.sentiment === "netral").length;
      const negatif = q.answer.filter((a) => a.sentiment === "negatif").length;

      worksheet.addRow({
        no: index + 1,
        question_text: q.question_text,
        question_type: q.question_type,
        total,
        positif,
        netral,
        negatif,
      });
    });

    // Format header
    worksheet.getRow(1).font = { bold: true };

    // Set response
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", `attachment; filename=laporan_form_${formId}.xlsx`);

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("Gagal ekspor Excel:", error);
    res.status(500).json({ message: "Gagal mengekspor Excel" });
  }
};  

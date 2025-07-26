import * as formMhsModel from "../models/formMhsModel.js";
import axios from "axios";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

export const listFormMhs = async (req, res) => {
  try {
    const formList = await formMhsModel.listForm();
    res.render("mhs/listFormMhs", {
      title: "List Form Mahasiswa",
      layout: "layouts/main",
      formList,
    });
  } catch (error) {
    res.status(400).json({
      message: "Server Error",
      error: error,
    });
  }
};

export const showFormMhs = async (req, res) => {
  try {
    const formId = parseInt(req.params.id);
    const form = await formMhsModel.getKuesioner(formId);

    if (!form) {
      console.error("Formulir tidak ditemukan", error);
    }

    res.render("mhs/formulir", {
      title: `Isi Kuesioner - ${form.title}`,
      layout: "layouts/main",
      form,
    });
  } catch (error) {
    console.error("failed no forms", error);
  }
};

export const submitFormMhs = async (req, res) => {
  try {
    const { formId, nama, nim, email, answers } = req.body;

    //cek user apakah sudah pernah isi
    const existingUser = await prisma.answer.findFirst({
      where: {
        question: {
          formId: Number(formId),
        },
        nim: nim,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Anda Sudah Pernah Isi Kuesioner ini",
      });
    }
    //lanjutkan jika belum pernah isi
    const insertedAnswers = await formMhsModel.submitForm({ formId, nama, nim, email, answers });

    const radioOptionsMap = {
      1: "Sangat Puas",
      2: "Puas",
      3: "Netral",
      4: "Tidak Puas",
      5: "Sangat Tidak Puas",
    };

    //kirim pada flask
    const payload = {
      answers: insertedAnswers.map((answer) => {
        const convertText = radioOptionsMap[answer.answer_text] || answer.answer_text;
        return {
          id: answer.id,
          text: convertText,
        };
      }),
    };
    console.log(payload)

    const response = await axios.post("http://localhost:5000/predict", payload);

    // Flask mengembalikan array
    const results = response.data;

    // Update satu per satu berdasarkan ID
    for (const result of results) {
      await prisma.answer.update({
        where: { id: result.id },
        data: {
          preProcess_text: result.preprocessed_text,
          sentiment: result.sentiment,
        },
      });
    }

    return res.status(200).json({
      success: true,
      message: "Berhasil Submit kuesioner",
      nim: nim,
    });
  } catch (error) {
    console.error("Failed To Submit", error);
    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
};

export const resultKuesionerMhs = async (req, res) => {
  const { nim } = req.params;

  try {
    const hasil = await prisma.answer.findMany({
      where: { nim: nim },
      include: {
        question: true,
      },
      orderBy: {
        questionId: "asc",
      },
    });

    // hitung hasil sentiment
    const sentimentCounts = {
      positif: hasil.filter((h) => h.sentiment === "positif").length,
      netral: hasil.filter((h) => h.sentiment === "netral").length,
      negatif: hasil.filter((h) => h.sentiment === "negatif").length,
    };

    res.render("mhs/hasilSentimen", {
      title: `Hasil Sentimen Anda - ${nim}`,
      layout: "layouts/main",
      hasil,
      sentimentCounts,
    });
  } catch (error) {
    console.error("Gagal Menampilkan Hasil Sentiment", error);
  }
};

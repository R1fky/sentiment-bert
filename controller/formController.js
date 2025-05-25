import * as formModel from "../models/formModel.js";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();
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

//secret key untuk generate signature
const SECRET_KEY = process.env.SECRET_KEY || "a98d3faea1c409d2a99a9e88d7541a2b3d928f0d3dcb2c7c2497331edc3fc7e1";

function generateSignature(nama, email, nim) {
  const data = `${nama}|${email}|${nim}`;
  return crypto.createHmac("sha256", SECRET_KEY).update(data).digest("hex");
}

export const showSentimentUser = async (req, res) => {
  try {
    const { nama, email, nim, sig } = req.query;

    if (!nama || !email || !nim || !sig) {
      return res.status(400).send("Missing query parameters");
    }

    // Validasi sederhana
    if (!/^[a-zA-Z\s]+$/.test(nama)) {
      return res.status(400).send("Invalid nama");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).send("Invalid email");
    }
    if (!/^\d+$/.test(nim)) {
      return res.status(400).send("Invalid nim");
    }
    // Verifikasi signature
    const expectedSig = generateSignature(nama, email, nim);
    if (sig !== expectedSig) {
      return res.status(403).send("Unauthorized request");
    }

    const data = await formModel.getSentimentUser(nama, email, nim);

    // Hitung jumlah sentimen
    const sentimentCounts = {
      positif: data.filter((d) => d.sentiment === "positif").length,
      netral: data.filter((d) => d.sentiment === "netral").length,
      negatif: data.filter((d) => d.sentiment === "negatif").length,
    };

    res.render("sentimentUser", {
      title: "Sentimen User",
      layout: "layouts/main",
      data,
      sentimentCounts,
    });
  } catch (error) {
    console.error("🔥 ERROR in showSentimentUser:", error.message, error.stack);
    res.status(500).send("Internal Server Error");
  }
};

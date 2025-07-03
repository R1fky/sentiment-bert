import express from "express";
import * as formMhsController from "../controller/formMhsController.js";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();

const SECRET_KEY = process.env.SECRET_KEY || "a98d3faea1c409d2a99a9e88d7541a2b3d928f0d3dcb2c7c2497331edc3fc7e1";

router.get("/", formMhsController.listFormMhs);
router.get("/:id/isi", formMhsController.showFormMhs);
//simpan jawaban kuesioner mahasiswa
router.post("/submitForm", formMhsController.submitFormMhs);

// hasil sentimen submit
router.get("/hasil/:nim", formMhsController.resultKuesionerMhs);

// router.post("/submitForm", formController.submitForm);
// router.get("/sentimenUser", formController.showSentimentUser);
// // generate-signature
// router.post("/generate-signature", (req, res) => {
//   const { nama, email, nim } = req.body;

//   if (!nama || !email || !nim) {
//     return res.status(400).json({ error: "Missing parameters" });
//   }

//   if (!SECRET_KEY) {
//     return res.status(500).json({ error: "Server misconfiguration: SECRET_KEY not set" });
//   }

//   const data = `${nama}|${email}|${nim}`;
//   const signature = crypto.createHmac("sha256", SECRET_KEY).update(data).digest("hex");

//   res.json({ signature });
// });
export default router;

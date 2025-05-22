import express from "express";
import * as formController from "../controller/formController.js";
const router = express.Router();

router.get("/", formController.getAllQuestion);
router.post("/submitForm", formController.submitForm);
router.get("/sentimenUser", formController.showSentimentUser);

export default router;

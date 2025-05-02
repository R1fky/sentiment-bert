import express from "express";
import * as questionController from "../controller/questionController.js";

const router = express.Router();

router.get("/", questionController.showQuestion);
router.get("/filter/:question_category", questionController.filterQuestion);
router.post("/question-add", questionController.createQuestion);

export default router;

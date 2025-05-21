import express from "express";
import * as asnwersController from "../controller/answersController.js";
const router = express.Router();

router.get("/analyzeBatch", asnwersController.analyzeUnprocessedAnswers);

export default router;

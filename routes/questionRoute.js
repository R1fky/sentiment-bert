import express from "express";
const router = express.Router();

import * as questionController from "../controller/questionController.js";

router.get("/", questionController.showQuestion);
router.post('/addQuestion', questionController.addQuestion);

export default router;
    
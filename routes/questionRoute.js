import express from "express";
import * as questionController from "../controller/questionController.js";
import * as auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", questionController.showQuestion);

router.get("/filter/:question_category", questionController.filterQuestion);

router.get("/add-question", (req, res) => {
  res.render("pages/addQuestion", {
    title: "Add Question",
    layout: "layouts/main",
  });
});
router.post("/question-add", auth.authenticateJWT, questionController.createQuestion);

// delete
router.get('/delete/:id', questionController.deleteQuestion)

export default router;

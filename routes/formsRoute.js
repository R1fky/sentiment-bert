import express from "express";
import * as formsController from "../controller/formsController.js";
const router = express.Router();

//middleware
import upload from "../middleware/upload.js";

router.get("/", formsController.listForms);

// add forms
router.get("/add", formsController.addForms);
router.post("/add", formsController.addFormsQuestions);

//detail form
router.get("/detail/:id", formsController.getFormDetail);

//delete form
router.post("/delete/:id", formsController.deleteForms);

//upload question
router.post("/import", upload.single("csvFile"), formsController.importQuestions);

// eksport
router.get("/export/pdf/:formId", formsController.exportToPDF);
router.get("/export/excel/:formId", formsController.exportToExcel);

export default router;

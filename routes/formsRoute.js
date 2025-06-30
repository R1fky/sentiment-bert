import express from "express";
import * as formsController from '../controller/formsController.js' 
const router = express.Router();

router.get('/', formsController.listForms)

// add forms
router.get('/add', formsController.addForms)
router.post('/add', formsController.addFormsQuestions)

//detail form
router.get('/detail/:id', formsController.getFormDetail)

export default router;

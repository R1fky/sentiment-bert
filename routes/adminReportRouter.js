import express from "express";
import * as adminReportController from "../controller/reportController.js";
const router = express.Router();

router.get("/", adminReportController.getTrends);
// router.get('/sentiment-trends', adminReportController.sentimentTrends)
export default router;  

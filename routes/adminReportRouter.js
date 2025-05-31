    import express from "express";
    import * as adminReportController from "../controller/reportController.js";
    const router = express.Router();

    router.get("/", adminReportController.getTrends);

    export default router;

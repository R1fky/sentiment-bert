import express from 'express';
const router = express.Router();
import * as dashboardController from '../controller/dashboardController.js';

router.get('/', dashboardController.showDashboard);


export default router;


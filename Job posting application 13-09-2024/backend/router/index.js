import express from 'express';
import jobRoutes from './jobRoutes.js';

const router = express.Router();

router.use('/jobs', jobRoutes);

export default router;
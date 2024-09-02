import express from 'express';
import formRouter from './formRouter.js';

const router = express.Router();

router.use('/url-shortener',formRouter);

export default router;
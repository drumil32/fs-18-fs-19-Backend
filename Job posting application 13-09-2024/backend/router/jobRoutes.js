import express from 'express';
import { createJob, deleteJobById, getAllJobs, updateJobById } from '../controllers/jobController.js';

const router = express.Router();

router.post('/', createJob);
router.put('/', updateJobById);
router.delete('/:id', deleteJobById);
router.get('/', getAllJobs);

export default router;
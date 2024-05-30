import express from 'express';
import { verifyToken } from '../utils/verifyToken.js';
import { deleteCloudinary } from '../controllers/coludinary.controller.js';

const router = express.Router();

router.delete('/delete', verifyToken, deleteCloudinary);

export default router;
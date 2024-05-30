import express from 'express';
import { deleteUser, getUser, getUsers, signOut, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signOut/:userId', signOut);
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser);






export default router;
import express from 'express';
import { verifyToken } from '../utils/verifyToken.js';
import { createComment, deleteComment, editComment, getComments, getPostComments, likeComments } from '../controllers/commentContoller.js';



const router = express.Router();


router.post('/create', verifyToken, createComment);
router.get('/getpostcomments/:postId', getPostComments);
router.put('/likecomments/:commentId', verifyToken, likeComments);
router.put('/editcomment/:commentId', verifyToken, editComment);
router.delete('/deletecomment/:commentId', verifyToken, deleteComment);
router.get("/getcomments", verifyToken, getComments);

export default router;



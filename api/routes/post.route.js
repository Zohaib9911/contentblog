import express from 'express';
import { verifyToken } from '../utils/verifyToken.js';
import { create, deletePost, getPosts, postLikes, updatePost } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getposts', getPosts);
router.delete('/deletepost/:postId/:userId', verifyToken, deletePost);
router.put('/updatepost/:postId', verifyToken, updatePost);


router.post('postlikes/:postId', verifyToken, postLikes);

export default router;
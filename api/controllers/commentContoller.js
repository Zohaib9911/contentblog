import Commnet from "../models/comment.model.js"
import { errorHandler } from "../utils/error.js";


export const createComment = async (req, res, next) => {

  try {
    const { content, postId, userId } = req.body;
    if (userId !== req.user.id) {
      return next(errorHandler(403, "You are not allowed to create Comment"))
    }
    const newComment = new Commnet({
      content,
      postId,
      userId
    })
    await newComment.save();
    res.status(200).json(newComment);
  } catch (error) {
    next(error)
  }
}


export const getPostComments = async (req, res, next) => {

  try {
    const comments = await Commnet.find({ postId: req.params.postId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    next(error)
  }
};

export const likeComments = async (req, res, next) => {

  try {
    const comment = await Commnet.findById(req.params.commentId);
    if (!comment) {
      return next(errorHandler(404, "Comment not found"))
    }
    const userIndex = comment.likes.indexOf(req.user.id);
    if (userIndex === -1) {
      comment.numberOfLikes += 1;
      comment.likes.push(req.user.id)
    } else {
      comment.numberOfLikes -= 1;
      comment.likes.splice(userIndex, 1)
    }
    await comment.save();
    res.status(200).json(comment);
  } catch (error) {
    next(error)
  }

};


export const editComment = async (req, res, next) => {

  try {
    const comment = await Commnet.findById(req.params.commentId);
    if (!comment) {
      return next(errorHandler(403, "Comment Not found"))
    }
    if (comment.userId !== req.user.id && req.user.isAdmin) {
      return next(errorHandler(403, "You are not allowed to edit this comment"))
    }

    const editedComment = await Commnet.findByIdAndUpdate(req.params.commentId, {
      content: req.body.content,
    }, { new: true })

    res.status(200).json(editedComment);

  } catch (error) {
    next(error)
  }
};

export const deleteComment = async (req, res, next) => {

  try {
    const comment = await Commnet.findById(req.params.commentId);
    if (!comment) {
      return next(errorHandler(403, "Comment Not found"))
    }
    if (comment.userId !== req.user.id && !req.user.isAdmin) {
      return next(errorHandler(403, "You are not allowed to delete This comment"))
    };

    await Commnet.findByIdAndDelete(req.body.commentId)
    res.status(200).json("Comment Deleted")

  } catch (error) {

  }
}

export const getComments = async (req, res, next) => {

  if (!req.user.isAdmin) {
    return next(errorHandler(401, "You are not allowed to get all comments"))
  }
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const sortDirection = req.query.sort === "desc" ? -1 : 1;
    const comments = await Commnet.find().sort({ createdAt: sortDirection }).limit(limit).skip(startIndex);

    const totalComments = await Commnet.countDocuments();
    const now = new Date();

    const lastMonth = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthComments = await Commnet.countDocuments({
      createdAt: { $gte: lastMonth },
    });
    res.status(200).json({ comments, totalComments, lastMonthComments })

  } catch (error) {
    next(error)
  }
}


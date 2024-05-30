import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
      default: "https://firebasestorage.googleapis.com/v0/b/academic-b6371.appspot.com/o/Post%20Images%2FDesigner.png?alt=media&token=ac93aa37-eff7-42a7-9d93-a44f7d51a7e7"
    },
    category: {
      type: String,
      default: 'all',

    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    commentContent: {
      type: String,
    },
    postLikes: {
      type: Array,
      default: [],
    },
    numberOfLikes: {
      type: Number,
      default: 0,
    },

  },
  {
    timestamps: true
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
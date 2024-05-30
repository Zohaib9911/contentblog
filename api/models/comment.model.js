import mongoose from "mongoose";

const ccommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  likes: {
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

  });

const Commnet = mongoose.model("Comment", ccommentSchema)
export default Commnet;
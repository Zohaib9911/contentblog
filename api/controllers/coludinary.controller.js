// import User from "../models/users.js";
// import bcryptjs from 'bcryptjs';
// import { errorHandler } from "../utils/error.js";
// import jwt from 'jsonwebtoken';

export const deleteCloudinary = async (req, res) => {
  const { public_id } = req.body;

  try {
    const result = await cloudinary.uploader.destroy(public_id);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}
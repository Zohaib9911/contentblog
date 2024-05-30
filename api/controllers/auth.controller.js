import User from "../models/users.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    return next(errorHandler(400, "All Fields are require"))
  }

  const hashpassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashpassword,
  });

  try {
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRET,
    );

    const { password: pas, ...rest } = newUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
    // res.json("signUp Successfull")
  } catch (error) {
    next(error)
  }


};


export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    return next(errorHandler(400, "All Fields are require"))
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "User Not Found"))
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "User Not Found"))
    }

    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET,
    );

    const { password: pas, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { name, email, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET,
      );
      const { password, ...rest } = user._doc;
      res.status(200).cookie('access_token', token, {
        httpOnly: true,
      }).json(rest);
    } else {
      const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const hashpassword = bcryptjs.hashSync(generatePassword, 10);

      const newUser = new User({
        username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
        email,
        password: hashpassword,
        profilePicture: googlePhotoUrl

      });
      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET,
      );
      const { password, ...rest } = newUser._doc;

      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error)
  }

}
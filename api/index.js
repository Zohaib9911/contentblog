import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.routes.js';
import userRoute from './routes/user.routes.js';
import postRoute from './routes/post.route.js';
import commentRoute from './routes/comment.route.js';
import cloudinaryRoute from './routes/cloudinary.route.js';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';
import path from 'path';

dotenv.config();

cloudinary.config({
  cloud_name: 'dq6ugret',
  api_key: '756767966522997',
  api_secret: 'VilSbLH7TpbKxH_dhFaX2R5qPfo',
});


mongoose.connect(process.env.MONGO).then(() => {
  console.log("MongoDb is Connected")
}).catch((error) => {
  console.log(error)
})

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());


app.listen(4000, () => {
  console.log('Express Is working on 4000')
})


app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/api/comment', commentRoute);
app.use('/api/cloudinary', cloudinaryRoute);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "intenal Server Error"
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
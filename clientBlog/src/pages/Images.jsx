import axios from 'axios';
import React, { useState } from 'react';

export default function Images() {
  const [imageFileUrls, setImageFileUrls] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = async (event) => {
    const files = Array.from(event.target.files);
    const uploadPromises = files.map(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'newBlog'); // Replace with your actual upload preset

      return axios.post(
        'https://api.cloudinary.com/v1_1/dq6ugretn/image/upload', // Replace 'your_cloud_name' with your Cloudinary cloud name
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
    });

    setUploading(true);

    try {
      const responses = await Promise.all(uploadPromises);
      const urls = responses.map(res => res.data.secure_url);
      setImageFileUrls(urls);
    } catch (error) {
      console.error('Error uploading the images', error);
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className=' mt-[70px]'>
      <div>
        <input type="file" onChange={handleImageChange} multiple />
        {uploading && <p>Uploading...</p>}
        {imageFileUrls.length > 0 && (
          <div className=' w-[300px]'>
            {imageFileUrls.map((url, index) => (
              <img key={index} src={url} alt={`Uploaded ${index + 1}`} />
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

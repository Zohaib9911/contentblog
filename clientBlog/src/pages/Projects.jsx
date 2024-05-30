import React, { useState } from 'react';
import axios from 'axios';

export default function Projects() {

  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  console.log(imageFileUrl)

  const handleImageChange = async (e) => {



    const file = e.target.files[0];
    if (file) {
      setImageFile(file);

      // Create a FormData object to hold the file
      const formData = new FormData();
      // formData.append('file', file);
      formData.append('file', file);
      formData.append('upload_preset', 'newBlog'); // Replace with your upload preset

      setUploading(true);

      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/dq6ugretn/image/upload`, // Replace 'your_cloud_name' with your Cloud name
          formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
        );

        const data = res.data;
        console.log(data);

        const imageUrl = res.data.secure_url;
        setImageFileUrl(imageUrl);

        setUploading(false);
      } catch (error) {
        console.error('Error uploading the image', error);
        setUploading(false);
      }
    }
  }

  return (
    <div className='mt-[70px]'>
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {uploading && <p>Uploading...</p>}
        {imageFileUrl && <img src={imageFileUrl} alt="Uploaded" />}
      </div>
    </div>
  )
}

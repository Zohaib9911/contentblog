import axios from 'axios';
import React, { useState } from 'react';

export default function DeleteCloudinary() {
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
      const urls = responses.map(res => ({
        secure_url: res.data.secure_url,
        public_id: res.data.public_id,
      }));
      setImageFileUrls(urls);
    } catch (error) {
      console.error('Error uploading the images', error);
    } finally {
      setUploading(false);
    }
  };

  // await axios.delete('http://localhost:4000/api/cloudinary/delete', {
  //   data: { public_id },
  // });

  const handleDeleteImage = async (public_id) => {
    try {
      const res = await fetch(`/api/cloudinary/delete`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ public_id }),
      });

      setImageFileUrls(prevUrls => prevUrls.filter(url => url.public_id !== public_id));
    } catch (error) {
      console.error('Error deleting the image', error);
    }
  };

  return (
    <div className=' mt-[70px]'>
      <div>
        <input type="file" onChange={handleImageChange} multiple />
        {uploading && <p>Uploading...</p>}
        {imageFileUrls.length > 0 && (
          <div>
            {imageFileUrls.map(({ secure_url, public_id }, index) => (
              <div key={index}>
                <img src={secure_url} alt={`Uploaded ${index + 1}`} />
                <button onClick={() => handleDeleteImage(public_id)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

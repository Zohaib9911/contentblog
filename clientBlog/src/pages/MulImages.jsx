import React, { useReducer, useRef, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ImageUploader = ({ app }) => {
  // State to hold image files
  const [imageFile, setImageFile] = useState(null);
  // State to hold image URLs
  const [imageUrls, setImageUrls] = useState({});
  // State to track upload progress
  const [uploadProgress, setUploadProgress] = useState(0);
  // State to track if an image is currently being uploaded
  const [isUploading, setIsUploading] = useState(false);

  const filePickerRef = useRef();

  console.log(imageUrls)

  // Function to handle image file selection and upload
  const handleImageChange = async (e, locationKey) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      await uploadImage(locationKey, file);
    }
  };

  // Function to upload image to Firebase and update state with URL
  const uploadImage = async (locationKey, file) => {
    setIsUploading(true);
    const storage = getStorage(app);
    const fileName = `${new Date().getTime()}_${file.name}`;
    const storageRef = ref(storage, `images/${locationKey}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress.toFixed(0));
      },
      (error) => {
        console.error("Error uploading image:", error);
        setIsUploading(false);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImageUrls(prevUrls => ({ ...prevUrls, [locationKey]: downloadURL }));
        } catch (urlError) {
          console.error("Error getting download URL:", urlError);
        }
        setIsUploading(false);
      }
    );
  };

  // Function to render an image by its location key
  const renderImage = (locationKey) => {
    const imageUrl = imageUrls[locationKey];
    return imageUrl ? <img
      src={imageUrl}
      alt={locationKey}
    // style={{ width: '100px', height: '100px' }} 
    /> : null;
  };

  return (
    <div className=' flex flex-col gap-5'>
      <div>

        {/* 
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 'profile')}
          ref={filePickerRef}
          hidden
        /> */}
        <div
          className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onClick={() => filePickerRef.current.click()}
        >
          {uploadProgress && (
            <CircularProgressbar
              value={uploadProgress || 0}
              text={`${uploadProgress}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62, 152, 199, ${uploadProgress / 100
                    })`,
                },
              }}
            />
          )}
          {renderImage('profile')}

        </div>
      </div>


      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 'banner')}
          ref={filePickerRef}
          hidden
        />
        <div
          className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onChange={(e) => handleImageChange(e, 'banner')}
        >
          {uploadProgress && (
            <CircularProgressbar
              value={uploadProgress || 0}
              text={`${uploadProgress}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62, 152, 199, ${uploadProgress / 100
                    })`,
                },
              }}
            />
          )}
          {renderImage('banner')}

        </div>
      </div>






      {/* Input for profile image */}
      <input type="file" onChange={(e) => handleImageChange(e, 'newprofile')} disabled={isUploading} />
      {/* Display profile image */}
      <div>

        {renderImage('newprofile')}
      </div>

      {/* Input for banner image */}
      <input type="file" onChange={(e) => handleImageChange(e, 'banner')} disabled={isUploading} />
      {/* Display banner image */}
      <div>

        {renderImage('banner')}
      </div>

      {/* Upload progress */}

      {isUploading && <div>Uploading: {uploadProgress}%</div>}

      {/* Add more image inputs and render functions as needed */}
    </div>
  );
};

export default ImageUploader;


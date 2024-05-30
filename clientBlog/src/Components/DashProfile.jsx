import { Alert, Button, Modal, TextInput } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'; import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { updateStart, updateSuccess, updateFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, signOuteSuccess } from '../redux/user/userSlice';
import { Link } from 'react-router-dom';
import SignOutModel from './SignOutModel';

export default function DashProfile() {

  const { currentUser } = useSelector((state) => state.user);
  const filePickerRef = useRef();
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState();
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const [signOutModelOpen, setSignOutModelOpen] = useState(false);




  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));

    }
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile])

  const uploadImage = async () => {
    setImageFileUploading(true);
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          "Could not upload image (File must be less than 2MB)"
        );
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
        setImageFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setFormData({ ...formData, profilePicture: downloadURL });
          setImageFileUploading(false);
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateUserError(null);
    setUpdateUserSuccess(null);
    if (Object.keys(formData).length === 0) {
      setUpdateUserError("No CHnages Made")
      return;
    }
    if (imageFileUploading) {
      setUpdateUserError("Image is Uploading")
      return;
    }

    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
      );

      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data));
        setUpdateUserError(data.mesaage)
      } else {
        dispatch(updateSuccess(data));
        setUpdateUserSuccess("User SuccessFully Update")
      }
    } catch (error) {
      dispatch(updateFailure(error.mesaage));
      setUpdateUserError(error.mesaage)
    }
  };

  const handleDeleteUser = async () => {
    setShowModal(false);
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(deleteUserFailure(data.mesaage))
      }
      if (res.ok) {
        dispatch(deleteUserSuccess(data))
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.mesaage));
    }
  }

  // const handleOpneSignOut = () => {
  //   setSignOutModelOpen(true);
  // }

  const signOut = async () => {

    try {
      const res = await fetch(`/api/user/signOut/${currentUser._id}`, {
        method: 'POST'
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message)
      } else {
        dispatch(signOuteSuccess());
      }

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className=" max-w-lg mx-auto p-3 w-full">
      <h1 className=' my-7 text-center font-semibold text-3xl'>
        Profile
      </h1>
      <form className=' flex flex-col gap-4' onSubmit={handleSubmit} >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={filePickerRef}
          hidden
        />
        <div
          className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onClick={() => filePickerRef.current.click()}
        >
          {imageFileUploadProgress && (
            <CircularProgressbar
              value={imageFileUploadProgress || 0}
              text={`${imageFileUploadProgress}%`}
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
                  stroke: `rgba(62, 152, 199, ${imageFileUploadProgress / 100
                    })`,
                },
              }}
            />
          )}
          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt="user"
            className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${imageFileUploadProgress &&
              imageFileUploadProgress < 100 &&
              "opacity-60"
              }`}
          />
        </div>
        {imageFileUploadError && (
          <Alert color="failure">{imageFileUploadError}</Alert>
        )}
        <TextInput
          type='text'
          id='username'
          placeholder='username'
          defaultValue={currentUser.username}
          onChange={handleChange}
        />
        <TextInput
          type='email'
          id='email'
          placeholder='email'
          defaultValue={currentUser.email}
          onChange={handleChange}
        />
        <TextInput
          type='password'
          id='password'
          placeholder='*****'
          onChange={handleChange}
        />
        <Button type='submit'
          gradientDuoTone='purpleToBlue'
          outline

        >
          Update
        </Button>
        {currentUser.isAdmin && (
          <Link to={"/creat-post"}>
            <Button
              type="button"
              gradientDuoTone="purpleToPink"
              className="w-full"
            >
              Create a post
            </Button>
          </Link>
        )}
      </form>
      <div className=' text-red-500 flex justify-between mt-5'>
        <span className=' cursor-pointer' onClick={() => setShowModal(true)}>
          Delate Account
        </span>
        <div>
          <span className=' cursor-pointer' onClick={() => setSignOutModelOpen(true)} >
            Sign Out

          </span>

        </div>


      </div>
      {
        updateUserSuccess && (
          <Alert color='success' className=' mt-5'>
            {updateUserSuccess}
          </Alert>
        )
      }
      {
        updateUserError && (
          <Alert color='failure' className=' mt-5'>
            {updateUserError}
          </Alert>
        )
      }
      <SignOutModel
        show={signOutModelOpen}
        onClose={() => setSignOutModelOpen(false)}
        onClick={() => setSignOutModelOpen(false)}
        handleSignOut={signOut}
      />

      <div>

      </div>






    </div>
  )
}

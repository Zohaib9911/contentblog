import React, { useState } from 'react'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess, signInStart, signInFailure } from '../redux/user/userSlice';
import OAuth from '../Components/OAuth';


export default function Signin() {

  const [formdata, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value.trim() })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.email || !formdata.password) {
      return dispatch(signInFailure("Please fill all fields"))
    };

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
      };

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }

  return (
    <div className=' min-h-screen mt-[70px]'>
      <div className=' flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* Left */}
        <div className=' flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Academic
            </span>
            Valley
          </Link>
          <p className=' text-sm mt-5'>
            Academic Valley: A scholarly hub where all students craft, collaborate, and store theses securely. Experience tailored support and resources for academic excellence.
          </p>
        </div>
        {/* Right SIde */}
        <div className=' flex-1'>
          <form className=' flex flex-col gap-4' onSubmit={handleSubmit}>

            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@example.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='********'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}

            >
              {
                loading ? (
                  <>
                    <Spinner />
                    <span className=' pl-3'>Loading...</span>
                  </>
                ) :
                  (
                    'Sign In'
                  )
              }
            </Button>
            <OAuth />
          </form>
          <div className=' flex gap-2 text-sm mt-5'>
            <span>Don't Have an account?</span>
            <Link to='/sign-up' className=' text-blue-500'>
              Sign Up
            </Link>
          </div>

          {errorMessage && (
            <Alert className=' mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../Components/OAuth';
import { signInSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export default function SignUp() {

  const [formdata, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value.trim() })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.password) {
      return setError("Please Fill all fields")
    };

    try {
      setLoading(true)
      setError(null)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();

      if (data.success === false) {
        return setError(data.message)
      };
      setLoading(false);
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/')
      }
    } catch (error) {
      setError(error.message);
      setLoading(false)
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
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='username'
                id='username'
                onChange={handleChange}
              />
            </div>
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
                    'Sign Up'
                  )
              }
            </Button>
            <OAuth />
          </form>
          <div className=' flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className=' text-blue-500'>
              Sign in
            </Link>
          </div>

          {error && (
            <Alert className=' mt-5' color='failure'>
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}

import { Avatar, Button, Dropdown, Modal, Navbar, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { signOuteSuccess } from '../redux/user/userSlice';
import SignOutModel from './SignOutModel';


export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user)
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [signOutModelOpen, setSignOutModelOpen] = useState(false);
  const navigate = useNavigate();
  const [serachTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }

  }, [location.search])

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.serach);
    urlParams.set('searchTerm', serachTerm)
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`)
  }

  const handleTheme = () => {
    dispatch(toggleTheme());


  }

  const signOut = async () => {

    try {
      const res = await fetch(`/api/user/signOut/${currentUser._id}`, {
        method: 'POST'
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message)
      } else {
        setSignOutModelOpen(false);
        dispatch(signOuteSuccess());
        navigate('/sign-in');
      }

    } catch (error) {
      console.log(error.message)
    }
  }

  return (

    <Navbar className=' border-b-2 fixed z-20 top-0 start-0 w-full pb-0'>
      {/* This is Logo Section */}
      <Link
        to='/'
        className=''
      >
        <img className='w-[130px] h[50px] ' src="https://firebasestorage.googleapis.com/v0/b/academic-b6371.appspot.com/o/Homepage%2FScholor%20Education%20Logo%20.png?alt=media&token=68d304ba-7c44-413c-b03f-8b477dfb23c0" alt="Schelor Education Logo" />

      </Link>
      {/* We ceate a Form  */}
      <form onSubmit={handleSearchSubmit}>
        <TextInput
          type="text"
          aria-label="Search"
          icon={AiOutlineSearch}
          className=' hidden md:inline'
          value={serachTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className='w-12 h-10 md:hidden' color='gray' pill>
        {< AiOutlineSearch />}
      </Button>
      <div className=' flex gap-2 md:order-2'>

        <Button
          pill
          color='gray'
          className=' w-12 h-10 sm:inline hidden'
          onClick={handleTheme}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}

        </Button>
        {
          currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt='user' img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className=' block text-sm'>
                  @{currentUser.username}
                </span>
                <span className='block text-sm font-medium truncate'>
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item
                className='cursor-pointer'
                onClick={() => setSignOutModelOpen(true)}
              >Sign Out</Dropdown.Item>

            </Dropdown>
          ) : (
            <Link to='/sign-in'>
              <Button gradientDuoTone='purpleToBlue' outline>
                Sign In
              </Button>
            </Link>


          )}

        <Navbar.Toggle />
      </div >
      <Navbar.Collapse>
        <Navbar.Link className="active:text-primary " active={path === '/'} as={'div'}>
          <Link to='/' className=" active:text-primary">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <div>
        <SignOutModel
          show={signOutModelOpen}
          onClose={() => setSignOutModelOpen(false)}
          onClick={() => setSignOutModelOpen(false)}
          handleSignOut={signOut}
        />
      </div>
    </Navbar >

  )
}

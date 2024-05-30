import { Button, Modal, Sidebar } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { signOuteSuccess } from '../redux/user/userSlice';
import SignOutModel from './SignOutModel';

export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  const [signOutModelOpen, setSignOutModelOpen] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user)

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tatabFromUrlb = urlParams.get('tab');
    if (tatabFromUrlb) {
      setTab(tatabFromUrlb);
    }

  }, [location.search])

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
    <Sidebar className=' w-full md:w-56' >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile' >
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={currentUser.isAdmin ? 'Admin' : 'User'}
              labelColor='dark'
              as='div'
            >
              Profile
            </Sidebar.Item>
          </Link>
          {
            currentUser.isAdmin && (
              <>
                <Link to='/dashboard?tab=dash' >
                  <Sidebar.Item
                    active={tab === 'dash'}
                    icon={HiChartPie}
                    as='div'
                  >
                    Dashboard
                  </Sidebar.Item>
                </Link>

                <Link to='/dashboard?tab=posts' >
                  <Sidebar.Item
                    active={tab === 'posts'}
                    icon={HiDocumentText}
                    as='div'
                  >
                    Posts
                  </Sidebar.Item>
                </Link>

                <Link to='/dashboard?tab=users' >
                  <Sidebar.Item
                    active={tab === 'users'}
                    icon={HiOutlineUserGroup}
                    as='div'
                  >
                    Users
                  </Sidebar.Item>
                </Link>

                <Link to='/dashboard?tab=comments' >
                  <Sidebar.Item
                    active={tab === 'comments'}
                    icon={HiAnnotation}
                    as='div'
                  >
                    Comments
                  </Sidebar.Item>
                </Link>
              </>
            )
          }
          <Sidebar.Item
            icon={HiAnnotation}
            className='cursor-pointer'
            onClick={() => setSignOutModelOpen(true)}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>

      <SignOutModel
        show={signOutModelOpen}
        onClose={() => setSignOutModelOpen(false)}
        onClick={() => setSignOutModelOpen(false)}
        handleSignOut={signOut}
      />
    </Sidebar>
  )
}

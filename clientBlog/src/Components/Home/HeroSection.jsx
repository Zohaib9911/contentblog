import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaComments, FaSuitcase } from "react-icons/fa";
import ModelSubmit from '../ModelSubmit';

export default function HeroSection() {
  const [showModel, setShowModel] = useState(false);

  return (
    <>
      <div className="relative h-[750px] overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 opacity-10"></div>

        <div className='absolute inset-0 flex items-center py-[250px] animate-zoomIn'>


          <div className=' flex-1 mx-[100px]'>
            <h1 className=' text-7xl font-bold text-white'>Find Your <span className=' text-primary'>Perfect Expert</span> Now</h1>
            <p className='font-bold text-white py-[40px] text-3xl'>Start by sharing your deatils</p>
            <div className=' flex flex-row space-x-4 py-[20px]'>
              <Link to='/'  >
                <Button size='xl' color='' onClick={() => setShowModel(true)} className='flex flex-wrap bg-primary hover:bg-[#8970d0] text-white gap-2 animate-zoomIn'>
                  <FaComments className='mr-2 h-5 w-5' />
                  Get in Touch </Button>
              </Link>
              <Link to='/'>
                <Button color='' size='xl' className='flex flex-wrap bg-primary hover:bg-[#8970d0] text-white gap-2 animate-zoomIn'>
                  <FaSuitcase className='mr-2 h-5 w-5' />
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
          <div className=' flex-1 mx-auto'>
          </div>
        </div>
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/public/assets/Insomia.png')" }}>
        </div>
      </div>
      <ModelSubmit show={showModel} setShowModel={setShowModel} />
    </>
  )
}

import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaComments } from "react-icons/fa";

export default function ScholarEducation() {
  return (
    <div>
      <div className=' bg-[#D0C2E5]'>
        <div className=' flex items-center text-wrap text-left px-[80px]'>
          <div className=' flex-1'>
            <h2 className=' font-[600] text-primary text-[40px] '>Speak to someone now</h2>
            <p className=' text-gray-600 text-[16px] pt-[15px]'>Whether you’re ready to start your project or just looking around, give us a call. We’ll help you figure out the best option or solution to accomplish your goals.</p>

            <div className='pt-[15px]'>
              <Link to='/'  >
                <Button size='xl' color='' className='flex flex-wrap bg-primary hover:bg-[#8970d0] text-white gap-2 animate-zoomIn'>
                  <FaComments className='mr-2 h-5 w-5' />
                  Get in Touch </Button>
              </Link>
            </div>
          </div>
          <div className=' flex-1'>
            <img src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/travel-Recovered.png" alt="" />
          </div>

        </div>
      </div>

    </div>
  )
}

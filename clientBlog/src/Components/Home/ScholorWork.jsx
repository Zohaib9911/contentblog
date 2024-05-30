import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaSuitcase } from "react-icons/fa";

export default function ScholorWork() {
  return (
    <div className=' bg-[#D0C2E5] '>
      <div className=' p-[100px] flex flex-col items-center text-center'>
        <h2 className=' text-3xl py-4 font-[700] text-primary'>At Scholar Education, we are dedicated to helping students navigate the complexities of thesis writing</h2>
        <h2 className=' text-2xl py-4 font-[700]'>Our team of experts provides personalized support, ensuring you achieve academic excellence.</h2>
        <p className=' py-4  pt-[10px]'>
          With years of experience, we offer comprehensive resources and expert advice tailored to your needs."
        </p>
        <Link to='#' className=' pt-[20px]'>
          <Button size='xl' color='' className='flex flex-wrap bg-primary hover:bg-[#8970d0] text-white gap-2 hover:animate-bounce'>
            <FaSuitcase className='mr-2 h-5 w-5' />
            View Our Work
          </Button>
        </Link>
      </div>
    </div>
  )
}

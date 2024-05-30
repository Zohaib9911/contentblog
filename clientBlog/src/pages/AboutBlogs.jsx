import React from 'react'
import { blogDeatils } from './About'

export default function AboutBlogs({ id, name, discription }) {
  return (
    <div className=' mt-[70px]'>
      <div className=' flex flex-col'>
        <h1 className=' text-3xl'>{name}</h1>
        <p className=' text-xl text-gray-500'>{discription}</p>

      </div>
    </div>
  )
}

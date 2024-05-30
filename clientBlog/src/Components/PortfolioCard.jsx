import React from 'react'
import { Link } from 'react-router-dom'

export default function PortfolioCard({ id, title, content, image }) {
  return (

    <>
      {/* Col1 */}
      <div className='relative group h-[400px]' >
        {/* Background image */}
        <img
          src={image}
          alt="Descriptive Text"
          className="w-full h-full bg-cover"
        />
        {/* Overlay content */}
        <Link
          to="/"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <div className=' flex flex-col text-center'>
            <h2 className="text-white text-xl font-bold">{title}</h2>

          </div>
        </Link>
      </div>
    </>

  )
}

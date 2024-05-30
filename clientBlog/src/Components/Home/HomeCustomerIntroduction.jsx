import React from 'react'

export default function HomeCustomerIntroduction() {
  return (
    <div>
      <div className=" grid grid-cols-2">
        {/* Col1 */}
        <div className='relative group h-[400px]' >
          {/* Background image */}
          <img
            src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/ezgif.com-gif-maker-61.png"
            alt="Descriptive Text"
            className="w-full h-[400px]"
          />
          {/* Overlay content */}
          <Link
            to="/"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <div className=' flex flex-col text-center'>
              <h2 className="text-white text-xl font-bold">Nettles and Petals Design</h2>
              <p className="text-white text-lg">Award Winning Landscape Garden Design</p>
            </div>
          </Link>
        </div>
        {/* Col2 */}
        <div className='relative group h-[400px]' >
          {/* Background image */}
          <img
            src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/uk-1.png"
            alt="Descriptive Text"
            className="w-full h-[400px]"
          />
          {/* Overlay content */}
          <Link
            to="/"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <div className=' flex flex-col text-center'>
              <h2 className="text-white text-xl font-bold">UK & Ireland Insurance Claims</h2>
              <p className="text-white text-lg">Insurance Claims Management Company for UK & Ireland</p>
            </div>
          </Link>
        </div>
        {/* Col3 */}
        <div className='relative group h-[400px]' >
          {/* Background image */}
          <img
            src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/ezgif.com-gif-maker-40.png"
            alt="Descriptive Text"
            className="w-full h-[400px]"
          />
          {/* Overlay content */}
          <Link
            to="/"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <div className=' flex flex-col text-center'>
              <h2 className="text-white text-xl font-bold">Concise Recovery</h2>
              <p className="text-white text-lg">Our programs are designed to address addiction holistically</p>
            </div>
          </Link>
        </div>
        {/* Col4 */}
        <div className='relative group h-[400px]' >
          {/* Background image */}
          <img
            src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/03/ezgif.com-gif-maker-6.png"
            alt="Descriptive Text"
            className="w-full h-[400px]"
          />
          {/* Overlay content */}
          <Link
            to="/"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <div className=' flex flex-col text-center'>
              <h2 className="text-white text-xl font-bold">Beauty Hooked</h2>
              <p className="text-white text-lg">Beauty Hooked YOU’LL LOVE THIS</p>
            </div>
          </Link>
        </div>

      </div >
    </div>
  )
}

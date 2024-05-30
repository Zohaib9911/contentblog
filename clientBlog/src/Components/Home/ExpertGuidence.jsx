import React from 'react'

export default function ExpertGuidence() {
  return (
    <div className=' p-4 w-full bg-[#fbfcff]'>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <div className=' text-center p-[60px]'>
          <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl text-center text-primary leading-tight max-w-2xl mx-auto   mb-8'>Expert Guidance, Comprehensive Resources, and Personalized Support</h2>
          <p className=' pt-[10px] text-gray-700 font-[500] text-[24px]'>From Research to Final Submission, We’ve Got You Covered</p>
        </div>

        <div className="container mx-auto p-4">
          <div className="flex justify-between text-center items-center">

            <div className="w-1/3 p-4 flex flex-col items-center ">
              <div className="p-6 text-center">
                <div className=" fill-rose-800">
                  <img src="https://firebasestorage.googleapis.com/v0/b/academic-b6371.appspot.com/o/Homepage%2FDocumnet%20svg.png?alt=media&token=6b555417-141a-429d-96f5-3cecf65c99cd" className='w-[140px] h-[130px] mx-auto my-auto' alt="Consulting" />

                </div>
                <h3 className='pt-[10px] text-primary font-[700] text-[24px]'>We care about originality</h3>
                <p className=' inline'>Our custom human-written papers from top essay writers are always free from plagiarism.</p>

              </div>
            </div>

            <div className="w-1/3 p-4 flex flex-col items-center ">
              <div className="p-6 text-center">
                <div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/academic-b6371.appspot.com/o/Homepage%2FSecurity.png?alt=media&token=71f7027a-b1ab-4409-ab0c-6da5b28d1e3e" className='w-[140px] h-[130px]  mx-auto ' alt="Consulting" />
                </div>
                <h3 className='pt-[10px] text-primary font-[700] text-[24px]'>We protect your privacy</h3>
                <p className=' inline'>Your data and payment info stay secured every time you get our help from an essay writer. </p>
              </div>
            </div>

            <div className="w-1/3 p-4 flex flex-col items-center ">
              <div className="p-6 text-center">
                <div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/academic-b6371.appspot.com/o/Homepage%2FSave%20Money%20pnsvg.png?alt=media&token=316fd471-b8cc-4a1a-b006-6802c00d3fcd" className='w-[140px] h-[130px]  mx-auto' alt="Consulting" />
                </div>
                <h3 className='pt-[10px] text-primary font-[700] text-[24px]'>You control your money</h3>
                <p className=' inline'>Your money is safe with us. If your plans change, you can get it sent back to your card.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

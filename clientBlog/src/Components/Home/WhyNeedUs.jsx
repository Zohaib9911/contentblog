import { Button } from 'flowbite-react';
import React, { useState } from 'react'

export default function WhyNeedUs() {
  const [selectedButton, setSelectedButton] = useState(1);


  const buttonData = [
    {
      id: 1,
      text: 'Excessive Workload',
      headLine: 'Juggling Between Academic and Professional Tasks?',
      content: `A lot of students approach us when they're overworked. Some do internships and have homework deadlines that don't line up conveniently enough with the regular workweek or classes - it can be hard! So we offer students super short 3-6 hour emergency requests in order to make sure every paper gets done on time.`,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/academic-b6371.appspot.com/o/Homepage%2Fexcessive-workload.webp?alt=media&token=ec6e5175-d703-45c4-9bfc-0f09b91c99d3',
    },
    {
      id: 2,
      text: 'Lack of Skills',
      headLine: 'Not Every One Of Us Can Do Everything Right!',
      content: `When it comes down to schoolwork, many students don't have the skills needed for academic success. This is where our service comes in! We offer highly qualified writers with professional expertise on every topic you can possibly imagine. They can cover up for your failings with their expertise.`,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/academic-b6371.appspot.com/o/Homepage%2Flack-of-skills.webp?alt=media&token=5651c7cf-51d6-43ec-8694-5b9813ba96f0',
    },
    {
      id: 3,
      text: 'Deadline Pressure',
      headLine: 'Less Time, More Assignments',
      content: `The life of a college student is not always easy. There are so many things to do and very little time! That's why our writers can help you meet your deadlines no matter how close or far off they might be. When students need help in meeting deadlines, we're here with perfect essays.`,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/academic-b6371.appspot.com/o/Homepage%2Fdeadline-pressure.webp?alt=media&token=6c7f9e31-34f3-44b8-aae2-882800ce0a6d',
    },
    {
      id: 4,
      text: 'Want High Grades',
      headLine: 'Straight As, 3+ GPA - Every Student’s Dream',
      content: `You deserve the best and we are here for that. Our writers will help improve your performance so you can earn top grades. We have a strict quality control system that ensures flawless papers with proper formatting and citations. Worrying about GPAs is a thing of the past!`,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/academic-b6371.appspot.com/o/Homepage%2Fwant-high-grades.webp?alt=media&token=02586267-6991-451b-bd96-df57591ccaa5',
    },

  ];
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId); // Update selected button state
  };


  return (
    <div className=' mt-12'>
      <div className='flex max-w-[900px] w-full mx-auto gap-8 pb-[60px] items-center text-center'>
        {buttonData.map((button) => (
          <h3 className=' w-[100%]'>
            <button
              key={button.id}
              size="lg"
              color="white"
              onClick={() => handleButtonClick(button.id)}
              className={`
          border-transparent bg-none p-2 font-semibold text-primary cursor-pointer bg-blue-100 rounded-md max-w-[230px] w-full block text-center active:border-b-2 active:border-blue-600
          items-center gap-3 ${selectedButton === button.id ? 'border-b-2 border-blue-600 hover:border-blue-500' : 'bg-gray-300'
                }`}
            >
              {button.text}
            </button>
          </h3>
        ))}
      </div>
      {
        selectedButton && (

          <div className=' block box-border'>
            <div className=' flex justify-center w-full'>
              <div className=' max-w-[50%] w-full'>
                <img src={buttonData[selectedButton - 1].imageUrl}
                  alt={`Image for Button ${selectedButton}`} />
              </div>
              <div className=' max-w-[500px] w-full'>
                <p className=' font-bold text-2xl pb-4 leading-[150%] text-primary text-left'>
                  {buttonData[selectedButton - 1].headLine}
                </p>
                <p className=' text-lg text-left font-medium text-gray-600'>
                  {buttonData[selectedButton - 1].content}
                </p>
              </div>
            </div>

          </div>

        )
      }


    </div>
  )
}

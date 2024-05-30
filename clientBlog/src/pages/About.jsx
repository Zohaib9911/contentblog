import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import AboutBlogs from './AboutBlogs'
import { Link } from 'react-router-dom'
import insamia from '../../public/assets/Insomia.png'
import PortfolioCard from '../Components/PortfolioCard'

export const categoryNew = [

  {
    categoryName: 'education'
  },
  {
    categoryName: 'psychology'
  },
  {
    categoryName: 'agriculture'
  },
  {
    categoryName: 'computerscience'
  },
]

export const blogDeatils = [
  {
    _id: "1",
    name: "Java Script 1st",

    price: 12,
    description: "Thisis some detail aboyt java Script",
    category: "javascript"
  },
  {
    _id: "2",
    name: "Node js",

    price: 12,
    description: "Food provides essential lorm 10",
    category: "nodejs"
  },
  {
    _id: "3",
    name: "Greek salad",

    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "reactjs"
  },
  {
    _id: "4",
    name: "Next Js Descript",

    price: 12,
    description: "Food provides essential nutrients for overalorem",
    category: "nextjs"
  },
  {
    _id: "5",
    name: "Greek salad",

    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "javascript"
  },
  {
    _id: "6",
    name: "Greek salad",

    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "nodejs"
  },
  {
    _id: "7",
    name: "Greek salad",

    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "reactjs"
  },
  {
    _id: "8",
    name: "Greek salad",

    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "nextjs"
  },
]

export default function About() {

  const [category, setCategory] = useState("All")
  const [userPosts, setUserPosts] = useState([]);
  console.log(userPosts)

  useEffect(() => {
    const fecthPosts = async () => {
      try {
        const res = await fetch(`api/post/getposts`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts)
        }
        // if (data.posts.length < 9) {
        //   setShowMore(false);
        // }
      } catch (error) {
        console.log(error)
      }
    };

    fecthPosts();

  }, [])



  return (
    // <div className='mt-[80px]'>
    //   <div className=' flex gap-4'>
    //     {
    //       categoryNew.map((item, index) => (
    //         <Button
    //           className=' '
    //           key={index}
    //           onClick={() => setCategory(prev => prev === item.categoryName ? "All" : item.categoryName)}
    //         >
    //           {item.categoryName}
    //         </Button>
    //       ))
    //     }
    //   </div>
    //   {
    //     blogDeatils.map((item, index) => {
    //       if (category === 'All' || category === item.category) {
    //         return <AboutBlogs key={index} id={item._id} name={item.name} discription={item.description} />
    //       }
    //     })
    //   }
    // </div>






    <div className=' mt-[80px]'>
      {/* Hero Image */}
      <div className='h-[300px] bg-cover bg-center py-[100px] px-[50px]' style={{ backgroundImage: 'url("https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/03/hero.jpg")', }}>
        <h1 className=' text-white font-[700] text-[35px] pt-[30px]'>What we've brought to life</h1>
      </div>

      {/* Search Buttons */}
      <div className=' flex container'>
        <div className=' flex mx-auto py-[30px] space-x-4 font-bold text-xl'>
          {/* <Button className=' bg-[#25A0DB]' >All</Button> */}
          {
            categoryNew.map((item, index) => (
              <Button
                className='bg-[#25A0DB] '
                key={index}
                onClick={() => setCategory(prev => prev === item.categoryName ? "All" : item.categoryName)}
              >
                {item.categoryName}
              </Button>
            ))
          }
        </div>
      </div>

      {/* Start work Introduction */}
      <div className=" grid grid-cols-3">

        {
          userPosts.map((item, index) => {
            if (category === 'All' || category === item.category) {
              return <PortfolioCard key={index} id={item._id} title={item.title} content={item.content} image={item.image} />
            }
          })
        }
      </div>

    </div >
  )
}

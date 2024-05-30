import { Button, Select, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import PostCard from '../Components/PostCard';

export default function Search() {
  const [sidebarData, setSideBarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'education'
  })
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);


  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    const urlParams = new URLSearchParams(location.search);
    const searchTermForUrl = urlParams.get('searchTerm');
    const sortForUrl = urlParams.get('sort');
    const categoryForUrl = urlParams.get('category');

    if (searchTermForUrl || sortForUrl || categoryForUrl) {
      setSideBarData({
        ...sidebarData,
        searchTerm: searchTermForUrl,
        sort: sortForUrl,
        category: categoryForUrl,
      })
    }

    const fetchPosts = async () => {

      setLoading(true);
      const searhQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searhQuery}`)
      if (!res.ok) {
        setLoading(false)
        return
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts)
        setLoading(false)
      }
      if (data.posts.length === 9) {
        setShowMore(true)
      } else {
        setShowMore(false)
      }
    }
    fetchPosts()


  }, [location.search])

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      const searchTerm = e.target.value || '';
      setSideBarData({ ...sidebarData, searchTerm })
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'asc';
      setSideBarData({ ...sidebarData, sort: order })
    }
    if (e.target.id === 'category') {
      const category = e.target.value
      setSideBarData({ ...sidebarData, category })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);
    const serachQuery = urlParams.toString();
    navigate(`/search?${serachQuery}`)
  }

  const handleShowMore = async () => {

    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuey = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuey}`)
    if (!res.ok) {
      return
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts])
      if (data.posts.length === 4) {
        setShowMore(true)
      } else {
        setShowMore(false)
      }
    }
  };

  return (
    <div className=' flex flex-col md:flex-row mt-[70px]'>
      {/* Searcch Bar Div */}
      <div className=' p-7 border-b md:border-r md:min-h-screen border-x-gray-500'>
        <form className=' flex flex-col items-left gap-8' onSubmit={handleSubmit}>
          <div className=' flex items-center gap-2'>
            <label className=' whitespace-nowrap font-semibold'>
              Search Term
            </label>
            <TextInput
              placeholder='Searcch..'
              id='searchTerm'
              type='text'
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className=' flex items-center gap-2'>
            <label className=' whitespace-nowrap font-semibold'>
              Sort Direction
            </label>
            <Select
              onChange={handleChange}
              value={sidebarData.sort}
              id='sort'
            >
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>

            </Select>
          </div>
          <div className=' flex items-center gap-2'>
            <label className=' whitespace-nowrap font-semibold'>
              Category
            </label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id='category'
            >

              <option value="education">Educational</option>
              <option value="psychology">Psychology</option>
              <option value="agriculture">Agriculture</option>
              <option value="computerscience">Computer Science</option>

            </Select>
          </div>
          <Button type='submit'
            outline
            gradientDuoTone='purpleToPink'

          >
            Apply Filter
          </Button>
        </form>
      </div>
      <div className=' w-full'>
        <h1 className=' text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5'>
          Posts Results
        </h1>
        <div className=' p-7 flex flex-wrap gap-4'>
          {!loading && posts.length === 0 && (
            <p className=' text-xl text-gray-500'>
              No Post Found
            </p>
          )}
          {
            loading && <p className=' text-xl text-gray-500'>Loading...</p>
          }
          {
            !loading && posts && posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
              />
            ))
          }
          {
            showMore && (
              <button onClick={handleShowMore}
                className=' text-teal-500 text-lg hover:underline p-7 w-full'
              >
                Show More
              </button>
            )
          }
        </div>

      </div>
    </div>
  )
}

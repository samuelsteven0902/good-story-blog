import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PopulerToday from '../components/PopulerToday'

function Blog(blog) {
  let data = useLocation()
  console.log(data.state);
  return (
    <>
        <div>
            <Navbar />
        </div>
        <main className='bg-[#1E1E1E] pt-12 h-full'>
            <PopulerToday status={data.state} />
            <Footer />
        </main>
    </>  
  )
}

export default Blog

import React from 'react'
import Header from '../components/Home/Header'
import Navbar from '../components/Navbar'
import CreateBlog from '../components/CreateBlog'
import PopulerToday from '../components/PopulerToday'
import Footer from '../components/Footer'
import PopulerTodayHome from '../components/Home/PopulerTodayHome'
import PopulerCategoryHome from '../components/Home/PopulerCategoryHome'

function Home() {
  return (
    <div className=''>
        <div>
            <Navbar />
        </div>
        <main className='bg-[#1E1E1E] '>
            <Header />
            <CreateBlog />
            <PopulerTodayHome />
            <PopulerCategoryHome />
            <Footer />
        </main>
    </div>
  )
}

export default Home

import React from 'react'
import Header from '../components/Home/Header'
import Navbar from '../components/Navbar'
import CreateBlog from '../components/CreateBlog'
import PopulerToday from '../components/PopulerToday'
import PopulerCategory from '../components/PopulerCategory'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className=''>
        <div>
            <Navbar />
        </div>
        <main className='bg-[#1E1E1E] '>
            <Header />
            <CreateBlog />
            <PopulerToday />
            <PopulerCategory />
            <Footer />
        </main>
    </div>
  )
}

export default Home
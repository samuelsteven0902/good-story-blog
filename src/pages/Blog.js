import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PopulerToday from '../components/PopulerToday'

function Blog() {
  return (
    <>
        <div>
            <Navbar />
        </div>
        <main className='bg-[#1E1E1E] pt-12'>
            <PopulerToday />
            <Footer />
        </main>
    </>  
  )
}

export default Blog
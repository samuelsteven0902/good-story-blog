import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PopulerCategory from '../components/PopulerCategory'

function Category() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <main className='bg-[#1E1E1E] pt-12 '>
                <PopulerCategory />
                <Footer />
            </main>
        </>  
      )
}

export default Category
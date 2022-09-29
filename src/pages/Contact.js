import React from 'react'
import ContactUs from '../components/contact/ContactUs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Contact() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <main className='bg-[#1E1E1E] pt-12'>
                <ContactUs />
                <Footer />
            </main>
        </>  
      )
}

export default Contact
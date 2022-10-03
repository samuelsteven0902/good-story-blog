import React from 'react'
import Header from '../components/about/Header'
import ProfileSection from '../components/about/ProfileSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function About() {
    return (
        <div className=''>
            <div>
                <Navbar />
            </div>
            <main className='bg-[#1E1E1E] '>
                <Header />
                <ProfileSection />
                <Footer />
            </main>
        </div>  
      )
}

export default About
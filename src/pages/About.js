import React from 'react'
import Header from '../components/about/Header'
import ProfileSection from '../components/about/ProfileSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function About() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <main className='  '>
                <Header />
                <ProfileSection />
                <Footer />
            </main>
        </>  
      )
}

export default About
import React from 'react'
import home1 from "../../assets/imgs/home1.jpg";
import home2 from "../../assets/imgs/home2.jpg";
import 'flowbite';
import { Carousel } from 'flowbite-react';

function Header() {
  return (
    <>
        
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
                
            <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <p className='absolute text-white font-bold text-4xl tracking-[1em]'>BLOGGER</p>
    <img
                src={home1}
                alt="..."
                />
    </div>
            <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <p className='absolute text-white font-bold text-4xl tracking-[0.5em]'>Good Story Blog</p>

                <img
                src={home2}
                alt="..."
                /></div>
            </Carousel>
        </div>

    </>
  )
}

export default Header
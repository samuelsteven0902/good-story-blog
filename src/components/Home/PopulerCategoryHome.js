import React from 'react'
import Header from '../PopulerCategory/Header'
import dataCategory from '../../utils/DataCategory'

function PopulerCategoryHome() {
  return (
    <div className=' m-12'>
        <Header />
        <div className='flex flex-wrap justify-center'>
      {dataCategory()?.slice(0,3).map((data,index)=>(
        
        <div key={index} className='relative w-1/3 md:w-1/4 m-5'>
          <img src={data.img} alt="Gambar" className='w-full min-h-full rounded-sm' />
          <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-mono text-xl lg:text-3xl md:tracking-[0.5em] font-bold '>{data.title}</p>
        </div>

      ))}
    </div>
    </div>
  )
}

export default PopulerCategoryHome
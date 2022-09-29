import React from 'react'
import dataCategory from '../../utils/DataCategory'

function Tables() {
  return (
    <div className='flex flex-wrap justify-center'>
      {dataCategory()?.map((data)=>(
        
        <div className='relative w-1/3 md:w-1/4 m-5'>
          <img src={data.img} className='w-full h-full rounded-sm' />
          <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-mono text-xl lg:text-3xl md:tracking-[0.5em] font-bold '>{data.title}</p>
        </div>

      ))}
    </div>
  )
}

export default Tables
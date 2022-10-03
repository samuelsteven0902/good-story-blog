import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import olivia from "../../assets/imgs/PopulerToday/olivia.png"
import  utils  from '../../utils/utils'

function Blog() {
  return (
    <div className='w-full items-center justify-center mx-auto md:flex'>
        <div className='md:w-[35%] md:h-[35%] w-3/4 mx-auto'>
            <div className='relative   m-3 bg-slate-500 rounded-lg'>
                <img src={olivia} alt='Gambar' className='w-full h-full rounded-sm p-16' />
                <div className='w-full h-1/3 bg-white bg-opacity-50 absolute bottom-0 rounded-b-lg p-5 hover:h-full hover:rounded-md ease-in-out duration-500 transition-all group'>
                    <h1 className='font-bold pb-2 opacity-100'> OLIVIA Competition</h1>
                    <p className='text-sm overflow-hidden truncate whitespace-nowrap group-hover:whitespace-normal ' >OLIVIA (Olimpiade Vokasi Indonesia) merupakan kompetisi bergengsi tingkat nasional yang menjadi agenda tahunan dalam peningkatan kompetensi dan marwah inovasi bagi mahasiswa vokasi Indonesia. </p>
                </div>
            </div>
        </div>
                
        <div className='flex md:w-[60%] w-full flex-wrap'>
                {utils()?.slice(0,5).map((data)=>
                    (
                            <div id={data.id} key={data.id} className='relative w-[26%]   m-3 bg-[#3f3f3f] rounded-md'>
                                <img src={data.img} alt='Gambar' className='w-42 h-42    rounded-sm  bg-contain bg-center ' />
                                <div className='bg-white w-full h-1/3 opacity-50 absolute bottom-0 p-2 rounded-b-lg hover:h-full hover:rounded-md ease-in-out duration-500 transition-all group'>
                                    <h1 className='font-bold pb-2 opacity-100'> {data.headline} </h1>
                                    <p className='text-sm overflow-hidden text-ellipsis whitespace-nowrap group-hover:whitespace-normal '>{data.describe}</p>
                                </div>
                            </div>
                        )
                )}
            <Link to='/blog'  className='w-[26%] bg-[#3f3f3f] rounded-md m-3 hover:bg-slate-500 transition-all duration-500 hover:text-lg text-white hover:text-black'>
                <div className='flex justify-center align-middle items-center h-full '>
                    <p>Read more</p>
                </div>
            </Link>
        </div>


    </div>
  )
}

export default Blog
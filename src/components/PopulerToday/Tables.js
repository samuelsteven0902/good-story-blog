import React from 'react'
import olivia from "../../assets/imgs/PopulerToday/olivia.png"
import  utils  from '../../utils/utils'

function Tables() {
  return (
    <div className='w-full items-center justify-center mx-auto md:flex'>
        <div className='md:w-[35%] md:h-[35%] w-3/4 mx-auto'>
            <div className='relative   m-3 bg-slate-500 rounded-lg'>
                <img src={olivia} alt='Gambar' className='w-full h-full rounded-sm' />
                <div className='w-full h-1/3 bg-white bg-opacity-50 absolute bottom-0 rounded-b-lg p-5 hover:h-full hover:rounded-md ease-in-out duration-500 transition-all group'>
                    <h1 className='font-bold pb-2 opacity-100'> OLIVIA Competition</h1>
                    <p className='text-sm overflow-hidden truncate whitespace-nowrap group-hover:whitespace-normal ' >OLIVIA (Olimpiade Vokasi Indonesia) merupakan kompetisi bergengsi tingkat nasional yang menjadi agenda tahunan dalam peningkatan kompetensi dan marwah inovasi bagi mahasiswa vokasi Indonesia. </p>
                </div>
            </div>
        </div>
                
            <div className='flex md:w-[60%] w-full flex-wrap'>
                {utils()?.map((data)=>
                    (
                            <div id={data.id} className='relative w-[26%] m-3'>
                                <img src={data.img} alt='Gambar' className='w-full rounded-sm ' />
                                <div className='bg-white w-full h-1/3 opacity-50 absolute bottom-0 p-2 rounded-b-lg hover:h-full hover:rounded-md ease-in-out duration-500 transition-all group'>
                                    <h1 className='font-bold pb-2 opacity-100'> {data.headline} </h1>
                                    <p className='text-sm overflow-hidden text-ellipsis whitespace-nowrap group-hover:whitespace-normal '>{data.describe}</p>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
  )
}

export default Tables
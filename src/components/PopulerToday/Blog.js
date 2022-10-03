import React, { useState } from 'react'
import  utils  from '../../utils/utils'

function Blog() {

  const [seacrhTerm, setsearchTerm] =useState('')
  return (
    <div className='flex flex-wrap justify-center my-12 mt-24'>
      <span className=" before:block before:absolute mb-8  before:-inset-1 before:-skew-y-3 px-6 before:bg-cyan-500 relative inline-block ">
       <p className='relative text-center  text-3xl text-slate-200 font-bold'>ALL BLOG</p>
      </span>
      <form className="flex items-center w-full justify-center">   
          <div className="relative  w-1/3">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
              </div>
              <input type="text" id="simple-search" onChange={(e)=>{setsearchTerm(e.target.value)}} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari Blog disini..." required="" />
          </div>
          
      </form>

      
      <div className=' py-12 w-full items-center justify-center mx-auto md:flex'>
          <div className='flex md: w-full flex-wrap justify-center'>
                  {utils()?.filter(val=>{
                  if( seacrhTerm == ""){
                      return val
                  }else if(val.headline.toLocaleLowerCase().includes(seacrhTerm.toLocaleLowerCase())){
                      return val
                  }
                  }).map((data)=>
                      (
                              <div key={data.id} id={data.id} className='relative w-[26%] m-3 bg-[#3f3f3f] rounded-md items-center'>
                                  <img src={data.img} alt='Gambar' className='  rounded-sm  bg-contain bg-center ' />
                                  <div className='bg-white w-full h-1/3 opacity-50 absolute bottom-0 p-2 rounded-b-lg hover:h-full hover:rounded-md ease-in-out duration-500 transition-all group'>
                                      <h1 className='font-bold pb-2 opacity-100'> {data.headline} </h1>
                                      <p className='text-sm overflow-hidden text-ellipsis whitespace-nowrap group-hover:whitespace-normal '>{data.describe}</p>
                                  </div>
                              </div>
                          )
                  )}
          </div>


      </div>
    </div>
  )
}

export default Blog
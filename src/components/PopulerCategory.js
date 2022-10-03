import React from 'react'
import Header from './PopulerCategory/Header'
import Tables from './PopulerCategory/Tables'

function PopulerCategory() {
  return (
    <div className='m-12 '>
        <div>
          <p className='px-3 text-xl text-[#A9A9A9]'>All Category</p>
        </div>
        <Tables />
    </div>
  )
}

export default PopulerCategory
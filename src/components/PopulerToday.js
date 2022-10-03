import React from 'react'
import Blog from './PopulerToday/Blog'
import Header from './PopulerToday/Header'
import Tables from './PopulerToday/Tables'

function PopulerToday() {
  return (
    <div className=' m-12'>
        <Header />
        <Tables />
        <Blog />
    </div>
  )
}

export default PopulerToday
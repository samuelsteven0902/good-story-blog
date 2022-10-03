
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
        <div className='mt-auto bottom-0 w-full'>
           <hr className="h-px bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <footer className="p-4 bg-[#1f1f1f] shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-sm text-gray-100 sm:text-center dark:text-gray-200">© 2022 <a href="/" className="hover:underline">Good Story Blog</a>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/blog' className='text-white px-2 hover:underline'> Blog </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/category' className='text-white px-2 hover:underline'> Category </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/about' className='text-white px-2 hover:underline'> About </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/contact' className='text-white px-2 hover:underline' > Contact </Link>
                            </li>
                </ul>
            </footer>

        </div>

  )
}

export default Footer
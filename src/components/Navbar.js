import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const [navbar, setNavbar] = useState(false)
    const [navbarRes, setNavbarRes] = useState(false)
    const [navbarBg, setNavbarBg] = useState(false)

   
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
      })

      const changeBackground = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 50) {
        setNavbarBg(true)
    } else {
            setNavbarBg(false)
        }
      }

  return (<>
    <nav  className={navbarBg? 'fixed w-full bg-[#555555] shadow opacity-100 transition-all duration-500 z-30 top-0':' -top-16 fixed opacity-0 w-full  transition-all duration-1000 z-30'}>
            <div className="justify-center px-5 py-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
            <div>
                    <div className="flex items-center justify-between py-1 md:py-3 md:block">
                        <div className="md:hidden">
                            <button
                                className="p- text-gray-200 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-10 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/' className='text-white text-lg hover:mx-2 font-normal transition-all duration-500 hover:font-semibold'> Home </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/blog' className='text-white text-lg hover:mx-2 font-normal transition-all duration-500 hover:font-semibold'> Blog </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/category' className='text-white text-lg hover:mx-2 font-normal transition-all duration-500 hover:font-semibold'> Category </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/about' className='text-white text-lg hover:mx-2 font-normal transition-all duration-500 hover:font-semibold'> About </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/contact' className='text-white text-lg hover:mx-2 font-normal transition-all duration-500 hover:font-semibold'> Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </nav>
    <nav className={navbarBg?'hidden':'w-full absolute mt-1 transition-all duration-500 z-20'}>
    <div>
                    <div className="flex items-center justify-between p-1 md:py-3 md:block">
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-200 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbarRes(!navbarRes)}
                            >
                                {navbarRes ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
    <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8  md:block md:pb-0 md:mt-0 ${
                            navbarRes ? "block pl-4 border-b-2 bg-[#1E1E1E]" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-10 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/' className='text-white text-lg hover:mx-2 font-normal transition-all duration-500 hover:font-semibold'> Home </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/blog' className='text-white text-lg hover:mx-2 font-normal transition-all duration-500 hover:font-semibold'> Blog </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/category' className='text-white text-lg hover:mx-2 font-normal transition-all duration-500 hover:font-semibold'> Category </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/about' className='text-white text-lg hover:mx-2 font-normal transition-all duration-500 hover:font-semibold'> About </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/contact' className='text-white text-lg hover:mx-2 font-normal transition-all duration-500 hover:font-semibold'> Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>
    </nav>
</>
  )
}

export default Navbar
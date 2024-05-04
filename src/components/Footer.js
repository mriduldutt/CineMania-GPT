import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const date=new Date().getFullYear();
  return (
    <div className='bg-stone-800 shadow-inner text-xs pb-4 sm:text-base text-white w-auto'>
        <div className='w-10/12 mx-auto h-auto flex-wrap items-center flex justify-around'>
        <div className=' w-[40%] md:w-[20%] p-1'>
            <div className='flex justify-start'>
                <span className='font-semibold text-center p-2'>CineUniverse</span>
            </div>
            <p className='break-words text-gray-300 w-full'>Copyright @{date}. CineUniverse By Kanav</p>     
        </div>
        <div className='w-[40%] md:w-[20%] p-2'>
            <ul className='m-1 p-1'>
                <li className='font-semibold m-2 '>
                    Company
                </li>
                <li className='text-gray-300 m-2'>
                    <Link to="/developerInfo" className='hover:underline'>Developer</Link>
                </li>
                <li className='text-gray-300  m-2'>
                    <Link to="/movies" className='hover:underline'>Movies</Link>
                </li>
                <li className='text-gray-300 m-2'>
                    Career
                </li>
            </ul>
        </div>
        <div className='w-[40%] md:w-[20%] p-2'>
            <ul className='m-1 text-gray-300 p-1'>
                <li className='font-semibold m-2'>
                    Legal
                </li>
                <li className='m-2'>
                    Terms & Conditions
                </li>
                <li className='m-2'>
                    Privacy Policy
                </li>
                <li className='m-2'>
                    Cookie Policy
                </li>
            </ul>
        </div>
        <div className='w-[40%] md:w-[20%] p-2'>
            <ul className='m-1 p-1'>
                <li className='font-semibold m-2'>
                    Contact Us
                </li>
                <li className='m-2 text-gray-300'>
                    Vijay Nagar,Delhi-09
                </li>
                <li className='m-2 text-gray-300'>
                    +919999999999
                </li>
                <li className='m-2 break-words text-gray-300'>
                    kanavdahat55@gmail.com
                </li>
            </ul>
        </div>
    </div>


    </div>
      )
}

export default Footer
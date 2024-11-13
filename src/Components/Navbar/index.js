import React from 'react'
import { MdCallMade } from "react-icons/md";
const Navbar = () => {

  return (
    <div className='w-[100vw] py-5 px-10 box-border bg-white flex justify-between items-around'>
        <h1 className='text-3xl font-bold'>Vistara</h1>
        <ul className='flex justify-between items-center px-2  gap-12'>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/blogs'>Blogs</a></li>
            <li><a href='/properties'>Properties</a></li>
        </ul>
        <button className='px-3 py-2 flex gap-2 items-center bg-white border-2 border-gray-200'>
            <p>Contact Us</p>
            <MdCallMade/>
        </button>
    </div>
  )
}

export default Navbar
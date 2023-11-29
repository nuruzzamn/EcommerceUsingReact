import React from 'react'
import logo from '../assets/logo.png'
import cartIcom from '../assets/cart_icon.png'
const Navbar = () => {
  return (
    <div className='flex justify-around p-[16px] shadow-sm '>
        <div className='flex items-center gap-3'>
            <img src={logo} alt="" />
            <p className='text-slate-800 text-4xl '>E-Shop</p>
        </div>

        <ul className='flex items-center list-none gap-12 text-lg text-slate-700 font-medium'>
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>Shop 
            <hr className='border-none w-[80%] h-1 rounded-xl bg-red-400'/></li>
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>Men</li>
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>Women</li>
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>Kids</li>
        </ul>

        <div className='flex items-center gap-11'>
            <button className='w-36 h-14 outline-none rounded-[75px] font-medium text-xl border border-gray-400 bg-white cursor-pointer'>Login</button>
            <img src={cartIcom} alt="" />
        </div>
    </div>
  )
}

export default Navbar
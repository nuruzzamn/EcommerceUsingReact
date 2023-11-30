import React, { useState } from 'react'
import logo from '../assets/logo.png'
import cartIcom from '../assets/cart_icon.png'
const Navbar = () => {

  const [menu, setMenu] = useState('shop')

  return (
    <div className='flex justify-around p-[16px] shadow-sm '>
        <div className='flex items-center gap-3'>
            <img src={logo} alt="" />
            <p className='text-slate-800 text-4xl '>E-Shop</p>
        </div>

        <ul className='flex items-center list-none gap-12 text-lg text-slate-700 font-medium'>
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer' onClick={()=>{setMenu("shop")}}>Shop{menu === "shop" ? <hr className='border-none w-[80%] h-1 rounded-xl bg-red-400'/> : <></>} 
            </li>

            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer' onClick={()=>{setMenu("men")}}>Men{menu === "men" ? <hr className='border-none w-[80%] h-1 rounded-xl bg-red-400'/> : <></>} 
            </li>

            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer' onClick={()=>{setMenu("women")}}>Women{menu === "women" ? <hr className='border-none w-[80%] h-1 rounded-xl bg-red-400'/> : <></>} 
            </li>

            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer' onClick={()=>{setMenu("kids")}}>kids{menu === "kids" ? <hr className='border-none w-[80%] h-1 rounded-xl bg-red-400'/> : <></>} 
            </li>

        </ul>

        <div className='flex items-center gap-11'>
            <button className='w-36 h-14 outline-none rounded-[75px] font-medium text-xl border border-gray-400 bg-white cursor-pointer active:bg-[#f3f3f3] '>Login</button>
            <img src={cartIcom} alt="" />
            <div className='w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[12px] text-sm bg-red-500 text-white'>0</div>
        </div>
    </div>
  )
}

export default Navbar
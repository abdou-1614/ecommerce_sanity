import Link from 'next/link'
import React from 'react'
import {BiShoppingBag} from 'react-icons/bi'
import { useStateContext } from '../context/StateContext'
import {Cart} from './'
const Navbar = () => {
  const [showCart, setShowCart, totalQyt] = useStateContext();
  return (
    <div className='flex justify-between my-2 mx-3 relative '>
        <p className='text-3xl font-bold text-gray-500'>
          <Link href='/'>JS Gaming</Link>
        </p>
        <button type='button' className='text-[27px] text-gray-500 cursor-pointer relative bg-transparent border-none transition transform delay-100 ease hover:scale-110 '>
          <BiShoppingBag/>
          <span className="absolute w-[20px] h-[20px] right-[-7px] top-[-1px] text-center bg-red-500 text-white font-bold rounded-full text-[12px] " >{totalQyt}</span>
        </button>
        <Cart/>
    </div>
  )
}

export default Navbar;
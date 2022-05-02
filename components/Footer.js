import React from 'react'
import {AiFillInstagram, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='flex text-2xl flex-col items-center py-8 px-3 mt-7 text-center text-[#324d67] justify-center gap-2 font-bold ' >
      <p>2022 JS Gaming All Rights Reserved</p>
      <p className='gap-8 text-4xl flex mt-2' >
        <AiFillInstagram/>
        <AiFillFacebook/>
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer
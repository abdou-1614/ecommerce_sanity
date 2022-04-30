import Link from 'next/link'
import React from 'react'
import {urlFor} from '../lib/client'
const FooterBanner = ({Footerbanner : { largeText1, largeText2, discount, saleTime, buttonText , desc, image, smallText, midText, product} }) => {
  return (
    <div className='relative py-24 px-10 bg-[#f02d34] rounded-[15px] h-[400px] leading-none w-full text-white mt-32 '>
      <div className='flex justify-between'>
        <div className='left'>
          <p className='m-5'> {discount} OFF </p>
          <h3 className='font-[900] text-[80px] ml-6 ' > {largeText1} </h3>
          <h3 className='font-[900] text-[80px] ml-6 ' > {largeText2} </h3>
          <p className='m-5' > {saleTime} </p>
        </div>
        <div className='leading-normal'>
          <p className='text-[18px]' > {smallText} </p>
          <h3 className='font-[800] text-[60px] ' > {midText} </h3>
          <p className='text-[18px]'> {desc} </p>
          <Link href={`/product/${product}`} >
            <button type='button' className='rounded-[15px] py-3 px-4 bg-white text-red-600 border-none mt-10 text-[18px] font-[500] cursor-pointer  ' > {buttonText} </button>
          </Link>
        </div>
        <img
        src={urlFor(image)}
        alt='head'
        className=' absolute top-[-25%] left-[25%] '
        />
      </div>
    </div>
  )
}

export default FooterBanner
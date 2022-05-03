import Link from 'next/link'
import React from 'react'
import {urlFor} from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='py-32 px-10 bg-[#0FC0D9] relative rounded-lg h-[500px] leading-[0.9] w-full'>
      <div>
        <p className='text-3xl text-gray-600 font-bold'>{heroBanner.smallText}</p>
        <h3 className='text-4xl mt-1 font-semibold'>{heroBanner.midText}</h3>
        <h1 className='text-white md:text-9xl text-8xl ml-[-20px] uppercase font-bold'>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt='logo' className='absolute top-0 right-[5%] md:right-[20%] t h-[450px] w-[450px]' />
        <div>
          <Link href={`/product/${heroBanner.products}`}>
            <button className='btn rounded-[15px] py-3 px-4 bg-[#f81a22] text-white mt-10 text-[16px] font-bold cursor-pointer'>
            {heroBanner.buttonText}
            </button>
          </Link>
          <div className='desc absolute flex flex-col right-[10%] bottom-[5%] leading-tight w-[300px] text-[#324d67]'>
            <h5>DESCRIPTION</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
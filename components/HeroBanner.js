import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='py-32 px-10 bg-[#0FC0D9] relative rounded-lg h-[500px] leading-[0.9] w-full'>
      <div>
        <p className='text-3xl'>SMALL TEXT </p>
        <h3>MID TEXT</h3>
        <img src='' alt='logo' className='absolute top-0 right-[20%] h-[450px] w-[450px]' />
        <div>
          <Link href='/product/ID'>
            <button className='btn rounded-[15px] py-2 px-4 bg-[#f02d34] text-white mt-10 text-lg font-bold cursor-pointer'>
              TEXT BUTTON
            </button>
          </Link>
          <div className='desc absolute flex flex-col right-[10%] bottom-[5%] leading-tight w-[300px] text-[#324d67]'>
            <h5>DESCRIPTION</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
import React from 'react'
import {Products, FooterBanner, HeroBanner} from '../components'
const Home = () => {
  return (
    <div>
      <HeroBanner/>
    <div className='text-center my-10 text-[#324d67]'>
      <h2 className='text-4xl font-[800]'>Best Selling Gaming Products</h2>
      <p className='text-base font-[200]'>Here Where Gamers Comes</p>
    </div>
    <div className='flex justify-center flex-wrap gap-4 mt-4 w-full'>
      {['Products 1', 'Products2'].map((product) => product)}
    </div>
    </div>
  )
}

export default Home
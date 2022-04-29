import React from 'react'
import {Products, FooterBanner, HeroBanner} from '../components'
import {client} from '../lib/client'
const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className='text-center my-10 text-[#324d67]'>
      <h2 className='text-4xl font-[800]'>Best Selling Gaming Products</h2>
      <p className='text-base font-[200]'>Here Where Gamers Comes</p>
    </div>
    <div className='flex justify-center flex-wrap gap-4 mt-4 w-full'>
      {products?.map((product) => <Products key={product._id} product={product} /> )}
    </div>
    <FooterBanner Footerbanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = "*[_type == 'product']"
  const products = await client.fetch(query)
  const bannerQuery = "*[_type == 'banner']"
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {products, bannerData}
  }
}

export default Home
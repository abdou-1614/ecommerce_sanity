import Link from 'next/link'
import React from 'react'
import {urlFor} from '../lib/client'
const Products = ({ product: { image, name, slug, price, sold } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='cursor-pointer text-[#324d67] product-card shadow-md m-4'>
          <img
          src={urlFor(image && image[0])}
          width={250}
          height={250}
          className='rounded-[15px] bg-[#ebebeb] transition ease delay-75 scale-110 '
          alt='HeadPhne'
          />
          <p className='font-500 mt-3 font-[800]'>{name}</p>
          <div className='flex items-center'>
          <p  className='font-[800] mt-2 text-[#0FC0D9] '>${price}.00</p>
          <del className='mt-2 ml-2 font-[600] ' >${sold}.00</del>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Products
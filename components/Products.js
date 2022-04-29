import Link from 'next/link'
import React from 'react'
import {urlFor} from '../lib/client'
const Products = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='cursor-pointer text-[#324d67] product-card'>
          <img
          src={urlFor(image && image[0])}
          width={250}
          height={250}
          className='rounded-[15px] bg-[#ebebeb] transition ease delay-75 scale-110 '
          />
          <p className='font-500 mt-3'>{name}</p>
          <p  className='font-[800] mt-2 text-black'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Products
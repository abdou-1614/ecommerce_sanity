import React from 'react'
import {client, urlFor} from '../../lib/client'
const productDetails = ({ product, products }) => {
    const {image, details, name, price} = product
  return (
    <div>
        <div className='flex gap-10 m-10 mt-[60px] text-[#324d67] '>
            <div>
                <div className=' rounded-[15px] bg-[#ebebeb] w-[400px] h-[400px] cursor-pointer transition delay-150 ease hover:bg-[#f02d34] ' >
                    <img src={urlFor(image && image[0])} />
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async() => {
    const query = `*[_type == "product"] { slug {current} }`
    const products = await client.fetch(query)
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
} 

export const getStaticProps = async ({ params: {slug} }) => {
    const query = `*[_type == 'product' && slug.current == '${slug}'][0]`
    const productQuery = "*[_type == 'product']"
    const products = await client.fetch(productQuery)
    const product = await client.fetch(query)
  
    return {
      props: {products, product}
    }
  }

export default productDetails
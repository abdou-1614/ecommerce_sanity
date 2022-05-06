import React, { useState } from 'react'
import {client, urlFor} from '../../lib/client'
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai'
import Products from '../../components/Products'
const productDetails = ({ product, products }) => {
    const {image, details, name, price} = product;
    const [index, setIndex] = useState(0)
  return (
    <div>
        <div className='flex gap-9 m-9 mt-[60px] text-[#324d67] '>
            <div>
                <div className=' rounded-[15px] bg-[#ebebeb] w-[280px] h-[280px] lg:h-[400px] lg:w-[400px] cursor-pointer transition delay-150 ease hover:bg-[#f02d34] ' >
                    <img src={urlFor(image && image[index])} className='rounded-[15px] bg-[#ebebeb] w-[300px] h-[300px] lg:h-[400px] lg:w-[400px] cursor-pointer transition delay-100 ease hover:bg-[#f02d34] ' />
                </div>
                <div className='flex gap-3 mt-5' >
                    {image?.map((item, i) => (
                        <img src={urlFor(item)} 
                        className={i == index ? 'rounded-[8px] bg-[#ebebeb] w-[70px] h-[70px] cursor-pointer hover:bg-[#f02d34] ' : 'rounded-[8px] bg-[#ebebeb] w-[70px] h-[70px] cursor-pointer'}
                        onMouseEnter={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
            <div className='mt-2'>
                    <h1 className='font-bold text-2xl' >{name}</h1>
                    <div className='flex items-center text-[#f02d34] lg:gap-3 gap-2 mt-3 '>
                        <div className='flex'>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                        </div>
                        <p className='text-[#324d67]' >(45)</p>
                    </div>
                    <h4 className='mt-3 font-bold' >Details:</h4>
                    <p className='mt-3'>{details}</p>
                    <p className='font-[700] text-[26px] mt-5 text-[#f02d34]' >${price}</p>
                    <div className='quantity flex-col md:flex-row md:items-center '>
                        <h3>Quantity: </h3>
                        <p className='quantity-desc flex items-center h-10 w-32 md:w-[130px]'>
                            <span className='minus 	' >
                                <AiOutlineMinus/>
                            </span>
                            <span className='num' >
                                0
                            </span>
                            <span className='plus ' >
                                <AiOutlinePlus/>
                            </span>
                        </p>
                    </div> 
                    <div className='flex flex-col md:flex-row md:gap-7'>
                        <button type='button' 
                        className='py-2 lg:py-3 px-3 lg:px-5 text-[#f02d34] bg-white text-[18px] font-[500] mt-5 lg:mt-10 cursor-pointer w-[140px] lg:w-[200px] btn'>
                            Add To Cart
                        </button>
                        <button className='buy w-[140px] lg:w-[200px] py-2 lg:py-3 px-3 lg:px-5 mt-5 md:mt-10 ' type='button' >Buy Now</button>
                    </div>
                </div>
        </div>
        <div className='mt-[120px]'>
            <h2 className='text-center m-[50px] text-[#324d67] text-[28px] font-bold ' >You May Also Like</h2>
            <div className='relative h-[400px] w-full overflow-x-hidden marquee ' >
                <div className='flex justify-center gap-[15px] mt-[20px] track' >
                    {products.map((item) => (
                        <Products key={item._id} product={item} />
                    ))}
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
import React from 'react'

const FooterBanner = ({Footerbanner: { largeText1, largeText2, Discount, SaleTime, Desc, image, SmallText, MidText, Product}  }) => {
  return (
    <div className='relative py-[100px] px-10 bg-[#f02d34] rounded-[15px] h-[400px] leading-3 text-white w-full mt-28 '>
      <div className='flex justify-between'>
        <div className='font-[900] text-[80px] ml-6'>
          <p></p>
          <h3></h3>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
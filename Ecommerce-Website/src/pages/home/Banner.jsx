import React from 'react'
import bannerImg from '/images/banner.jpg'
import { FaShoppingBag } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='bg-primary py-12 xl:px-28 px-4'>
        <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
            {/* img */}
            <div className='md:w-1/2'>
                <img src={bannerImg} alt=''/>
            </div>
            <div className='md:w-1/2'>
                <h1 className='text-5xl font-light mb-5'>Collections</h1>
                <p className='text-xl mb-7'>
                    You will find the best games in our collections
                </p>
                <button className='bg-Black hover:bg-red-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'>
                    <FaShoppingBag className='inline-flex' />Shop Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Banner
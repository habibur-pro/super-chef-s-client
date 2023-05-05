import React from 'react';
import banner from '../assets/banner2.png'
import foodBg from '../assets/foodBg.jpeg'
import LazyLoad from 'react-lazy-load';
import bannerFood from '../assets/bannerFood.jpg'
const Banner = () => {
    return (
      <LazyLoad>
      <div className=' min-h-[calc(100vh-72px)]  ' style={{
        backgroundImage: `url(${bannerFood})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }} >
        <div className="overlay bg-black bg-opacity-80">
          <div className='my-container lg:flex justify-between items-center gap-10'>
          <div className=' w-'>
              <h1 className='text-4xl md:text-5xl font-bold text-gray-200 mb-4 leading-[50px]'> Cook amazing with <span className='text-amber-400 block font-super'>Super Chep'S</span></h1>
              <p className='leading-7 text-gray-200'>Cooking should be fun, easy, and rewarding, and that's exactly what you'll find at <span className='text-amber-400'>Super Cheps'S.</span>. Our recipes are designed to help you create amazing meals that are full of flavor and nutrition, without all the hassle.</p>
            </div>
            <div className='  w-full'>

            <img src={banner} alt="" className=' w-full md:min-w-[450px] ' />

            </div>
          </div>
        </div>

        </div>
      </LazyLoad>
    );
};

export default Banner;
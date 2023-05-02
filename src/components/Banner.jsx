import React from 'react';
import banner from '../assets/banner2.png'
import foodBg from '../assets/foodBg.jpeg'
const Banner = () => {
    return (
      <div className=' bg-[#efefef] min-h-[calc(100vh-72px)]  ' >
          <div className='lg:flex justify-between items-center gap-10'>
          <div className='my-container '>
                <h1 className='text-4xl font-bold text-gray-600 mb-4 leading-[50px]'> Cook amazing with <span className='text-my_primary block font-super'>Super Chep'S</span></h1>
                <p className='leading-7 text-gray-700'>Cooking should be fun, easy, and rewarding, and that's exactly what you'll find at <span className='text-my_primary'>Super Cheps'S.</span>. Our recipes are designed to help you create amazing meals that are full of flavor and nutrition, without all the hassle.</p>
            </div>
            <div className='  w-full'>
            <img src={banner} alt="" className=' w-full md:min-w-[450px] ' />
            </div>
          </div>

        </div>
    );
};

export default Banner;
import React from 'react';
import { TbChefHat } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const SingleChefCard = ({ chef }) => {
    return (
        <div className="overlay  glass">
            <LazyLoad>
                <div className='border  card relative group  bg-opacity-50 overflow-hidden duration-700  group  rounded-lg'>

                    {/* card image  */}
                    <img className='max-h-96 group-hover:scale-150  duration-700 group-hover:pt-6 ' src={chef.picture} alt="" />


                    <div className='absolute h-14 bg-black bg-opacity-90 duration-700  group-hover:h-1/2 w-full bottom-0 rounded-t-3xl flex flex-col items-center p-5 border-t '>

                        <h3 className='text-center mb-2 text-white  text-lg uppercase font-bold'>{chef.name}</h3>

                        <p className='pb-2 text-white'>{chef.experience} years of experience</p>

                        <div className='inline-flex justify-between gap-10 mb-3 '>

                            <span className='inline-flex items-center text-white'> <TbChefHat className='text-xl text-gray-200 mr-2' />{chef.numRecipes} </span>

                            <span className='inline-flex items-center text-white'>
                                <FaHeart className='mr-2' /> {chef.likes}
                            </span>
                        </div>
                        <Link to={`chefs/${chef.chefId}`}><button className='btn rounded-sm btn-warning'>View Recipe</button></Link>
                    </div >
                </div>
            </LazyLoad>
        </div>
    );
};

export default SingleChefCard;
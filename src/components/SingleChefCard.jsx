import React from 'react';
import { TbChefHat } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import { Link } from 'react-router-dom';

const SingleChefCard = ({ chef }) => {
    return (
        <div className='border relative group overflow-hidden bg-[#dcdcdc] duration-500 hover:bg-my_primary group border rounded-lg'>

            <img className='max-h-96 group-hover:scale-150 duration-500 group-hover:pt-12 group-hover:pl-5' src={chef.picture} alt="" />
            <div className='bg-white absolute h-14 duration-500 group-hover:h-1/2 w-full bottom-0 rounded-t-3xl flex flex-col items-center p-5 border-t border-my_primary  group-hover:border-t-0 '>
                <h3 className='text-center mb-2  text-lg uppercase'>{chef.name}</h3>
                <p className='pb-2'>{chef.experience} years of experience</p>
                <div className='inline-flex justify-between gap-10 mb-3 '>
                    <span className='inline-flex items-center '> <TbChefHat className='text-xl text-gray-500' />{chef.numRecipes} </span>
                    <span className='inline-flex items-center'><SlLike className=' text-gray-500' />{chef.likes} </span>
                </div>
                <Link to={`chefs/${chef.chefId}`}><button className='my-button '>View Recipe</button></Link>
            </div >
        </div>
    );
};

export default SingleChefCard;
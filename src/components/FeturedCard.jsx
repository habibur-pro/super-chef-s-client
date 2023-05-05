import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const FeturedCard = ({ recipe }) => {

    return (
        <LazyLoad  >
        <div
                className=" flex my-3 glass card  lg:my-auto flex-row items-center rounded-l-3xl rounded-r-md  bg-transparent bg-slate-50 bg-opacity-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">


            <img
                className="max-h-28 border border-gray-400  rounded-3xl mr-3"
                src={recipe.recipeImage}
                    alt=""
                />



            <div className="px-2">
                <h5
                    className=" text-xl font-medium text-gray-200 dark:text-neutral-50">
                    {recipe.recipeName}
                </h5>
                <p className="mb-4 text-sm text-gray-200 dark:text-neutral-200">
                    {recipe.cookingMethod.slice(0, 80) + '...'} <Link to={`/chefs/${recipe.makerId}`} className='text-amber-400 hover:underline'

                    >Read More</Link>
                </p>

            </div>
        </div>
        </LazyLoad>
    );
};

export default FeturedCard;
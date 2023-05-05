import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const FeturedCard = ({ recipe }) => {
    // console.log(recipe)
    return (

        <div
            className="flex my-3  lg:my-auto flex-row items-center rounded-l-3xl rounded-r-md border bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">

            <img
                className="max-h-28  rounded-3xl mr-3"
                src={recipe.recipeImage}
                alt="" />


            <div className="px-2">
                <h5
                    className=" text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {recipe.recipeName}
                </h5>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
                    {recipe.cookingMethod.slice(0, 80) + '...'} <Link to={`/chefs/${recipe.makerId}`} className='text-my_primary hover:underline'

                    >Read More</Link>
                </p>

            </div>
        </div>
    );
};

export default FeturedCard;
import React, { useContext } from 'react';
import FeturedCard from './FeturedCard';
import { ChefDataContext } from '../layouts/Main';

const FeaturedRecipe = () => {
    let featuredRecipeData = []
    const chefsData = useContext(ChefDataContext)
    let featuredItem = chefsData.map(chefs => {
        featuredRecipeData.push(chefs.recipes[0])
    })





    return (
        <div className='my-container'>
            <h3 className='text-gray-200  text-3xl  text-center font-extrabold'>Featured Recipe</h3>
            <p className='text-center text-gray-200 mb-12 md:w-1/2 mx-auto mt-2'>
                We constantly strive to add new flavors and maintain quality standards. This is the continuation of our new recipes.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-10'>
                {
                    featuredRecipeData.map(recipe => <FeturedCard
                        recipe={recipe}
                        key={recipe.recipeId}
                    ></FeturedCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedRecipe;
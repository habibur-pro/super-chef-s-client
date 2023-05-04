import React, { useContext } from 'react';
import FeturedCard from './FeturedCard';
import { ChefDataContext } from '../layouts/Main';

const FeaturedRecipe = () => {
    let featuredRecipeData = []
    const chefsData = useContext(ChefDataContext)
    let featuredItem = chefsData.map(chefs => {
        featuredRecipeData.push(chefs.recipes[0])
    })
    console.log(featuredRecipeData)




    return (
        <div className='my-container'>
            <h3 className='text-gray-600 text-3xl mb-12 text-center font-extrabold'>Featured Recipe</h3>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-10'>
                {
                    featuredRecipeData.map(recipe => <FeturedCard
                        recipe={recipe}
                    ></FeturedCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedRecipe;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const ChefDetails = () => {

    const chef = useLoaderData()
    console.log(chef)

    return (
        <div className=' '>
            <div className='my-container '>
                <div>
                    <h1 className='text-5xl font-bold'>{chef.name}</h1>
                    <p>{chef.biodata}</p>
                    <p>{chef.likes}</p>
                    <p>{chef.numRecipes}</p>
                    <p>{chef.experience}</p>
                </div>
                <div>
                    <img src={chef.picture} alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        chef.recipes.map((recipe, i) => <RecipeCard
                            key={i}
                            recipe={recipe}
                        ></RecipeCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ChefDetails;
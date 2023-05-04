import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const ChefDetails = () => {

    const chef = useLoaderData()
    console.log(chef)

    return (
        <div className=' '>
            <div className=' bg-white'>
                <div class="px-6 py-12 md:px-12 text-center lg:text-left">
                    <div class="container mx-auto xl:px-32">
                        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                            <div class="mt-12 lg:mt-0">
                                <h1 class="text-3xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" >{chef.name}</h1>

                                <p class=" text-black  font-medium text-sm leading-6 uppercase rounded ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores numquam cumque molestias rerum hic eveniet quas consequatur porro, sapiente quasi fuga maiores expedita eius, excepturi repudiandae possimus saepe sunt?</p>
                                <p>likes: {chef.likes}</p>
                                <p>Experience: {chef.experience}</p>
                                <p>Recipies {chef.numRecipes}</p>
                            </div>
                            <div class="mb-12 lg:mb-0">
                                <img
                                    src={chef.picture}
                                    class=" max-w-xs w-full rounded-lg shadow-lg bg-[#efefef]"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='md:px-10 md:mx-auto bg-red-100'>
                <div>
                        <div className=''>
                    <h1 className='text-5xl font-bold'>{chef.name}</h1>
                    <p>{chef.biodata}</p>
                    <p>{chef.likes}</p>
                    <p>{chef.numRecipes}</p>
                    <p>{chef.experience}</p>
                        </div>
                    </div>
                <div>
                        <img src={chef.picture} alt="" className='max-h-80' />
                </div>
                </div> */}
            </div>
            <div className='my-container '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
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
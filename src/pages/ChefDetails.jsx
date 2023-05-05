import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { FaHeart } from 'react-icons/fa';
import bannerFood from '../assets/bannerFood.jpg'

const ChefDetails = () => {
    const chef = useLoaderData()



    return (
        <div className=' '>
            <div className='  text-white' style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bannerFood})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className="px-6 pt-12 md:px-12 text-center lg:text-left">
                    <div className="container mx-auto xl:px-32">
                        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                            <div className="mt-12 lg:mt-0">
                                <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-8" >{chef.name}</h1>

                                <p className="   font-medium mb-5 text-sm leading-6 uppercase rounded ">{chef.biodata}</p>

                                <div className=' md:flex items-center justify-center gap-10 '>
                                    <div className='glass mb-3 md:mb-0 py-3 px-5 leading-6 rounded text-lg'>
                                        <p className='text-center'>Total Like</p>
                                        <p className='text-center'>{chef.likes}</p>
                                    </div>

                                    <div className='glass mb-3 md:mb-0 py-3 px-5 leading-6 rounded text-lg'>
                                        <p className='text-center'>Experience</p>
                                        <p className='text-center'>{chef.experience} Years</p>
                                    </div>

                                    <div className='glass mb-3 md:mb-0 py-3 px-5 leading-6 rounded text-lg'>
                                        <p className='text-center'>Recipes of</p>
                                        <p className='text-center'>{chef.numRecipes}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 lg:mb-0">
                                <img
                                    src={chef.picture}
                                    className="max-h-[500px] w-full rounded-lg shadow-lg "
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='my-container '>
                <div className='md:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
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
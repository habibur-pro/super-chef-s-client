import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const ChefDetails = () => {

    const chef = useLoaderData()
    console.log(chef)

    return (
        <div className=' '>
            <div className=' bg-white'>
                <div className="px-6 py-12 md:px-12 text-center lg:text-left">
                    <div className="container mx-auto xl:px-32">
                        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                            <div className="mt-12 lg:mt-0">
                                <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" >{chef.name}</h1>

                                <p className=" text-black  font-medium text-sm leading-6 uppercase rounded ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores numquam cumque molestias rerum hic eveniet quas consequatur porro, sapiente quasi fuga maiores expedita eius, excepturi repudiandae possimus saepe sunt?</p>
                                <p>likes: {chef.likes}</p>
                                <p>Experience: {chef.experience}</p>
                                <p>Recipies {chef.numRecipes}</p>
                            </div>
                            <div className="mb-12 lg:mb-0">
                                <img
                                    src={chef.picture}
                                    className=" max-w-xs w-full rounded-lg shadow-lg bg-[#efefef]"
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
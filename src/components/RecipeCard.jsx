import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaStar, FaHeart } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
    const [disabled, setDisabled] = useState(false)
    const [seeAll, setSeeAll] = useState(false)
    const { cookingMethod, ingredients, ratings, recipeName, recipeImage } = recipe

    const handleBtnDisabled = () => {
        setDisabled(true)
        toast.success('Added to you Favorite.')
        localStorage.setItem('likesProduct', JSON.stringify(recipe.id))

    }
    return (
        <div className=" rounded overflow-hidden shadow-lg relative pb-3">
            <img className="w-full" src={recipeImage} alt="Sunset in the mountains" />
            <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2">{recipeName}</div>

                <ul className='list-disc'>
                    {
                        ingredients?.slice(0, 5)?.map((item, i) => <li key={i} className='ml-5'>{item}</li>)
                    }
                </ul>
                <p className="text-gray-700 text-base">
                    {seeAll ? cookingMethod : cookingMethod.slice(0, 100) + '...'}
                    <button onClick={() => setSeeAll(!seeAll)}
                        className='text-my_primary underline'
                    >
                        {seeAll ? 'Read Less' : 'Read More'}
                    </button>
                </p>


            </div>
            <div className="px-6 pt-4 pb-2">
                <div className='flex gap-10 absolute bottom-2'>
                    <p className='inline-flex items-center'><span className='mr-2 text-my_primary'><FaStar /></span> {ratings}</p>
                    <button onClick={handleBtnDisabled} className='my-button disabled:bg-opacity-50' disabled={disabled}><FaHeart /></button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
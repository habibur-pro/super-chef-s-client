import React, { useState } from 'react';
import foodImage from '../assets/testFood.jpg'
import { toast } from 'react-hot-toast';
const RecipeCard = ({ recipe }) => {
    const [disabled, setDisabled] = useState(false)
    const { cookingMethod, ingredients, ratings, recipeName, recipeImage } = recipe

    const handleBtnDisabled = () => {
        setDisabled(true)
        toast.success('Added to you Favorite.')
        localStorage.setItem('likesProduct', JSON.stringify(recipe.id))

    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img className="w-full" src={foodImage} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{recipeName}</div>

                <ul className='list-disc'>
                    {
                        ingredients.map(item => <li className='ml-5'>{item}</li>)
                    }
                </ul>
                <p className="text-gray-700 text-base">{cookingMethod}</p>


            </div>
            <div className="px-6 pt-4 pb-2">
                <div className='flex gap-10'>
                    <p>{ratings}</p>
                    <button onClick={handleBtnDisabled} className='my-button disabled:bg-opacity-50' disabled={disabled}>like</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
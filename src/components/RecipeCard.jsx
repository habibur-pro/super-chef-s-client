import React from 'react';
import foodImage from '../assets/testFood.jpg'
const RecipeCard = ({ recipe }) => {
    const { cookingMethod, ingredients, ratings, recipeName, recipeImage } = recipe
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
                    <button className='my-button'>like</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
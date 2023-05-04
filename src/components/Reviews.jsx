import React from 'react';
import testFood from '../assets/testFood.jpg'
import ReviewCard from './ReviewCard';


const Reviews = ({ reviews }) => {
    console.log('reviews', reviews)
    return (
        <div className='my-container'>
            <h1 className='text-3xl text-gray-600 text-center mb-10 font-extrabold'>Flavor Feedback</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;
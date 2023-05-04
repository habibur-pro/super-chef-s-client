import React from 'react';
import ReviewCard from './ReviewCard';




const Reviews = ({ reviews }) => {
    console.log('reviews', reviews)
    return (
        <div className='my-container'>

            <h1 className='text-3xl text-gray-600 text-center font-extrabold'>Flavor Feedback</h1>
            <p className='text-center mt-2 mb-12 md:w-1/2 mx-auto'>
                In our journey we have met many customers and tried to serve them as best we can. Today we are so far in their love
            </p>
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
import React from 'react';
import LazyLoad from 'react-lazy-load';

const ReviewCard = ({ review }) => {
    return (
        <LazyLoad>
            <blockquote className="rounded-lg glass  p-8">
            <div className="lg:flex items-center gap-4">
                <img
                    alt="Man"
                    src={review.image_url}
                    className="h-16 w-16 rounded-full object-cover mx-auto lg:mx-0 text-center lg:text-start"
                />
                <div>
                    <p className="mt-1  text-lg font-medium text-center lg:text-start text-gray-200">{review.name}</p>
                </div>
            </div>
            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-200">
                {review.review_text.slice(0, 99)}
            </p>
        </blockquote>
        </LazyLoad>
    );
};

export default ReviewCard;
import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
                <img
                    alt="Man"
                    src={review.image_url}
                    className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                    <p className="mt-1 text-lg font-medium text-gray-700">{review.name}</p>
                </div>
            </div>
            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                {review.review_text.slice(0, 99)}
            </p>
        </blockquote>
    );
};

export default ReviewCard;
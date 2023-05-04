import React from 'react';
import testFood from '../assets/testFood.jpg'
const Reviews = () => {
    return (
        <div className='my-container'>
            <h1 className='text-3xl text-gray-600 text-center mb-10 font-extrabold'>Flavor Feedback</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <blockquote className="rounded-lg bg-gray-100 p-8">
                    <div className="flex items-center gap-4">
                        <img
                            alt="Man"
                            src={testFood}
                            className="h-16 w-16 rounded-full object-cover"
                        />
                        <div>
                            <p className="mt-1 text-lg font-medium text-gray-700">Paul Starr</p>
                        </div>
                    </div>
                    <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                        voluptatem alias ut provident sapiente repellendus.
                    </p>
                </blockquote>
                <blockquote className="rounded-lg bg-gray-100 p-8">
                    <div className="flex items-center gap-4">
                        <img
                            alt="Man"
                            src={testFood}
                            className="h-16 w-16 rounded-full object-cover"
                        />
                        <div>
                            <p className="mt-1 text-lg font-medium text-gray-700">Paul Starr</p>
                        </div>
                    </div>
                    <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                        voluptatem alias ut provident sapiente repellendus.
                    </p>
                </blockquote> <blockquote className="rounded-lg bg-gray-100 p-8">
                    <div className="flex items-center gap-4">
                        <img
                            alt="Man"
                            src={testFood}
                            className="h-16 w-16 rounded-full object-cover"
                        />
                        <div>
                            <p className="mt-1 text-lg font-medium text-gray-700">Paul Starr</p>
                        </div>
                    </div>
                    <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                        voluptatem alias ut provident sapiente repellendus.
                    </p>
                </blockquote>
            </div>
        </div>
    );
};

export default Reviews;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {

    const chef = useLoaderData()
    console.log(chef)

    return (
        <div className='my-container bg-white'>
            <h3 className='text-5xl mt-20 text-red-500'>chefDetails</h3>
        </div>
    );
};

export default ChefDetails;
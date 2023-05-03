import React from 'react';
import { useLocation } from 'react-router-dom';

const ChefDetails = () => {
    const location = useLocation()

    console.log(location)
    return (
        <div>
            <h3 className='text-5xl mt-20 text-red-500'>chefDetails</h3>
        </div>
    );
};

export default ChefDetails;
import React, { useContext } from 'react';
import { ChefDataContext } from '../layouts/Main';
import SingleChefCard from './SingleChefCard';
// import { ChefDataContext } from '../layouts/Main';

const OurChefs = () => {
    const chefsData = useContext(ChefDataContext)

    return (
        <div className='my-container  '>
            <h3 className='text-center text-3xl   font-extrabold text-gray-200 '>Our Master Chefs </h3>
            <p className='text-center text-gray-200 mb-12 mt-2'>Each of our chefs has 4+ experience. They make recipes with their love</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:p-5 '>
                {
                chefsData.map(chef => <SingleChefCard
                    key={chef.chefId}
                    chef={chef}
                ></SingleChefCard>)
            }
            </div>
        </div>
    );
};

export default OurChefs;
import React, { useContext } from 'react';
import { ChefDataContext } from '../layouts/Main';
import SingleChefCard from './SingleChefCard';
// import { ChefDataContext } from '../layouts/Main';

const OurChefs = () => {
    const chefsData = useContext(ChefDataContext)

    return (
        <div className='my-container bg-[#efefef] '>
            <h3 className='text-center text-3xl   font-extrabold text-gray-600 mb-5'>Our Master Chefs </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:p-5 '>
                {
                chefsData.map(chef => <SingleChefCard
                    key={chef.id}
                    chef={chef}
                >

                </SingleChefCard>)
            }
            </div>
        </div>
    );
};

export default OurChefs;
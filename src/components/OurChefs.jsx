import React, { useContext } from 'react';
import { ChefDataContext } from '../layouts/Main';
import SingleChefCard from './SingleChefCard';
// import { ChefDataContext } from '../layouts/Main';

const OurChefs = () => {
    const chefsData = useContext(ChefDataContext)

    return (
        <div className='my-container bg-[#efefef]'>
            <h3 className='text-center text-3xl font-super  font-extrabold text-red-500'>Meet Our Master Chefs </h3>
            {
                chefsData.map(chef => <SingleChefCard
                    key={chef.id}
                    chef={chef}
                >

                </SingleChefCard>)
            }
        </div>
    );
};

export default OurChefs;
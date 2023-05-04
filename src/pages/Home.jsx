import React from 'react';
import Banner from '../components/Banner';
import OurChefs from '../components/OurChefs';
import FeaturedRecipe from '../components/FeaturedRecipe';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <FeaturedRecipe />
            <OurChefs></OurChefs>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../components/Banner';
import OurChefs from '../components/OurChefs';
import FeaturedRecipe from '../components/FeaturedRecipe';
import Reviews from '../components/Reviews';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <FeaturedRecipe />
            <OurChefs></OurChefs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
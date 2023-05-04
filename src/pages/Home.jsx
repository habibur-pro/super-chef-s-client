import React from 'react';
import Banner from '../components/Banner';
import OurChefs from '../components/OurChefs';
import FeaturedRecipe from '../components/FeaturedRecipe';
import Reviews from '../components/Reviews';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const reviews = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <FeaturedRecipe />
            <OurChefs></OurChefs>
            <Reviews reviews={reviews}></Reviews>
        </div>
    );
};

export default Home;
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import notFoundAnimation from '../assets/animation/404.json'

const NotFound = () => {
    const error = useRouteError()
    console.log(error)
    console.log(error)
    return (
        <div className='w-screen h-[calc(100vh-72px)] flex justify-center items-center '>
            <div className='my-container '>
                <div className='text-center'>
                    <Lottie animationData={notFoundAnimation} loop={true} />

                    <h3 className='text-2xl text-center text-black mb-3'>{error?.error?.message}</h3>
                    <Link to='/'>
                        <button className='py-3 px-5 bg-my_primary text-white rounded text-md hover:bg-primary_hover text-lg '>Back to Home</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default NotFound;
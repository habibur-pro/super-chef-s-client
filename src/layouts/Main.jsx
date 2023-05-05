import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

export const ChefDataContext = createContext('')

const Main = () => {
    const chefsData = useLoaderData()

    return (
        <div>
            <ChefDataContext.Provider className='bg-gray-700' value={chefsData}>
            <Header></Header>
            <div className='min-h-[calc(100vh-72px)] mt-[72px]'>

                <Outlet />
            </div>
            <Footer />
                <Toaster />
            </ChefDataContext.Provider>
        </div>
    )



};

export default Main;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-72px)] mt-[72px]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
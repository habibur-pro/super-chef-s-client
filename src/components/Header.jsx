import React, { useContext, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Divide as Hamburger } from 'hamburger-react'
import { AuthContext } from '../routes/AuthProvider';


const Navbar = () => {

    const { user, createUserWithGoogle } = useContext(AuthContext)
    // console.log(user)
    const [isOpen, setOpen] = useState(false)


    const links = [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },

    ]
    const handelLogin = () => {
        createUserWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='shadow-md w-full fixed top-0 z-40 '>
            <div className='md:flex justify-between items-center bg-white py-2 md:px-10 px-7 '>
                <Link to='/'>
                    <span className='text-2xl text-my_primary font-extrabold inline-flex items-center'>
                        <img className='w-10 mr-2' src={logo} alt="" /> <span className='font-super ' >Super Chef'S</span>
                    </span>
                </Link>
                <div onClick={() => setOpen(!isOpen)} className='text-3xl absolute top-1.5 right-6 md:hidden'>
                    {
                        // menuOpen ? <HiXMark></HiXMark>
                        //     :
                        //     <HiOutlineBars3></HiOutlineBars3>
                        <Hamburger
                            toggled={isOpen} toggle={setOpen}
                            direction="right"
                            size={22}
                            duration={0.6}
                        // easing="ease-in"
                        />
                    }
                </div>
                <ul className={` font-super md:flex md:flex-row flex-col  absolute md:static  left-0 bg-white md:bg-auto w-full md:w-auto pb-12 md:pb-0 md:z-auto z-[-1] transition-all duration-500  easy-in   ${isOpen ? 'top-[68px] ' : 'top-[-500px] '}`}>
                    {
                        isOpen && <p className='divide-x border border-my_primary md:hidden w-full border-2'></p>
                    }
                    {
                        links.map(link => <li
                            className='text-sm my-3 md:my-auto md:mr-8 pl-8 md:pl-0'
                            key={link.name}
                        >
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? 'text-my_primary' : 'default'

                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>)
                    }
                    <button onClick={handelLogin} className='my-button'>Sign in</button>
                </ul>

            </div>
        </div>

    );
};

export default Navbar;
import React, { useState } from 'react';
import { HiXMark, HiOutlineBars3 } from "react-icons/hi2";
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        // { name: 'Contact', path: '/contact' },
        // { name: 'About', path: '/about' }

    ]
    return (
        <div className='shadow-md w-full fixed top-0 '>
            <div className='md:flex justify-between items-center bg-white py-2 md:px-10 px-7 '>
                <Link to='/'>
                    <span className='text-2xl text-my_primary font-extrabold inline-flex items-center'>
                        <img className='w-10 mr-2' src={logo} alt="" /> <span className='font-super ' >Super Chef'S</span>
                    </span>
                </Link>
                <div onClick={() => setMenuOpen(!menuOpen)} className='text-3xl absolute top-6 right-6 md:hidden'>
                    {
                        menuOpen ? <HiXMark></HiXMark>
                            :
                            <HiOutlineBars3></HiOutlineBars3>
                    }
                </div>
                <ul className={` font-super md:flex md:flex-row flex-col  absolute md:static  left-0 bg-white md:bg-auto w-full md:w-auto pb-12 md:pb-0 md:z-auto z-[-1] transition-all duration-500  easy-in   ${menuOpen ? 'top-[68px] ' : 'top-[-500px] '}`}>
                    {
                        menuOpen && <p className='divide-x border border-my_primary md:hidden w-full border-2'></p>
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
                    <button button className='px-5 ml-8 md:ml-0  py-2 bg-my_primary text-white rounded text-sm font-semibold duration-300 hover:bg-blue-600'>Sign in</button>
                </ul>

            </div>
        </div>

    );
};

export default Navbar;
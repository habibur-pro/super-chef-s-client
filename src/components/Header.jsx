import React, { useContext, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Divide as Hamburger } from 'hamburger-react'
import { AuthContext } from '../routes/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isMenuOpen, setMenuOpen] = useState(false)

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },

    ]

    // logOut handler 
    const handleLogOut = () => {
        logOut()

    }


    return (
        <div className='shadow-md w-full fixed top-0 z-40 '>
            <div className='md:flex justify-between items-center bg-gray-600 py-3 md:px-10 px-7 xl:px-24 '>
                <Link to='/'>
                    <span className='text-2xl text-amber-400 font-extrabold inline-flex items-center'>
                        <img className='w-10 mr-2' src={logo} alt="" /> <span className='font-super ' >Super Chef'S</span>
                    </span>
                </Link>
                <div onClick={() => setMenuOpen(!isMenuOpen)} className='text-3xl absolute top-1.5 right-6 md:hidden text-white '>

                    {/* hamburger  */}
                    {

                        <Hamburger
                            toggled={isMenuOpen} toggle={setMenuOpen}
                            direction="right"
                            size={22}
                            duration={0.6}
                        // easing="ease-in"
                        />
                    }
                </div>

                {/* link parent  */}

                <ul className={` font-super md:flex md:flex-row flex-col   absolute md:static  left-0 bg-gray-600 md:bg-auto w-full md:w-auto pb-12 md:pb-0 md:z-auto z-[-1] transition-all duration-500  easy-in   ${isMenuOpen ? 'top-[68px] ' : 'top-[-500px] '}`}>

                    {
                        links.map(link => <li
                            className='text-sm my-3 md:my-auto md:mr-8 pl-8 md:pl-0'
                            key={link.name}
                        >
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? 'text-amber-400' : 'text-gray-200'

                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>)
                    }
                    {
                        user ?
                            <div className='md:flex justify-start items-center gap-3'>
                                <div className='relative pl-8 md:pl-0'>
                                    <img title={user?.displayName ? user.displayName : ''} className='border w-12 h-12 rounded-full mb-3 md:mb-0' src={user?.photoURL} />

                                </div>

                                <button onClick={handleLogOut} className='btn  btn-warning ml-8 md:ml-0 rounded-sm'>Sign Out</button>
                            </div>
                            :
                            <Link to='/login'><button className='btn btn-warning  ml-8 md:ml-0 rounded-sm'>Sign in</button></Link>
                    }
                </ul>

            </div>
        </div>

    );
};

export default Navbar;
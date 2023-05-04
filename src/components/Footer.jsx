import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-slate-900 mt-5 text-center py-5 text-white dark:bg-neutral-600">
            <div className=''>
                <div className=" pt-9">
                    <div className="mb-9 flex justify-center">
                        <h1 className='uppercase text-4xl font-bold tracking-widest '>Super chefs</h1>
                    </div>
                </div>
                <ul className='flex justify-center  gap-4 font-bold mb-5 flex-wrap'>
                    <li className='hover:underline duration-500 font-sembold'><Link>Home</Link></li>
                    <li className='hover:underline duration-500 font-sembold'><Link>Feature </Link></li>
                    <li className='hover:underline duration-500 font-sembold'><Link>Reviews</Link></li>
                    <li className='hover:underline duration-500 font-sembold'><Link>Chefs</Link></li>
                    <li className='hover:underline duration-500 font-sembold'><Link>Blog</Link></li>
                    <li className='hover:underline duration-500 font-sembold'><Link>Contact Us</Link></li>
                </ul>
                <ul className='flex justify-center text-black my-5 mt-7  gap-4 text-lg'>
                    <li className='p-2 bg-slate-200 rounded-full hover:-translate-y-2 duration-500'><Link> <FaFacebookF /></Link></li>
                    <li className='p-2 bg-slate-200 rounded-full hover:-translate-y-2 duration-500'><Link> <FaInstagram /></Link></li>
                    <li className='p-2 bg-slate-200 rounded-full hover:-translate-y-2 duration-500'><Link> <FaLinkedinIn /></Link></li>
                    <li className='p-2 bg-slate-200 rounded-full hover:-translate-y-2 duration-500'><Link> <FaTwitter /></Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;
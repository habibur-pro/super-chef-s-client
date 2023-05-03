import React, { useState } from 'react';
import background from '../assets/background.png'
import loginImage from '../assets/login-image.jpg'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FcGoogle, } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {

    const [isShowPass, setShowPass] = useState(false)


    return (
        <div id='loginPage' className='w-screen, h-[calc(100vh-72px)] pt-10 flex justify-center items-center'>
            <div className='my-container'>
                <div className='grid grid-cols-1 md:gap-3 md:grid-cols-2  border shadow-2xl rounded'>
                    <div>
                        <img className='h-full w-full' src={loginImage} alt="" />
                    </div>
                    {/* fomr containr  */}

                    <div className='flex justify-center flex-col px-10 py-10'>
                        <h3 className='font-bold text-2xl text-center text-gray-700'>Sign In</h3>

                        <form className=''>
                            <div className='my-4'>
                                <label className='block font-gray-700 text-md'>Email</label>
                                <div className='w-full border flex  items-center py-2'>
                                    <input h-full
                                        className='  border-0 w-full  border-gray-300 outline-none rounded pl-3 py-1'
                                        name='email'
                                        type='email'
                                        required
                                    />

                                </div>
                            </div>
                            <div className='my-4'>
                                <label className='block font-gray-700 text-md'>Password</label>
                                <div className='w-full border flex py-2 items-center'>
                                    <input
                                        className='  border-0 w-full  border-gray-300 outline-none rounded pl-3 py-1'
                                        name='email'
                                        type={isShowPass ? 'text' : 'password'}
                                        required
                                    />
                                    <span className='text-xl text-gray-700' onClick={() => setShowPass(!isShowPass)}>
                                        {
                                            isShowPass ? <FaEyeSlash className='mx-3 ' />
                                                :
                                                <FaEye className='mx-3' />
                                        }
                                    </span>
                                </div>
                            </div>
                            <input className=' w-full text-xl py-3 mt-5 rounded bg-my_primary text-white' type="submit" value="Sign in" />
                        </form>
                        <p className='divide-y border-b relative mt-10'>
                            <span className='absolute -top-3 left-1/2 bg-white px-2'>Or</span>
                        </p>

                        <div className=' my-5'>
                            <button className='bg-black my-3 text-white w-full inline-flex items-center text-center justify-center py-3 rounded '>
                                <FaGithub className='text-2xl mr-3' />
                                Sign In with Gitub
                            </button>
                            <button className="border  my-3 w-full inline-flex items-center text-center justify-center py-3 rounded ">
                                <FcGoogle className='text-2xl mr-3' />
                                Sign In with Gitub
                            </button>

                        </div>
                        <p className=' text-center'>You have not any account <Link to='/register' className='text-my_primary text-center '>Register</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
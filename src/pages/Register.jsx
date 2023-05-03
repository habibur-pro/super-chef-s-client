import React, { useState } from 'react';
import loginImage from '../assets/login-image.jpg'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FcGoogle, } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Register = () => {
    const [isShowPass, setShowPass] = useState(false)
    const [isTermsArgree, setTermsAgree] = useState(false)
    const [error, setError] = useState('you have an error')

    return (
        <div id='loginPage' className='w-screen, h-[calc(100vh-72px)] pt-10 flex justify-center items-center'>
            <div className='my-container'>
                <div className='grid grid-cols-1 md:gap-3 md:grid-cols-2  border shadow-2xl rounded'>
                    <div>
                        <img className='h-full w-full' src={loginImage} alt="" />
                    </div>
                    {/* fomr containr  */}

                    <div className='flex justify-center flex-col px-10 py-10'>
                        <h3 className='font-bold text-2xl text-center text-gray-700'>Register</h3>

                        <form className=''>
                            {/* Name field  */}
                            <div className='my-4'>
                                <label className='block font-gray-700 text-md'>Name</label>
                                <div className='w-full border flex  items-center py-1.5'>
                                    <input h-full
                                        className='  border-0 w-full  border-gray-300 outline-none rounded pl-3 py-1'
                                        name='name'
                                        type='text'
                                        required
                                    />

                                </div>
                            </div>
                            {/* email field */}
                            <div className='my-4'>
                                <label className='block font-gray-700 text-md'>Email</label>
                                <div className='w-full border flex  items-center py-1.5'>
                                    <input h-full
                                        className='  border-0 w-full  border-gray-300 outline-none rounded pl-3 py-1'
                                        name='email'
                                        type='email'
                                        required
                                    />

                                </div>
                            </div>
                            {/* password field  */}
                            <div className='my-4'>
                                <label className='block font-gray-700 text-md'>Password</label>
                                <div className='w-full border flex py-1.5 items-center'>
                                    <input
                                        className='  border-0 w-full  border-gray-300 outline-none rounded pl-3 py-1'
                                        name='password'
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
                            {/* confire password field  */}

                            <div className='my-4'>
                                <label className='block font-gray-700 text-md'>Confirm Password</label>
                                <div className='w-full border flex py-1.5 items-center'>
                                    <input
                                        className='  border-0 w-full  border-gray-300 outline-none rounded pl-3 py-1'
                                        name='confirm_Password'
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
                            {/* terms conditon  */}
                            <p className=''>
                                <input onChange={() => setTermsAgree(!isTermsArgree)} type="checkbox" className='accent-my_primary mr-2 ' />
                                Are agree with Our <Link className='text-my_primary hover:underline'>terms and conditions</Link>?
                            </p>

                            {/* error messege  */}
                            {
                                error && <p className='text-red-500 text-center font-bold '>{error}</p>
                            }

                            {/* submit button  */}
                            <input
                                className=' w-full disabled:bg-opacity-70 text-xl py-3 mt-4 rounded bg-my_primary text-white' type="submit"
                                value="Register"
                                disabled={!isTermsArgree}
                            />
                        </form>

                        {/* divider  */}
                        <p className='divide-y border-b relative mt-10'>
                            <span className='absolute -top-3 left-1/2 bg-white px-2'>Or</span>
                        </p>

                        {/* social button  */}
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
                        <p className=' text-center mt-3'>You have  an account <Link to='/login' className='text-my_primary text-center '>Login</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;
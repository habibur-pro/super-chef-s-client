import React, { useContext, useState } from 'react';
import loginImage from '../assets/login-image.jpg'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FcGoogle, } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../routes/AuthProvider';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isTermsArgree, setTermsAgree] = useState(false)
    const [error, setError] = useState('')

    const { user, loginWithGoogle, loginWithGithub, registerWithEmailPassword } = useContext(AuthContext)

    const handleRegister = (event) => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            return setError('password will be 6 character or upper')

        }
        const photoUrl = form.photo_url.value;
        console.log('register', name, email, password, photoUrl)

        // register with email and password 
        registerWithEmailPassword(email, password)

            .then(result => {
                console.log('login user', result.user)
            })
            .catch(error => setError(error.message))



    }
    // register with google 
    const googleRegisterHandler = () => {
        setError('')
        loginWithGoogle()
            .then(result => {
                console.log('github login', result.user)
            })
            .catch(error => setError(error))
    }

    // register with Github 
    const githubRegisterHandler = () => {
        setError('')
        loginWithGithub()
            .then(result => {
                console.log('github login', result.user)
            })
            .catch(error => setError(error))
    }
    return (
        <div id='loginPage' className='w-screen, h-[calc(100vh-72px)] pt-10 flex justify-center items-center'>
            <div className='my-container '>
                <div className='grid grid-cols-1  md:grid-cols-5  border shadow-2xl rounded'>
                    <div className='md:col-span-3'>
                        <img className='h-full w-full' src={loginImage} alt="" />
                    </div>
                    {/* fomr containr  */}

                    <div className='md:col-span-2 flex justify-center flex-col px-10 py-6 bg-white '>
                        <h3 className='font-bold text-2xl text-center text-gray-700'>Register</h3>

                        <form onSubmit={handleRegister} className=''>
                            {/* Name field  */}
                            <div className='my-4'>
                                <label className='block font-gray-700 text-md'>Name</label>
                                <div className='w-full border flex  items-center py-1.5'>
                                    <input
                                        className='  border-0 w-full  border-gray-300 outline-none rounded pl-3 '
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
                                    <input
                                        className='  border-0 w-full  border-gray-300 outline-none rounded pl-3 '
                                        name='email'
                                        type='email'
                                        required
                                    />

                                </div>
                            </div>
                            <div className='my-4'>
                                <label className='block font-gray-700 text-md'>Photo Url</label>
                                <div className='w-full border flex  items-center py-1.5'>
                                    <input
                                        className='  border-0 w-full  border-gray-300 outline-none rounded pl-3 '
                                        name='photo_url'
                                        type='url'
                                        required
                                    />

                                </div>
                            </div>
                            {/* password field  */}
                            <div className='my-4'>
                                <label className='block font-gray-700 text-md'>Password</label>
                                <div className='w-full border flex py-1.5 items-center'>
                                    <input
                                        className='  border-0 w-full  border-gray-300 outline-none rounded pl-3 '
                                        name='password'
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                    />
                                    <span className='text-xl text-gray-700' onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash className='mx-3 ' />
                                                :
                                                <FaEye className='mx-3' />
                                        }
                                    </span>
                                </div>

                            </div>
                            {/* confire password field  */}

                            {/* <div className='my-4'>
                                <label className='block font-gray-700 text-md'>Confirm Password</label>
                                <div className='w-full border flex py-1.5 items-center'>
                                    <input
                                        className='  border-0 w-full  border-gray-300 outline-none rounded pl-3 '
                                        name='confirm_Password'
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        required
                                    />
                                    <span className='text-xl text-gray-700' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {
                                            showConfirmPassword ? <FaEyeSlash className='mx-3 ' />
                                                :
                                                <FaEye className='mx-3' />
                                        }
                                    </span>
                                </div>

                            </div> */}
                            {/* terms conditon  */}
                            <p className=''>
                                <input onChange={() => setTermsAgree(!isTermsArgree)} type="checkbox" className='accent-blue-500 mr-2 ' />
                                Are agree with Our <Link className='text-amber-500 hover:underline'>terms and conditions</Link>?
                            </p>

                            {/* error messege  */}
                            {
                                error && <p className='text-red-500 text-center '>{error}</p>
                            }

                            {/* submit button  */}
                            <input
                                className=' w-full disabled:bg-opacity-70 text-xl py-1.5 mt-4 rounded bg-my_primary text-white' type="submit"
                                value="Register"
                                disabled={!isTermsArgree}
                            />
                        </form>

                        {/* divider  */}
                        {/* <p className='divide-y border-b relative mt-5'>
                            <span className='absolute -top-3 left-1/2 bg-white px-2'>Or</span>
                        </p> */}

                        {/* social button  */}
                        <div className='flex items-center justify-center gap-5 mt-5'>

                            <button onClick={githubRegisterHandler} className=''>
                                <FaGithub className='text-2xl mr-3 w-10 h-10 border rounded-full' title='Login with Github' />

                            </button>
                            <button onClick={googleRegisterHandler} className=''>
                                <FcGoogle className='text-2xl mr-3 w-10 h-10  rounded-full' title='Login with Google' />

                            </button>


                        </div>
                        <p className=' text-center mt-2'>You have  an account <Link to='/login' className='text-my_primary text-center '>Login</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;
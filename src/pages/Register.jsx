import React, { useContext, useState } from 'react';
import bannerFood from '../assets/bannerFood.jpg'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle, } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../routes/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../utils/firebase.config';
import Spinner from '../components/Spinner';

const Register = () => {
    const auth = getAuth(app)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isTermsArgree, setTermsAgree] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || '/'


    const { user, setUser, loginWithGoogle, loginWithGithub, registerWithEmailPassword, setNameAndPhoto } = useContext(AuthContext)

    const [isLoading, setLoading] = useState(false)

    const handleRegister = (event) => {
        setError('')
        setLoading(true)
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo_url.value;

        if (password.length < 6) {
            setLoading(false)
            form.reset()
            return setError('password will be 6 character or upper')


        }

        // register with email and password 
        registerWithEmailPassword(email, password)

            .then(result => {
                setLoading(true)

                //    updating profile name and image 
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then(() => {
                        setUser(result.user)
                        setLoading(false)
                        navigate(from, { replace: true })
                    })
                    .catch(error => {
                        setLoading(false)
                        form.reset()
                        setError(error.code)
                    })

            })
            .catch(error => {
                setLoading(false)
                form.reset()
                setError(error.message)
            })


    }
    // register with google 
    const googleRegisterHandler = () => {
        setError('')
        loginWithGoogle()
            .then(result => {
                navigate(from)
            })
            .catch(error => setError(error))
    }

    // register with Github 
    const githubRegisterHandler = () => {
        setError('')
        loginWithGithub()
            .then(result => {
                navigate(from)
            })
            .catch(error => setError(error))
    }
    return (
        <div id='loginPage' className=' min-h-[calc(100vh-72px)] pt-10 flex justify-center items-center'>
            <div className='my-container '>
                <div className='grid grid-cols-1  md:grid-cols-5  border shadow-2xl rounded'>
                    <div className='md:col-span-3'>
                        <img className='h-full w-full' src={bannerFood} alt="" />
                    </div>
                    {/* fomr containr  */}

                    <div className='md:col-span-2 flex justify-center flex-col px-10 py-6 glass'>
                        <h3 className='font-bold text-2xl text-center text-gray-200'>Register</h3>

                        <form onSubmit={handleRegister} className=''>
                            {/* Name field  */}
                            <div className='my-4 '>
                                <label className='block text-gray-200 text-md '>Name</label>
                                <div className='w-full border border-gray-200 flex  items-center py-1.5'>
                                    <input
                                        className='  border-0 w-full bg-transparent text-gray-200  tracking-wider outline-none rounded pl-3 '
                                        name='name'
                                        type='text'
                                        required
                                    />

                                </div>
                            </div>
                            {/* email field */}
                            <div className='my-4 '>
                                <label className='block text-gray-200 text-md '>Email</label>
                                <div className='w-full border border-gray-200 flex  items-center py-1.5'>
                                    <input
                                        className='  border-0 w-full bg-transparent text-gray-200  tracking-wider outline-none rounded pl-3 '
                                        name='email'
                                        type='email'
                                        required
                                    />

                                </div>
                            </div>
                            <div className='my-4 '>
                                <label className='block text-gray-200 text-md '>Proto Url</label>
                                <div className='w-full border border-gray-200 flex  items-center py-1.5'>
                                    <input
                                        className='  border-0 w-full bg-transparent text-gray-200  tracking-wider outline-none rounded pl-3 '
                                        name='photo_url'
                                        type='url'
                                        required
                                    />

                                </div>
                            </div>
                            {/* password field  */}
                            <div className='my-4'>
                                <label className='block text-gray-200 text-md'>Password</label>
                                <div className='w-full border border-gray-200 flex  items-center py-1.5'>
                                    <input
                                        className=' border-0 w-full bg-transparent text-gray-200  tracking-wider outline-none rounded pl-3'
                                        name='password'
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                    />
                                    <span className='text-xl text-gray-200' onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash className='mx-3 ' />
                                                :
                                                <FaEye className='mx-3' />
                                        }
                                    </span>
                                </div>

                            </div>

                            {/* terms conditon  */}
                            <p className='text-gray-200 '>
                                <input onChange={() => setTermsAgree(!isTermsArgree)} type="checkbox" className='accent-amber-500 mr-2 ' />
                                Are agree with Our <Link className='text-amber-400 hover:underline'>terms and conditions?</Link>
                            </p>

                            {/* error messege  */}
                            {
                                error && <p className='text-red-500 text-center '>{error}</p>
                            }

                            {/* submit button  */}
                            <input
                                className=' disabled:bg-amber-400 w-full btn btn-warning rounded-sm mt-7 mb-5' type="submit"
                                value="Register"
                                disabled={!isTermsArgree}
                            />
                        </form>



                        {/* social button  */}
                        <p className=' text-center text-gray-200 mt-2'>You have not  account <Link state={{ from }} replace to='/login' className='text-amber-400 text-center '>Login</Link>
                        </p>

                        <div className='flex items-center justify-center gap-5 mt-5'>

                            {/* github button  */}
                            <button onClick={googleRegisterHandler} className=''>
                                <FaGithub className='text-2xl  mr-3 w-10 h-10 text-white rounded-full' title='Login with Github' />
                            </button>

                            {/* google button  */}
                            <button onClick={githubRegisterHandler} className=''>
                                <FcGoogle className='text-2xl mr-3 w-10 h-10   rounded-full' title='Login with Github' />
                            </button>


                        </div>
                    </div>

                </div>
            </div>
            {
                isLoading && <Spinner />
            }
        </div>
    );
};

export default Register;
import React, { useContext, useState } from 'react';
import loginImage from '../assets/login-image.jpg'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle, } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../routes/AuthProvider';
import Spinner from '../components/Spinner';

const Register = () => {
    const { user, loginWithGoogle, loginWithGithub, loginWthEmailPassword } = useContext(AuthContext)

    const [isLoading, setLoading] = useState(false)

    const [showPassword, setShowPassword] = useState(false)
    const [isTermsArgree, setTermsAgree] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    console.log('from', from)

    // login handler 
    const handleLogin = (event) => {
        setError('')
        setLoading(true)
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setLoading(false)
            form.reset()
            return setError('password will be 6 character or upper')

        }

        // email password login hanler 
        loginWthEmailPassword(email, password)

            .then(result => {
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(error => {

                setLoading(false)
                form.reset()
                setError(error.code)
            })

    }

    // google login handler 
    const googleLoginHandler = () => {
        setError('')
        loginWithGoogle()
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error)
            })

    }
    // github login handler 
    const githubLoginHandler = () => {
        setError('')
        loginWithGithub()
            .then(result => {
                navigate(from, { replace: true }) 
            })
            .catch(error => {
                setError(error)
            })

    }

    return (
        <div id='loginPage' className='w-screen h-[calc(100vh-72px)] pt-10 flex justify-center items-center'>
            <div className='  '>
                <div className=' w-full grid grid-cols-1  md:grid-cols-5  border md:shadow-2xl rounded'>
                    <div className='md:col-span-3'>
                        <img className='h-full w-full' src={loginImage} alt="" />
                    </div>
                    {/* fomr containr  */}

                    <div className='md:col-span-2 flex justify-center flex-col px-10 py-10 bg-white '>
                        <h3 className='font-bold text-2xl text-center text-gray-700'>Sign In</h3>

                        <form onSubmit={handleLogin} className=''>
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


                            {/* terms conditon  */}
                            <p className=''>
                                <input onChange={() => setTermsAgree(!isTermsArgree)} type="checkbox" className='accent-blue-500 mr-2 ' />
                                Are agree with Our <Link className='text-amber-500 hover:underline'>terms and conditions</Link>?
                            </p>
                            {/* error messege  */}
                            {
                                error && <p className='text-red-500 text-center duration-500'>{error}</p>
                            }

                            {/* submit button  */}
                            <input
                                className=' w-full disabled:bg-opacity-70 text-xl py-1.5 mt-4 rounded bg-my_primary text-white'
                                type="submit"
                                value="Sign In"
                                disabled={!isTermsArgree}
                            />
                        </form>

                        <div className='flex items-center justify-center gap-5 mt-5'>

                            {/* github button  */}
                            <button onClick={googleLoginHandler} className=''>
                                <FaGithub className='text-2xl mr-3 w-10 h-10 border rounded-full' title='Login with Github' />
                            </button>

                            {/* google button  */}
                            <button onClick={githubLoginHandler} className=''>
                                <FcGoogle className='text-2xl mr-3 w-10 h-10  rounded-full' title='Login with Github' />
                            </button>


                        </div>
                        <p className=' text-center mt-2'>You have not  account <Link state={{ from }} replace to='/register' className='text-my_primary text-center '>Register</Link></p>
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
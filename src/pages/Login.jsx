import React, { useContext, useState } from 'react';
import bannerFood from '../assets/bannerFood.jpg'
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
        <div id='loginPage' className=' min-h-[calc(100vh-72px)] pt-10 flex justify-center items-center'>
            <div className=' my-container  '>
                <div className='border border-gray-200 w-full grid grid-cols-1  md:grid-cols-5   md:shadow-2xl rounded'>
                    <div className='md:col-span-3'>
                        <img className='h-full w-full' src={bannerFood} alt="" />
                    </div>
                    {/* fomr containr  */}

                    <div className='md:col-span-2 flex justify-center glass flex-col px-10 py-10  '>
                        <h3 className='font-bold text-2xl text-center text-gray-200'>Sign In</h3>

                        <form onSubmit={handleLogin} className=''>
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
                                error && <p className='text-red-500 text-center duration-500'>{error}</p>
                            }

                            {/* submit button  */}
                            <input
                                className='disabled:bg-amber-400 btn btn-warning w-full mt-7 mb-5 rounded-sm '
                                type='submit'
                                value="Sign In"
                                disabled={!isTermsArgree}
                            />

                        </form>

                        {/* redirecet register  */}
                        <p className=' text-center text-gray-200 mt-2'>You have not  account <Link state={{ from }} replace to='/register' className='text-amber-400 text-center '>Register</Link>
                        </p>

                        <div className='flex items-center justify-center gap-5 mt-5'>

                            {/* github button  */}
                            <button onClick={googleLoginHandler} className=''>
                                <FaGithub className='text-2xl  mr-3 w-10 h-10 text-white rounded-full' title='Login with Github' />
                            </button>

                            {/* google button  */}
                            <button onClick={githubLoginHandler} className=''>
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
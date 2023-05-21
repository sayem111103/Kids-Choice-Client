import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/all';
import { authContext } from '../../Auth/Auth';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    useTitle('Login')
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState('')
    const { signinWithEmailPass, signWithGoogle } = useContext(authContext);

    const handleLogin = (e) => {
        setError('')
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signinWithEmailPass(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset()
                navigate(from, { replace: true });
                // ...
            })

            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const loginWithGoogle = () => {
        const google = new GoogleAuthProvider();
        signWithGoogle(google)
            .then((result) => {
                const user = result.user;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    return (
        <>
            <div className="min-h-screen py-16 bg-base-200 px-2 lg:px-0">
                <div>
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">For Better Experience!!</p>
                    </div>
                    <div className="card lg:w-1/3 mx-auto shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <p className='text-red-500'>{error}</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center'>Don't have an account? <Link to='/registration' className='text-blue-500'>click here to Register</Link></p>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                                <div className="grid h-20 card place-items-center">
                                    <FcGoogle onClick={loginWithGoogle} className='text-5xl cursor-pointer'></FcGoogle>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/all';

const Login = () => {
    const [error, setError] = useState('')
    const handleLogin = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            email,
            password
        }
        console.log(user);
    }
    return (
        <>
            <div className="min-h-screen py-5 bg-base-200">
                <div>
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">For Better Experience!!</p>
                    </div>
                    <div className="card w-1/3 mx-auto shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <p>{error}</p>
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
                            <p>Don't have an account? <Link to='/registration' className='text-blue-500'>click here to Register</Link></p>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                                <div className="grid h-20 card place-items-center">
                                    <FcGoogle className='text-5xl cursor-pointer'></FcGoogle>
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
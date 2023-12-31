/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleLogin from '../SocialLogin/GoogleLogin';




const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, email, password)
        const savedUser = { name: name, email: email }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                fetch('https://online-learning-platform-server-red.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'SignUp Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                        navigate(from, { replace: true })
                    })

                updateUserProfile(name, photo)
                    .then(() => {

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error);
            });


    }
    return (
        <div className=' p-6 '>
            <h1 className="text-5xl font-bold text-center text-green-400">Please Sign Up!</h1>
         
            <div className="hero mt-5">
                
                <div className="hero-content flex-col lg:flex-row-reverse lg:w-4/5 ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-green-400 rounded-full">SignUp</button>
                                <Link to='/login'><p className=' mt-2'>Already have an account? Please Login</p></Link>
                            </div>
                        </form>
                        <div className=' mx-auto mb-6'>
                            <GoogleLogin ></GoogleLogin>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
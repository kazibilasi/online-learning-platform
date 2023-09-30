/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleLogin from '../SocialLogin/GoogleLogin';


const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { signIn } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user
                Swal.fire({
                    title: 'login successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                form.reset()
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className=' p-5'>

            <div >
                <h1 className="text-5xl font-bold text-center text-green-400">Please Login now!</h1>
                <div className="hero mt-10">
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-1/4 ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="type the captcha" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">

                                <button className='btn rounded-3xl bg-green-400' type="submit">Login</button>
                            </div>
                            <Link to='/signUp'><p>New in this site? Please SignUp</p></Link>
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

export default Login;
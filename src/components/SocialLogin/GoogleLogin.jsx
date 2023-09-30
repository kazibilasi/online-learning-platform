/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { googleSignIn } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                const savedUser = { user: loggedUser.displayName, email: loggedUser.email }
                fetch('https://online-learning-platform-server-red.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })

            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                G
            </button>
        </div>
    );
};

export default GoogleLogin;
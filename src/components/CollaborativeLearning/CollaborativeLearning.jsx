/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const CollaborativeLearning = () => {
    const {user} = useContext(AuthContext)
    const [Collaboration, setCollaboration] = useState([])
    const discussion = (event) => {
        event.preventDefault()
        const form = event.target;
        const comment = form.name.value;
        
    const userComment = {user:user.displayName, email:user.email, comment:comment}
        fetch('http://localhost:5000/collaboration', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({userComment })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    useEffect(() => {
        fetch('http://localhost:5000/collaboration')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCollaboration(data)
            })
    }, [])
    return (
        <div>
            <form onSubmit={discussion} className='flex justify-center items-center mt-10 '>
                <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button type='submit' className='btn'>Comment</button>
            </form>
            <div className=' p-5 bg-slate-100 mt-20 text-center lg:w-2/3 mx-auto'>
                {
                    Collaboration.map(item => <p className=' bg-green-100 w-fit p-5 mt-3 Jrounded-lg' key={item._id}>
                        {item.userComment.user}={item.userComment.comment}</p>)
                }
            </div>

        </div>

    );
};

export default CollaborativeLearning;
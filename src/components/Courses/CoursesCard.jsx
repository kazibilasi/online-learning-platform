/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const CoursesCard = ({ item }) => {
    const {user}= useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const { _id, courseContent, courseImage, courseName, price } = item
    const courseDetailHandle = ()=>{
      if(!user){
        Swal.fire({
            title: 'Please login to see course details',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now'
        }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state : {from : location}})
            }
        })
      }
    }
    return (
        <div className='lg:mt-20'>
       
            <div className="card w-96 bg-base-100 shadow-xl container mx-auto">
                <div>
                    <figure><img src={courseImage} className='w-full' alt="Shoes" /> </figure>
                    <p className='text-3xl font-medium bg-green-500 w-fit absolute right-0 bottom-[163px] p-2 rounded-l-md text-white'>${price}</p>
                </div>
                <div className="card-body">

                    <h2 className="card-title">{courseContent}</h2>
                    <p>{courseName}</p>
                    <div className="card-actions justify-end" onClick={courseDetailHandle}>
                        <Link to={`/courseDetails/${_id}`}> <button  className="btn btn-sm rounded-full">course details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;
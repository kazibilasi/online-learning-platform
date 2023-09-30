/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CoursesCard from '../Courses/CoursesCard';
import { Link } from 'react-router-dom';

const CourseFeatured = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => {
                const course = data.slice(0, 3)
                console.log(course)
                setCourses(course)
            })
    }, [])
    return (
        <div className='lg:mt-[100px]'>
            <p className='text-green-400 text-center mt-10 font-medium text-xl'>Trending Courses</p>
            <p className='text-center text-2xl'>The ultimate planning solution for busy people who want to reach their personal goals</p>
            <div className='lg:flex justify-evenly items-around gap-0'>
                {
                    courses.map(item => <CoursesCard key={item._id} item={item}></CoursesCard>)
                }
            </div>
            <div className='text-center mt-10'>
            <Link to='/courses'><button className='btn'>more courses</button></Link>
            </div>
        </div>
    );
};

export default CourseFeatured;
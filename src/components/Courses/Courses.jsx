/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CoursesCard from './CoursesCard';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('https://online-learning-platform-server-red.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })
    }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-3 mt-10 gap-10'>
                {
                    courses.map(item =><CoursesCard key={item._id} item={item}></CoursesCard> )
                }
            </div>
        </div>
    );
};

export default Courses;
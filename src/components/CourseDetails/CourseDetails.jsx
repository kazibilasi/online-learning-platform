/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CollaborativeLearning from '../CollaborativeLearning/CollaborativeLearning';

const CourseDetails = () => {
    const loader = useLoaderData()
    console.log(loader.instructor.name)
    const { name, information, email } = loader.instructor
    return (
        <div >
            <p className=' text-5xl text-center text-semibold text-green-500 mb-9 mt-9'>{loader.courseContent}</p>
            <div className='lg:flex text-2xl justify-evenly bg-slate-100 space-x-5 lg:space-y-0 md:space-y-0 space-y-14 p-8 w-3/4 container mx-auto rounded-xl'>
                <div>
                    <p>{loader.syllabus[0]}</p>
                    <p>{loader.syllabus[1]}</p>
                    <p>{loader.syllabus[2]}</p>
                    <p>{loader.syllabus[3]}</p>
                    <p>{loader.syllabus[4]}</p>
                    <p>{loader.syllabus[5]}</p>
                    <p>{loader.syllabus[6]}</p>
                    <p>{loader.syllabus[7]}</p>
                </div>
                <div className='lg:w-1/3'>
                    <p>
                       <span className='font-semibold'>Instructor Name:</span> {name}
                    </p>
                    <p className='mt-2 mb-2'>
                       <span className=' font-semibold'>Instructor Information:</span> {information}
                    </p>
                    <p>
                     <span className='font-semibold'>  Instructor Email:</span> {email}
                    </p>
                </div>
            </div>
            <CollaborativeLearning></CollaborativeLearning>
        </div>
    );
};

export default CourseDetails;
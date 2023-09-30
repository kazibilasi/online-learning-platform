/* eslint-disable no-unused-vars */
import React from 'react';
import PhotoAlbum from 'react-photo-album';

const ExploreCategory = () => {
    // const photos = [
    //     { src: "https://www.creativeitinstitute.com/images/course/course_1663052056.jpg", width: 800, height: 600 },
    //     { src: "https://www.creativeitinstitute.com/images/course/course_1663052056.jpg", width: 1600, height: 900 },
    //     { src: "https://www.creativeitinstitute.com/images/course/course_1663052056.jpg", width: 800, height: 600 },
    //     { src: "https://www.creativeitinstitute.com/images/course/course_1663052056.jpg", width: 1600, height: 900 },
    // ];
    return (
        <div className='lg:mt-32'>
            <div className=' lg:h-[600px] lg:flex container mx-auto gap-10 p-6' >
                <div className='text-left lg:w-1/4 mt-28 container mx-auto'>
                    <p className='text-xl text-green-500'>Explore Category</p>
                    <p className='text-5xl font-semibold mt-3 mb-3'>Get Instant Access To Expert solution</p>
                    <p className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A culpa laudantium excepturi error atque odio non deleniti voluptatum ullam vero.</p>

                </div>
                <div className=' grid lg:grid-cols-2 gap-5 '>
                    <div>
                        <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?q=10&h=200" className='lg:w-[400px] lg:h-[300px]' alt="" />
                        <p className='-mt-10 ml-5 text-white text-xl font-semibold'>Ethical Hacking</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className='lg:w-[400px] lg:h-[300px]' alt="" />
                        <p className='-mt-10 ml-5 text-white text-xl font-semibold'>Web Development</p>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5534618be4b0fc1dd67c939c/df194543-a30d-421c-94fb-24872f2e200f/AdobeStock_170135489.jpeg" className='lg:w-[400px] lg:h-[300px]' alt="" />
                        <p className='-mt-10 ml-5 text-white text-xl font-semibold'>Machine learning</p>
                    </div>
                    <div>
                        <img src="https://media.photographycourse.net/wp-content/uploads/2022/04/08162245/photography-marketing-strategies.jpg" className='lg:w-[400px] lg:h-[300px]' alt="" />
                        <p className='-mt-10 ml-5 text-white text-xl font-semibold'>Marketing</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExploreCategory;
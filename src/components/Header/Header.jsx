/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="hero lg:h-[800px] md:h-[600px] h-[400px] brightness-50 " style={{ backgroundImage: 'url(https://gebseducation.co.za/wp-content/uploads/2020/05/online-learning.jpg)' }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="container mx-auto">

                        <h1 className="mb-5 lg:text-6xl text-4xl text-center lg:w-[600px] lg:ml-52">It's time to amplify<span className=' font-bold text-green-800'> your online Career</span></h1>
                        <div className="form-control mt-10">
                            <div className="input-group lg:ml-72">
                                <input type="text" placeholder="Search…" className="input input-bordered lg:w-[400px]" />
                                <button className="btn btn-square ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className='mt-7  space-x-3 lg:block hidden'>
                            <button className=' border px-3 py-2 '>Category :</button>
                            <button className=' border px-3 py-2 '>Programming</button>
                            <button className=' border px-3 py-2 '>Marketing</button>
                            <button className=' border px-3 py-2 '>Hacking</button>
                            <button className=' border px-3 py-2 '>Graphics Design</button>
                            <button className=' border px-3 py-2 '>Machine Learning</button>
                            <button className=' border px-3 py-2 '>Data Science</button>
                            <button className=' border px-3 py-2 '>Category</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
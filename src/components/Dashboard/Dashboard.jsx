/* eslint-disable no-unused-vars */
import React from 'react';
import { FaBook, FaHome, FaUser } from 'react-icons/fa';
import { FiAlignJustify } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';


const Dashboard = () => {

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className=" border p-3 drawer-button lg:hidden ml-auto mt-0">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
                        {/* Sidebar content here */}
                        <p className='text-3xl text-center mb-8 mt-4'><span className='font-semibold'>Edu</span>Hash</p>
                        {/* {
                            isAdmin?.admin ? <>
                                <li><Link to='dashboard/adminHome'><FaHome></FaHome>Admin Home</Link></li>
                                <li><Link to='dashboard/allUsers'><FaUser></FaUser> All Users</Link></li>

                            </> : <>
                                <li className='text-xl'><Link to='dashboard/instructorHome'><FaHome></FaHome>Instructor Home</Link></li>
                                <li className='text-xl'><Link to="dashboard/manageCourse"><FaBook></FaBook>Manage Courses</Link></li>
                                <li className='text-xl'><Link to='dashboard/publishCourse'><FiAlignJustify></FiAlignJustify>Publish Courses</Link></li></>
                        } */}


                        <ul className="menu p-4 w-80">
                            {isAdmin ? (
                                <>
                                    <li><Link to='dashboard/adminHome'><FaHome></FaHome>Admin Home</Link></li>
                                    <li><Link to='dashboard/allUsers'><FaUser></FaUser> All Users</Link></li>
                                </>
                            ) : isInstructor ? (
                                <>
                                    <li className='text-xl'><Link to='dashboard/instructorHome'><FaHome></FaHome>Instructor Home</Link></li>
                                    <li className='text-xl'><Link to="dashboard/manageCourse"><FaBook></FaBook>Manage Courses</Link></li>
                                    <li className='text-xl'><Link to='dashboard/publishCourse'><FiAlignJustify></FiAlignJustify>Publish Courses</Link></li>
                                </>
                            ) : (
                                <>
                                    <li className="text-2xl">
                                        <Link><FaHome></FaHome> User Home</Link>
                                    </li>
                                    <li className="text-2xl">
                                        <Link >user</Link>
                                    </li>
                                </>
                            )}
                            {/* <div className="divider"></div>
                            <li className="text-2xl"><Link to="/">Home</Link> </li> */}
                        </ul>



                        <div className="divider">OR</div>
                        <li className='text-xl'><Link to='/'><FaHome></FaHome>Home</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
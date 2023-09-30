/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const Navbar = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const showDashboardLink = isAdmin?.admin || isInstructor?.instructor;
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }
    const navbar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/courses'>Courses</Link></li>
        {
            isAdmin?.admin ? <li><Link to='/dashboard/dashboard/adminHome'>Dashboard</Link></li> :
                <li><Link to='/dashboard/dashboard/instructorHome'>Dashboard</Link></li>
        }
        <li><Link to='/aboutUs'>About Us</Link></li>


    </>
    return (
        <div>
            <div className="navbar p-5 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" font-medium menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <a className="  normal-case text-3xl"><span className='font-semibold'>Edu</span>Hash</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" gap-6 text-xl menu-horizontal px-1 font-medium">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <> <button onClick={handleLogOut} className=' border border-gray-800 text-xl px-5 hover:bg-gray-800 hover:text-white py-2 font-medium'>LogOut</button> <img className="h-[50px] w-[50px] ml-3 rounded-full" onMouseMove={user.displayName} src={user.photoURL} alt="" /></> : <>
                            <Link to='/login'><button className='border border-gray-800 text-xl px-5 hover:bg-gray-800 hover:text-white py-2 font-medium '>Login</button></Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
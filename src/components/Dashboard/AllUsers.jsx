/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const token = localStorage.getItem('access-token')
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://online-learning-platform-server-red.vercel.app/users', {
            headers: {
                authorization: `bearer ${token}`
            }
        })
        return res.json()
    })

    const handleMakeAdmin = (user) => {
        fetch(`https://online-learning-platform-server-red.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                refetch()
            })

    }
    const handleMakeInstructor = (user) => {
        fetch(`https://online-learning-platform-server-red.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                refetch()
            })

    }
    const handleDelete = (users) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://online-learning-platform-server-red.vercel.app/users/${users._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        refetch();
                    })
            }
        })
    }
    return (
        <div className='w-full'>
            <p className=' uppercase text-center text-2xl'>Total users :  {users.length}</p>

            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        users.map((row, index) => <tbody key={row._id}>
                            {/* row 1 */}
                            <tr>
                                <td>{index + 1}</td>

                                <td>
                                    {row.name}
                                </td>
                                <td>
                                    {row.email}

                                </td>
                                <td>{

                                    row.role === 'admin' ? 'admin' : row.role === 'instructor' ? 'instructor' : 'student'

                                }</td>
                                <td >
                                    <p> <span onClick={() => handleDelete(row)} className='btn btn-sm'> <AiFillDelete></AiFillDelete></span> <br /><span onClick={() => handleMakeAdmin(row)} disabled={row.role == 'admin' || row.role == 'instructor' ? true : false} className='btn btn-sm rounded-3xl'>Make Admin</span> <br /><span disabled={row.role == 'admin' || row.role == 'instructor' ? true : false} onClick={() => handleMakeInstructor(row)} className='btn btn-sm rounded-3xl'>Make Instructor</span></p>

                                </td>
                            </tr>

                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
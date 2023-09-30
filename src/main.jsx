import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import AboutUs from './components/AboutUs/AboutUs';
import CourseDetails from './components/CourseDetails/CourseDetails';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import InstructorHome from './components/Dashboard/InstructorHome';
import ManageCourse from './components/Dashboard/ManageCourse';
import PublishCourse from './components/Dashboard/PublishCourse';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AllUsers from './components/Dashboard/AllUsers';
import AdminHome from './components/Dashboard/AdminHome';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "courses",
        element: <Courses></Courses>
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "courseDetails/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://online-learning-platform-server-red.vercel.app/courses/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'dashboard/instructorHome',
        element: <InstructorHome></InstructorHome>
      },
      {
        path: 'dashboard/manageCourse',
        element: <ManageCourse></ManageCourse>
      },
      {
        path: 'dashboard/publishCourse',
        element: <PublishCourse></PublishCourse>
      },
      {
        path: 'dashboard/allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'dashboard/adminHome',
        element:<AdminHome></AdminHome>
      },
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

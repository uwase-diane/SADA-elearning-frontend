import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import AllCourse from './HomePage/AllCourses';
import CourseDetails from './HomePage/CourseDetails';
import { PrivateRoute } from './Auth/PrivateRoute';
import { LogInPage } from './Auth/Login';
import { SignUpPage } from './Auth/SignUp';

export const Routers = () => {

    return(      
           <Router>
             <Routes>
             {/* <Route path="/" element={<PrivateRoute />} /> */}
             <Route path="/" element={<HomePage />} />
             <Route  path="/all" element={<AllCourse />} />
             <Route  path="/login" element={<LogInPage />} /> 
             <Route  path="/signup" element={<SignUpPage />} /> 
             <Route  path="/course/:courseId" element={<CourseDetails />} />   
            </Routes>
           </Router>
       
    );
};


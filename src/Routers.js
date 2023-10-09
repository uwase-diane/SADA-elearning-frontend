import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import AllCourse from './HomePage/AllCourses';
import CourseDetails from './HomePage/CourseDetails';


export const Routers = () => {

    return(      
           <Router>
             <Routes>
             <Route path="/" element={<HomePage />} />

             <Route  path="/all" element={<AllCourse />} />   
             <Route  path="/course/:courseId" element={<CourseDetails />} />   
            </Routes>
           </Router>
       
    );
};


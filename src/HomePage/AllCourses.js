import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllCourse = () => {
  // State to hold the fetched courses
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Define a function to fetch courses from your Django API
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/all/');
        // Update the state with the fetched courses
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    // Call the fetchCourses function when the component mounts
    fetchCourses();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>All Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {/* Link to the course details page */}
            <Link to={`/course/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCourse;

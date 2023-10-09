import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams

const CourseDetails = () => {
  // State to hold the fetched course details
  const [courseDetails, setCourseDetails] = useState({});
  const { courseId } = useParams(); // Get the courseId from the URL parameter

  useEffect(() => {
    // Define a function to fetch course details from your Django API
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/course/${courseId}/`);
        // Update the state with the fetched course details
        setCourseDetails(response.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    // Call the fetchCourseDetails function when the component mounts
    fetchCourseDetails();
  }, [courseId]); // Include courseId in the dependency array to refetch when it changes

  return (
    <div>
      <h1>Course Details</h1>
      <h2>{courseDetails.title}</h2>
      <p>Description: {courseDetails.description}</p>
      {/* Display an image as the price */}
      <img src={courseDetails.priceImage} alt="Price" />
      {/* Display other course details as needed */}
      
      {/* Link back to the AllCourse page */}
      <Link to="/all">Back to All Courses</Link>
    </div>
  );
};

export default CourseDetails;

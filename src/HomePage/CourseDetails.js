import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams
import NavbarDashboard from './Navbar';
import Card from 'react-bootstrap/Card';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

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
    <>
      <NavbarDashboard />
      <div className='background-courses'>
        <div className='container'>
          <h1 className='header-course'>Course Details</h1>
          <Card className='card'>
      <Card.Body>
          <div className='row'>
            
           
              <div className='col-md-4'>
                <CCard style={{ width: '18rem' }}>
                  <CCardImage orientation="top" src="https://res.cloudinary.com/auca/image/upload/v1687376167/Rectangle_8_tagxp9.png" />
                  <CCardBody>
                  <h2>{courseDetails.title}</h2>
                  {/* <Link to={`/course/${course.id}`}>{course.title}</Link> */}
                    <CCardText>
                    <p>Description: {courseDetails.description}</p>
                      {/* <p>{course.description}</p> */}
                    </CCardText>
                    {/* <CButton href={`#`}>Go somewhere</CButton> */}
                    {/* <p className='p-color'>Enrolled</p> */}
                    <Link to="/all">Back to All Courses</Link>
                  </CCardBody>
                </CCard>
              </div>
           
          </div>
          </Card.Body>
        </Card>
        </div>
        
      </div>
    </>
  );
};

export default CourseDetails;

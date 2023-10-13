import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams
import NavbarDashboard from './Navbar';
import Card from 'react-bootstrap/Card';
// import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import '../index.css'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

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
          <div className="line"></div>
          <Card className='card' style={{border:'none'}}>
      <Card.Body>
      <Row>
        <Col>
        <img alt="" src='https://res.cloudinary.com/auca/image/upload/v1679073154/Rectangle_1863s_ep6c0m.png'/>
        </Col>
        <Col>
         <div className='single-course'>
         <p className='single-name'>{courseDetails.course_name}</p>
         <p className='single-title'>{courseDetails.course_title}</p>
         <p className='single-descr'>{courseDetails.description}</p>
             <Row>        
      </Row>
             
             
         </div>
        </Col>
      </Row>
      
          </Card.Body>
          <Link to="/enrolled" style={{textDecoration:'none', color:'#7C849C', margin:'20px', fontWeight:'bold'}}><BsFillArrowLeftCircleFill /> Back to your courses</Link>
        </Card>
        </div>
        
      </div>
    </>
  );
};

export default CourseDetails;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarDashboard from './Navbar';
import Card from 'react-bootstrap/Card';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import '../index.css';

const AllCourse = () => {
  // State to hold the fetched courses
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Define a function to fetch courses from your Django API
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('cc_token');
        const response = await axios.get('http://127.0.0.1:8000/api/all/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    // Call the fetchCourses function when the component mounts
    fetchCourses();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <NavbarDashboard />
      <div className='background-courses'>
        <div className='container'>
          <h1 className='header-course'>My Courses</h1>
          <Card className='card'>
      <Card.Body>
          <div className='row'>
            
            {courses.map(course => (
              <div className='col-md-4' key={course.id}>
                <CCard style={{ width: '18rem' }}>
                  <CCardImage orientation="top" src="https://res.cloudinary.com/auca/image/upload/v1687376167/Rectangle_8_tagxp9.png" />
                  <CCardBody>
                  <Link to={`/course/${course.id}`}>{course.title}</Link>
                    <CCardText>
                      <p>{course.description}</p>
                    </CCardText>
                    {/* <CButton href={`#`}>Go somewhere</CButton> */}
                    <p className='p-color'>Enrolled</p>
                  </CCardBody>
                </CCard>
              </div>
            ))}
          </div>
          </Card.Body>
        </Card>
        </div>
        
      </div>
    </>
  );
};

export default AllCourse;

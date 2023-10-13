import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarDashboard from './Navbar';
import Card from 'react-bootstrap/Card';
import { CCard, CCardImage, CCardBody, CCardText } from '@coreui/react';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const EnrolledCourses = () => {
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
          <h1 className='header-course'>List of Enrolled Courses</h1>
          <div className="line"></div>
          <Card className='card' style={{border:'none'}}>
      <Card.Body>
          <div className='row'>
            
            {courses.map(course => (
              <div className='col-md-4' key={course.id}>
                <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top"src="https://res.cloudinary.com/auca/image/upload/v1679073154/Rectangle_1863s_ep6c0m.png"/>
                  <CCardBody>
                  <Link className="course-l" to={`/course/${course.id}`} style={{textDecoration:'none',color:'#253F75', fontWeight:'bold',fontSize:'16px',textTransform: 'uppercase'}}>{course.course_name}</Link>
                    <CCardText style={{fontSize:'13px'}}>
                      <p>{course.course_title}</p>
                    </CCardText>
                    {/* <CButton href={`#`}>Enroll</CButton> */}
                    <p className='p-color'>Enrolled</p>
                  </CCardBody>
                </CCard>
              </div>
            ))}
          </div>
          </Card.Body>

          <Link to="/all" style={{textDecoration:'none', color:'#7C849C', margin:'20px', fontWeight:'bold'}}><BsFillArrowLeftCircleFill /> Back to All Courses</Link>
        </Card>
        </div>
        
      </div>
    </>
  );
};

export default EnrolledCourses;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarDashboard from './Navbar';
import Card from 'react-bootstrap/Card';
import { CCard, CCardImage, CCardBody, CCardText } from '@coreui/react';
import Button from 'react-bootstrap/Button';
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
          <h1 className='header-course'>List of All Courses</h1>
          <div className="line"></div>
          <Card className='card' style={{border:'none'}}>
      <Card.Body>
          <div className='row'>
            
            {courses.map(course => (
              <div className='col-md-4' key={course.id}>
                <CCard style={{ width: '18rem' }}>
                  <CCardImage orientation="top"src="https://res.cloudinary.com/auca/image/upload/v1679073154/Rectangle_1863s_ep6c0m.png"/>
                  <CCardBody>
                  <Link style={{textDecoration:'none',color:'#253F75', fontWeight:'bold',fontSize:'16px',textTransform: 'uppercase'}} to={`/course/${course.id}`}>{course.course_name}</Link>
                    <CCardText style={{fontSize:'13px'}}>
                      <p>{course.course_title}</p>
                    </CCardText>
                    <Button variant="outline-secondary" href={`#`}>Enroll</Button>
                    {/* <p className='p-color'>Enrolled</p> */}
                  </CCardBody>
                </CCard>
                {console.log(course.image_url)}
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

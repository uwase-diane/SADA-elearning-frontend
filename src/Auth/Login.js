import React, { useState } from 'react';
import axios from 'axios';
import { useToken } from './useToken';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import '../index.css';

export const LogInPage = () => {
  const [token, setToken] = useToken();

  const [errorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  // Use useNavigate instead of useHistory
  const navigate = useNavigate();

  const onLogInClicked = async (event) => {
    event.preventDefault();
    console.log('Logging in...');
    console.log('Data:', {
      email: emailValue,
      password: passwordValue,
      
    });
 
  
    try {
      console.log('Before network request');
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        email: emailValue,
        password: passwordValue,
      });
        console.log('After network request');
      // console.log(response.data.access_token);
      const tokens = response.data.access_token;

      console.log('Token---->:', tokens);
      localStorage.setItem('cc_token', response.data.access_token);
      localStorage.setItem('role', response.data.role);
      console.log(response.data.role);
      localStorage.getItem('cc_token')
      
      // let newToken;
      const { token } = response.data;
      setToken(response.data.access_token);
      
  
      // Unconditionally navigate to the AllCourses page
      navigate('/all');
    } catch (error) {
      // Handle login error here
      console.error('Error in axios.post:', error);
      // Set an error message to display to the user
      // You can use state to display this message in your component
      // For example: setError('Login failed. Please try again.');
    }
  };
  

  return (
    <Container>
      <Row>
        <Col>
          <img
            alt=""
            src="https://res.cloudinary.com/auca/image/upload/v1696956577/3seWAoOH_400x400_asydc4.jpg"
            style={{ width: '30rem' }}
          />
        </Col>
        <Col>
          <h1 className="login">Login</h1>
          <div className="form">
            <p>Welcome to the SADA e-learning platform!</p>

            <Form>
              {errorMessage && <div className="fail">{errorMessage}</div>}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="inputName"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="JohnDeo@gmail.com"
                />

                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="inputName"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  type="password"
                  placeholder="At least 8 characters"
                />
              </Form.Group>

              <div className="forgot-password">
                <a href="/forgotPassword">Forgot password?</a>
              </div>
              <Button
                disabled={!emailValue || !passwordValue}
                onClick={onLogInClicked}
                // variant="success"
                type="submit"
                className="btn"
                style={{backgroundColor:'#253F75'}}
              >
                Login
              </Button>
              <div className="register-link">
                <p>Don’t have an account? <a href="/signUp">Register here</a></p>
              </div>

        
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LogInPage
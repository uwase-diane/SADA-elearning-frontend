import React, { useState } from 'react';
import axios from 'axios';
import { useToken } from './useToken';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// import './styles.css';

export const SignUpPage = () => {
  const [token, setToken] = useToken();

  const [errorMessage,setErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  // const [genderValue, setGenderValue] = useState('');
  // const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  // Use useNavigate instead of useHistory
  const navigate = useNavigate();

  const onSignUpClicked = async (event) => {
    event.preventDefault();
    console.log('Signing up...');
    console.log('Data:', {
      email: emailValue,
      password: passwordValue,
      lastName: lastNameValue,
      firstName: firstNameValue,
      // password: confirmPasswordValue,
    });

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        email: emailValue,
        password: passwordValue,
        lastName: lastNameValue,
        firstName: firstNameValue,
      
        // password: confirmPasswordValue,
      });

      console.log('Response:', response.data);
      const { token } = response.data;
      setToken(token);

      // Redirect to the appropriate page after successful sign-up.
      navigate('/login'); // You can specify the URL you want to navigate to here
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle errors, e.g., display error messages to the user.
      setErrorMessage('An error occurred during sign-up.');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="login">Register</h1>
          <div className="form">
            <p>Welcome to the SADA e-learning platform!</p>
            <Form>
              {errorMessage && <div className="fail">{errorMessage}</div>}

              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  className="inputName"
                  value={firstNameValue}
                  onChange={(e) => setFirstNameValue(e.target.value)}
                  placeholder="Add first name"
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  className="inputName"
                  value={lastNameValue}
                  onChange={(e) => setLastNameValue(e.target.value)}
                  placeholder="Add last name"
                />
              </Form.Group>
              
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="inputName"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="JohnDeo@gmail.com"
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="inputName"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  type="password"
                  placeholder="At least 8 characters"
                />
              </Form.Group>

              {/* <Button
                disabled={
                  !emailValue ||
                  !passwordValue ||
                  passwordValue !== confirmPasswordValue
                }
                onClick={onSignUpClicked}
                // variant="success"
                type="submit"
                className="btn"
                style={{backgroundColor:'#253F75'}}
              >
                Signup
              </Button> */}
              <Button 
      disabled={!emailValue || !passwordValue}
      onClick={onSignUpClicked}
      variant="success" type="submit" className="btn">
       Signup
      </Button>
              <div className="register-link">
                <p>
                  Already have an account? <a href="/login"> Login here</a>
                </p>
              </div>

          
            </Form>
          </div>
        </Col>
        <Col>
          <img
            alt=""
            src="https://res.cloudinary.com/auca/image/upload/v1696956577/3seWAoOH_400x400_asydc4.jpg"
            style={{ width: '33rem' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage
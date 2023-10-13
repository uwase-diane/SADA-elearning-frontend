

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'

import { BiBell } from "react-icons/bi";


export const NavbarDashboard = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="=light" variant="light" >
      <Container >
        <Navbar.Brand href="#home">
          <img alt="" src="https://res.cloudinary.com/auca/image/upload/v1697019554/3seWAoOH_400x400_1_rd8pnh.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          
          <Nav className= "me-auto navbar-link" >
            {/* <Nav.Link href="#adminDashboard" style={{color:'#000000', fontSize:'0.8rem'}} className="navbar-Dashboard" >Dashboard</Nav.Link> */}
            <Nav.Link href="/enrolled" style={{color:'#000000',fontSize:'0.9rem'}} className="navbar-Courses" >My courses</Nav.Link>

            
            {/* <Nav.Link href="/levels" style={{color:'#000000', fontSize:'0.8rem'}} className="navbar-Settings" >Levels</Nav.Link>
            <Nav.Link href="/seniors" style={{color:'#000000', fontSize:'0.8rem'}} className="navbar-Settings" >Seniors</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'#000000', fontSize:'0.8rem'}} className="navbar-Reports" >Reports</Nav.Link> */}
          </Nav>
          
          <Nav>
        
          <Nav>
            {/* <Nav.Link href="#deets"><BiBell className="mr-10" size={27} /></Nav.Link> */}
            <Nav.Link eventKey={2} href="#memes">
            <img alt="" className="mr-7" src='https://res.cloudinary.com/auca/image/upload/v1682368340/Group_2424_te9nwr.png'/>
            </Nav.Link>
          </Nav>
       
          <Nav>
            <Nav.Link href="#deets"><NavDropdown style={{color:'#000000', fontSize:'0.9rem'}}  title="user" id="collasible-nav-dropdown">
          {/* <NavDropdown.Item href="#action/3.1" style={{color:'#000000', fontSize:'0.8rem'}} className="navbar-link">Notifications</NavDropdown.Item>   */}
              <NavDropdown.Item href="/login" style={{color:'#000000', fontSize:'0.8rem'}} className="navbar-link">Logout</NavDropdown.Item>             
            </NavDropdown></Nav.Link>
            
          </Nav>
          
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarDashboard
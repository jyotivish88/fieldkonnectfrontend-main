import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import darklogo from '../../assets/logo/dark_logo.png';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {Bell} from 'react-bootstrap-icons';

function Headers() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="./dashboard">
        <div className="navbar-brand-box">
             <Link href="/" className="logo logo-dark">
               <span className="logo-lg">
               <Image
                src={darklogo}
                 alt="Field Konnect"
               />
               </span>
             </Link>
           </div>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <div className="navbar-brand-box">
             <Link href="/dashboard" className="amit">
               <span className="amit">
               Hello,Amit<br/>
               <p className="more">  Looking for more redeemption and more</p>
               </span>
             </Link>
           </div>
        
          </Nav>
          <Nav >
          <Nav.Link href="/dashboard" className='ml-5'> <Bell/> </Nav.Link>
            <Nav.Link href="/dashboard"className='ml-5'> Kudapali Giza </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <div className="navbar-brand-box">

<span >
    <img src="./img_avatar.png" alt="Avatar" className="avatar"/>
    
    
</span>
  


</div>

            </Nav.Link>
            <NavDropdown title=""  id="collasible-nav-dropdown">

  
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers
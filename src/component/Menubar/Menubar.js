import React from 'react';
import { Container, Modal, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css'
import logo from '../../Images/Logo-1.png'
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../hooks/useAuth';



const Menubar = () => {
    const { user, logout } = useAuth();
    return (
        // navbar section
        <>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/home"><img
                            src={logo}
                            width="150"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end nav-item">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/gellary">Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
                        {user.email ?
                            <button onClick={logout} className="signup me-3">Sign Up</button> :
                            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>}
                        <Nav.Link as={Link} to="/dashbord"><button className="dashbord">Dashbord</button></Nav.Link>
                        <Navbar.Text>
                            <span className="text-dark">Signed in as:</span> <a className="text-danger" href="/login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;
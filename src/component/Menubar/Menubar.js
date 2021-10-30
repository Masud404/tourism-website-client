import React from 'react';
import { Container, Modal, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css'
import logo from '../../Images/Logo-1.png'
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';



const Menubar = () => {
    return (
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
                        <Nav.Link as={Link} to="/packages">Packages</Nav.Link>
                        <Nav.Link as={Link} to="#pricing">Gallery</Nav.Link>
                        <Nav.Link as={Link} to="#home">About Us</Nav.Link>
                        <Nav.Link as={Link} to="#features">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                        <Navbar.Text>
                            <span className="text-dark">Signed in as:</span> <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import signIn from '../../Images/signIn/signin.png'
import signIngoogle from '../../Images/icon/icons8-google-48.png'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// sign up page
const SignUp = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img className="img-fluid" src={signIn} alt="" />
                    </Col>
                    <Col xs={12} md={6} className="text-center mt-5">

                        <span className="google" onClick={signInUsingGoogle}><img src={signIngoogle} alt="" />Google Sign In</span>

                        <p className="mt-5 fw-bold text-danger">Have you an account?<Link to="signin">Sign In</Link></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;
import React from 'react';
import './SignIn.css'
import { Col, Container, Row } from 'react-bootstrap';
import signIn from '../../Images/signIn/signin.png'
import signIngoogle from '../../Images/icon/icons8-google-48.png'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from "react-router-dom";

// sign in page
const SignIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img className="img-fluid" src={signIn} alt="" />
                    </Col>
                    <Col xs={12} md={6} className="text-center mt-5">

                        <span className="google" onClick={handleGoogleLogin}><img src={signIngoogle} alt="" />Google Sign In</span>

                        <p className="mt-5 fw-bold text-danger">Don't have an account?<Link to="/signup">Sign Up</Link></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignIn;
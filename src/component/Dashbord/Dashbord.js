import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dashbord from '../../Images/dashbord.png'
import orderlogo from '../../Images/icons8-booking-48.png'
import './Dashbord.css'

const Dashbord = () => {
    return (
        // booking dashbord
        <div>
            <Container>
                <h1 className="fw-bold text-info my-5">DASHBORD</h1>
                <Row className="my-5">
                    <Col sm={12} md={6}>
                        <Link to="/mybooking" className="booking"><span className="google"><img src={orderlogo} alt="" />My Booking</span></Link><br /><br /><br />
                        <Link to="/allbooking" className="booking"><span className="google"><img src={orderlogo} alt="" />Manage All Booking</span></Link><br /><br /><br />
                        <Link to="/service" className="booking"><span className="google"><img src={orderlogo} alt="" />Add A New Service</span></Link><br /><br /><br />
                    </Col>
                    <Col sm={12} md={6}>
                        <img className="img-fluid" src={dashbord} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashbord;
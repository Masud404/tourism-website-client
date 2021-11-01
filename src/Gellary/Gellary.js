import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import italy from '../Images/gellary/italy.jpg'
import aus from '../Images/gellary/aus.jpg'
import indo from '../Images/gellary/indo.jpg'
import map from '../Images/gellary/map-1024x663.jpg'
import './Gellary.css'



const Gellary = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center text-info fw-bold my-5">Popular Country</h1>
            <Row xs={1} md={3} className="g-4">

                <Col>
                    <Card className="service-card">
                        <Card.Img variant="top" className="w-100 h-50" src={italy} />
                        <Card.Body>
                            <Card.Title className="text-center fw-bold">Italia</Card.Title>
                            <small className="fw-bold"><i class="fas fa-plane me-2"></i>100+ Travel Destinations</small><br />
                            <small className="fw-bold"><i class="fas fa-hotel me-2"></i>45 Hotel</small><br />
                            <small className="fw-bold"><i class="fas fa-dollar-sign me-2"></i>Starting at $100</small><br />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="service-card">
                        <Card.Img variant="top" className="w-100 h-50" src={aus} />
                        <Card.Body>
                            <Card.Title className="text-center fw-bold">Australia</Card.Title>
                            <small className="fw-bold"><i class="fas fa-plane me-2"></i>100+ Travel Destinations</small><br />
                            <small className="fw-bold"><i class="fas fa-hotel me-2"></i>45 Hotel</small><br />
                            <small className="fw-bold"><i class="fas fa-dollar-sign me-2"></i>Starting at $100</small><br />

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="service-card">
                        <Card.Img variant="top" className="w-100 h-50" src={indo} />
                        <Card.Body>
                            <Card.Title className="text-center fw-bold">Indonesia</Card.Title>
                            <small className="fw-bold"><i class="fas fa-plane me-2"></i>100+ Travel Destinations</small><br />
                            <small className="fw-bold"><i class="fas fa-hotel me-2"></i>45 Hotel</small><br />
                            <small className="fw-bold"><i class="fas fa-dollar-sign me-2"></i>Starting at $100</small><br />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            {/* explore word map */}
            <h1 className="text-center text-info fw-bold my-5">Explore the World For Yourself </h1>
            <img className="img-fluid" src={map} alt="" />
            <div className="discount mt-5 p-5 text-center">
                <h1 className="fw-bold text-light pt-5 ">Holiday Big disscount</h1>
                <h3 className="fw-bold text-light pb-5">Book now and get 50% off disscount for all packages</h3>

            </div>
        </div>
    );
};

export default Gellary;
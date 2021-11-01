import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import team from '../../Images/SideImg/side-img.jpg'
import './AboutUs.css'
import founder from '../../Images/team/People-1.png'


const AboutUs = () => {
    return (
        <div className="container my-5">
            {/* team section */}
            <Row>
                <Col sm={12} md={6}>
                    <img className="img-fluid" src={team} alt="" />
                </Col>
                <Col sm={12} md={6}>
                    <h3 className="fw-bold text-warning">We are team</h3>
                    <h1 className="fw-bold text-primary">We Providing The Best Service</h1>
                    <small className="fw-bold">We are the only company on the island that sets the equipment up for you daily.

                        We can be found at numerous rental locations up & down the beach (see list below).

                        In addition, Shore Beach Service can set up equipment anywhere else along the beach upon request (we call these OFFSITE RENTALS).  Rates are higher for offsites.  If you do not see your beach location listed below, you are likely an offsite rental. </small>
                </Col>
            </Row>
            {/* discount banner */}
            <div className="discount my-5 p-5 text-center">
                <h1 className="fw-bold text-light pt-5 ">Holiday Big disscount</h1>
                <h3 className="fw-bold text-light pb-5">Book now and get 50% off disscount for all packages</h3>

            </div>
            {/* team section */}
            <h1 className="text-center my-5 fw-bold text-warning">Our Team</h1>

            <Row xs={1} md={4} className="g-4">

                <Col>
                    <Card className="team text-center p-4">
                        <div><Card.Img variant="top" src={founder} /></div>
                        <Card.Body>
                            <Card.Title>Antony Jhon</Card.Title>
                            <Card.Text>
                                Founder
                            </Card.Text>
                            <Card.Text>
                                We are provide best service.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="team text-center p-4">
                        <div><Card.Img variant="top" src={founder} /></div>
                        <Card.Body>
                            <Card.Title>Iqbal Ramadhan</Card.Title>
                            <Card.Text>
                                Co-Founder
                            </Card.Text>
                            <Card.Text>
                                We are provide best service.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="team text-center p-4">
                        <div><Card.Img variant="top" src={founder} /></div>
                        <Card.Body>
                            <Card.Title>Rafia Nae</Card.Title>
                            <Card.Text>
                                Secretary
                            </Card.Text>
                            <Card.Text>
                                We are provide best service.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="team text-center p-4">
                        <div><Card.Img variant="top" src={founder} /></div>
                        <Card.Body>
                            <Card.Title>Jess Tania</Card.Title>
                            <Card.Text>
                                Treasurer
                            </Card.Text>
                            <Card.Text>
                                We are provide best service.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default AboutUs;
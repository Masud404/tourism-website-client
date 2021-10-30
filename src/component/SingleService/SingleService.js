import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleService.css'

const SingleService = ({ service }) => {
    const { name, img, description } = service;
    return (
        <div>
            <Col className="mt-4">
                <Card className="service-card">
                    <Card.Img variant="top" className="w-100 h-50" src={img} />
                    <Card.Body className="text-center">
                        <Card.Title className="fw-bold">{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <button className="book-now-button">Book Now</button>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default SingleService;
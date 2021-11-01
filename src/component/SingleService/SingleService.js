import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleService.css'

// single service section
const SingleService = ({ service }) => {
    const { name, img, description, _id } = service;
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
                        <Link to={`/servicedetails/${_id}`}>
                            <button className="book-now-button">Book Now</button>
                        </Link>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default SingleService;
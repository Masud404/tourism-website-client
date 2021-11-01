import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';
import './Service.css'


// service section
const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-atoll-57556.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="container-fluid service container">
            <h1 className="service-header fw-bold text-center mt-5">Popular Destinations</h1>
            <p className="fw-bold text-center">The beach makes everything better—and it's good for your mind, body and spirit. <br />We're bringing you some beach inspiration today straight from the Gulf Coast of Florida with some beach quotes that will help boost your health and happiness. Everyone knows a vacation is good for you, but a beach vacation is the best!</p>

            {/* all services */}
            <Row xs={1} md={3} className="g-4">

                {
                    service.map((service, key) => <SingleService
                        key={key}
                        service={service}
                    ></SingleService>)
                }

            </Row>
        </div>
    );
};

export default Service;
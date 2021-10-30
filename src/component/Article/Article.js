import React from 'react';
import { Col, Row } from 'react-bootstrap';
import articleimg1 from '../../Images/article/article-1.jpg'
import articleimg2 from '../../Images/article/article-2.jpg'
import articleimg3 from '../../Images/article/article-3.jpg'
import articleimg4 from '../../Images/article/article-4.jpg'

const Article = () => {
    return (
        <div className="container py-5">
            <h1 className="work-title text-center">Our Article</h1>
            <p className="fw-bold text-center">Tourism planning refers to the overall process of deploying the development goals, <br />And the implementation of a comprehensive tourism system.</p>
            <Row className="mt-5">
                <Col sm={12} md={6}>
                    <Row>
                        <Col>
                            <img src={articleimg1} className="expore-world-img" alt="" />
                        </Col>
                        <Col>
                            <h4 className="work-title">Summer Paradise Island </h4>
                            <small className="text-warning fw-bold">25December, 2021</small>
                            <br />
                            <small className="fw-bold">Perched in the North Male’ Atoll, and just a few kilometers away from the Velana International Airport, lies one of the most beautiful luxury resorts in Maldives, Paradise Island Resort.</small>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6}>
                    <Row>
                        <Col>
                            <img src={articleimg2} className="expore-world-img" alt="" />
                        </Col>
                        <Col>
                            <h4 className="work-title">River Town Holiday</h4>
                            <small className="text-warning fw-bold">24December, 2021</small>
                            <br />
                            <small className="fw-bold">The absolutely breathtaking scenery is the real highlight of Anse Source d’Argent. The mixture of shallow, clear water, golden sand, and imposing granite formations.</small>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={12} md={6}>
                    <Row>
                        <Col>
                            <img src={articleimg3} className="expore-world-img" alt="" />
                        </Col>
                        <Col>
                            <h4 className="work-title">Rustic Farm Vacation </h4>
                            <small className="text-warning fw-bold">29December, 2021</small>
                            <br />
                            <small className="fw-bold">The Dune of Pilat is located in the Gironde department in southwestern France. It is just at the entrance to the Arcachon Bay.</small>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6}>
                    <Row>
                        <Col>
                            <img src={articleimg4} className="expore-world-img" alt="" />
                        </Col>
                        <Col>
                            <h4 className="work-title">Nusa Beach Trip </h4>
                            <small className="text-warning fw-bold">20December, 2021</small>
                            <br />
                            <small className="fw-bold">Located in front of Lembongan Beach, Nusa Indah Bungalow features an outdoor pool and restaurant by the beach. Snorkeling, diving and surfing can be organized by the resort.</small>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="text-center mt-4">
                <button className="read-more-button my-4">Read more</button>
            </div>
        </div>
    );
};

export default Article;
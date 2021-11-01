import React from 'react';
import './ExploreWorld.css'
import { Col, Container, Row } from 'react-bootstrap';
import exploreimg1 from '../../Images/explore-world/beautiful-1.jpg'
import exploreimg2 from '../../Images/explore-world/beautiful-2.jpg'
import exploreimg3 from '../../Images/explore-world/beautiful-3.jpg'
import exploreimg4 from '../../Images/explore-world/beautiful-4.jpg'
import exploreimg5 from '../../Images/explore-world/beautiful-5.jpg'
import exploreimg6 from '../../Images/explore-world/beautiful-6.jpg'


const ExploreWorld = () => {
    return (
        // exploreWorld
        <div>
            <h1 className="work-title text-center">Explore The World</h1>
            <p className="text-center fw-bold">Exploring new and different places always leads to great memories and stories to remember later in life.<br /> Also, when you meet new people, you can understand human psychology in a better way. There are lots of advantages of travelling.… </p>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <img className="w-100 h-100 expore-world-img" src={exploreimg1} alt="" />
                    </Col>
                    <Col xs={6} md={4}>
                        <img className="w-100 h-100 expore-world-img" src={exploreimg2} alt="" />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={12} md={3}>
                        <img className="w-100 h-100 expore-world-img mb-4" src={exploreimg3} alt="" />
                    </Col>
                    <Col xs={6} md={9}>
                        <img className="w-100 h-100 expore-world-img" src={exploreimg5} alt="" />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <img className="w-100 h-100 expore-world-img" src={exploreimg6} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExploreWorld;
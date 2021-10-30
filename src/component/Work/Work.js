import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sideImg from '../../Images/SideImg/side-img.jpg'
import './Work.css'

const Work = () => {
    return (
        <div className="my-5">
            <Container>
                <Row className="pt-5">
                    <Col>
                        <img className="w-100 side-img" src={sideImg} alt="" />
                    </Col>
                    <Col className="mx-3">
                        <h1 className="work-title">How We Work</h1>
                        <small className="mt-4 fw-bold">Tourism planning refers to the overall process of deploying the development goals and the implementation of a comprehensive tourism system. In some places, tourism plans contain a set of legal norms, and in others, they are frameworks that may contain legal elements such as zoning. In most cases, their purpose is to balance, guide, and protect the long-term development of a tourism destination or scenic site to ultimately achieve healthy development. Tourism planning functions as a framework, and thus must be imperative, strategic, innovative, and flexible.The overall growth of the tourism industry appears to be having increasingly negative environmental effects, so planning concepts are focusing more on environmental concerns.</small><br />

                        <button className="read-more-button my-4">Read more</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Work;
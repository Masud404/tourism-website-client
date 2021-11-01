import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
import google from '../../Images/icon/icons8-google-48.png'
import twitter from '../../Images/icon/icons8-twitter-48.png'
import youtube from '../../Images/icon/icons8-youtube-48.png'

const Footer = () => {
    return (
        // features
        <div className="footer py-5">
            <Row className="mx-auto text-light fw-bold text-center mt-5">
                <Col xs={6} md={3}>
                    <h3 className="mb-4">Features</h3>
                    <small className="footer-small-text">Reviews</small><br />
                    <small className="footer-small-text">Community</small><br />
                    <small className="footer-small-text">Reward</small><br />
                    <small className="footer-small-text">Doorprize</small>
                </Col>
                {/* company */}
                <Col xs={6} md={3}>
                    <h3 className="mb-4">Company</h3>
                    <small className="footer-small-text">Career</small><br />
                    <small className="footer-small-text">Help Center</small><br />
                    <small className="footer-small-text">FAQ</small>
                </Col>
                {/* follow us */}
                <Col xs={6} md={3}>
                    <h3 className="mb-4">Follow Us</h3>
                    <img className="icon" src={google} alt="" />
                    <img className="icon" src={twitter} alt="" />
                    <img className="icon" src={youtube} alt="" />

                </Col>
                {/* get connected */}
                <Col xs={6} md={3}>
                    <h3 className="mb-4">Get Connected</h3>
                    <small className="footer-small-text">Fullbarigate-Kuet</small><br />
                    <small className="footer-small-text">Khulna</small><br />
                    <small className="footer-small-text">01929039442</small><br />
                    <small className="footer-small-text">masud215502@gmail.com</small>
                </Col>
            </Row>
            <div className="text-center my-5">
                <p className="fw-bold text-light">Copyright<i class="far fa-copyright"></i>by <span className="text-warning">Md Masud Hossain</span></p>
            </div>
        </div>
    );
};

export default Footer;
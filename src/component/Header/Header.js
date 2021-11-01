import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider2 from '../../Images/SliderImg/slider-2.jpg'
import slider5 from '../../Images/SliderImg/slider-5.jpg'
import slider7 from '../../Images/SliderImg/slider-7.jpg'


const Header = () => {
    return (
        // carosel header item
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider5}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Lets plan your best vacation</h1>
                        <h5>Beach addicted is a place where we share the best holiday destinations we have visited during our travels. We focus on beach destination as we love the sea</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider7}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Lets plan your best vacation</h1>
                        <h5>Beach addicted is a place where we share the best holiday destinations we have visited during our travels. We focus on beach destination as we love the sea</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Lets plan your best vacation</h1>
                        <h5>Beach addicted is a place where we share the best holiday destinations we have visited during our travels. We focus on beach destination as we love the sea</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;
import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import lift1 from '../assets/lift1.png';
import lift2 from '../assets/lift2.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
        <Carousel>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={lift1}
                    alt="Lift1"
                />
                <Carousel.Caption>
                    <h3>Белые росы</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={lift2}
                    alt="Lift2"
                />
                <Carousel.Caption>
                    <h3>Pidoras image</h3>
                    <p>Pizdec pendosi ahueli</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        )
    }
}

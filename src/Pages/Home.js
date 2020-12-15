import React, { Component } from 'react'
import Jumbotron from '../Components/Jumbotron';
import CarouselBox from '../Components/CarouselBox';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Imglogo from '../assets/logo.png';
import '../Page.css';


export default class Home extends Component {
    render() {
        return (
            <>
            <Container className="col-md-12" style={{paddingTop: '8rem', paddingBottom: '0rem' }}>
            <Jumbotron>
            </Jumbotron>
            </Container>
                
            </>
            
        )
    }
}

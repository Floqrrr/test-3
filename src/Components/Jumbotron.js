import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';

const Jumbotron = () => (
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>О компании</h1>
        </Container>
    </Jumbo>
    
)

export default Jumbotron;
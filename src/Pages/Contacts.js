import React, { Component } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import '../Page.css';

export default class Contacts extends Component {
    render() {
        return (
            <>
            <Container style={{paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Row>
            <Col>
            <section className="contact">
                <div class="container">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A556d5c60faccd6f191afd22a29f9191b6e6aeb0d390768d04a8de87f60a64aa9&amp;source=constructor" width="444" height="596" frameborder="0"></iframe>
                </div>
            </section>
            </Col>
            <Col>
                    <p className="text">
            Аварийная служба- круглосуточно</p>
            <p className="text">тел. +7 391  267-97-97</p>
            <p className="text">тел. +7 999- 44 818-55</p>

            <p className="text">ОФИС</p>
            <p className="text">Пн- Пт с 9-00 до 17-00</p>
            <p className="text">660074 г.Красноярск, ул. Академика Киренского, д.24а, пом.VI.</p>
            <p className="text">Email:   liftcity124@mail.ru</p>

            </Col>
            
            </Row>
            </Container>
            </>
        );
    }
}

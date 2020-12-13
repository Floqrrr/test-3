import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'
import serv1 from '../assets/serv1.png';
import serv2 from '../assets/serv2.png';
import serv3 from '../assets/serv3.png';
import serv4 from '../assets/serv4.png';
import serv5 from '../assets/serv5.png';
import serv6 from '../assets/serv6.png';

export default class Services extends Component {
    render() {
        return (
            <Container style={{paddingTop: '10rem', paddingBottom: '2rem' }}>
            <Tab.Container id="ledt-tabs-example" defaultActiveKey="1">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column mt-2">
                        <Nav.Item>
                            <Nav.Link eventKey="1">Комплексное техническое обслуживание</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2">Текущий ремонт</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3">Аварийно-техническое обслуживание</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="4">Установка зеркал, поручней, светильников</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="5">Установка декоративного панно в кабине лифта</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="6">Демонтаж, монтаж, ремонт, покраска кабины лифта</Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content className="mt-3">
                        <Tab.Pane eventKey="1">
                           <Row>
                           <Col>
                           <p  className="text">
                               Производим установку и монтаж лифтов 1
                           </p>
                           </Col>
                           <Col>
                           <img src={serv1} />
                           </Col>
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                           <Row>
                           <Col>
                           <p  className="text">
                               Производим установку и монтаж лифтов 2
                           </p>
                           </Col>
                           <Col>
                           <img src={serv2} />
                           </Col>
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                           <Row>
                           <Col>
                           <p  className="text">
                               Производим установку и монтаж лифтов 6
                           </p>
                           </Col>
                           <Col>
                           <img src={serv6} />
                           </Col>
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="4">
                           <Row>
                           <Col>
                           <p  className="text">
                               Производим установку и монтаж лифтов 3
                           </p>
                           </Col>
                           <Col>
                           <img src={serv3} />
                           </Col>
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="5">
                           <Row>
                           <Col>
                           <p  className="text">
                               Производим установку и монтаж лифтов
                           </p>
                           </Col>
                           <Col>
                           <img src={serv4} />
                           </Col>
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="6">
                           <Row>
                           <Col>
                           <p  className="text">
                               Производим установку и монтаж лифтов
                           </p>
                           </Col>
                           <Col>
                           <img src={serv5} />
                           </Col>
                           </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
           </Tab.Container>
           </Container>
        );
    }
}

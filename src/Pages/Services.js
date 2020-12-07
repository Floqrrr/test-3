import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

export default class Services extends Component {
    render() {
        return (
            <Container>
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
                           <img src="" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                           <img src="" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane> 
                        <Tab.Pane eventKey="3">
                           <img src="" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane>  
                        <Tab.Pane eventKey="4">
                           <img src="" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane>  
                        <Tab.Pane eventKey="5">
                           <img src="" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane>  
                        <Tab.Pane eventKey="6">
                           <img src="" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane>  
                    </Tab.Content>
                </Col>
            </Row>
           </Tab.Container>
           </Container>
        );
    }
}

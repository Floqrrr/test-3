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
                           <img src="https://liftperm.ru/assets/images/5vt.jpg" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                           <img src="https://mrpl.city/uploads/news/968x504/g1k5kwhoc0qzg6ky.JPG" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane> 
                        <Tab.Pane eventKey="3">
                           <img src="https://dmitrovets.ru/wp-content/uploads/2017/06/photo_2017-06-26_13-16-41.jpg" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane>  
                        <Tab.Pane eventKey="4">
                           <img src="https://dmitrovets.ru/wp-content/uploads/2017/06/photo_2017-06-26_13-16-41.jpg" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane>  
                        <Tab.Pane eventKey="5">
                           <img src="https://dmitrovets.ru/wp-content/uploads/2017/06/photo_2017-06-26_13-16-41.jpg" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane>  
                        <Tab.Pane eventKey="6">
                           <img src="https://dmitrovets.ru/wp-content/uploads/2017/06/photo_2017-06-26_13-16-41.jpg" />
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

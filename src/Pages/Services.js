import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

export default class Services extends Component {
    render() {
        return (
            <Container>
            <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column mt-2">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Монтаж и установка</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">...</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Ремонт лифтов</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content className="mt-3">
                        <Tab.Pane eventKey="first">
                           <img src="https://liftperm.ru/assets/images/5vt.jpg" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                           <img src="https://mrpl.city/uploads/news/968x504/g1k5kwhoc0qzg6ky.JPG" />
                           <p>
                               Производим установку и монтаж лифтов
                           </p>
                        </Tab.Pane> 
                        <Tab.Pane eventKey="third">
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

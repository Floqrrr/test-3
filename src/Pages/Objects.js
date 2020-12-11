import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import lift1 from '../assets/obj 1.png';
import lift2 from '../assets/obj2.png';
import lift3 from '../assets/obj3.png';
import lift4 from '../assets/obj4.png';
import lift5 from '../assets/obj5.png';
import lift6 from '../assets/obj6.png';

export default class Objects extends Component {
    render() {
        return (
            
           <Container style={{paddingTop: '10rem', paddingBottom: '4rem' }}>
               <Row style={{paddingTop: '0rem', paddingBottom: '4rem' }}>
                   <h4  className="text">Компания ООО "ЛифтСити" осуществляет техническое обслуживание и ремонт лифтов в разных жилищных комплексах города.</h4>
               </Row>
               <Row>
                    <Col>
                        <Card style={{width: '18rem'}}>    
                        <Card.Img variant="top" src={lift1}/>
                        <Card.Body>
                            <Card.Title  className="text">
                                ЖК Белые росы
                            </Card.Title>

                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>    
                        <Card.Img variant="top" src={lift2}/>
                        <Card.Body>
                            <Card.Title  className="text">
                                ЖК Тихие зори
                            </Card.Title>

                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>    
                        <Card.Img variant="top" src={lift3}/>
                        <Card.Body>
                            <Card.Title  className="text">
                                ЖК Орбита
                            </Card.Title>

                        </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                    <Row style={{paddingTop: '2rem', paddingBottom: '2rem' }}>
                    <Col>
                        <Card style={{width: '18rem'}}>    
                        <Card.Img variant="top" src={lift4}/>
                        <Card.Body>
                            <Card.Title  className="text">
                                ЖК Северные ворота
                            </Card.Title>

                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>    
                        <Card.Img variant="top" src={lift5}/>
                        <Card.Body>
                            <Card.Title  className="text">
                                ЖК Отражение
                            </Card.Title>

                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>    
                        <Card.Img variant="top" src={lift6}/>
                        <Card.Body>
                            <Card.Title  className="text">
                                ЖК Серебряный
                            </Card.Title>

                        </Card.Body>
                        </Card>
                    </Col>
               </Row>
           </Container>
           
        )
    }
}

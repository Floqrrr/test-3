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
                <Container style={{paddingTop: '10rem', paddingBottom: '2rem' }}>
               <Row>
               <Col>
                </Col>
                <Col>
                    <p className="text">
                    Специалисты компании «ЛифтСити» предлагают периодическое техническое обслуживание (ТО) лифтов, грузовых подъемников, чтобы в дальнейшем избежать простоев. В нашей компании этим занимаются мобильные бригады квалифицированных механиков и круглосуточная аварийная служба. Все работы проводятся в соответствии с Техническим регламентом Таможенного союза ТР ТС 001/2011 «Безопасность лифтов», ГОСТ Р 55964-2014 «Лифты. Общие требования безопасности при эксплуатации». Мы соблюдаем все требования, делаем все необходимое для безопасной эксплуатации лифтов.

                    </p>
                </Col>
                
            </Row>
        </Container>
        
            </>
            
        )
    }
}

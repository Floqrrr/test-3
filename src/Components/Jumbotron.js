import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container, Row, Col} from 'react-bootstrap';
import city from '../assets/city.jpg';
import '../Page.css';

const Jumbotron = () => (
    
    <div class="jumbotron">
    
    <Container style={{paddingTop: '2rem', paddingBottom: '1rem' }}>
               <Row className="colon">
                    <p className="text ">
                    Специалисты компании «ЛифтСити» предлагают периодическое техническое обслуживание (ТО) лифтов, грузовых подъемников, чтобы в дальнейшем избежать простоев.
                    </p>
                    <p className="text">
                    В нашей компании этим занимаются мобильные бригады квалифицированных механиков и круглосуточная аварийная служба.  
                    </p>
                    <p className="text">
                    Все работы проводятся в соответствии с Техническим регламентом Таможенного союза ТР ТС 001/2011 «Безопасность лифтов», ГОСТ Р 55964-2014 «Лифты. Общие требования безопасности при эксплуатации».
                    </p>
                    <p className="text">
                    Мы соблюдаем все требования, делаем все необходимое для безопасной эксплуатации лифтов.
                    </p>

                
            </Row>
        </Container>
   
  </div>
 
    
)

export default Jumbotron;
import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'
import serv1 from '../assets/serv1.png';
import serv2 from '../assets/serv2.png';
import serv3 from '../assets/serv3.png';
import serv6 from '../assets/serv6.png';




export default class Services extends Component {
    render() {
        return (
            <>
            
            <Container style={{paddingTop: '10rem', paddingBottom: '2rem' }}>
            <Tab.Container  id="ledt-tabs-example" defaultActiveKey="1">
            <Row>
                
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column mt-2">
                    

                        <Nav.Item >
                            <Nav.Link eventKey="1" className="textL">Комплексное техническое обслуживание</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" className="textL">Диспетчеризация лифтов</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3" className="textL">Аварийно-техническое обслуживание</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="4" className="textL">Модернизация лифтов</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="1">
                           <Row>
                           <Col className="col-md-8">
                           <p  className="text">
                           Техобслуживание лифтов – обязательная процедура, касающаяся абсолютно каждого подъёмника, вне зависимости от того, для каких целей он предназначен.
                           </p>
                           <p  className="text" style={{paddingBottom: '0.05rem'}}>
                            В ходе осмотров проверяются следующие компоненты:
                            </p>
                           <p className="text">
                            система безопасности;
                            </p>
                           <p   className="text">
                            тормозные устройства;
                            </p>
                           <p  className="text">
                            привод дверей;
                            </p>
                           <p className="text">
                            состояние информационных стендов с номерами экстренного вызова мастера;
                            </p>
                           <p className="text">
                            система связи с диспетчером.
                            </p>
                           <p  className="text">
                            Также при плановом осмотре выполняется чистка кабины. 1 раз в год каждый лифт проходит полное техническое освидетельствование с проверкой отчетной документации.
                            </p>
                           <p  className="text">
                            Наша компания, учитывает не только актуальное состояние системы, но и действующие требования и стандарты безопасности.
                            </p>
                           <p  className="text">
                            В случае грамотного техобслуживания лифт будет безотказно работать и удачно проходить контролирующие проверки, а риски аварийных ситуаций будут сведены к минимуму.
                           </p>
                           </Col>
                           <Col>
                           <img src={serv1} />
                           </Col>
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                           <Row>
                           <Col className="col-md-8">
                           <p  className="text">
                           Качественная диспетчеризация от компании ООО «Лифтсити» гарантирует Вам устранение любых неполадок, связанных с работой оборудования.
                           </p>
                           <p  className="text">
                            Использование современных видов оборудования для диспетчеризации лифтов, обеспечивает, высокую скорость отклика диспетчера. Фактор скорости может оказаться решающим при аварийных ситуациях, поэтому наша компания заботится о повышении скорости и качества оказания услуг диспетчеризации своевременно модернизируя оборудование проводя курсы повышения квалификации персонала.
                            </p>
                            <p  className="text">
                            Наша современная диспетчерская получает информацию о неисправности лифта не только путем вызова с «кнопки» из кабины лифта, но и даже если лифт просто неисправен, то на экранах у наших диспетчеров отобразится информация о неисправности лифта, адрес, номер подъезда неисправного лифта, и номер ошибки неисправности. Так же, на нашем диспетчерском оборудовании сработает сигнал тревоги со всей подробной информацией, при незаконном вскрытии машинного помещения лифта.
                           </p>
                           </Col>
                           <Col>
                           <img src={serv2} />
                           </Col>
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                           <Row>
                           <Col className="col-md-8">
                           <p  className="text">
                           В наше время как в больших, так и в маленьких городах, архитектура насыщена многоэтажными домами. И любая многоэтажка оснащена лифтом. Лифты же, в свою очередь, требуют соответствующего обслуживания и ремонта. Для решения этих функций и существуют аварийно-диспетчерские службы (АДС).
                            </p>
                            <p  className="text">
                            АДС ООО «Лифтсити» своевременно реагируют на поступающие сообщения о возникших аварийных ситуациях, высвобождает застрявших пассажиров, вновь запускает остановившийся лифт.
                           </p>
                           </Col>
                           <Col>
                           <img src={serv6} />
                           </Col>
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="4">
                           <Row>
                           <Col className="col-md-8">
                           <p  className="text">
                           Модернизация лифтов рассматривается как рациональное решение проблемы обновления не до предела, выработавшего свой ресурс старого лифтового оборудования. При замене отдельных составных частей восстанавливаются эксплуатационные характеристики оборудования, усовершенствуются лифтовые системы, обновляется интерьер дверей шахты, а равно и кабины лифта.
                            </p>
                            <p  className="text">
                            Разработанные ООО«Лифтсити» пакеты модернизации предусматривают замену:
                            </p>
                            <p  className="text">
                            подъемного устройства (лебедки);
                            </p>
                            <p  className="text">
                            системы управления лифтом;
                            </p>
                            <p  className="text">
                            электропроводки и электропитания;
                            </p>
                            <p  className="text">
                            вызывных и кнопочных постов;
                            </p>
                            <p  className="text">
                            тяговых канатов и приводов дверей кабины;
                            </p>
                            <p  className="text">
                            освещения и декора кабины;
                            </p>
                            <p  className="text">
                            установку сервисных устройств, эффективных систем безопасности, блоков аварийного освещения и т. д.
                            </p>
                            <p  className="text">
                            Модернизация лифтов с ООО«Лифтсити» сделает подъемные устройства безопасными и комфортными, продлит срок их эксплуатации и позволит сэкономить существенный объем средств.
                           </p>
                           </Col>
                           <Col>
                           <img src={serv3} />
                           </Col>
                           </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
           </Tab.Container>
           </Container>
           
           </>
        );

    }
}

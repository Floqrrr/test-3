import React, { Component } from 'react'
import { Nav, Navbar, FormControl,Container, Form, Button } from 'react-bootstrap'
import { Route } from 'react-router'
import logo from '../assets/logo.png';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Reviews from '../Pages/Reviews';
import Contacts from '../Pages/Contacts';
import Services from '../Pages/Services';
import Objects from '../Pages/Objects';
import '../Page.css';

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img 
                        src={logo}
                        height="70"
                        widght="70"
                        className="d-inline-block align-top"
                        alt="Logo"

                        /> <h6>ЛИФТСИТИ</h6>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            
                            <Nav.Link href="/"> <h5>Главная</h5></Nav.Link>
                            <Nav.Link href="/about"><h5>О компании</h5></Nav.Link>
                            <Nav.Link href="/services"><h5>Услуги</h5></Nav.Link>
                            <Nav.Link href="/reviews"><h5>Отзывы</h5></Nav.Link>
                            <Nav.Link href="/objects"><h5>Объекты</h5></Nav.Link>
                            <Nav.Link href="/contacts"><h5>Контакты</h5></Nav.Link>
                           
                           
                        </Nav>
                        <Navbar.Text className="ml-auto" >
                            <h6 className="head">Адресс: ул. Академика Киренского, д.24а</h6>
                            <h6 className="head">Телефон диспетчерской:</h6>
                            <h6 className="head">8-999-448-1855 | 8-391-267-9797</h6>
                            <h6 className="head">Email: liftcity124@mail.ru</h6>
                        </Navbar.Text>    
                     
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/reviews" component={Reviews} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/objects" component={Objects} />

                   
                </Switch>
            </Router>
            </>
        );
    }
}

import React, { Component } from 'react';
import './mainnavbar.css';
import logo from '../../../img/logo192.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Maninavbar extends Component {
  render() {
    return (
      <div className='main-navbar-wrapp'>
        <Container>
          <Navbar collapseOnSelect expand='lg' variant='light'>
            <Navbar.Brand href='#home'>
              <img style={{ width: '3rem' }} src={logo} alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'></Nav>
              <Nav>
                <Nav.Link href='#features'>Home</Nav.Link>
                <Nav.Link href='#pricing'>About</Nav.Link>
                <Nav.Link href='#pricing'>Services</Nav.Link>
                <Nav.Link href='#pricing'>Projects</Nav.Link>
                <Nav.Link href='#pricing'>Safty Policy</Nav.Link>
                <Nav.Link href='#pricing'>Clients</Nav.Link>
                <Nav.Link href='#pricing'>Career</Nav.Link>
                <Nav.Link href='#pricing'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

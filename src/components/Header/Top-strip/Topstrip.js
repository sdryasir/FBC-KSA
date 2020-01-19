import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Topstrip.css';
import {
  FiPhoneCall,
  FiHome,
  FiClock,
  FiFacebook,
  FiTwitter,
  FiYoutube
} from 'react-icons/fi';

export default class Topstrip extends Component {
  render() {
    return (
      <div className='top-strip'>
        <Container>
          <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='#'>
                  <FiHome />
                  P.O box 10787, Al Qatif
                </Nav.Link>
                <Nav.Link href='#'>
                  <FiPhoneCall />
                  +966-59-071-3508
                </Nav.Link>
                <Nav.Link href='#'>
                  <FiClock />8 AM - 6 PM
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href='#deets'>Follow Us: </Nav.Link>
                <Nav.Link eventKey={2} href='#memes'>
                  <ul>
                    <li>
                      <Nav.Link href='#'>
                        <FiFacebook />
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href='#'>
                        <FiTwitter />
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href='#'>
                        <FiYoutube />
                      </Nav.Link>
                    </li>
                  </ul>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

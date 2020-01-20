import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './FooterComponent.css';

export default class FooterComponent extends Component {
  render() {
    return (
      <div className='footer-wrapper'>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3} lg={3}>
              <h5>Quick Links</h5>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Safty policy</li>
                <li>Clients</li>
                <li>Career</li>
                <li>Contact us</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3} lg={3}>
              <h5>Our Services</h5>
              <ul>
                <li>Abrasive blasting and coating</li>
                <li>Exterior/Interior Painting</li>
                <li>Floor coating</li>
                <li>Fire proofing</li>
                <li>Waterproofing</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3} lg={3}>
              <h5>Business Info.</h5>
              <ul>
                <li>P.O box 10787, Al Qatif - 32662 KSA</li>
                <li>Cell: +966-59-071-3508</li>
                <li>info@fbc-ksa.com</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3} lg={3}>
              <h5>Write to us</h5>
              <input
                type='text'
                placeholder='Name'
                style={{ marginBottom: '3px', width: '100%' }}
              />
              <input
                type='text'
                placeholder='Email'
                style={{ marginBottom: '3px', width: '100%' }}
              />
              <textarea
                name=''
                placeholder='Message'
                id=''
                cols='22'
                rows='4'
                style={{ marginBottom: '3px', width: '100%' }}></textarea>
              <Button variant='primary'>Send Message</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

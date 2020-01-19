import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './Values.css';
import { FiClock, FiAward, FiBriefcase, FiRefreshCcw } from 'react-icons/fi';

export default class Values extends Component {
  render() {
    return (
      <div className='values-component'>
        <Container>
          <div className='value-component-inner'>
            <Row>
              <Col xs={6} sm={6} md={3} lg={3}>
                <div className='value-item'>
                  <FiClock size={32} />
                  <h5>Comittment</h5>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>
                <div className='value-item'>
                  <FiAward size={32} />
                  <h5>Customer Value</h5>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>
                <div className='value-item'>
                  <FiBriefcase size={32} />
                  <h5>Professionalism</h5>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>
                <div className='value-item'>
                  <FiRefreshCcw size={32} />
                  <h5>Flexibility</h5>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

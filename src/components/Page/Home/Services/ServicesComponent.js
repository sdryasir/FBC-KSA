import React, { Component } from 'react';
import './ServicesComponent.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import service1 from '../../../../img/service1.jpg';
import service2 from '../../../../img/service2.jpg';
import service3 from '../../../../img/service3.jpg';
import service4 from '../../../../img/service4.jpg';
import service5 from '../../../../img/service5.jpg';
import service6 from '../../../../img/service6.jpg';
import { FiArrowRight } from 'react-icons/fi';

export default class ServicesComponent extends Component {
  render() {
    return (
      <div className='services-component'>
        <div className='services-component-inner'>
          <Container>
            <div className='lead-text'>
              <h2>Our Services</h2>
              <p>
                Our dedicated & highly enthusiastic team provides value added
                services to the Industrial sectors, Construction, Oil & Gas and
                Petrochemical industry. FBC's hands on approach offers a unique
                edge in a high quality services and strategic sourcing offers
                opportunities to our valued customers to collaborate with FBC
                for services at very competitive price.
              </p>
            </div>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4} className='mb-10'>
                <Card>
                  <Card.Img variant='top' src={service1} />
                  <Card.Body>
                    <Card.Title>
                      Abrasive Blasting <FiArrowRight />
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} className='mb-10'>
                <Card>
                  <Card.Img variant='top' src={service2} />
                  <Card.Body>
                    <Card.Title>
                      Abrasive Coating <FiArrowRight />
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} className='mb-10'>
                <Card>
                  <Card.Img variant='top' src={service3} />
                  <Card.Body>
                    <Card.Title>
                      Exterior/Interior Painting <FiArrowRight />
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} className='mb-10'>
                <Card>
                  <Card.Img variant='top' src={service4} />
                  <Card.Body>
                    <Card.Title>
                      Floor Coating <FiArrowRight />
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} className='mb-10'>
                <Card>
                  <Card.Img variant='top' src={service5} />
                  <Card.Body>
                    <Card.Title>
                      Fire Proofing <FiArrowRight />
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} className='mb-10'>
                <Card>
                  <Card.Img variant='top' src={service6} />
                  <Card.Body>
                    <Card.Title>
                      Water Proofing <FiArrowRight />
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

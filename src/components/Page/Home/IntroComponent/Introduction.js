import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import CarouselImg from '../../../../img/construction.jpg';
import './Introduction.css';

export default class Introduction extends Component {
  render() {
    return (
      <div className='introduction-component'>
        <div className='introduction-component-inner'>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className='intro-desc'>
                  <h6>Welcome to</h6>
                  <h2>Flower Building Company</h2>
                  <p>
                    FLOWER BUILDING COMPANY is a registered company with its
                    main office located in Al Qatif, Kingdom of Saudi Arabia has
                    focus on to be a strong and healthy market trust. We have
                    complete expertise in the application of anti-corrosion
                    proactive coatings on offshore and onshore. We are
                    specialized in sandblasting and the application of
                    high-performance protective coatings to steel structures for
                    oil industry, offshore installations such as jackets piles
                    modules, decks, oil tanks and water tanks. Our innovation
                    with proficiently qualified and experienced team enables us
                    to extend our operation to the particular field of
                    industrial coatings.
                  </p>
                  <p>
                    FLOWER BUILDING COMPANY is registered with the Ministry of
                    Commerce and Industry KSA under the commercial license.
                    FLOWER BUILDING COMPANY is specialize in industrial and
                    official substance and provides high quality services to its
                    clients. We are one-click...
                  </p>
                  <Button variant='primary'>Read More</Button>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className='intro-img'>
                  <img src={CarouselImg} alt='' />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

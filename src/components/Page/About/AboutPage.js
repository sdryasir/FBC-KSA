import React, { Component } from 'react';
import innerHeadimg from '../../../img/innerpagehead.jpg';
import {
  Container,
  Row,
  Col,
  ListGroup,
  Accordion,
  Card
} from 'react-bootstrap';

export default class AboutPage extends Component {
  render() {
    return (
      <div className='about-wrapper'>
        <div className='inner-page-head'>
          <img src={innerHeadimg} alt='' />
          <Container>
            <div className='innerpage-title'>
              <h5>About the Company</h5>
            </div>
          </Container>
        </div>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={8} lg={8}>
              <div className='inner-page-content'>
                <h3>About Flower Building Company</h3>
                <p>
                  FLOWER BUILDING COMPANY is a registered company with its main
                  office located in Al Qatif, Kingdom of Saudi Arabia has focus
                  on to be a strong and healthy market trust. We have complete
                  expertise in the application of anti-corrosion proactive
                  coatings on offshore and onshore. We are specialized in
                  sandblasting and the application of high-performance
                  protective coatings to steel structures for oil industry,
                  offshore installations such as jackets piles modules, decks,
                  oil tanks and water tanks. Our innovation with proficiently
                  qualified and experienced team enables us to extend our
                  operation to the particular field of industrial coatings.
                  FLOWER BUILDING COMPANY is registered with the Ministry of
                  Commerce and Industry KSA under the commercial license. FLOWER
                  BUILDING COMPANY is specialize in industrial and official
                  substance and provides high quality services to its clients.
                  We are one-click solution provider which offers high
                  performance industrial painting, sandblasting and hydro
                  blasting. FLOWER BUILDING COMPANY is an advanced company with
                  best technology serves as general contractor and high quality
                  work of industrial painting and abrasive blasting. Our company
                  assures outstanding performance in project management
                  activities, technical consultancy and protective coatings
                  solutions.
                </p>
                <div className='accordian-about'>
                  <Accordion defaultActiveKey=''>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey='0'>
                        Our Approaches
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                          <p>
                            We have come to study and manage to practice
                            providing excellent service. In general, the
                            flexibility and dedication of our company and its
                            people is the key to our success. We are engaged in
                            painting and abrasive blasting solutions with high
                            quality of safety measures and work standards. In
                            order to provide finest services to our valuable
                            customers a high technology based operations are
                            always in practice and carried out with desired
                            quality and specifications. Evolving into a high
                            performance organisation FLOWER BUILDING COMPANY has
                            adopted the expedition to enquire best level of
                            trust and commitment within the business. We aimed
                            to maintain customer focus, process excellence,
                            people excellence and the ability to execute. FLOWER
                            BUILDING COMPANY is constantly seeking customer
                            opinions; to anticipate market trends; to be
                            competitive; to create and deliver products and
                            services that bring value to the customer; to run
                            processes that are lean, efficient and designed to
                            serve the customer conveniently. Our company
                            continually impress its stakeholders by delivering
                            exceptional results of its services. We have
                            conformance with HSE regulations and international
                            standards for project hazards identification,
                            evaluation and risk assessment in order to eliminate
                            operational hazards.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey='1'>
                        Vision Statement
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                          To be referred as the most preferred company in the
                          industrial painting and abrasive coating solutions.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey='2'>
                        Mission Statement
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey='2'>
                        <Card.Body>
                          We are committed to deliver a satisfactory service
                          portfolio to our clients with emphasis on high
                          efficiency and quality through applying latest
                          technology and innovations. FLOWER BUILDING COMPANY is
                          dedicated to offer an inclusive range of services
                          delivering to its customers and supporting their core
                          operations to ensure our joint success.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey='3'>
                        Our Values
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey='3'>
                        <Card.Body>
                          The company upholds the following values as a
                          guideline to its operation and business transactions:
                          <ul>
                            <li>Commitment </li>
                            <li>Customer value</li>
                            <li>Professionalism</li>
                            <li>Flexibility / Adoptability</li>
                            <li>Passion to excel</li>
                            <li>Thriving through diversity</li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey='4'>
                        Business goals and objectives
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey='4'>
                        <Card.Body>
                          Customer satisfaction is the ultimate goal of our
                          company. Our objective is to become one of the
                          foremost market share holder in competitive market.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className='right-aside'>
                <ListGroup as='ul'>
                  <ListGroup.Item as='li' active>
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item as='li'>
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item as='li' disabled>
                    Morbi leo risus
                  </ListGroup.Item>
                  <ListGroup.Item as='li'>
                    Porta ac consectetur ac
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

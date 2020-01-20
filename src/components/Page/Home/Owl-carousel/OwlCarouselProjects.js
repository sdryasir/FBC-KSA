import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './OwlCarouselProjects.css';
import { Container, Card, Button } from 'react-bootstrap';

export default class OwlCarouselProjects extends Component {
  state = {
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  };
  render() {
    return (
      <div className='owl-carousel-wrapper'>
        <Container>
          <div className='lead-text'>
            <h2>Our Projects</h2>
            <p>
              Our dedicated & highly enthusiastic team provides value added
              services to the Industrial sectors, Construction, Oil & Gas and
              Petrochemical industry.
            </p>
          </div>
          <OwlCarousel
            className='owl-theme'
            loop
            margin={10}
            nav
            dots={false}
            autoPlay
            autoplayTimeout={2000}
            responsive={this.state.responsive}>
            <div className='item'>
              <Card>
                {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                <Card.Body>
                  <Card.Title>GCP SITE DEVELOPMENT PROJECT - HARADH</Card.Title>
                  <Card.Text>MOFARREH ALHARBI & PARTNERS</Card.Text>
                  <Button variant='primary'>Read More</Button>
                </Card.Body>
              </Card>
            </div>
            <div className='item'>
              <Card>
                {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                <Card.Body>
                  <Card.Title>FADHILI DOWNSTREAM PIPE LINE</Card.Title>
                  <Card.Text>DACO</Card.Text>
                  <Button variant='primary'>Read More</Button>
                </Card.Body>
              </Card>
            </div>
            <div className='item'>
              <Card>
                {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                <Card.Body>
                  <Card.Title>MGS PHASE-II</Card.Title>
                  <Card.Text>SAQCO</Card.Text>
                  <Button variant='primary'>Read More</Button>
                </Card.Body>
              </Card>
            </div>
            <div className='item'>
              <Card>
                {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                <Card.Body>
                  <Card.Title>MGS PHASE-III</Card.Title>
                  <Card.Text>SAQCO</Card.Text>
                  <Button variant='primary'>Read More</Button>
                </Card.Body>
              </Card>
            </div>
          </OwlCarousel>
        </Container>
      </div>
    );
  }
}

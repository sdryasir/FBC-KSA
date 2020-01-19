import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './OwlCarouselProjects.css';
import { Container } from 'react-bootstrap';

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
        items: 3
      },
      1000: {
        items: 4
      }
    }
  };
  render() {
    return (
      <div className='owl-carousel-wrapper'>
        <Container>
          <OwlCarousel
            className='owl-theme'
            loop
            margin={10}
            nav
            dots={false}
            autoplay
            autoplayTimeout={2000}
            responsive={this.state.responsive}>
            <div className='item'>
              <h4>1</h4>
            </div>
            <div className='item'>
              <h4>2</h4>
            </div>
            <div className='item'>
              <h4>3</h4>
            </div>
            <div className='item'>
              <h4>4</h4>
            </div>
            <div className='item'>
              <h4>5</h4>
            </div>
            <div className='item'>
              <h4>6</h4>
            </div>
          </OwlCarousel>
        </Container>
      </div>
    );
  }
}

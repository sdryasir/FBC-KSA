import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Car1 from '../../../../img/car1.jpg';
import Car2 from '../../../../img/car2.jpg';
import Car3 from '../../../../img/car3.jpg';
import './HomeCarousel.css';

export default class HomeCarousel extends Component {
  render() {
    return (
      <div className='home-page-carousel'>
        <Carousel indicators={false} fade={true}>
          <Carousel.Item>
            <img className='d-block w-100' src={Car1} alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={Car2} alt='Third slide' />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Values from './Vaules/Values';
import Introduction from './IntroComponent/Introduction';
import ServicesComponent from './Services/ServicesComponent';
import HomeCarousel from './Carousel/HomeCarousel';
import Projects from './Projects/Projects';
import FooterComponent from '../../Footer/FooterComponent';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeCarousel />
        <Values />
        <Introduction />
        <ServicesComponent />
        <Projects />
        <FooterComponent />
      </div>
    );
  }
}

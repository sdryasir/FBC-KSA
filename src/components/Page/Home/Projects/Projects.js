import React, { Component } from 'react';
import './Projects.css';
import OwlCarouselProjects from '../Owl-carousel/OwlCarouselProjects';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects-section'>
        <div className='project-section-inner'>
          <OwlCarouselProjects />
        </div>
      </div>
    );
  }
}

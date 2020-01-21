import React, { Component } from 'react';
import Topstrip from '../Header/Top-strip/Topstrip';
import Maninavbar from '../Header/Main-navigation/Maninavbar';

export default class HeaderTop extends Component {
  render() {
    return (
      <div>
        <Topstrip />
        <Maninavbar />
      </div>
    );
  }
}

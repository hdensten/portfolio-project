import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container'; 
import NavigationComponent from "./navigation/navigation-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationComponent />
        <h1>Hannah Densten's Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm a')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
 
import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container'; 
import PortfolioItem from './portfolio/portfolio-item';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Hannah Densten's Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm a')}</div>
        <PortfolioContainer />
        <PortfolioItem />
      </div>
    );
  }
}
 
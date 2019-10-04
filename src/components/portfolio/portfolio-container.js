import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to My Portfolio",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  getPortfolioItems() {
    axios
      .get("https://hannahdensten.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <div className="filter-buttons">
          <button
            onClick={() => this.handleFilter("Education")}
            className="filter-button"
          >
            Education
          </button>
          <button
            onClick={() => this.handleFilter("Civil Engineering")}
            className="filter-button"
          >
            Civil Engineering
          </button>
          <button
            onClick={() => this.handleFilter("Software Development")}
            className="filter-button"
          >
            Software Development
          </button>
        </div>

        <div className="portfolio-items">{this.portfolioItems()}</div>
      </div>
    );
  }
}

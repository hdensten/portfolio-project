import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to My Portfolio",
      isLoading: false,
      data: [
        {
          title: "UMass Amherst",
          category: "Education",
          slug: "umass-amherst"
        },
        {
          title: "Tighe & Bond",
          category: "Civil Engineering",
          slug: "tighe-and-bond"
        },
        {
          title: "Bohler Engineering",
          category: "Civil Engineering",
          slug: "bohler-engineering"
        },
        { title: "Bottega", category: "Education", slug: "bottega" },
        { title: "Ivanti", category: "Software Development", slug: "ivanti" }
      ]
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

  portfolioItems() {
    return this.state.data.map(item => {
      return (
        <PortfolioItem title={item.title} url={"umass.edu"} slug={item.slug} />
      );
    });
  }

  handlePageTitleUpdate() {
    this.setState({
      pageTitle: "Something Else"
    });
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

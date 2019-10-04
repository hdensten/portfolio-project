import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to My Portfolio",
            isLoading: false,
            data: [
                {title: "UMass Amherst", category: "Education"}, 
                {title: "Tighe & Bond", category: "Civil Engineering"}, 
                {title: "Bohler Engineering", category: "Civil Engineering"}, 
                {title: "Bottega", category: "Education"}, 
                {title: "Ivanti", category: "Software Development"}
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }
    
    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"umass.edu"}/>;
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
                    <button onClick={() => this.handleFilter("Education")} className="filter-button">
                        Education
                    </button>
                    <button onClick={() => this.handleFilter("Civil Engineering")} className="filter-button">
                        Civil Engineering
                    </button>
                    <button onClick={() => this.handleFilter("Software Development")} className="filter-button">
                        Software Development
                    </button>
                </div>

                <div className="portfolio-items">
                    {this.portfolioItems()}
                </div>
                

            </div>
        )
    }
}
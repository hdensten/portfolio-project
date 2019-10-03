import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to My Portfolio",
            data: [
                {title: "UMass"}, 
                {title: "Bohler"}, 
                {title: "Bottega"}, 
                {title: "Ivanti"}
            ]
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
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
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                <div className="portfolio-items">
                    {this.portfolioItems()}
                </div>

                <hr/>
                <button onClick={this.handlePageTitleUpdate}>Change Title</button>

            </div>
        )
    }
}
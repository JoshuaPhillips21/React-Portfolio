import React, { Component } from 'react';
import axios from "axios";

import Portfolioform from "../portfolio/portfolio-form";
import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";


export default class PortfolioManager extends Component {
constructor() {
    super();

    this.state = {
        portfolioItems: [

        ]
    }
    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind
    this.handleFormSubmissonError = this.handleFormSubmissonError.bind
};

handleSuccessfulFormSubmission(portfolioItem) {
    //TODO
    // update state
    //add item to list
}

handleFormSubmissonError(error) {
    console.log("handleFormSubmissonError", error)
}

getPortfolioItems() {
    axios.get("https://joshphillips21.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true
    }).then(response => {
        this.setState({
            portfolioItems: [...response.data.portfolio_items]
        })
    }).catch(error => {
        console.log("error in getPortfolioItems", error);
    })
}

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        console.log('Hello Test')
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <Portfolioform 
                    handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                    handleFormSubmissonError={this.handleFormSubmissonError}/>
                </div>
                <div className="right-column">
                <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
            </div>
        );
    }
}
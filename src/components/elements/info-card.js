////////////////////////////////////////////////////////////////////////////////
// FILE: info-card.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-09-11
// PURPOSE: react component for info cards
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import "../styles/info-card.css"

export default class InfoCard extends React.Component {

    // set props
    constructor(props){
        super(props);
        this.__onClick = this.__onClick.bind(this);
    }

    // define on click to reset view to top when button clicked
    __onClick(){
        window.scrollTo(0,0);
    }

    ////////////////////////////////////////
    
    // render
    render () {
        // gather options and create flags 
        const link = (typeof this.props.linkUrl != "undefined" && typeof this.props.linkLabel != "undefined")
        const isExternal = (typeof this.props.isExternal === "undefined" || this.props.isExternal === false)
        const css = (this.props.css ? `feature ${this.props.css}` : "feature")

        // return 
        return (
            <div className={css} aria-label={`info card on ${this.props.title}`}>
                {
                    // include background image if specified
                    this.props.backgroundImage
                        ? <div className="feature-image" style={{ backgroundImage: `url(${images[this.props.backgroundImage]})` }} />
                        : null
                }
                {
                    // render label if provided
                    this.props.label
                        ? <p className="label">{this.props.label}</p>
                        : null
                }
                <h3 className="feature-title">{this.props.title}</h3>
                <ReactMarkdown source={this.props.text} />
                {
                    // render link if specified
                    link
                        ? (

                            // render link according to the logical flag "isExternal"
                            !isExternal
                                ? (
                                    <a href={this.props.linkUrl} className="btn btn-outlined">
                                        {this.props.linkLabel}
                                    </a>
                                )
                                : (
                                    <Link className="btn btn-outlined" to={this.props.linkUrl} onClick={this.__onClick}>
                                        {this.props.linkLabel}
                                    </Link>
                                )
                        )
                        : null
                }
                {
                    this.props.children
                }
            </div>
        )
    }
}

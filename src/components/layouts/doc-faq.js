////////////////////////////////////////////////////////////////////////////////
// FILE: report-faq-section.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-14
// MODIFIED: 2019-06-06
// PURPOSE: react component for generated faq sections
// DEPENDENCIES: see below
// STATUS: working; complete
// COMMENTS: This is a component for creating faq sections only, i.e., FAQ documents
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React, { Component } from "react"
import ReactMarkdown from "react-markdown"

// build component
class FaqCard extends Component {

    constructor(props) {
        super(props);
        this.toggleContent = this.toggleContent.bind(this);
    }

    // show/hide FAQ question content based on button click
    toggleContent() {

        // get elements
        let parent = document.getElementById(this.props.id);
        let button = parent.querySelector(".expand-toggle");
        let content = parent.querySelector(".hidden-content");

        // modify classLists
        button.classList.toggle("rotated");
        content.classList.toggle("showContent");

        // modify aria attributes
        if (button.getAttribute("aria-expanded") === "false") {
            button.setAttribute("aria-expanded", true);
            content.removeAttribute("hidden");
        } else {
            button.setAttribute("aria-expanded", false);
            content.setAttribute("hidden", "");
        }
    }

    // render
    render() {
        return (
            <section id={this.props.id} className="faq-section searchable" aria-label={this.props.description}>
                <h3>{this.props.title}</h3>
                <button className="btn expand-toggle" aria-expanded="false" aria-label="open or close section" onClick={this.toggleContent}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-chevron" width="25" height="15" viewBox="0 0 25 15">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2px" fill="currentColor" d="M0,2 12.5,15 25,2 Z" />
                    </svg>
                </button>
                {
                    // determine if content is added through `content` prop or within the elements opening/closing tags
                    // other wise render the content as false
                    (this.props.children && !this.props.content)
                    ? (
                        <div className="hidden-content" hidden> 
                            {this.props.children}       
                        </div>
                    )
                    : (
                        <div className="hidden-content" hidden>
                        <ReactMarkdown source={this.props.content} escapeHtml={false} />
                        </div>
                    )
                }
            </section>
        )
    }
}

// export
export default FaqCard 
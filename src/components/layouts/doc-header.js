////////////////////////////////////////////////////////////////////////////////
// FILE: doc-header.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-17
// MODIFIED: 2019-11-14
// PURPOSE: document header
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import "../styles/document.css"

// build
function header(props){
    return (
        <article
            id={ props.id ? props.id : null }
            className={props.className ? `doc-header ${ props.className }` : "doc-header"}
            aria-label={props.description ? props.description : null }
            style={props.style ? props.style : null}
        >
            {
                // set title and warn if nothing supplied
                props.title
                    ? (
                        <h1 className="doc-header-text doc-header-title">
                            {props.title}
                        </h1>
                    )
                    : null
            }
            {
                // subtitle
                props.subtitle
                    ? (
                        <h2 className="doc-header-text doc-header-subtitle">
                            {props.subtitle}
                        </h2>
                    )
                    : null

            }
            {
                // optional props.children if needed
                props.children
            }
        </article>
    )
}

export default header
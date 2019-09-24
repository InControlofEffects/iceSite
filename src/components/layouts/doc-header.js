////////////////////////////////////////////////////////////////////////////////
// FILE: doc-header.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-17
// MODIFIED: 2019-09-17
// PURPOSE: document header
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

import React from "react"
import "../styles/document.css"

// build
const header = (props) => {
    return (
        <article
            id={ props.id ? props.id : null }
            className={props.css ? `doc-header ${props.css}` : "doc-header"}
            aria-label={props.description ? props.description : null }
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
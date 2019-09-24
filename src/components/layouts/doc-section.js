////////////////////////////////////////////////////////////////////////////////
// FILE: document-section.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-02
// MODIFIED: 2019-06-11
// PURPOSE: generic layout for documents (i.e., all pages)
// DEPENDENCIES: react, document.css
// STATUS: working; complete;
// COMMENTS: This layout component should be considered as the default layout
// for all non-visualization pages (i.e., home pages, landing pages, etc.) and
// should be used with the <Document> component. Do not use this inside the 
// <Report>. Use <ReportSection> instead.
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"

// define layout component
const section = (props) => {

    // process props
    const css = props.css ? `doc-section ${props.css}` : "doc-section";
    const cssWithWidth = props.fullWidth ? `${css} full-width` : `${css} normal-width`;

    // render
    return (
        <section
            id={props.id ? props.id : null}
            className={cssWithWidth}
            aria-label={props.description ? props.description : null }
        >
            {
                // process title
                props.title 
                ? (
                    <h2 className="doc-section-title">
                        { props.title }
                    </h2>
                )
                : null
            }
            {
                // render all props as is
                props.children
            }
        </section>
    )
}
export default section
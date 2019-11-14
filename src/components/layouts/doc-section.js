////////////////////////////////////////////////////////////////////////////////
// FILE: document-section.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-02
// MODIFIED: 2019-11-14
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
function section(props){

    // process props
    const css = props.className ? `doc-section ${ props.className }` : "doc-section";
    const cssWithWidth = props.fullWidth ? `${css} full-width` : `${css} normal-width`;
    const cssCentered = props.centerContent ? `${cssWithWidth} section-centered` : `${cssWithWidth}`;

    // render
    return (
        <section
            id={props.id ? props.id : null}
            className={ cssCentered }
            aria-label={props.description ? props.description : null }
            style={props.style ? props.style : null }
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
                // render inner content if fullwidth is true
                props.fullWidth
                ?   (
                    <div className="full-width-content">
                        { props.children }
                    </div>
                )
                : props.children
            }
        </section>
    )
}
export default section
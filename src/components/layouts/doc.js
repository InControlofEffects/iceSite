////////////////////////////////////////////////////////////////////////////////
// FILE: document.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-11-14
// PURPOSE: react component for documents/articles, i.e., large bodies of text
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import "../styles/document.css"
function doc(props) {
    return (
        <article className={`doc ${props.className ? props.className : null}`} aria-label={props.description} {...props}>
            {props.children}
        </article>
    )
}
export default doc
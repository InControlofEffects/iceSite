////////////////////////////////////////////////////////////////////////////////
// FILE: document.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-09-25
// PURPOSE: react component for documents/articles, i.e., large bodies of text
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import "../styles/document.css"
const doc = (props) => {
    return (
        <article id={props.id ? props.id : '' } className="doc" aria-label={props.description}>
            {props.children}
        </article>
    )
}
export default doc
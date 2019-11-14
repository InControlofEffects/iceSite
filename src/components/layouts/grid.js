////////////////////////////////////////////////////////////////////////////////
// FILE: grid.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-01
// MODIFIED: 2019-11-14
// PURPOSE: react component for creating grid layouts
// DEPENDENCIES: react; grid.css
// STATUS: working; complete
// COMMENTS: This component is useful for arranging content by rows and columns.
// See the components wiki for available layouts and examples. 
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import "../styles/grid.css"

// define page component
function grid(props){
    
    // process vars
    const id = props.id ? props.id : '';
    const css = props.className ? props.className : '';
    const desc = props.description ? props.description : ''

    // render
    return (
        <div id={id} className={`grid grid-${props.layout}-layout ${css}`} aria-label={desc} >
            {props.children}
        </div>
    )
}
export default grid
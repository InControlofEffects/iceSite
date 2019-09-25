////////////////////////////////////////////////////////////////////////////////
// FILE: icon_plus_outline.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-21
// MODIFIED: 2019-09-25
// PURPOSE: react component for plus icon outline
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
const icon = (props) => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={props.className ? props.className : null} width="50px" height="50px" viewBox="0 0 50 50">
            <title>icon-plus-outline</title>
            <desc>a plus sign placed in a circle</desc>
            <g id="icon-plus-outline" stroke="none" strokeWidth="1" fill="none">
                <circle id="outline" fill="#3F454B" cx="25" cy="25" r="24"></circle>
                <path d="M25,15 C26.1045695,15 27,15.8954305 27,17 L27,22.999 L33,23 C34.1045695,23 35,23.8954305 35,25 C35,26.1045695 34.1045695,27 33,27 L27,27 L27,33 C27,34.1045695 26.1045695,35 25,35 C23.8954305,35 23,34.1045695 23,33 L23,27 L17,27 C15.8954305,27 15,26.1045695 15,25 C15,23.8954305 15.8954305,23 17,23 L23,23 L23,17 C23,15.8954305 23.8954305,15 25,15 Z" id="Combined-Shape" fill="white"></path>
            </g>
        </svg>
    )
}

// export
export default icon
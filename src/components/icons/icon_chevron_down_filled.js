////////////////////////////////////////////////////////////////////////////////
// FILE: icon_chevron_down_filled.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-16
// MODIFIED: 2019-05-16
// PURPOSE: react component for icon 
// DEPENDENCIES: react
// STATUS: working
// COMMENTS: by converting the svg element into a react component, the image
// can be loaded inline such as: import UserIcon from "/path/to/icon_user". 
// Alternatively, you can use "react-inlinesvg" however, it wraps content in an
// annoying <span> tag rather than rendering the svg as is. It's easier to write
// and use these as react components
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"

// build
const icon = (props) => {
    return (
        <svg className={props.className ? props.className : null} xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2px" fill="currentColor" d="M0,2 12.5,15 25,2 Z" />
        </svg>
    )
}

// export
export default icon
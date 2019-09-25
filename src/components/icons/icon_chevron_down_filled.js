////////////////////////////////////////////////////////////////////////////////
// FILE: icon_chevron_down_filled.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-16
// MODIFIED: 2019-09-25
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
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={props.className ? props.className : null} width="25" height="15" viewBox="0 0 25 15">
            <title>icon - filled down chevron</title>
            <desc>downward pointing chevron</desc>
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2px" fill="currentColor" d="M0,2 12.5,15 25,2 Z" />
        </svg>
    )
}

// export
export default icon
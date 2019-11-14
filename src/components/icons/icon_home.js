////////////////////////////////////////////////////////////////////////////////
// FILE: icon_home.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-16
// MODIFIED: 2019-11-14
// PURPOSE: react component for icon 
// DEPENDENCIES: react
// STATUS: working
// COMMENTS: by converting the svg element into a react component, the image
// can be loaded inline such as: import HomeIcon from "/path/to/icon_user". 
// Alternatively, you can use "react-inlinesvg" however, it wraps content in an
// annoying <span> tag rather than rendering the svg as is. It's easier to write
// and use these as react components
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"

// build
function icon(props){
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={props.className ? props.className : null} viewBox="0 0 24 24" width="24" height="24">
            <title>icon - home</title>
            <desc>an outline of a house</desc>
            <path stroke="none" strokeWidth="1px" fill="currentColor" d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/>
        </svg>
    )
}

// export
export default icon
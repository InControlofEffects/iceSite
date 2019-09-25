////////////////////////////////////////////////////////////////////////////////
// FILE: icon_user.js
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
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={props.className ? props.className : null} viewBox="0 0 24 24" width="24" height="24">
            <title>icon user</title>
            <desc>the shape of a person</desc>
            <circle stroke="currentColor" strokeWidth="1px" fill="none" cx="12" cy="12" r="12" />
            <path stroke="none" strokeWidth="0.15px" fill="currentColor" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/>
        </svg>
    )
}

// export
export default icon
////////////////////////////////////////////////////////////////////////////////
// FILE: icon_user_outline.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-16
// MODIFIED: 2019-11-14
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
function icon(props){
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={props.className ? props.className : null} width="50px" height="50px" viewBox="0 0 50 50">
            <title>icon user outlined</title>
            <desc>the shape of a person in a circle</desc>
            <g id="icon-user-outline" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <circle id="outline" stroke="currentColor" strokeWidth="2" cx="25" cy="25" r="24"></circle>
                <g id="user" transform="translate(11.280196, 6.000000)" stroke="currentColor" strokeWidth="2">
                    <path d="M27.1829506,38.463564 C27.1829506,31.1581236 23.1247009,23.3692614 18.2303544,21.0113097 C16.8720034,20.3568962 15.4135775,20 13.9041559,20 C12.4962651,20 11.1176019,20.3104979 9.81412773,20.8833092 C4.68481072,23.1373859 0.63453826,31.6314453 0.63453826,39.073266" id="body"></path>
                    <circle id="head" cx="13.7198041" cy="9" r="9"></circle>
                </g>
            </g>
        </svg>
    )
}

// export
export default icon
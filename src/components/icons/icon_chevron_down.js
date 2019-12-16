////////////////////////////////////////////////////////////////////////////////
// FILE: icon_chevron_down.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-27
// MODIFIED: 2019-11-14
// PURPOSE: react component for open chevron down icon
// DEPENDENCIES: react
// STATUS: working; complete
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
function icon(props){
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={props.className ? props.className : null} width="20px" height="20px" viewBox="0 0 20 20">
            <title>icon chevron down</title>
            <desc>downward pointing chevron</desc>
            <polygon stroke="currentColor" fill="currentColor" points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"/>
        </svg>
    )
}

// export
export default icon
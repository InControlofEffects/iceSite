////////////////////////////////////////////////////////////////////////////////
// FILE: icon_chevron_down.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-27
// MODIFIED: 2019-05-27
// PURPOSE: react component for open chevron down icon
// DEPENDENCIES: react
// STATUS: working; complete
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
const icon = (props) => {
    return (
        <svg className={props.css ? props.css : null} width="20px" height="20px" viewBox="0 0 20 20">
            <polygon stroke="currentColor" fill="currentColor" points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"/>
        </svg>
    )
}

// export
export default icon
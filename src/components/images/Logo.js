////////////////////////////////////////////////////////////////////////////////
// FILE: logo.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-18
// MODIFIED: 2020-09-04
// PURPOSE: In Control of Effects project logo
// DEPENDENCIES: React
// STATUS: working
// COMMENTS: Returns project logo
////////////////////////////////////////////////////////////////////////////////
import React from "react"
function logo() {
    return (
        <p className="logo">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="logo-icon" width="45" height="44" viewBox="0 0 45 44" aria-hidden="true">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <circle fill="#4655A8" cx="15" cy="15" r="15"></circle>
                    <circle fill="#C7CCE4" cx="30" cy="29" r="15"></circle>
                </g>
            </svg>
            In Control of Effects
        </p>
    )
}
export default logo
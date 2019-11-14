////////////////////////////////////////////////////////////////////////////////
// FILE: icon-chevron-right-filled.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-27
// MODIFIED: 2019-11-14
// PURPOSE: svg icon made into a componet
// DEPENDENCIES: react
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
function icon(props){
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={props.css ? props.css : null} width="50px" height="50px" viewBox="0 0 50 50">
            <title>icon-chevron-right-filled</title>
            <desc>an icon facing left</desc>
            <g id="icon-chevron-right-filled">
                <path d="M9.13602134,19.8640447 L40.1781563,19.8640447 C40.730441,19.8640447 41.1781563,20.3117599 41.1781563,20.8640447 C41.1781563,21.1797513 41.0290717,21.4769179 40.7759964,21.66566 L25.7980655,32.8361132 C25.7704937,32.8566761 25.7418794,32.8758027 25.7123367,32.8934169 C25.5723927,32.9768553 25.4477534,33.0360265 25.3384188,33.0709303 C25.216665,33.1097987 25.0294175,33.1455407 24.7766762,33.1781563 C24.5274992,33.1446863 24.3411966,33.1089443 24.2177686,33.0709303 C24.1108512,33.0380013 23.9812479,32.9818503 23.8289587,32.9024773 L23.8289589,32.902477 C23.7834415,32.8787534 23.7398183,32.8515605 23.6984759,32.8211394 L8.5433489,21.6694883 C8.09851469,21.3421643 8.00325379,20.7162065 8.33057774,20.2713723 C8.51903062,20.0152642 8.81804995,19.8640447 9.13602134,19.8640447 Z" id="Rectangle" fill="currentColor" stroke="currentColor" transform="translate(24.657056, 26.521100) rotate(-90.000000) translate(-24.657056, -26.521100) "></path>
            </g>
        </svg>
    )
}

// export
export default icon
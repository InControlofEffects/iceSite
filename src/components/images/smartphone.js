////////////////////////////////////////////////////////////////////////////////
// FILE: smartphone.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-29
// MODIFIED: 2019-11-14
// PURPOSE: react component for smartphone svg
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
function smartphone(props) {
    return (
        <svg className={props.className ? props.className : null} width="250px" height="215px" viewBox="0 0 250 215" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <title>smartphone</title>
            <desc>Created with Sketch.</desc>
            <g id="smartphone" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path d="M109.044646,189 C141.257272,189 149.527558,176.155607 172.910804,165.718863 C204.414316,151.657766 245.951711,136.580616 245.951711,112.251663 C245.951711,93.6173378 247.831751,51.4573993 228.130321,38.1629082 C203.017502,21.2168217 171.190433,39.6567079 128.819479,39.6567079 C123.693212,39.6567079 88.9449172,42.0525214 85.1654931,43.1353052 C62.1758063,49.7217214 60.2232739,63.9397456 45.5325501,77.175 C27.0159494,93.8570863 3,100.565883 3,122.598687 C3,164.985624 33.4329618,189 109.044646,189 Z" id="Oval" fill="#D4D7F7"></path>
                <g id="phone" transform="translate(68.000000, 9.000000)">
                    <g id="frame" transform="translate(0.832669, 0.000000)">
                        <rect id="outer-frame" fill="#191847" x="0" y="0" width="113" height="198" rx="12"></rect>
                        <rect id="inner-frame" stroke="#191847" fill="#FFFFFF" x="2.80745342" y="12.9461538" width="108.086957" height="166.776923" rx="8"></rect>
                        <rect id="top-speaker" fill="#D1CECE" x="37.805548" y="4.56923077" width="38.5325778" height="3.80769231" rx="1.90384615"></rect>
                        <rect id="bottom-button" fill="#D1CECE" x="51.6191136" y="183.530769" width="10.9054465" height="8.37692308" rx="2"></rect>
                    </g>
                    <g id="body" transform="translate(16.000000, 38.000000)">
                        <rect id="text-5th" fill="#D1CECE" x="0" y="106.75" width="84" height="15.25" rx="2"></rect>
                        <rect id="text-4th" fill="#D1CECE" x="0" y="80.825" width="84" height="15.25" rx="2"></rect>
                        <rect id="text-3rd" fill="#D1CECE" x="0" y="53.375" width="84" height="15.25" rx="2"></rect>
                        <rect id="text-2nd" fill="#D1CECE" x="0" y="25.925" width="84" height="15.25" rx="2"></rect>
                        <rect id="text-1st" fill="#D1CECE" x="0" y="-1.0658141e-14" width="84" height="15.25" rx="2"></rect>
                        <g id="checkmark" transform="translate(12.167331, 31.000000)">
                            <ellipse id="Oval" fill="#A1ABD8" cx="30" cy="29.7077922" rx="30" ry="29.7077922"></ellipse>
                            <path d="M17.4,30.5053557 C19.8647186,38.3087308 21.7617453,47.4659618 25.2584313,43.9377246 C29.5313029,39.6262979 31.2,36.5432734 45.3628212,14.8538961" id="Path" stroke="#FFFFFF" strokeWidth="8"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}
export default smartphone
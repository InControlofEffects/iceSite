////////////////////////////////////////////////////////////////////////////////
// FILE: Logo.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-09-11
// PURPOSE: react component for logo
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
const logo = (props) => {
    const css = props.css ? `logo ${props.css}` : "logo";
    return (
        <svg className={css} width="45px" height="44px" viewBox="0 0 45 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>In Control of Effects</title>
            <desc>logo for the in control of effects project</desc>
            <g id="Logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Custom-Preset-2" transform="translate(-3.000000, -3.000000)">
                    <g id="Group" transform="translate(3.000000, 3.000000)">
                        <circle id="Oval" fill="#4655A8" cx="15" cy="15" r="15"></circle>
                        <circle id="Oval" fill="#C7CCE4" cx="30" cy="29" r="15"></circle>
                    </g>
                </g>
            </g>
        </svg>
    )
}
export default logo
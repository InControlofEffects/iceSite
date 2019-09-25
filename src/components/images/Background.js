////////////////////////////////////////////////////////////////////////////////
// FILE: Background.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-09-25
// PURPOSE: react component for background svg image
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
const background = (props) => {

    const colors = {
        brandDefault: "#4655A8",
        brandAccent: "#C7CCE4" //#A5A8E5"
    }
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={ props.className ? `logo-background ${ props.className }` : "logo-background" } width="1024px" height="209px" viewBox="0 0 1024 209">
            <title>Wavy background</title>
            <desc>in control of effects background</desc>
            <g id="Start-Page-(pre-app-screen)" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Desktop" transform="translate(0.000000, -1281.000000)">
                    <g id="Footer" transform="translate(0.000000, 1281.000000)">
                        <g id="Group" transform="translate(0.000000, -0.000000)">
                            <path d="M0,78.5082811 C152.605784,87.3770835 368.22137,75.9920631 646.846759,44.35322 C872.877779,18.686643 997.747402,-4.17729328 1023.95113,0.648235887 C1024.06109,0.668485968 1023.95113,3.28593679 1023.95113,5.07867854 C1023.95113,19.3364807 1023.95113,41.9589873 1023.95113,78.5082811 C1023.95113,142.250498 1023.95113,174.583832 1023.95113,175.508281 L0,175.508281 L0,78.5082811 Z" id="wave-top-color" fill={ props.waveTopColor ? props.waveTopColor : colors.brandAccent } />
                            <path d="M0,112.261562 C152.607488,121.130364 368.225483,109.745344 646.853983,78.1065006 C880.234079,51.6057075 1003.14034,27.3927595 1023.96256,34.2146851 C1024.03784,34.2393473 1023.97908,34.228945 1023.96256,34.2443085 C1023.95041,34.2556118 1023.95041,34.8801773 1023.96256,36.118005 C1023.96256,36.7620224 1023.96256,38.1608031 1023.96256,38.8319591 C1023.96256,53.0897612 1023.96256,75.7122679 1023.96256,112.261562 C1023.96256,176.003779 1023.96256,208.337112 1023.96256,209.261562 L0,209.261562 L0,112.261562 Z" id="wave-bottom-color" fill= { props.waveBottomColor ? props.waveBottomColor : colors.brandDefault } />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}
export default background
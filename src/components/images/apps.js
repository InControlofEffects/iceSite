////////////////////////////////////////////////////////////////////////////////
// FILE: apps.js
// AUTHOR: David Ruvolo
// CREATED: 2019-10-04
// MODIFIED: 2019-11-14
// PURPOSE: react component for app.svg
// DEPENDENCIES: react
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
function apps(props) {
    return (
        <svg className={props.className ? props.className : null} width="325px" height="300px" viewBox="0 0 325 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <title>apps</title>
            <desc>Created with Sketch.</desc>
            <g id="apps" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path d="M37.5779888,112.734313 C-110.950883,224.697741 297.09627,267.822827 287.84482,133.500434 C278.701995,0.755178477 97.5989366,-49.344084 43.833615,107.147691 L37.5779888,112.734313 Z" id="path" fillOpacity="0.8" fill="#4556A8" transform="translate(146.500000, 113.500000) scale(-1, -1) translate(-146.500000, -113.500000) "></path>
                <path d="M301.606045,162.561622 C289.821551,151.097521 256.026648,145.234267 240.472034,127 C218.524824,101.27186 213.277806,63.6908066 187,62 C162.237632,60.406702 134,127 111.254378,132 C82.573348,138.304736 51.7765118,171.177295 42.7681317,209.625 C33.6369539,248.596805 113.711182,230.851239 138.59322,241.52 C168.038212,254.145235 213.686816,285.023553 249.101695,279.663406 C307.908056,270.76289 352.629117,204.019401 298.455706,159.871782" id="path" fill="#C7CAE5"></path>
                <g id="computer" transform="translate(49.000000, 53.000000)">
                    <g id="frame">
                        <path d="M106.825736,130.991453 L119.27491,130.991453 C120.245547,130.991453 121.183071,131.344391 121.91274,131.984485 L143.581341,150.993033 C145.242043,152.449866 145.407311,154.977128 143.950478,156.63783 C143.190993,157.503598 142.095193,158 140.943511,158 L85.0836032,158 C82.8744642,158 81.0836032,156.209139 81.0836032,154 C81.0836032,152.845974 81.5820199,151.748181 82.4508259,150.988608 L104.192958,131.980061 C104.92196,131.342715 105.857411,130.991453 106.825736,130.991453 Z" id="base" fill="#191847"></path>
                        <rect id="outer-frame" fill="#191847" x="0" y="0" width="226" height="139.094017" rx="7"></rect>
                        <rect id="inner-frame" stroke="#191847" fill="#FFFFFF" x="1.88284301" y="9.09460881" width="222.705024" height="117.159961" rx="3"></rect>
                    </g>
                    <g id="body" transform="translate(34.000000, 38.000000)">
                        <rect id="text-3rd" fill="#D1CECE" x="0" y="48.5217391" width="73.220339" height="13.4782609" rx="2"></rect>
                        <rect id="text-3rd-copy" fill="#D1CECE" x="86.779661" y="48.5217391" width="73.220339" height="13.4782609" rx="2"></rect>
                        <rect id="text-2nd" fill="#D1CECE" x="0" y="22.9130435" width="73.220339" height="13.4782609" rx="2"></rect>
                        <rect id="text-2nd-copy" fill="#D1CECE" x="86.779661" y="22.9130435" width="73.220339" height="13.4782609" rx="2"></rect>
                        <rect id="text-1st" fill="#D1CECE" x="0" y="0" width="73.220339" height="13.4782609" rx="2"></rect>
                        <rect id="text-1st-copy" fill="#D1CECE" x="86.779661" y="0" width="73.220339" height="13.4782609" rx="2"></rect>
                        <g id="checkmark" transform="translate(55.593220, 4.043478)">
                            <ellipse id="Oval" fill="#A1ABD8" cx="25.7627119" cy="26.9127612" rx="25.7627119" ry="26.9127612"></ellipse>
                            <path d="M14.9423729,27.6352866 C17.0589674,34.7044881 18.6880525,43.0001693 21.6908562,39.803883 C25.3602149,35.8980931 26.7932203,33.1051323 38.9556431,13.4563806" id="Path" stroke="#FFFFFF" strokeWidth="4"></path>
                        </g>
                    </g>
                </g>
                <g id="tablet" transform="translate(162.000000, 158.000000)">
                    <g id="frame">
                        <rect id="outer-frame" fill="#191847" x="0" y="0" width="139" height="87" rx="7"></rect>
                        <rect id="inner-frame" stroke="#191847" fill="#FFFFFF" x="6.99371069" y="3.48" width="125.012579" height="80.04" rx="3"></rect>
                        <path d="M129.816272,38.2738633 L141.190018,38.2738633 C141.893146,38.2738633 142.463145,38.8438617 142.463145,39.5469903 C142.463145,40.2501189 141.893146,40.8201172 141.190018,40.8201172 L129.816272,40.8201172 C129.113143,40.8201172 128.543145,40.2501189 128.543145,39.5469903 C128.543145,38.8438617 129.113143,38.2738633 129.816272,38.2738633 Z" id="button" fill="#D1CECE" transform="translate(135.503145, 39.546990) rotate(90.000000) translate(-135.503145, -39.546990) "></path>
                        <path d="M2.45776447,41.7524151 L3.42569465,41.7524151 C4.2947616,41.7524151 4.99927956,42.4569331 4.99927956,43.326 C4.99927956,44.1950669 4.2947616,44.8995849 3.42569465,44.8995849 L2.45776447,44.8995849 C1.58869752,44.8995849 0.88417956,44.1950669 0.88417956,43.326 C0.88417956,42.4569331 1.58869752,41.7524151 2.45776447,41.7524151 Z" id="button-copy" fill="#D1CECE" transform="translate(2.941730, 43.326000) rotate(90.000000) translate(-2.941730, -43.326000) "></path>
                    </g>
                    <g id="body" transform="translate(19.000000, 24.000000)">
                        <rect id="text-3rd" fill="#D1CECE" x="0" y="30.5217391" width="45.7627119" height="8.47826087" rx="2"></rect>
                        <rect id="text-3rd-copy" fill="#D1CECE" x="54.2372881" y="30.5217391" width="45.7627119" height="8.47826087" rx="2"></rect>
                        <rect id="text-2nd" fill="#D1CECE" x="0" y="14.4130435" width="45.7627119" height="8.47826087" rx="2"></rect>
                        <rect id="text-2nd-copy" fill="#D1CECE" x="54.2372881" y="14.4130435" width="45.7627119" height="8.47826087" rx="2"></rect>
                        <rect id="text-1st" fill="#D1CECE" x="0" y="0" width="45.7627119" height="8.47826087" rx="2"></rect>
                        <rect id="text-1st-copy" fill="#D1CECE" x="54.2372881" y="0" width="45.7627119" height="8.47826087" rx="2"></rect>
                        <g id="checkmark" transform="translate(34.745763, 2.543478)">
                            <ellipse id="Oval" fill="#A1ABD8" cx="16.1016949" cy="16.9289949" rx="16.1016949" ry="16.9289949"></ellipse>
                            <path d="M9.33898305,17.3834867 C10.6618546,21.8302425 11.6800328,27.0484936 13.5567852,25.0379264 C15.8501343,22.5810586 16.7457627,20.8241961 24.3472769,8.46449746" id="Path" stroke="#FFFFFF" strokeWidth="3"></path>
                        </g>
                    </g>
                </g>
                <g id="phone" transform="translate(61.000000, 150.000000)">
                    <g id="frame">
                        <rect id="outer-frame" fill="#191847" x="0" y="0" width="41" height="71" rx="4"></rect>
                        <rect id="inner-frame" stroke="#191847" fill="#FFFFFF" x="1.01863354" y="4.64230769" width="39.2173913" height="59.8038462" rx="3"></rect>
                        <rect id="top-speaker" fill="#D1CECE" x="13.7170572" y="1.63846154" width="13.9808468" height="1.36538462" rx="0.682692308"></rect>
                        <rect id="bottom-button" fill="#D1CECE" x="18.7290589" y="65.8115385" width="3.95684343" height="3.00384615" rx="1.50192308"></rect>
                    </g>
                    <g id="body" transform="translate(6.000000, 14.000000)">
                        <rect id="text-5th" fill="#D1CECE" x="0" y="37.625" width="30" height="5.375" rx="2"></rect>
                        <rect id="text-4th" fill="#D1CECE" x="0" y="28.4875" width="30" height="5.375" rx="2"></rect>
                        <rect id="text-3rd" fill="#D1CECE" x="0" y="18.8125" width="30" height="5.375" rx="2"></rect>
                        <rect id="text-2nd" fill="#D1CECE" x="0" y="9.1375" width="30" height="5.375" rx="2"></rect>
                        <rect id="text-1st" fill="#D1CECE" x="0" y="-1.0658141e-14" width="30" height="5.375" rx="2"></rect>
                        <g id="checkmark" transform="translate(4.345475, 10.926230)">
                            <ellipse id="Oval" fill="#A1ABD8" cx="10.7142857" cy="10.4707792" rx="10.7142857" ry="10.4707792"></ellipse>
                            <path d="M6.21428571,10.7518877 C7.09454236,13.5022576 7.77205191,16.7298062 9.02086832,15.4862472 C10.5468939,13.966646 11.1428571,12.8800062 16.2010076,5.23538961" id="Path" stroke="#FFFFFF" strokeWidth="2"></path>
                        </g>
                    </g>
                </g>
                {/* <path d="M301.056053,40 C294.80664,42.2520074 289.515196,48.1948574 285,61.664596" id="accent" strokeOpacity="0.5" stroke="#C7CAE5" strokeWidth="3" transform="translate(293.028026, 50.832298) scale(-1, 1) rotate(-15.000000) translate(-293.028026, -50.832298) "></path>
                <path d="M308.056053,32 C301.80664,34.2520074 296.515196,40.1948574 292,53.664596" id="accent" strokeOpacity="0.5" stroke="#C7CAE5" strokeWidth="3" transform="translate(300.028026, 42.832298) scale(-1, 1) rotate(-15.000000) translate(-300.028026, -42.832298) "></path>
                <path d="M47.9921354,234.422962 C41.7427224,236.674969 36.4512784,242.617819 31.9360828,256.087558" id="accent" strokeOpacity="0.5" stroke="#6A78B9" strokeWidth="3" transform="translate(39.964109, 245.255260) scale(1, -1) rotate(26.000000) translate(-39.964109, -245.255260) "></path>
                <path d="M51.9921354,225.422962 C45.7427224,227.674969 40.4512784,233.617819 35.9360828,247.087558" id="accent" strokeOpacity="0.5" stroke="#6A78B9" strokeWidth="3" transform="translate(43.964109, 236.255260) scale(1, -1) rotate(26.000000) translate(-43.964109, -236.255260) "></path> */}
            </g>
        </svg>
    )
}
export default apps
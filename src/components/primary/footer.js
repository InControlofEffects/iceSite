////////////////////////////////////////////////////////////////////////////////
// FILE: footer.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2020-09-04
// PURPOSE: footer page
// DEPENDENCIES: React; Nav; Logo
// STATUS: working
// COMMENTS: Generates the page footer using and navigation links. 
// Navigation data (paths and page names) must be passed down from the
// parent component (i.e., app.js) as a JSON object. See nav.js for more info. 
//
// ARGUMENTS
// @param linksData a JSON object containing the application pages and paths
//
////////////////////////////////////////////////////////////////////////////////
import React from "react"
import Nav from "./nav"
import Logo from "../images/Logo"

// define
function footer(props){
    return (
        <footer className="footer" >
            <Logo />
            <Nav linksData={props.linksData} />
        </footer>
    )
}
export default footer
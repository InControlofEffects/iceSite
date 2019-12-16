////////////////////////////////////////////////////////////////////////////////
// FILE: footer.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-11-14
// PURPOSE: footer page
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import Nav from "./nav"
import "../styles/_footer.scss"
import Logo from "../images/Logo"

// define
function footer(props){
    return (
        <footer className="footer" >
            <div className="footer-content">
                <Logo fontSize={18} />
                <Nav isHeader={false} />
            </div>
        </footer>
    )
}
export default footer
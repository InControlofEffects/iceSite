////////////////////////////////////////////////////////////////////////////////
// FILE: footer.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-09-25
// PURPOSE: footer page
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import Nav from "./nav"
import "../styles/footer.css"
import Logo from "../images/Logo"

const footer = () => {
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
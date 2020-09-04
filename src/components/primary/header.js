////////////////////////////////////////////////////////////////////////////////
// FILE: header.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2020-09-04
// PURPOSE: react component for page header
// DEPENDENCIES: React
// STATUS: working
// COMMENTS: The header component is designed to generate the navbar for the
// site. Navigation data (paths and page names) must be passed down from the
// parent component (i.e., app.js) as a JSON object. See nav.js for more info.
//
// ARGUMENTS
// @param linksData a JSON object containing the application pages and paths
// @param value a state variable that manages the menu opening/closing
// @param onChange a function that updates from the child component. In the
//          parent component, this component should have the property `onChange`
//          where the event is a handler that updates the value in the parent
//
////////////////////////////////////////////////////////////////////////////////
import React from "react"
import Nav from "./nav"
import Logo from "../images/Logo"

function Header(props) {

    // update reactive value in parent
    function handleOpenStatus(e) {
        props.onChange(!props.value);
    }

    return (
        <nav className={`navbar ${props.className ? props.className : ""}`} >
            <Logo />
            <Nav
                isHeader={true}
                linksData={props.linksData}
                state={props.value}
            />
            <ul className="menu menubtns">
                <li className="menu-item menu-toggle">
                    <button
                        id="menuBtn"
                        className="btn"
                        onClick={handleOpenStatus}
                        value={props.value}
                        aria-expanded={props.value}
                    >
                        <span className="menu-icon">
                            <span className="menu-bar"></span>
                            <span className="menu-bar"></span>
                            <span className="menu-bar"></span>
                        </span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

// export
export default Header
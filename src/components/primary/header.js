////////////////////////////////////////////////////////////////////////////////
// FILE: header.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-12-16
// PURPOSE: react component for page header
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import Nav from "./nav"
import "../styles/_nav.scss"
import Logo from "../images/Logo"

// define header
class header extends React.Component {


    // constructor
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    // open and close menu based on button click:
    // additionally, transform button icon through toggling
    // css classes
    toggleMenu() {

        // toggle sidebar and toggle button classes
        const toggle = document.getElementById("menuBtn");
        const menu = document.querySelector(".menu.navlinks");
        toggle.classList.toggle("open");
        
        // update aria attributes
        if (toggle.getAttribute("aria-expanded") === "false") {
            toggle.setAttribute("aria-expanded", true);
            menu.setAttribute("hidden", false);
            menu.classList.add("expanded");
        } else {
            toggle.setAttribute("aria-expanded", false);
            menu.setAttribute("hidden", true);
            menu.classList.remove("expanded");
        }

    }

    ////////////////////////////////////////////////////////////////////////////////
    
    // render component
    render() {

        // process props
        const css = this.props.className ? `navbar ${this.props.className}` : 'navbar';

        // return
        return (
            <nav className={css} >
                <Logo />
                <Nav isHeader={true}/>
                <ul className="menu menubtns" aria-label="open and close menu">
                    <li className="menu-item menu-toggle">
                        <button id="menuBtn" className="btn" onClick={this.toggleMenu} aria-label="open and close menu" aria-expanded="false">
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
}

// export
export default header

////////////////////////////////////////////////////////////////////////////////
// FILE: header.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-09-25
// PURPOSE: react component for page header
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import Nav from "./nav"
import "../styles/header.css"
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

        // open/close menu
        const submenu = document.querySelector(".menu.navlinks");
        submenu.classList.toggle("expanded");

        // transform icon
        const btn = document.getElementById("toggle");
        const first_bar = btn.querySelector(".menu-bar:nth-child(1)");
        const second_bar = btn.querySelector(".menu-bar:nth-child(2)");
        const third_bar = btn.querySelector(".menu-bar:nth-child(3)");
        first_bar.classList.toggle("hidden");
        second_bar.classList.toggle("topBar");
        third_bar.classList.toggle("bottomBar");

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
                        <button id="toggle" className="btn" onClick={this.toggleMenu} aria-label="open and close menu">
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

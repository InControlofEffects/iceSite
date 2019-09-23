////////////////////////////////////////////////////////////////////////////////
// FILE: main.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-09-11
// PURPOSE: react component for main
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React, { Component } from "react"
import "../styles/page.css"

class main extends Component {

    constructor(props){
        super(props);
        this.__highlightLink = this.__highlightLink.bind(this);
        this.__scrollToTop = this.__scrollToTop.bind(this);
        this.__closeMenu = this.__closeMenu.bind(this);
        this.__closeMenuOnResize = this.__closeMenuOnResize.bind(this);
    }

    ////////////////////////////////////////
    
    // apply link highlighting to current page
    __highlightLink() {
        
        // get all navigation elements
        const pageTitle = this.props.title.toLowerCase();
        const links = document.querySelectorAll(".navlinks .menu-item .menu-link");
        let page;

        // remove any existing selected links
        links.forEach(function(link){link.classList.remove("selected")});

        // add link selected to current page
        links.forEach(function(link){
            page = link.getAttribute("data-live-page");
            if(page === pageTitle){
                link.classList.add("selected");
            }
        })
    }

    // scroll to top 
    // a simple function that scrolls to the top of the page
    __scrollToTop(){
        window.scrollTo(0,0);
    }


    // close menu function - this is a standard function for closing 
    // all expanded menu items
    __closeMenu(){
        // find button elements + menus
        const btn = document.getElementById("toggle");
        const first_bar = btn.querySelector(".menu-bar:nth-child(1)");
        const second_bar = btn.querySelector(".menu-bar:nth-child(2)");
        const third_bar = btn.querySelector(".menu-bar:nth-child(3)");
        const menu = document.querySelectorAll(".menu");
        let classes, openClass = "expanded";

        // close menu and un-rotate button only if a menu is open
        menu.forEach(function(m){

            // assign classes to tmp object
            classes = Array.from(m.classList);

            // evaluate classes
            if( classes.indexOf(openClass) > -1 ){

                // close menu
                m.classList.remove(openClass);

                // close button
                first_bar.classList.remove("hidden");
                second_bar.classList.remove("topBar");
                third_bar.classList.remove("bottomBar");
            }
        });
    }

    // close menu if window rezised past the break point. You will need to check
    // the file: styles/header.css for the breakpoint. If it is modified, the change
    // will need to be reflected here.
    __closeMenuOnResize(){
        let breakpoint = 862;
        let width = window.innerWidth;
        if(width >= breakpoint) {
            this.__closeMenu();
        }

    }

    ////////////////////////////////////////
    
    // lifecycle: run all functions 
    componentDidMount(){

        // page defaults - 
        // 1) scroll to top of page, 2) close menu if open, 3) link highlighting
        this.__scrollToTop();
        this.__closeMenu();
        this.__highlightLink();

        // if menu is opened and window is resized and the width is more than
        // the breakpoint defined in header.css, then close the menu (i.e., remove
        // the css class "expanded")
        window.addEventListener("resize", this.__closeMenuOnResize)
    }

    // lifecycle: will unmount
    componentWillUnmount(){
        window.removeEventListener("resize", this.__closeMenuOnResize)
    }

    ////////////////////////////////////////
    render (){
        const metaTitle = this.props.title ? `In Control of Effects | ${this.props.title}` : "In Control of Effects";
        document.title = metaTitle;
        return (
            <main id="main" className="main" aria-label="main content">
                {this.props.children}
            </main>
        )
    }
}
export default main
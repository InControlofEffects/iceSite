////////////////////////////////////////////////////////////////////////////////
// FILE: main.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-12-16
// PURPOSE: react component for main
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React, { Component } from "react"
import ReactGA from "react-ga"
ReactGA.initialize("UA-76117337-8");
ReactGA.pageview(window.location.pathname);
import "../styles/_page.scss"

// build component
class main extends Component {

    constructor(props){
        super(props);
        this.__highlightLink = this.__highlightLink.bind(this);
        this.__scrollToTop = this.__scrollToTop.bind(this);
        this.__closeMenu = this.__closeMenu.bind(this);
        this.__closeMenuOnResize = this.__closeMenuOnResize.bind(this);
        this.__onScroll = this.__onScroll.bind(this);
    }
    
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
                btn.classList.remove("open");
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


    // define onScroll function
    __onScroll() {
        const scrollBreakPoint = 50;
        if (window.scrollY > scrollBreakPoint) {
            document.querySelector(".navbar").classList.remove("navbar-transparent");
        }
        if (window.scrollY < scrollBreakPoint) {
            document.querySelector(".navbar").classList.add("navbar-transparent");
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

        // lifecycle - add blended background class for navbar
        if( this.props.transparentNavbar ){
            const el = document.querySelector(".navbar");
            el.classList.add("navbar-transparent");
            window.addEventListener("scroll", this.__onScroll);
        }
    }

    // lifecycle: will unmount
    componentWillUnmount(){

        // remove resizing listener
        window.removeEventListener("resize", this.__closeMenuOnResize);

        // lifecycle - remove blended classes when unmounting
        if( this.props.transparentNavbar ){
            const el = document.querySelector(".navbar");
            el.classList.remove("navbar-transparent");
            window.removeEventListener("scroll", this.__onScroll);
        }

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
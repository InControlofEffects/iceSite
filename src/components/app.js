////////////////////////////////////////////////////////////////////////////////
// FILE: app.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-09-11
// PURPOSE: main layout for react application
// DEPENDENCIES: see below
// STATUS: in.progrogress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

// init analytics
import ReactGA from "react-ga"
ReactGA.initialize("UA-76117337-8");
ReactGA.pageview(window.location.pathname);

// import parts and pages
import Header from "./primary/header"
import Footer from "./primary/footer"
import Home from "../pages/home/home"
import About from "../pages/about/about"
import Faq from "../pages/faq/faq"
import Start from "../pages/start/start"
import "./styles/base.css"

// build app
const app = () => {
    return (
        <BrowserRouter>
            <a className="screen-reader-text" href="#main">Go to main content</a> 
            <Header />
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/faq" component={ Faq } />
            <Route path="/start" component={ Start } />
            <Footer />
        </BrowserRouter>
    )
}

// export
export default app
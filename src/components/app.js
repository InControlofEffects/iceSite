////////////////////////////////////////////////////////////////////////////////
// FILE: app.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2020-09-27
// PURPOSE: main layout for react application
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader/root";

// import parts and pages
import Header from "./primary/header"
import Footer from "./primary/footer"
import Home from "../pages/index"
import Faq from "../pages/faq"
import Start from "../pages/start"
import errorPage from "../pages/404"

// SASS
import "./styles/index.scss"

// import navigation
import navdata from "./nav.json"

// import hooks
import useWindowSize from "./hooks/useWindowSize"

// build app
function App(props) {

    // set window size and menu toggle
    const [isOpen, setOpenStatus] = useState(false);
    const windowSize = useWindowSize();
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }

        if (isOpen && windowSize.width >= 862) {
            setOpenStatus(false)
        }

        window.addEventListener("DOMContentLoaded", () => {
            const livepage = document.querySelector(`.navigation a[href='${document.location.pathname}'`)
            livepage.classList.add("selected");
        }, {once: true})
    })

    function handleOpenStatus (value) {
        setOpenStatus(value);
    }


    return (
        <BrowserRouter>
            <a className="visually-hidden" href="#main">Go to main content</a>
            <Header 
                value={isOpen}
                onChange={handleOpenStatus} 
                linksData = {navdata}
            />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/faq" component={Faq} />
                <Route path="/start" component={Start} />
                <Route component={errorPage} />
            </Switch>
            <Footer linksData={navdata} />
        </BrowserRouter>
    )
}

// export
export default hot(App)
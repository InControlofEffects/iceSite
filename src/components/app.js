////////////////////////////////////////////////////////////////////////////////
// FILE: app.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-12-13
// PURPOSE: main layout for react application
// DEPENDENCIES: see below
// STATUS: in.progrogress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// import parts and pages
import Header from "./primary/header"
import Footer from "./primary/footer"
import Home from "../pages/index"
import Faq from "../pages/faq"
import Start from "../pages/start"
import errorPage from "../pages/404"
import "./styles/index.scss"

// build app
function app() {
    return (
        <BrowserRouter>
            <a className="screen-reader-text" href="#main">Go to main content</a>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/faq" component={Faq} />
                <Route path="/start" component={Start} />
                <Route component={errorPage} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

// export
export default app
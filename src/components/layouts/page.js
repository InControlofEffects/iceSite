////////////////////////////////////////////////////////////////////////////////
// FILE: main.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2020-09-04
// PURPOSE: functional layout component for application "pages"
// DEPENDENCIES: see below
// STATUS: working
// COMMENTS: Primary layout component for creating new pages. Create a new JS
// file in `pages/` and add a link entry in `nav.json`. Import the `<Page>`
// component and define the content inside the tags. Use the prop `title` to
// set the document.title
//
// Arguments
// @param title a string used to set the document title
//
// If `title` is missing, the default title will be used ("In Control of
// Effects"). Otherwise, the title will be appended to the base string (i.e.,
// the default title).
///
////////////////////////////////////////////////////////////////////////////////
import React from "react"
import ReactGA from "react-ga"
ReactGA.initialize("UA-76117337-8");
ReactGA.pageview(window.location.pathname);

function Page(props) {
    const metaTitle = props.title ? `In Control of Effects | ${props.title}` : "In Control of Effects";
    document.title = metaTitle;
    return (
        <main id="main" className={`page ${props.className ? props.className : ""}`}>
            {props.children}
        </main>
    )
}

export default Page
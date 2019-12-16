////////////////////////////////////////////////////////////////////////////////
// FILE: 404.js
// AUTHOR: David Ruvolo
// CREATED: 2019-12-13
// MODIFIED: 2019-12-13
// PURPOSE: 404 error page
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import Page from "../components/layouts/page"
import Header from "../components/layouts/header"
import Section from "../components/layouts/section"
import Nav from "../components/primary/nav"

function errorPage() {
    return (
        <Page title="404">
            <Header>
                <h1>Page not found</h1>
                <p>The page does not exist</p>
            </Header>
            <Section id="sitemap">
                <h2>Site Map</h2>
                <p>Here is a list of the current pages.</p>
                <Nav />
            </Section>
        </Page>
    )
}

export default errorPage
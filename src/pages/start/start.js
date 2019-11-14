////////////////////////////////////////////////////////////////////////////////
// FILE: index.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-11-14
// PURPOSE: react component for start page
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

import React from "react"
import { Link } from "react-router-dom"

// import components
import Page from "../../components/layouts/page"
import Document from "../../components/layouts/doc"
import Header from "../../components/layouts/doc-header"
import Section from "../../components/layouts/doc-section"
import AppsImage from "../../components/images/apps"

// build page
function start(){
    return (
        <Page title="Start">
            <Document id="start-page">
                <Header>
                    <AppsImage style={{display: "block", margin: "0 auto"}} />
                    <h1 style={{textAlign: "center"}}>Let's get started</h1>
                </Header>
                <Section description="instructions" id="instructionsBlock">
                    <h2>Before you begin, let's go over a few things</h2>
                    <p>To use the app, there are three steps.</p>
                    <ol>
                        <li><strong>Select side effects</strong>: Select the side effects that you definitely do not want or the side effects that you would like to avoid.</li>
                        <li><strong>Review the results</strong>: The results page will display two lists of medications. You can click on a medication name to learn more about it.</li>
                        <li><strong>Discuss the results with your psychiatrist</strong>: Before you quit, take note of the side effects that you want to avoid and the results that were returned.</li>
                    </ol>
                    <p>There is no timelimit for using the app so take your time reviewing the information. If you have any questions about using the app, checkout the <Link to="/faq">FAQ</Link> page.</p>
                    <h2>Disclaimer</h2>
                    <p>The In Control of Effects app is an experimental tool designed to start the discussion about side effects between you and your psychiatrist. It is not designed to replace medical treatment.</p>
                    <p>Even though this app takes into account your preferences for side effects, this app does not take into account individual patient characteristics, pre-existing medical conditions, or any current medical treatment or medications you may already be taking. These are important and should be taken into consideration before any recommendation is made.</p> 
                    <p>Any information produced by this tool should be discussed with your psychiatrist.</p>
                    <blockquote className="warning">
                        If you are concerned about side effects or anything else related to your medical care, consult your healthcare provider.
                    </blockquote>
                    <h2>Get started</h2>
                    <p>When you are ready to begin, press the start button below.</p>
                    <a href="/app/" className="btn btn-primary" id="launchApp" style={{ display: "block", width: "300px", margin: "0 auto" }}>Start</a>
                </Section>
            </Document>
        </Page>
    )
}
export default start
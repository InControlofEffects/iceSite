////////////////////////////////////////////////////////////////////////////////
// FILE: index.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2020-09-07
// PURPOSE: react component for start page
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////

import React from "react"
import { Link } from "react-router-dom"
import MobilePhonePhoto from "../components/images/yura-fresh-xezXEh_fIeU-unsplash.jpg"

// build page
function start() {
    return (
        <main id="main" className="page start-page">
            <header id="start-hero" className="header header-photo" style={{ backgroundImage: `url(${MobilePhonePhoto})` }}>
                <div className="header-content">
                    <h1>Get Started</h1>
                    <h2>Before you begin, let's go over a few things.</h2>
                </div>
            </header>
            <section id="instructions" className="section" aria-labelledby="lets-go-over-a-few-things">
                <div className="section-content">
                    <h2 id="lets-go-over-a-few-things">How to use this app</h2>
                    <p>To use the app, there are three steps.</p>
                    <ol>
                        <li><strong>Select side effects</strong>: Select the side effects that you definitely do not want or the side effects that you would like to avoid.</li>
                        <li><strong>Review the results</strong>: The results page will display two lists of medications. You can click on a medication name to learn more about it.</li>
                        <li><strong>Discuss the results with your psychiatrist</strong>: Before you quit, take note of the side effects that you want to avoid and the results that were returned.</li>
                    </ol>
                    <p>There is no timelimit for using the app so take your time reviewing the information. If you have any questions about using the app, checkout the <Link to="/faq">FAQ</Link> page.</p>
                    <h2>What this app does not do</h2>
                    <p>The In Control of Effects app is an experimental tool designed to start the discussion about side effects between you and your psychiatrist. It is not designed to replace medical treatment.</p>
                    <p>Even though this app takes into account your preferences for side effects, this app does not take into account individual patient characteristics, pre-existing medical conditions, or any current medical treatment or medications you may already be taking. These are important and should be taken into consideration before any recommendation is made.</p>
                    <p>Any information produced by this tool should be discussed with your psychiatrist.</p>
                    <blockquote className="warning">
                        If you are concerned about side effects or anything else related to your medical care, consult your healthcare provider.
                    </blockquote>
                    <p>When you are ready to begin, click the start button.</p>
                    <a href="/app/" className="btn-link link-primary" id="launchApp">Start</a>
                </div>
            </section>
        </main>
    )
}
export default start
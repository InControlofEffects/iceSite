////////////////////////////////////////////////////////////////////////////////
// FILE: index.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-09-11
// PURPOSE: react component for start page
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

import React from "react"
import ReactMarkdown from "react-markdown"
import { Link } from "react-router-dom"

// import components
import Page from "../../components/layouts/page"
import Document from "../../components/layouts/doc"
import Header from "../../components/layouts/doc-header"
import Section from "../../components/layouts/doc-section"
import GridLayout from "../../components/layouts/grid"
import "./start.css"

// build page
const start = () => {
    return (
        <Page title="Start">
            <Document id="start-page">
                <Header id="start-header" title="Before you begin, let's go over a few things.">
                    <p>This page will provide instructions on what to do in the app. Additional information will also be provided in the app. If you have any remaining questions about the app, visit the <Link to="/about">About</Link> page and the <Link to="/faq">FAQ</Link> page.</p>
                    <p>When you are ready to begin, click the start button located at the end of this page.</p>
                </Header>
                <Section description="instructions" id="instructionsBlock">
                    <h2>How to use the In Control of Effects app</h2>
                    <GridLayout layout="40x60" css="instruction-box">
                        <div className="grid-item-left">
                            <p className="instruction-number" id="step-1">1</p>
                        </div>
                        <div className="grid-item-right">
                            <h3 className="instruction-title"> Signing in to the app</h3>
                            <p>When the app loads, you will be prompted to enter a username and password. Type the  credentials provided by the study coordinator and click sign in. If you encounter any issues signing in to the app, please contact the study coordinator.</p>
                        </div>
                    </GridLayout>
                    <GridLayout layout="40x60" css="instruction-box">
                        <div className="grid-item-left">
                            <p className="instruction-number" id="step-2">2</p>
                        </div>
                        <div className="grid-item-right">
                            <h3 className="instruction-title"> Navigating the app</h3>
                            <p>In the app, use the back and next buttons to navigate the app. The progress bar at the top will give you indication of where you are in the app. Use the restart button located at the top of page, to start from at beginning of app.</p>
                        </div>
                    </GridLayout>
                    <GridLayout layout="40x60" css="instruction-box">
                        <div className="grid-item-left">
                            <p className="instruction-number" id="step-3">3</p>
                        </div>
                        <div className="grid-item-right">
                            <h3 className="instruction-title"> Selecting side effects</h3>
                            <p>When you reach the side effects page, you will be prompted to choose a few side effects. Select the side effects that you definitely do not want or the side effects that you would like to avoid. Tap or click the name of the side effect to select it. Tap or click again to deselect the side effect. Selected side effects will change in color and a checkmark will appear to confirm your selection.</p>
                            <p>You can also read more about each side effect by tapping or clicking the expand button. When you have made and are satisfied with your selections, tap or click the submit button.</p>
                        </div>
                    </GridLayout>
                    <GridLayout layout="40x60" css="instruction-box">
                        <div className="grid-item-left">
                            <p className="instruction-number" id="step-4">4</p>
                        </div>
                        <div className="grid-item-right">
                            <h3 className="instruction-title"> Reading the results</h3>
                            <p>The results page will display two lists of medications. The first is a list of recommended medications meaning that you are less likely to experience the side effects that you selected. The second is list of medications to avoid as you are more likely to experience the side effects that you selected. You can select the name of a medication to learn more.</p>
                            <p>Tap or click the name of a medication to learn more about it. You can return to the side effects screen to make new selections or quit the application.</p>
                            <p>The results are based on the side effects that your selected and pre-existing data. See the <Link to="/faq">FAQ</Link> for more information.</p>
                        </div>
                    </GridLayout>
                    <GridLayout layout="40x60" css="instruction-box">
                        <div className="grid-item-left">
                            <p className="instruction-number" id="step-5">5</p>
                        </div>
                        <div className="grid-item-right">
                            <h3 className="instruction-title">Quiting the app</h3>
                            <p>On the results page, tap or click the quit button to move to the final page. Before you quit the app, take note of the side effects that you selected and the results to discuss with your psychiatrist. This may be useful if there are side effects that you are unaware of or would like to avoid.</p>
                            <p>When you are ready to quit, you many either close the window or tap the quit button.</p>
                        </div>
                    </GridLayout>
                </Section>
                
                <Section description="limitations">
                    <h2>Limitions</h2>
                    <p>Even though this app takes into account your preferences for side effects, this app does not take into account individual patient characteristics, pre-existing medical conditions, or any current medical treatment or medications you may already be taking. These are important and should be taken into consideration before any recommendation is made. Any information produced by this tool should be discussed with your psychiatrist.</p>
                    <blockquote className="warning">
                        If you are concerned about side effects or anything else related to your medical care, consult your healthcare provider.
                    </blockquote>
                </Section>
                <Section description="get started">
                    <h2>Get started</h2>
                    <p>If you have any remaining questions about the app, visit the <Link to="about">About</Link> page and the <Link to="/faq">FAQ</Link> page. When you are ready to begin, press the start button below.</p>
                    <a href="#" className="btn btn-primary" id="launchApp">Start</a>
                </Section>
            </Document>
        </Page>
    )
}

export default start
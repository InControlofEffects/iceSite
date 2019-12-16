////////////////////////////////////////////////////////////////////////////////
// FILE: index.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-12-14
// PURPOSE: react component for "home page"
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import { Link } from "react-router-dom"

// import components
import Page from "../components/layouts/page"
import Header from "../components/layouts/header"
import Section from "../components/layouts/section"
import FlexLayout from "../components/layouts/flex"
import Conversation from "../components/images/conversation"
import AppDisplay from "../components/images/apps"
import Select from "../components/images/undrawSelect"
import FileSearch from "../components/images/undrawFileSearch"
import Doctors from "../components/images/undrawDoctor-2"

// define home page
function home() {
    return (
        <Page title="Home" id="home-page">
            <Header id="home-hero" className="home-hero">
                <AppDisplay className="illustration" />
                <h1>In Control of Effects</h1>
                <h2>A decision aid for the choice of antipsychotics</h2>
            </Header>
            <Section id="howto" className="homepage-section" title="What is the In Control of Effects application?" description="how to use this app">
                <p> The <strong>In Control of Effects</strong> app aims to increase awareness about antipsychotic medications and the risk of side effects. By selecting side effects, you can learn about which medications are more likely or less likely to result in the side effects you may want to avoid.</p>
                <h3 className="text-align-center">Here's how to use the app.</h3>
                <FlexLayout layout="33x3" className="instructions-list">
                    <figure className="flex-child figure">
                        <Select className="illustrations illustration-select" />
                        <figcaption>Select side effects</figcaption>
                        <p>Select the side effects that you want to avoid or the ones that you definitely do not want.</p>
                    </figure>
                    <figure className="flex-child figure">
                        <FileSearch className="illustrations illustration-file-search" />
                        <figcaption>Review the results</figcaption>
                        <p>Learn about the medications and the side effects they may cause. </p>
                    </figure>
                    <figure className="flex-child figure">
                        <Doctors className="illustrations illustration-doctor" />
                        <figcaption>Discuss with your psychiatrist</figcaption>
                        <p>Take note of the results and discuss them with your psychiatrist.</p>
                    </figure>
                </FlexLayout>
            </Section>
            <Section id="start" title="Ready to begin?">
                <p>Click the link below to get started.</p>
                <Link to="/start" className="btn btn-primary">Start</Link>
            </Section>
            <Section id="questions" title="Do you have questions?">
                <FlexLayout layout="60x40" className="questions-grid" wrapReverse={true}>
                    <div>
                        <p>Do you have any questions about the app or are you stuck? Read more on the app on our Frequently Asked Questions page.</p>
                        <Link className="btn btn-primary" to="/faq">Read</Link>
                    </div>
                    <figure className="figure">
                        <Conversation className="illustrations illustration-lg" />
                    </figure>
                </FlexLayout>
            </Section>
        </Page>
    )
}

// export
export default home
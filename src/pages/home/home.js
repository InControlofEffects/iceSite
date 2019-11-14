////////////////////////////////////////////////////////////////////////////////
// FILE: index.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-11-14
// PURPOSE: react component for "home page"
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
import Section from "../../components/layouts/doc-section"
import FlexLayout from "../../components/layouts/flex"
import Hero from "../../components/layouts/hero"
import Conversation from "../../components/images/conversation"
import AppDisplay from "../../components/images/apps"
import Select from "../../components/images/undrawSelect"
import FileSearch from "../../components/images/undrawFileSearch"
import Doctors from "../../components/images/undrawDoctor-2"
import HeaderImage from "../../components/images/georg-nietsch-0IJZuitOZFE-unsplash.jpg"

// define home page
function home(){
    return (
        <Page title="Home" id="home-page" transparentNavbar={true}>
            <Hero
                id="home"
                className="home-hero"
                title="In Control of Effects"
                subtitle="A decision aid for the choice of antipsychotics"
                textColor="white"
                textAlign="left"
                backgroundImage={HeaderImage}
                backgroundColor="rgba(76, 51, 25, 0.2)"
                photoCredit="Photo by Georg Nietsch on Unsplash"
            />
            <Document className="welcome-document">
                <Section className="welcome" description="about">
                    <FlexLayout layout="60x40" className="welcome-flex" wrapReverse={true}>
                        <div>
                            <h2>The In Control of Effects app</h2>
                            <p> The <strong>In Control of Effects</strong> app aims to increase awareness about antipsychotic medications and the risk of side effects. By selecting side effects, you can learn about which medications are more likely or less likely to result in the side effects you may want to avoid.</p>
                        </div>
                        <figure className="figure">
                            <AppDisplay className="illustrations illustration-lg" />
                        </figure>
                    </FlexLayout>
                </Section>
                <Section className="how-to-section" description="how to use this app">
                    <h2>How to use the In Control of Effects app</h2>
                    <p>The app is web-based and you can use any computer, smartphone and tablet to access the site. Here's how to use the app.</p>
                    <ol className="flex flex-50x2-layout instructions-list">
                        <li className="flex-child">
                            <figure className="figure">
                                <Select className="illustrations illustration-select" />
                            </figure>
                            <h3>Select side effects</h3>
                            <p>Select the side effects that you want to avoid or the ones that you definitely do not want.</p>
                        </li>
                        <li className="flex-child">
                            <figure className="figure">
                                <FileSearch className="illustrations illustration-file-search" />
                            </figure>
                            <h3>Review the results</h3>
                            <p>Learn about the medications and the side effects they may cause. </p>
                        </li>
                        <li className="flex-child">
                            <figure className="figure">
                                <Doctors className="illustrations illustration-doctor" />
                            </figure>
                            <h3>Discuss with your psychiatrist</h3>
                            <p>Take note of the results and discuss them with your psychiatrist.</p>
                        </li>
                    </ol>
                </Section>
                <Section className="questions-section" description="where to answers">
                    <FlexLayout layout="60x40" className="questions-grid" wrapReverse={true}>
                        <div>
                            <h2>Do you have questions?</h2>
                            <p>Do you have any questions about the app or are you stuck? Read more on the app on our Frequently Asked Questions page.</p>
                            <Link className="btn btn-primary" to="/how-to">Read</Link>
                        </div>
                        <figure className="figure">
                            <Conversation className="illustration" />
                        </figure>
                    </FlexLayout>
                </Section>
            </Document>
            <Section className="start-section" centerContent={true}>
                <h2>Get started</h2>
                <p>Ready to start the app? Before you begin, let's go through the instructions.</p>
                <Link to="/start" className="btn btn-primary">Start</Link>
            </Section>
        </Page>
    )
}

// export
export default home
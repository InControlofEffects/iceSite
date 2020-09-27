////////////////////////////////////////////////////////////////////////////////
// FILE: Accordion.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-19
// MODIFIED: 2020-09-08
// PURPOSE: react component for Accordion page
// DEPENDENCIES: see below
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
import React from "react"
import Accordion from "../components/widgets/accordion"
import ComputerSearchPhoto from "../components/images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg"

// define page
function FAQ() {
    return (
        <main id="main" className="page faq-page">
            <header id="Accordion-hero" className="header header-photo" style={{backgroundImage: `url(${ComputerSearchPhoto})`}}>
                <div className="header-content">
                    <h1>Frequently Asked Questions</h1>
                    <h2>Learn more about the In Control of Effects project and app</h2>
                </div>
            </header>
            <section className="section" aria-labelledby="faq-intro">
                <div className="section-content">
                    <h2 id="faq-intro">About the FAQ</h2>
                    <p>On this page, you can find out more about the project, how to use the application, what to do with the results, and other information.</p>
                    <p>If you additional questions or would like more information, please contact the study coordinator.</p>
                </div>
            </section>
            <section className="section accordion-section" aria-labelledby="about-the-in-control-of-effects-project">
                <div className="section-content">
                    <h3 id="about-the-in-control-of-effects-project">About the In Control of Effects project</h3>
                    <Accordion id="what-is-the-in-control-of-effects-app" title="What is the In Control of Effects App?">
                        <p>The <strong>In Control of Effects</strong> app is an experimental tool designed to increase awareness about antipsychotic medications and the risk of side effects. This may be important if there are side effects that you are unaware of or that you would like to avoid.</p>
                    </Accordion>
                    <Accordion id="is-the-in-control-of-effects-app-part-of-a-research-study" title="Is the In Control of Effects app part of a research study?">
                        <p>Yes, the app is part of ongoing research led by researchers at the University of Oxford in the Department of Psychiatry.</p>
                    </Accordion>
                </div>
            </section>
            <section className="section accordion-section" aria-labelledby="accessing-the-app">
                <div className="section-content">
                    <h3 id="accessing-the-app">Accessing the In Control of Effects app</h3>
                    <Accordion id="how-can-i-access-the-app" title="How can I access the app?">
                        <p>You can use any computer, tablet or smartphone to access the app. You may use any web browser you like. A user account is required to access the app. This information is provided to you by the study coordinator.</p>
                    </Accordion>
                    <Accordion id="do-i-have-to-install-the-app-on-my-phone" title="Do I have to install the app on my phone?">
                        <p>No, the app does not need to be installed in order to run.</p>
                    </Accordion>
                    <Accordion id="do-i-need-an-account-to-use-the-app" title="Do I need an account to use the app?">
                        <p>Yes, a username and password is required to use the app. Since the <strong>In Control of Effects</strong> app is part of ongoing research, we want to study the effectiveness and usefulness of the tool, as well as make improvements to the design and functionality of the app before releasing it to a wider audience. Accounts will be given to individuals that are a part of the research project.</p>
                    </Accordion>
                    <Accordion id="how-do-i-get-an-account" title="How do I get an account?">
                        <p>Accounts are given out by the study coordinator to those who are part of the research project.</p>
                        <p>For those who are a part of the research project and were given a username and password, enter this information at the sign-in page.</p>
                    </Accordion>
                    <Accordion id="i-am-having-troubles-signing-in-what-do-i-do" title="I am having troubles signing in. What do I do?">
                        <p>First, make sure the username or password was entered correctly. Make sure the information is typed correctly and there are no extra spaces. An error message will be displayed if information is missing or incorrect.</p>
                        <p>If you continue to have issues signing in, contact the study coordinator.</p>
                    </Accordion>
                </div>
            </section>
            <section className="section accordion-section" aria-labelledby="using-the-app">
                <div className="section-content">
                    <h3 id="using-the-app">Using the app</h3>
                    <Accordion id="how-do-i-use-the-in-control-of-effects-app" title="How do I use the In Control of Effects app?">
                        <p>When you are signed in to the app, you will be presented with a few instructions pages. These pages will demonstrate how to navigate the app and how to select side effects. The two main functionalities of the app are selecting side effects and reading the results. These are described below.</p>
                        <ul>
                            <li>
                                <strong>1. Selecting side effects</strong>
                                <p>When you reach the side effects page, select the side effect that you definitely do not want or the one that you would like to avoid. Tap or click the name of the side effect to select it. Selected side effects will change in color and a checkmark will appear to confirm your selection. Tap or click again to deselect the side effect. You can also read more about each side effect by tapping or clicking the expand button. When you have made and are satisfied with your selections, tap or click the submit button.</p>
                            </li>
                            <li>
                                <strong>2. Reviewing the results</strong>
                                <p>The results page will display two lists of recommendations. The first is a list of <strong>recommended medications</strong> meaning that you are less likely to experience the side effects that you selected. The second is list of <strong>medications to avoid</strong> as you are more likely to experience the side effects that you selected.</p>
                            </li>
                        </ul>
                    </Accordion>
                    <Accordion id="how-do-i-navigate-the-app" title="How do I navigate the app?">
                        <p>At the bottom of each page, you will see one or more buttons labelled previous and next. Use these buttons to move between pages.</p>
                        <p>In menubar, you will see a refresh button <svg className="heroicon" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>. Clicking this button will bring you back to the first page of the app. This may be useful if you would like to revisit the instructions or select a different side effect.</p>
                        <p>Next to the refresh button, is the signout button<svg className="heroicon" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>. Use this button to sign out of the app; closing the window will also sign you out.</p>
                    </Accordion>
                    <Accordion id="how-do-i-select-side-effects" title="How do I select side effects?">
                        <p>To select a side effect, tap or click the name of the side effect. Selected side effects will change in appearance. Tap or click the name of a side effect a second time to deselect it. You may select one side effect at a time. An error message will appear if there are any issues during side effect selection.</p>
                    </Accordion>
                    <Accordion id="how-do-i-know-if-a-side-effect-is-selected" title="How do I know if a side effect is selected?">
                        <p>Selected side effects will change in appearance. If you selected a side effect, the background color will darken and a checkmark will appear next to the name of the side effect indicating it is selected. Tap or click the name of a side effect a second time to deselect it.</p>
                    </Accordion>
                    <Accordion id="how-do-i-interpret-the-results" title="How do I interpret the results">
                        <p>The results page will display two lists of recommendations.</p>
                        <ul>
                            <li>
                                <strong>Recommended Medications</strong>
                                <p>Medications on the list of recommended medications mean that you are <i>less likely</i> to experience the side effects that you selected if you were prescribed that medication. Let's say you wanted to avoid weight gain. If you were perscribed one of the medications from the recommended list, then you have are less likely to gain weight.</p>
                            </li>
                            <li>
                                <strong>Medications to Avoid</strong>
                                <p>Medications on the medications to avoid list mean that you are <i>more likely</i> to experience the side effects that you selected if you were perscribed that medication. If you wanted to avoid weight gain and were perscribed a medication from the *medications to avoid* list, then you may be more likely to experience weight gain.</p>
                            </li>
                        </ul>
                        <blockquote className="warning">
                            If you are concerned about side effects or anything else related to your medical care, consult your healthcare provider.
                        </blockquote>
                        <p>Even though this app takes into account your preferences for side effects, this app does not take into account individual patient characteristics, pre-existing medical conditions, or any current medical treatment or medications you may already be taking. These are important and should be taken into consideration before any recommendation is made. Any information produced by this tool should be discussed with your psychiatrist.</p>
                    </Accordion>
                    <Accordion id="how-can-i-learn-more-about-a-medication" title="How can I learn more about a medication?">
                        <p>We are still working on this part of the application. Until then, take note of the side effects that you would like to avoid and the recommendations, and discuss this with your psychiatrist.</p>
                    </Accordion>
                    <Accordion id="can-i-startover" title="Can I restart the app?">
                        <p>Yes, tap or click the restart button <svg className="heroicon" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> to restart the app. This won't sign you out, it will bring you to the first page of the app.</p>
                    </Accordion>
                    <Accordion id="does-the-app-save-any-data" title="Does the app save any data?">
                        <p>Yes, the app does save data. The data is collected focuses on the performance of the app and how users interact with the app. This allows us to understand if the app is useful and effective. Information that is collected allows us evaluate which features of the app are used and which ones are not.</p>
                        <p>At no point will the app ask for any personal or identifiable information.</p>
                    </Accordion>
                    <Accordion id="can-i-save-the-results" title="Can I save the results?">
                        <p>Unfortunately, not through the app itself. We recommend that you take note of the side effects that you selected or the results. Depending on your device, you can also take a screen shot of the web page.</p>
                    </Accordion>
                </div>
            </section>
        </main>
    )
}

// export
export default FAQ
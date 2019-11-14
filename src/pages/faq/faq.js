////////////////////////////////////////////////////////////////////////////////
// FILE: faq.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-19
// MODIFIED: 2019-09-19
// PURPOSE: react component for faq page
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

import React, { Component } from "react"
import { Link } from "react-router-dom"

// import components
import Page from "../../components/layouts/page"
import Hero from "../../components/layouts/hero-alt"
import Document from "../../components/layouts/doc"
import Header from "../../components/layouts/doc-header"
import Section from "../../components/layouts/doc-section"
import FAQ from "../../components/layouts/doc-faq"
import QuestionsImage from "../../components/images/conversation"
import PlusIcon from "../../components/icons/icon_plus_outline"

// define page
class faq extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggleAllSections = this.toggleAllSections.bind(this);
    }

    toggleAllSections() {

        // get status
        let toggleLabel = document.querySelector(".btn-label");
        let toggleIcon = document.querySelector(".btn-icon");

        let sections = document.querySelectorAll(".faq-section");
        let button, content;

        // run logic
        // select inner elements + remove classes + modify aria-attributes
        if (this.state.isOpen) {
            sections.forEach(function (s) {
                button = s.querySelector(".expand-toggle");
                content = s.querySelector(".hidden-content");
                button.classList.remove("rotated");
                content.classList.remove("showContent");
                button.setAttribute("aria-expanded", false);
                content.setAttribute("hidden", "");
            });
            toggleLabel.innerHTML = "open all";
            toggleIcon.classList.remove("rotated");
            this.setState({ isOpen: false });
        } else {
            sections.forEach(function (s) {
                button = s.querySelector(".expand-toggle")
                content = s.querySelector(".hidden-content");
                button.classList.add("rotated");
                content.classList.add("showContent");
                button.setAttribute("aria-expanded", true);
                content.removeAttribute("hidden");
            });
            toggleLabel.innerHTML = "close all";
            toggleIcon.classList.add("rotated");
            this.setState({ isOpen: true });
        }
    }

    ////////////////////////////////////////
    // render
    render() {
        return (
            <Page title="FAQ">
                <Document id="faq-page">
                    <Header style={{paddingBottom: "32px"}}>
                        <QuestionsImage style={{display: "block", margin: "0 auto"}}/>
                        <h1 className="text-align-center">Frequently Asked Questions</h1>
                        <p>Each question is grouped into several categories. If you any further questions, contact the study coordinator. Click the following button to expand all content.</p>
                        <button className="btn btn-plain" id="toggleSections" onClick={this.toggleAllSections} style={{float: "right"}}>
                            <PlusIcon className="btn-icon" />
                            <label className="btn-label">open all</label>
                        </button>
                    </Header>
                    <Section id="project-background" description="background questions">
                        <h2>Project Background</h2>
                        <FAQ id="what-is-the-in-control-of-effects-app"
                            title="What is the In Control of Effects App?"
                            content="The **In Control of Effects** app is an experimental tool designed to increase awareness about antipsychotic medications and the risk of side effects. This may be important if there are side effects that you are unaware of or that you would like to avoid."
                        />
                        <FAQ id="is-the-in-control-of-effects-app-part-of-a-research-study"
                            title="Is the In Control of Effects app part of a research study?"
                            content="Yes, the app is part of ongoing research. You can read more about the research project on the [Research](/research) page."
                        />
                        <FAQ id="who-is-running-the-research-project"
                            title="Who is running the research project?"
                            content="This research project is led by researchers at the University of Oxford in the Department of Psychiatry."
                        />
                    </Section>
                    <Section id="accessing-the-app" description="accessing the app questions">
                        <h2>Accessing the app</h2>
                        <FAQ id="do-i-have-to-install-the-app-on-my-phone"
                            title="Do I have to install the app on my phone?"
                            content="No installation is required to run the app. The **In Control of Effects** app is completely web-based meaning you can access it like any other web page."
                        />
                        <FAQ id="how-can-i-access-the-app"
                            title="How can I access the app?"
                            content="You may use any computer, tablet or smartphone to access the app. You may use any web browser you like. A username and password is required. See the next question for more information."
                        />
                        <FAQ id="do-i-need-an-account-to-use-the-app" title="Do I need an account to use the app?">
                            <p>Yes, a username and password is required to use the app. Since the <strong>In Control of Effects</strong> app is part of ongoing research, we want to study the effectiveness and usefulness of the tool, as well as make improvements to the design and functionality of the app before it is widely used. Until then, the app will require a username and password that will be given out by the study coordinator. Accounts will be given to individuals that are a part of the research project.</p>
                            <p>For those who are a part of the research project and were given a username and password, enter this information at the sign-in page and click *sign-in*.</p>
                        </FAQ>
                        <FAQ id="how-do-i-get-an-account"
                            title="How do I get an account?"
                            content="Accounts are given out by the study coordinator to those who are part of the research project. Each account is will expire after a certain period time or if the max number of times the app is accessed whichever comes first. See the question [Do I need an account to use the app?](#do-i-need-an-account-to-use-the-app) for more information."
                        />
                        <FAQ id="i-am-having-troubles-signing-in-what-do-i-do"
                            title="I am having troubles signing in. What do I do?"
                            content="The sign in form is designed to return an error if the username or password is incorrect or if something is missing. Make sure the information is typed correctly and there are no extra spaces. All accounts are set to expire after an amount of time. It is also possible that the account might be expired. An error message will be display informing you that the account is expired. Contact the study coordinator if this is the case."
                        />
                    </Section>
                    <Section id="using-the-app" description="how to use the app">
                        <h2>Using the app</h2>
                        <FAQ id="how-do-i-use-the-in-control-of-effects-app" title="How do I use the In Control of Effects app?">
                            <p>Here are steps for using the <strong>In Control of Effects</strong> app.</p>
                            <p><strong>1. Selecting side effects</strong></p>
                            <p>When you reach the side effects page, you will be prompted to select side effects. Select the side effects that you definitely do not want or the side effects that you would like to avoid. Tap or click the name of the side effect to select it. Tap or click again to deselect the side effect. Selected side effects will change in color and a checkmark will appear to confirm your selection. You can also read more about each side effect by tapping or clicking the expand button. When you have made and are satisfied with your selections, tap or click the submit button.</p>
                            <p><strong>2. Reviewing the results</strong></p>
                            <p>The results page will display two lists of medications. The first is a list of recommended medications meaning that you are less likely to experience the side effects that you selected. The second is list of medications to avoid as you are more likely to experience the side effects that you selected. You can select the name of a medication to learn more. The results are based on the side effects that your selected and pre-existing data.</p>
                            <p>Tap or click the name of a medication to learn more about it. You can return to the side effects screen to make new selections or quit the application.</p>
                            <p>When you are finished reviewing the results, you may exit the app.</p>
                        </FAQ>
                        <FAQ id="how-do-i-navigate-the-app"
                            title="How do I navigate the app?"
                            content="On each page, there will two buttons at the bottom of the page. These buttons will be labelled **previous** and **next**. Clicking or tapping the previous button will move you to the previous page. The next page button will bring you to the next page. At times, the next button will be replaced with a submit button. If this is the case, tap or click the submit button to move to the next page."
                        />
                        <FAQ id="how-do-i-select-side-effects"
                            title="How do I select side effects?"
                            content="You can select side effects by tap or click the name of the side effect a single time. You may select up to two side effects and you must select at least one side effect. A message will be displayed if there are any issues during selection. Tap or click the name of a side effect a second time to deselect it."
                        />
                        <FAQ id="how-do-i-know-if-a-side-effect-is-selected"
                            title="How do I know if a side effect is selected?"
                            content="Selected side effects will change in appearance. If you selected a side effect, the background color will darken and a checkmark will appear next to the name of the side effect indicating it is selected."
                        />
                        <FAQ id="how-do-i-interpret-the-results" title="How do I interpret the results">
                            <p>The results page will display two lists of medications - a list of recommended medications and a list of medications to avoid. Let's go through each list type.</p>
                            <p><strong>Recommended Medications</strong></p>
                            <p>Medications on the list of recommended medications mean that you are **less likely** to experience the side effects that you selected if you were prescribed that medication. Let's say you wanted to avoid weight gain and any irregular heartbeats. If you were perscribed one of the medications from the recommended list, then you have are less likely to gain any weight and are less likely of experiencing any irregulaties in heartbeat.</p>
                            <p><strong>Medications to Avoid</strong></p>
                            <p>Medications on the medications to avoid list mean that you are **more likely** to experience the side effects that you selected if you were perscribed that medication. Let's say you wanted to avoid muscle stiffness and tremors. If you were perscribed a medication that is listed on the *medications to avoid* list, you have are more likely to experience stiff muscles and tremors.</p>
                            <p>Even though this app takes into account your preferences for side effects, this app does not take into account individual patient characteristics, pre-existing medical conditions, or any current medical treatment or medications you may already be taking. These are important and should be taken into consideration before any recommendation is made. Any information produced by this tool should be discussed with your psychiatrist.</p>
                        </FAQ>
                        <FAQ id="how-can-i-learn-more-about-a-medication"
                            title="How can I learn more about a medication?"
                            content="The results page will show several medications. Each medication is also a button. To learn more about a medication, click the name of medication and you will brought to a new screen. This new screen will display information on why the medication was selected."
                        />
                        <FAQ id="can-i-startover"
                            title="Can I startover?"
                            content="Of course! There's a restart button located at the top of the screen. Tap or click this button at any time to restart the app. This won't sign you out, it will bring you to the first page of the app."
                        />
                        <FAQ id="does-the-app-save-any-data" title="Does the app save any data?">
                            <p>Yes, the app does save data. The data is collected focuses on the performance of the app and how users interact with the app. This allows us to understand if the app is useful and effective. Information that is collected allows us evaluate which features of the app are used and which ones are not.</p>
                            <p>At no point will the app ask for any personal or identifiable information. More infromation on the data that is collected and how it is used can be found on the <Link to="/About">About</Link> page.</p>
                        </FAQ>
                        <FAQ id="can-i-save-the-results"
                            title="Can I save or print the results?"
                            content="Not at this time. A feature for saving or printing the results is on the *wish list*, but there are no immediate plans. We recommend that you take note of the side effects that you selected or the results. Alternatively, you can take screenshots of each page."
                        />
                    </Section>
                </Document>
            </Page>
        )
    }
}

// export
export default faq

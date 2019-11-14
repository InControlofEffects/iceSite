////////////////////////////////////////////////////////////////////////////////
// FILE: how-to.js
// AUTHOR: David Ruvolo
// CREATED: 2019-10-04
// MODIFIED: 2019-10-04
// PURPOSE: react component for how to use the app page
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import { Link } from "react-router-dom"

import Page from "../../components/layouts/page"
import Hero from "../../components/layouts/hero-alt"
import Document from "../../components/layouts/doc"
import Section from "../../components/layouts/doc-section"
import HowToImage from "../../components/images/smartphone"

// build page 
function howTo(props){
    return (
        <Page title="How To" transparentNavbar={true}>
            <Hero backgroundImage="hero-bk-gray" centered={true}>
                <HowToImage />
                <h1 className="title">How to</h1>
            </Hero>
            <Document id="how-to">
                <Section description="how to">
                    <h2>How to use the In Control of Effects app</h2>
                    <p>The In Control of Effects app is completely web-based and you do not need to install anything. The app can be accessed using a web browser on any device by visiting <a href="https://www.incontrolofeffects.com">www.incontrolofeffects.com</a>.</p>
                    <p>When you reach the app, you will be prompted to enter a username and password. Since the app is part of ongoing research, we want to study the effectiveness and usefulness of the tool, as well as make improvements to the design and functionality of the app before it is widely used. Until then, the app will require a username and password that will be given out by the study coordinator. Accounts will be given to individuals that are a part of the research project.</p>
                    <p>For those who are a part of the research project and were given a username and password, enter this information at the sign-in page and click sign-in. If you have any diffculties using the app or any questions about the app, visit the <Link to="/faq">FAQ</Link> page.</p>
                    <p>Once you are signed in, you can start using the app. Here's how to use it.</p>
                    <ol className="instructions-list">
                        <li>
                            <h3 className="instruction-title"> Signing in to the app</h3>
                            <p>When the app loads, you will be prompted to enter a username and password. Type the  credentials provided by the study coordinator and click sign in. If you encounter any issues signing in to the app, please contact the study coordinator.</p>
                        </li>
                        <li>
                            <h3 className="instruction-title"> Navigating the app</h3>
                            <p>In the app, use the back and next buttons to navigate the app. The progress bar at the top will give you indication of where you are in the app. Use the restart button located at the top of page, to start from at beginning of app.</p>
                        </li>
                        <li>
                            <h3 className="instruction-title"> Selecting side effects</h3>
                            <p>When you reach the side effects page, you will be prompted to choose a few side effects. Select the side effects that you definitely do not want or the side effects that you would like to avoid. Tap or click the name of the side effect to select it. Tap or click again to deselect the side effect. Selected side effects will change in color and a checkmark will appear to confirm your selection.</p>
                            <p>You can also read more about each side effect by tapping or clicking the expand button. When you have made and are satisfied with your selections, tap or click the submit button.</p>
                        </li>
                        <li>
                            <h3 className="instruction-title"> Reading the results</h3>
                            <p>The results page will display two lists of medications. The first is a list of recommended medications meaning that you are less likely to experience the side effects that you selected. The second is list of medications to avoid as you are more likely to experience the side effects that you selected. You can select the name of a medication to learn more.</p>
                            <p>Tap or click the name of a medication to learn more about it. You can return to the side effects screen to make new selections or quit the application.</p>
                            <p>The results are based on the side effects that your selected and pre-existing data. See the <Link to="/faq">FAQ</Link> for more information.</p>
                        </li>
                        <li>
                            <h3 className="instruction-title">Quiting the app</h3>
                            <p>On the results page, tap or click the quit button to move to the final page. Before you quit the app, take note of the side effects that you selected and the results to discuss with your psychiatrist. This may be useful if there are side effects that you are unaware of or would like to avoid.</p>
                            <p>When you are ready to quit, you many either close the window or tap the quit button.</p>
                        </li>
                    </ol>
                </Section>
            </Document>
        </Page>
    )
}

export default howTo
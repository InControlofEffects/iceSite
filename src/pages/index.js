////////////////////////////////////////////////////////////////////////////////
// FILE: index.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2020-09-07
// PURPOSE: react component for "home page"
// DEPENDENCIES: see below
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
import React from "react"
import SiteLink from "../components/elements/siteLink"
import ConversationPhoto from "../components/images/christina-wocintechchat-com-rCyiK4_aaWw-unsplash.jpg"
import MobilePhonePhoto from "../components/images/yura-fresh-xezXEh_fIeU-unsplash.jpg"

// define home page
function home() {
    return (
        <main id="main" className="page home-page">
            <header id="home-hero" className="header header-photo" style={{backgroundImage: `url(${ConversationPhoto})`}}>
                <div className="header-content">
                    <h1>In Control of Effects</h1>
                    <h2>A decision aid for the choice of antipsychotics</h2>
                </div>
            </header>
            <section id="what-is" className="section section-extra-padding" aria-labelledby="what-is-the-in-control-of-effects-application">
                <div className="section-content">
                    <h2 id="what-is-the-in-control-of-effects-application">What is the In Control of Effects application?</h2>
                    <p> The <strong>In Control of Effects</strong> project is an app that aims to increase awareness about antipsychotic medications and the risk of side effects. By selecting side effects, you can learn about which medications are more likely or less likely to result in the side effects you may want to avoid.</p>
                </div>
            </section>
            <section className="link-boxes">
                <div id="learn-more-link" className="link-box link-box-info">
                    <SiteLink path="/faq" name="FAQ">
                        Learn more
                    </SiteLink>
                </div>
                <div id="get-started-link" className="link-box link-box-start" style={{backgroundImage : `url(${MobilePhonePhoto})`}}>
                    <SiteLink path="/start" name="Start">
                        Get Started
                    </SiteLink>
                </div>
            </section>
        </main>
    )
}

// export
export default home
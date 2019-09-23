////////////////////////////////////////////////////////////////////////////////
// FILE: index.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-09-11
// PURPOSE: react component for "home page"
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

import React from "react"

// import components
import Page from "../../components/layouts/page"
import Document from "../../components/layouts/doc"
import Section from "../../components/layouts/doc-section"
import GridLayout from "../../components/layouts/grid"
import Hero from "../../components/layouts/hero"
import InfoCard from "../../components/elements/info-card"

// import images
import Image from "../../components/images/hill.jpg"
import { UndrawDoctor, UndrawSelect, UndrawFileSearching } from "react-undraw-illustrations"

// import styles
import "./home.css"

// define home page
class home extends React.Component {

    // constructor
    constructor(props) {
        super(props);
        this.__onScroll = this.__onScroll.bind(this);
    }

    // define onScroll function
    __onScroll(event) {
        const el = document.querySelector(".navbar");
        let scroll = event.path[1].scrollY;
        const scrollBreakPoint = 150;
        if (scroll > scrollBreakPoint) {
            el.classList.remove("navbar-transparent");
        }
        if (scroll < scrollBreakPoint) {
            el.classList.add("navbar-transparent");
        }

    }

    // lifecycle - add blended background class for navbar
    // componentDidMount() {
    //     const el = document.querySelector(".navbar");
    //     el.classList.add("navbar-transparent");
    //     window.addEventListener("scroll", this.__onScroll)
    // }

    // lifecycle - remove blended classes when unmounting
    // componentWillUnmount() {
    //     const el = document.querySelector(".navbar");
    //     el.classList.remove("navbar-transparent");
    //     window.removeEventListener("scroll", this.__onScroll);
    // }

    // render
    render() {
        return (
            <Page title="Home" id="home-page">
                <Hero 
                    title="In Control of Effects" 
                    subtitle="A decision aid for the choice of antipsychotics" 
                    id="welcomeHero" 
                    backgroundImage={Image} 
                    photoCredit="Photo by Georg Nietsch on Unsplash" 
                    photoCreditBelow={false}
                    textColor="#ffffff"
                />
                <Document>
                    <Section description="about the in control of effects tool">
                        <h2>Welcome</h2>
                        <p>The <strong>In Control of Effects</strong> app is an experimental tool designed to increase awareness about antipsychotic medications and the risk of side effects. This may be important if there are side effects that you are unaware of or that you would like to avoid.</p>
                        <p>This project is supported by...</p>
                    </Section>
                    <Section css="howToFigures" description="how to use this app">
                        <h2>How to</h2>
                        <p>Here's how to use the <strong>In Control of Effects</strong> app.</p>
                        <GridLayout layout="33x3" description="steps for using the app">
                            <figure className="grid-item-left image-box" aria-label="a mobile phone displaying a checked option">
                                <UndrawSelect height="150px" PrimaryColor="#4655a8" />
                                <h3 className="image-box-text image-caption">Choose side effects</h3>
                                <p className="image-box-text image-description">Select the side effects that you would like to avoid.</p>
                            </figure>
                            <figure className="grid-item-center image-box" aria-label="a magnifying glass hovering over a document">
                                <UndrawFileSearching height="150px" PrimaryColor="#4655a8" />
                                <h3 className="image-box-text image-caption">Review the results</h3>
                                <p className="image-box-text image-description">Learn about medications and the side effects they may cause.</p>
                            </figure>
                            <figure className="grid-item-right image-box" aria-label="person talking with doctor">
                                <UndrawDoctor height="150px" PrimaryColor="#4655a8" />
                                <h3 className="image-box-text image-caption">Discuss the results</h3>
                                <p className="image-box-text image-description">Take note of the results and discuss them with your psychiatrist.</p>
                            </figure>
                        </GridLayout>
                    </Section>
                    <Section description="available pages">
                        <h2>Getting started</h2>
                        <p>Before you get start the <strong>In Control of Effects</strong> app, you can learn more by about this research project and visit our frequently asked questions page. When you are ready, head to the start page.</p>
                        <GridLayout id="homeFeatures" layout="33x3" description="our current available pages">
                            <InfoCard css="grid-item-left"
                                title="About"
                                text="Learn more about this research project and the development of the app."
                                linkUrl="/about"
                                linkLabel="read"
                            />
                            <InfoCard css="grid-item-center"
                                title="FAQ"
                                text="Find answers to all of your questions about how to use the app."
                                linkUrl="/faq"
                                linkLabel="Read"
                            />
                            <InfoCard css="grid-item-right"
                                title="Start"
                                text="Ready to start? Let's get started by reading through the instructions."
                                linkUrl="/start"
                                linkLabel="Start"
                            />
                        </GridLayout>
                    </Section>
                </Document>
            </Page>
        )
    }
}

// export
export default home
////////////////////////////////////////////////////////////////////////////////
// FILE: research.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-12
// MODIFIED: 2019-09-12
// PURPOSE: react component for research page
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

import React from "react"
import ReactMarkdown from "react-markdown"

// import components
import Page from "../../components/layouts/page"
import Hero from "../../components/layouts/hero"
import Document from "../../components/layouts/doc"
import Section from "../../components/layouts/doc-section"

import Image from "../../components/images/buildings.jpg"

// section: about
const content = `

## Background

The **In Control of Effects** tool is an experimental clinical research tool that is a part of ongoing research led by researchers in the Department of Psychiatry at the University of Oxford. The aim of the app is to fill a gap in clinical practice where unwanted unexpected side effects may lead to an individual discontinuing treatment.    

The development of the app begin in early 2017 and a proof of concept was developed. After further revisions and modifications, the app was submitted for focus group testing. Results of the evaluation can be found in journal [Evidenced-Based Mental Health](https://ebmh.bmj.com/content/22/2/56). The current version of the app is based on feedback from the focus groups.

## Methods

### Reference Data 

The In Control of Effects app is a tool to aid clinical decision making process based solely on widely available data on the likelihood of antipsychotics to cause specific side effects. The reference dataset is based on relative side effects risk profile of a number of antipsychotics<sup>1</sup> according to the 11th edition of the Maudsley Prescribing Guidelines, ed Wiley-Blackwell; 2012. This data was 

### Data collection and storage

As this the **In Control of Effects** tool is part of ongoing research, we do collect data. This allows us to evaluate the app's effectiveness in a research environment and to make further improvements to the app. The data that is collected focuses on the performance of the app. This includes selected side effects and the returned results as this helps us validate that the methods are working correctly. The app logs other information that is important for us to understand how the app is used. This includes duration the app was used, what elements were viewed, and if there were any errors. This information helps us make improvements to the app and to determine if something isn't useful. 

The app will not ask for nor collect any personal or indentifying information. The app does not use cookies or any other storage methods, nor does the application use any trackers.

All data is stored anonymously on secure servers for later analysis.

## Limitations

Any recommendation produced by this tool should be discussed with your healthcare provider. This tool does not take into account individual patient characteristics, pre-existing medical conditions, as well as other medications you may already be taking – these are extremely important too and  should be part of the decision-making process. If you are concerned about side effects or anything else related to your mental health condition, consult your psychiatrist.

## Notes

1. The medications listed in the Maudsley Perscribing Guidelines are as follows: Amisulpride, Aripiprazole, Asenapine, Benperidol, Chlorpromazine, Clozapine, Flupentixol, Fluphenazine, Haloperidol, Iloperidone, Loxapine, Olanzapine, Paliperidone, Perphenazine, Pimozide, Pipothiazine, Promazine, Quetiapine, Risperidone, Sertindole, Sulpiride, Trifluoperazine, Ziprasidone, Zuclopenthixol
`

// define page
const research = () => {
    return (
        <Page title="Research">
            <Hero
                title="About"
                subtitle="Learn about the project"
                backgroundImage={Image}
                backgroundColor="rgba(44, 15, 55, 0.6)"
                textColor="#ffffff"
                photoCredit="Photo by chuttersnap on Unsplash"
            />
            <Document id="research-page">
                <Section description="about the project">
                    <ReactMarkdown escapeHtml={false} source={ content } />
                </Section>
            </Document>
        </Page>
    )
}

export default research

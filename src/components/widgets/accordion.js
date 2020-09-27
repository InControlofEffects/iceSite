////////////////////////////////////////////////////////////////////////////////
// FILE: accordion.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-14
// MODIFIED: 2020-09-07
// PURPOSE: react component for generated faq sections
// DEPENDENCIES: see below
// STATUS: working; complete
// COMMENTS: This is a component for creating faq sections only, i.e., FAQ documents
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React, { useState } from "react"
import PropTypes from "prop-types"

function Accordion(props) {
    const [isCardOpen, setCardOpen] = useState(false);
    return (
        <div id={props.id} className="accordion" aria-labelledby={`${props.id}-title`}>
            <h4 id={`${props.id}-title`} className="accordion__heading">
                <button
                    onClick={() => setCardOpen(!isCardOpen)}
                    className="accordion__toggle"
                    aria-expanded={isCardOpen}
                    >
                    <span className="toggle__label">{props.title}</span>
                    <svg className="toggle__icon" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </h4>
            <section className={`accordion__content ${!isCardOpen ? "hidden" : ""}`}>
                {props.children}
            </section>
        </div>
    )
}

// Prop types
Accordion.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

// export
export default Accordion
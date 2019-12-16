////////////////////////////////////////////////////////////////////////////////
// FILE: section.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-02
// MODIFIED: 2019-12-16
// PURPOSE: generic layout for documents (i.e., all pages)
// DEPENDENCIES: react, document.css
// STATUS: working; complete;
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import PropTypes from "prop-types"
function Section(props) {
    return (
        <section id={props.id} className={props.className ? `section ${props.className}` : "section"} aria-labelledby={`${props.id}-title`}>
            <div class="section-content">
                <h2 id={`${props.id}-title`}>{props.title}</h2>
                {props.children}
            </div>
        </section>
    )
}

// props
Section.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string
}


// export
export default Section
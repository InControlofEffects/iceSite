////////////////////////////////////////////////////////////////////////////////
// FILE: section.js
// AUTHOR: David Ruvolo
// CREATED: 2019-05-02
// MODIFIED: 2020-09-04
// PURPOSE: layout component for page sections
// DEPENDENCIES: react, proptypes
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
import React from "react"
function Section(props) {
    return (
        <section className={props.className ? `section ${props.className}` : "section"} {...props} >
            <div className="section-content">
                {props.children}
            </div>
        </section>
    )
}

// export
export default Section
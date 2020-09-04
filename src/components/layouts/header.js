////////////////////////////////////////////////////////////////////////////////
// FILE: header.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-17
// MODIFIED: 2020-09-04
// PURPOSE: document header
// DEPENDENCIES: see below
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
import React from "react"
import PropTypes from "prop-types"

function Header(props) {
    return (
        <header id={props.id ? props.id : null} className={props.className ? `header ${props.className}` : "header"}>
            <div className="header-content">
                {props.children}
            </div>
        </header>
    )
}

// props
Header.propTypes = {
    id: PropTypes.string,
    subtitle: PropTypes.string
}

// export
export default Header
////////////////////////////////////////////////////////////////////////////////
// FILE: header.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-17
// MODIFIED: 2019-12-16
// PURPOSE: document header
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import PropTypes from "prop-types"
import "../styles/_header.scss"
function Header(props) {
    return (
        <header id={props.id ? props.id : null} className={props.className ? `header ${props.className}` : "header"}>
            <div class="header-content">
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
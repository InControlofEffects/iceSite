////////////////////////////////////////////////////////////////////////////////
// FILE: nav.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2020-09-07
// PURPOSE: Generate list of navigation links
// DEPENDENCIES: React, Link
// STATUS: working
// COMMENTS: This component generates a list of navigation links for the
// site. Data must be in json format (see nav.json file). Data should be
// passed down from parent component.
//
// ARGUMENTS
// @param isHeader if TRUE, will add the css class "navigation" to list
// @param linksData an object containing the site's paths and names
// @param state a state var that determines of the menu is open or closed
//
// STRUCTURE
// json file should be structured in the following way
// {
//   "links": [
//      {"name" : "About", "path": "about/"}
//      ...
//   ]
// }
//
// This component is used in the footer.js and header.js components
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import { Link } from "react-router-dom"


// Subcomponent for navigation link
function NavLink(props) {

    function handleOpenStatus(value) {
        props.onChange(value)
    }
    

    // onClick for navlinks
    function handleClick(e) {

        // reset scroll
        window.scrollTo(0, 0);

        // update document title
        document.title = `In Control of Effects | ${e.target.text}`

        // add link highlighting
        if (props.isHeader) {
            document.querySelectorAll(".navigation a").forEach((li) => li.classList.remove("selected"));
            e.target.classList.add("selected");
        }

        // close menu if open
        if (props.isHeader && props.isOpen) {
            handleOpenStatus(false)
        }
    }

    return (
        <Link className="menu-link" to={props.path} data-page-name={props.name} onClick={handleClick}>
            {props.name}
        </Link>
    )
}

function Nav(props) {

    function handleOpenStatus(value) {
        props.onChange(value)
    }

    return (
        <ul
            className={`menu navlinks ${props.isHeader ? "navigation" : ""} ${props.state ? "expanded" : ""}`}
        >
            {
                props.linksData.links.map((parent, i) => {
                    return (
                        <li className={`menu-item ${parent.name.toLowerCase()}-item`} key={i}>
                            <NavLink path={parent.path} name={parent.name} isHeader={props.isHeader} onChange={handleOpenStatus} isOpen={props.state}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Nav
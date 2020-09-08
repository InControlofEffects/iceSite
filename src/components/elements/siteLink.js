////////////////////////////////////////////////////////////////////////////////
// FILE: siteLink.js
// AUTHOR: David Ruvolo
// CREATED: 2020-09-08
// MODIFIED: 2020-09-08
// PURPOSE: a wrapper around <Link>
// DEPENDENCIES: react-router-dom
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
import React from "react"
import { Link } from "react-router-dom"

function siteLink(props) {

    function handleOpenStatus(value) {
        props.onChange(value)
    }

    // onClick for navlinks
    function handleClick(e) {

        // reset scroll
        window.scrollTo(0, 0);

        // update document title
        document.title = `In Control of Effects | ${e.target.getAttribute("data-page-name")}`

        // add link highlighting
        const links = document.querySelectorAll(".navigation a");
        const newlink = document.querySelector(`.navigation a[data-page-name='${props.name}']`);
        links.forEach((li) => {
            li.classList.remove("selected");
            li.removeAttribute("data-page-live");
        });
        newlink.classList.add("selected");
        newlink.setAttribute("data-page-live", "true");

        // close menu if open
        if (props.isHeader && props.isOpen) {
            handleOpenStatus(false)
        }
    }

    return (
        <Link className="menu-link site-link" to={props.path} data-page-name={props.name} onClick={handleClick}>
            {
                props.children
                ? props.children
                : props.name
            }
        </Link>
    )
}

export default siteLink
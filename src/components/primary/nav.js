////////////////////////////////////////////////////////////////////////////////
// FILE: nav.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-11-14
// PURPOSE: react component for site header
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import { Link } from "react-router-dom"
import navlinks from "../nav.json"

// build component
class nav extends React.Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = { data: navlinks }
    }

    // render
    render() {

        // pull data from state dataset
        const data = this.state.data.links;

        // add header class if components prop = true
        // this allows us to reuse the the navigation across the site
        const menuLinkClass = this.props.isHeader ? "navigation" : '';

        // return
        return (
            <ul className={`menu navlinks ${menuLinkClass}`} aria-label="site navigation">
                {
                    // map navigation links to li and sub ui/li elements
                    data.map((parent, i) => (

                        // map parent links
                        <li className={`menu-item ${parent.name.toLowerCase()}-item`} key={i}>
                            <Link className="menu-link" to={parent.path} data-live-page={parent.name.toLowerCase()}>
                                {/* {
                                    // add condition for if the name is home
                                    parent.name.toLowerCase() === "home"
                                        ? <HomeIcon className="menu-icon icon-home" />
                                        : null
                                } */}
                                {
                                    // print the name of the link
                                    parent.name

                                    // if there are children links to be added,
                                    // you must add them as a submenu. See
                                    // rrads-site-react project for code
                                    // and implementation
                                }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
export default nav
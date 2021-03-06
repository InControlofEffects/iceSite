////////////////////////////////////////////////////////////////////////////////
// FILE: 404.js
// AUTHOR: David Ruvolo
// CREATED: 2019-12-13
// MODIFIED: 2020-09-08
// PURPOSE: 404 error page
// DEPENDENCIES: see below
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
import React from "react"
import { Link } from "react-router-dom"
function errorPage() {
    return (
        <main id="main" className="page error_page">
            <header className="header">
                <div className="header-content">
                    <h1>Page not found</h1>
                    <p>Error: 404. The page does not exist. Go back to the <Link to="/home">Home</Link> page.</p>
                </div>
            </header>
        </main>
    )
}
export default errorPage
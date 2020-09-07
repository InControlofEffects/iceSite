////////////////////////////////////////////////////////////////////////////////
// FILE: 404.js
// AUTHOR: David Ruvolo
// CREATED: 2019-12-13
// MODIFIED: 2020-09-07
// PURPOSE: 404 error page
// DEPENDENCIES: see below
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
import React from "react"
function errorPage() {
    document.title = "In Control of Effects | Error: Page Not Found"
    return (
        <main id="main" className="page error_page">
            <header className="header">
                <div className="header-content">
                    <h1>Page not found</h1>
                    <p>Error: 404. The page does not exist</p>
                </div>
            </header>
        </main>
    )
}
export default errorPage
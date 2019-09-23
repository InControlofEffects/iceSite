////////////////////////////////////////////////////////////////////////////////
// FILE: utils.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-16
// MODIFIED: 2019-09-16
// PURPOSE: msic functions for use in the app
// DEPENDENCIES: see below , if any
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

// function that gets the document title
function getDocumentTitle() {
    const docTitle = document.title;
    const pageTitle = docTitle.substring(23);
    return pageTitle;
}


// function that fetches the links from the nav.json file
function findPageLink(page) {

    // import data
    const linksData = require("./nav.json");

    // process inputs
    if (!page) {
        console.error("Error in findPageLink: no page supplied.")
    }

    // filter data
    let result = linksData.links.filter(d => d.name === page);

    // warn if link does not exist
    if (result.length === 0) {
        console.error(`Error in function 'findPageLink': ${page} does not exist. Make sure the name exists and matches the name listed in the nav.json file`);
    } else {

        // return path
        return result[0].path;

    }
}

module.exports = {
    getDocumentTitle: getDocumentTitle,
    findPageLink: findPageLink
}


/// misc code
// drawLine function
// drawLine() {

//     // get all instruction step numbers, i.e., .instruction-number
//     let dims = [];
//     const elems = document.querySelectorAll(".instruction-number");

//     // build dimensions object
//     for (let i = 0; i < elems.length; i++) {
//         dims.push({
//             id: elems[i].id,
//             top: elems[i].getBoundingClientRect().top,
//             right: elems[i].getBoundingClientRect().right,
//             bottom: elems[i].getBoundingClientRect().bottom,
//             left: elems[i].getBoundingClientRect().left,
//             width: elems[i].getBoundingClientRect().width,
//             height: elems[i].getBoundingClientRect().height,
//             x: elems[i].getBoundingClientRect().x,
//             y: elems[i].getBoundingClientRect().y
//         })
//     }

//     // update line attributes to start from first number and continue to the last
//     // this involves finding the svg element and pulling the first element (i.e., 0)
//     // and the last element (length - 1)
//     const svgLine = document.getElementById("step-line");
//     const start = dims[0];
//     const end = dims[dims.length - 1];
//     const scaleX = 0.5;

//     // update svg attributes
//     svgLine.setAttribute("x1", start.left + (start.width * scaleX));
//     svgLine.setAttribute("x2", end.x + (end.width * scaleX));
//     svgLine.setAttribute("y1", start.bottom);
//     svgLine.setAttribute("y2", end.top);

// }

// <svg width="100%" height="100%" className="instruction-line">
//     <line id="step-line" strokeWidth="2px" fill="none" stroke="#bdbdbd"></line>
// </svg>
////////////////////////////////////////////////////////////////////////////////
// FILE: hero-alt.js
// AUTHOR: David Ruvolo
// CREATED: 2019-10-04
// MODIFIED: 2019-11-14
// PURPOSE: react component for page heros
// DEPENDENCIES: react, css
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import "../styles/hero-alt.css"

// render parent element
function hero(props){

    // set default image lists
    const defBgImgs = [
        "hero-bk-brand-accent-alt",
        "hero-bk-brand-accent",
        "hero-bk-brand-alt",
        "hero-bk-brand",
        "hero-bk-gray-alt",
        "hero-bk-gray"
    ]

    // process backgroundImage + css
    let css = props.className ? `hero-alt ${props.className}` : "hero-alt";
    if (props.backgroundImage){
        if( defBgImgs.indexOf(props.backgroundImage) > -1 ){
            css = `${css} hero-background-img ${props.backgroundImage}`
        } else {
            console.error(`Error in component 'Hero': prop 'backgroundImage' used, but value '${props.backgroundImage}' is not valid. Make sure the name matches the file name and update the default image list if needed.`)
        }
    } 

    // render 
    return (
        <header id={props.id ? props.id : null } className={ css }>
            <div className={props.centered ? `hero-content centered` : "hero-content" }>
            { props.children }
            </div>
        </header>
    )
}
export default hero
////////////////////////////////////////////////////////////////////////////////
// FILE: hero.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-11
// MODIFIED: 2019-09-11
// PURPOSE: react component for creating page heros
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import "../styles/hero.css"

const hero = (props) => {

    // process css stlyes for header - set height and background-image
    const headerCSS = {
        backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : null,
        height: props.height ? props.height : "70vh",
    }

    // apply css for the filter element
    const filterCSS = {
        backgroundColor: props.backgroundColor ? props.backgroundColor : "hsla(30, 50%, 20%, 0.2)"
    }

    // apply css for text color
    const textCSS = {
        color: props.textColor ? props.textColor : "#252525"
    }

    // apply css for photo credits
    const photocreditClassNames = `hero-photo-credit ${props.photoCreditBelow ? "position-below" : "position-above"}`;
    const photocreditCSS = {
        color: (!props.textColor && props.photoCreditBelow) === true
            ? "#3f454b"
            : (props.textColor && !props.photoCreditBelow) === true
                ? props.textColor
                : "#3f454b",
        backgroundColor: (props.backgroundColor && !props.photoCreditBelow) === true
            ? "transparent"
            : (!props.backgroundColor && props.photoCreditBelow) === true
                ? "hsla(0, 0%, 97%, 0.5)"
                : props.backgroundColor

    }

    // build component
    return (
        <header id={props.id ? props.id : null} className="hero" style={headerCSS}>
            <div className="hero-content">
                <div className="hero-text">
                    {
                        // should a title be rendered?
                        props.title
                            ? (
                                <h1 className="hero-text hero-title" style={textCSS}>
                                    {props.title}
                                </h1>
                            )
                            : null
                    }
                    {
                        // should a subtitle be rendered?
                        props.subtitle
                            ? (
                                <h2 className="hero-text hero-subtitle" style={textCSS}>
                                    {props.subtitle}
                                </h2>
                            )
                            : null

                    }
                    {
                        // should text be rendered?
                        props.text
                            ? (
                                <p className="hero-text hero-description" style={textCSS}>
                                    {props.text}
                                </p>
                            )
                            : null
                    }
                    {
                        // anything else should there need to be
                        props.children
                    }
                </div>
            </div>
            {
                (props.backgroundImage && !props.photoCredit) === true
                    ? console.warn("No photo credit supplied when background image is specified. Use property 'photoCredit' to supply this information.")
                    : (
                        <cite className={photocreditClassNames} style={photocreditCSS}>
                            {props.photoCredit}
                        </cite>
                    )
            }
            <div className="hero-filter" style={filterCSS}></div>
        </header>
    )
}

export default hero

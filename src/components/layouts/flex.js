////////////////////////////////////////////////////////////////////////////////
// FILE: flex.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-30
// MODIFIED: 2019-11-14
// PURPOSE: react component for flex layouts
// DEPENDENCIES: react
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import "../styles/flex.css"

// define sub-wrapper to manipulate child elements
function FlexWrapper(props){

    // layouts
    const defLayouts = ["50x2", "40x60", "60x40", "70x30", "30x70"];

    // process props
    const layout = props.layout ? props.layout : "50x2";
    if (defLayouts.indexOf(layout) === -1) {
        console.error(`Error in 'FlexLayout' component: '${props.layout}' is not an available layout.`)
    }

    // process child elements
    let elements = React.Children.toArray(props.children);
    for(let i = 0; i < elements.length; i++){
        elements[i] = React.cloneElement( elements[i], { className: `flex-child ${elements[i].props.className}` })
    }
    return (
        <div 
            id={props.id ? props.id : null}
            className={`
                flex flex-${layout}-layout 
                ${props.wrapReverse ? "flex-wrap-reverse" : "flex-wrap-default"} 
                ${props.className ? props.className : null}
                `} 
            aria-label={props.ariaLabel ? props.ariaLabel : null}>
            { elements }
        </div>
    )
}

// render component
function flex(props){
    return (
        <FlexWrapper {...props} >
            { props.children }
        </FlexWrapper>
    )
}

export default flex
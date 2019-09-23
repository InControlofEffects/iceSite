////////////////////////////////////////////////////////////////////////////////
// FILE: button-list.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-21
// MODIFIED: 2019-09-21
// PURPOSE: react component for creating button lists with various onClick handlers
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

import React, { Component } from "react"

export default class List extends Component {

    constructor(props){
        super(props);
    }

    render(){

        // gather input data
        const inputData = {
            ids: this.props.ids,
            labels: this.props.labels,
            btnValues: this.props.btnValues
        }

        // css
        const basecss = this.props.isHorizontal ? `btn-list list-horizontal` : `btn-list` ;
        const css = this.props.css ? `${basecss} ${css}` : basecss;
        const btncss = this.props.btnStyle ? `btn ${this.props.btnStyle}` : `btn btn-outlined`;

        return(
            <ul className={ css }>
                {
                    inputData.ids.map( (d,i) => (
                        <li className="btn-item" key={i}>
                            <button id={`btn-${d}`} className={btncss} data-value={inputData.btnValues[i]} onClick={this.props.onClick}>
                                {inputData.labels[i]}
                            </button>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

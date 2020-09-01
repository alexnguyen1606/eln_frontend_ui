import React from 'react'

export default function Alert(props) {
    return (
        <div className={"col-md-12 alert " + props.style}>
            < strong > {props.message}</strong >
        </div >
    )
}

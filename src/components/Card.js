import React, { Component } from 'react';
import "../index.css"

const Card = (props) => {
    return (
        <div className='container'>{props.children}</div>
    )
}

export default Card;
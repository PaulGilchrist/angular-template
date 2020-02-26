import React from 'react';
import './square.css';

// Requires parent to pass in value ("X", "O", or null) and click handler function reference
const Square = props => (
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
);

export default Square;

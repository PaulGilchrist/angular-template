/* tslint:disable */
// @ts-nocheck
import React from 'react';
import Radium from 'radium';

import styles from './square-styles';

// Requires parent to pass in value ("X", "O", or null) and click handler function reference
const Square = props => (
    <button style={styles.square} onClick={props.onClick}>
        {props.value}
    </button>
);

export default Radium(Square);

import React from 'react';
import './board.css';

import Square from './square';

// Requires parent to pass in squares and click handler function reference
const Board  = props => {
    // Functions
    const renderSquare = i => (
        <Square
            value={props.squareValues[i]}
            onClick={() => props.onClick(i)}
        />
    );
    // UI
    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;

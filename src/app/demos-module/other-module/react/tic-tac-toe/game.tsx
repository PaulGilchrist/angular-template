/* tslint:disable */
// @ts-nocheck
import React, {useState} from 'react';
import Radium from 'radium';
import styles from './game-styles';

import Board from './board';
import { style } from 'd3';

const Game = (props) => {
    // Access environment variables
    console.log(props.message);
    // State
    const [history, setHistory] = useState([{
        squareValues: Array(9).fill(null),
    }]);
    const [moveNumber, setMoveNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    // Functions
    const calculateWinner = squareValues => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squareValues[a] && squareValues[a] === squareValues[b] && squareValues[a] === squareValues[c]) {
                return squareValues[a];
            }
        }
        return null;
    }
    const handleClick = i => {
        const newHistory = history.slice(0, moveNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squareValues = current.squareValues.slice();
        if (calculateWinner(squareValues) || squareValues[i]) {
            return;
        }
        squareValues[i] = xIsNext ? 'X' : 'O';
        // Update state
        setHistory(newHistory.concat([{ 
            squareValues: squareValues,
        }]));
        setMoveNumber(newHistory.length);
        setXIsNext(!xIsNext);
    }
    const jumpTo = move => {
        // Update state
        setMoveNumber(move);
        setXIsNext((move % 2) === 0);
    }
    // Computations
    const current = history[moveNumber];
    const winner = calculateWinner(current.squareValues);
    const moves = history.map((h, index) => {
        const desc = index ?
            'Go to move #' + index :
            'Go to game start';
        return (
            <li key={index}>
                <button onClick={() => jumpTo(index)}>{desc}</button>
            </li>
        );
    });
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
        props.logGameWinner(winner);
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    // UI
    return (
        <div style={styles.game}>
            <div>
                <Board
                    squareValues={current.squareValues}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div style={styles.gameInfo}>
                <div>{status}</div>
                <ol style={styles.ol}>{moves}</ol>
            </div>
        </div>
    );
}
export default Radium(Game);

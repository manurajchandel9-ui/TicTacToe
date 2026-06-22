import { useState } from "react";
import Card from "../Cards/card";
import "./grid.css";
import IsWin from "../Helper/CheckWiner";

function grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const [winer, SetWiner] = useState(null);// turn :true-> O otherwise X
    function play(index) {
        if (turn) {
            board[index] = "O";
        }
        else {
            board[index] = "X";
        }
        const win = IsWin(board,turn?"O":"X");
        if (win) {
            if (win == "O") SetWiner("Player 1 wins [O]");
            else if(win == "X")SetWiner("Player 2 wins [X]");
            else SetWiner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }
    function reset() {
        setBoard(Array(numberOfCards).fill(""));
        setTurn(true);
        SetWiner(null)
    }
    return (
        <div className="grid-Wraper">
            {
                winer && winer!="draw" && (
                    <>
                        <h1 className="turn-highlight">Winer is : {winer}</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }
            {
                winer=="draw" && (
                    <>
                        <h1 className="turn-highlight">Game is draw</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }
            <h1 className="turn-highlight">Current turn : {turn ? "Player 1 [O]" : "Player 2 [X]"}</h1>
            <div className="grid">
                {board.map((ele, idx) => <Card key={idx} setIcon={ele} index={idx} onPlay={play} gameEnd={winer?true:false}/>)}
            </div>
        </div>
    )
}
export default grid;
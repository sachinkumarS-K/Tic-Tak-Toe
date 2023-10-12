import React, { useState } from 'react'
import Cards from '../Components/Cards/Cards';
import   './grid.css'
import isWinner from '../../src/helper/checkWinner'
function Grid({numOfCard}) {
    const [board , setBoard] = useState(Array(numOfCard).fill(""));
    const [turn , setTurn] = useState(true);
    const [winner , setWinner] = useState(null)
    console.log(board);

    function play(idx){
        if(turn == true)
            board[idx] = 'O'
        else 
            board[idx] = 'X'

        const win = isWinner(board , turn ? 'O' : 'X');
        if(win){
            setWinner(win)
        }

        setBoard((pre)=> [...pre]);
        setTurn(!turn);
    }
    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numOfCard).fill(""));
    }
    function checkBoard(){
      return  board.every(e => e!=="")
    }
  return (
    <div className="grid-wrapper">
      {winner && (
        <>
          <h1 className="winnerTitle">Winner is {winner}</h1>
          <button className='btn' onClick={reset}>Reset Game</button>
        </>
      )}

      {checkBoard() && !winner && (
        <>
          <h1 className="winnerTitle">Game Tied !</h1>
          <button className='btn' onClick={reset}>Reset Game</button>
        </>
      )}

      <h1 className="title">Current Turn : {turn ? "O" : "X"} </h1>

      <div className="grid">
        {board.map((e, idx) => {
          return (
            <Cards
              key={idx}
              gameEnd={winner ? true : false}
              onPlay={play}
              player={e}
              idx={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Grid

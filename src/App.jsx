import React from "react";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import Player from "./components/players";
import GameBoard from "./components/Gameboard";
import Log from "./components/Log";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActiveplayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}



const symbols = ["X", "O"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function App() {
  const [players, setplayer] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer = derivedActiveplayer(gameTurn);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  let winner;
  let hasDraw = gameTurn.length === 9 && !winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  function handleSelectBox(rowIndex, colIndex) {
    setGameTurn((prevTurn) => {
      const currentPlayer = derivedActiveplayer(prevTurn);

      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  }

  function handleRematch() {
    setGameTurn([]);
  }

  function handlePlayerNamechange(symbol, newName) {
    setplayer((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={"Player 1"} 
            symbol={"X"}
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNamechange}
          />
          <Player
            initialName={"Player 2"} 
            symbol={"O"}
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNamechange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onSelect={handleRematch} />
        )}
        <GameBoard onSelectBox={handleSelectBox} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

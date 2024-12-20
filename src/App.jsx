import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import { useState } from "react";
import Log from "./components/Log";
import { winningCombination } from "./components/winningCombination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function playerGameBoard(prevGameTurns) {
  let currentPlayer = "X";
  if (prevGameTurns.length > 0 && prevGameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [player, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  const players = playerGameBoard(gameTurns);
  let gameBoard = [...initialGameBoard.map((row) => [...row])];
  for (const turns of gameTurns) {
    const { squre, player } = turns;
    const { row, col } = squre;
    gameBoard[row][col] = player;
  }
  let winner;
  for (const combination of winningCombination) {
    const firstSqureSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSqureSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSqureSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSqureSymbol &&
      firstSqureSymbol === secondSqureSymbol &&
      firstSqureSymbol === thirdSqureSymbol
    ) {
      winner = player[firstSqureSymbol];
    }
  }
  let tie = gameTurns.length === 9 && !winner;
  function handleActivePlayer(rowindex, colindex) {
    setGameTurns((prevGameTurns) => {
      let currentPlayer = playerGameBoard(prevGameTurns);
      const updatedTurns = [
        {
          squre: {
            row: rowindex,
            col: colindex,
          },
          player: currentPlayer,
        },
        ...prevGameTurns,
      ];
      return updatedTurns;
    });
  }
  function handleChangeNameplayer(symbol, newName) {
    setPlayers((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  }
  function handleReset() {
    setGameTurns([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={players === "X"}
            namechange={handleChangeNameplayer}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={players === "O"}
            namechange={handleChangeNameplayer}
          />
        </ol>
        <GameBoard onSelectPlayer={handleActivePlayer} board={gameBoard} />
        {(winner || tie) && <GameOver winner={winner} onReset={handleReset} />}
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;

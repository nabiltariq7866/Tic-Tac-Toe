function GameBoard({ onSelectPlayer, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowindex) => (
        <li key={rowindex}>
          <ol>
            {row.map((playersSymbol, colindex) => (
              <li key={colindex}>
                <button
                  onClick={() => onSelectPlayer(rowindex, colindex)}
                  disabled={playersSymbol !== null}
                >
                  {playersSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;

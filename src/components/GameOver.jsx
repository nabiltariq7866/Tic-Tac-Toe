function GameOver({ winner, onReset }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won the game</p>}
      {!winner && <p>Tie game</p>}
      <p>
        <button onClick={onReset}>Rematch!</button>
      </p>
    </div>
  );
}

export default GameOver;

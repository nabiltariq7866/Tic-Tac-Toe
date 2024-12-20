function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn) => (
        <li key={`${turn.squre.row}${turn.squre.col}`}>
          {turn.player} selected {turn.squre.row}, {turn.squre.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;

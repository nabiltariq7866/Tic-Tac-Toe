import { useState } from "react";

function Player({ name, symbol, isActive, namechange }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e) {
    console.log(e);
    setPlayerName(e.target.value);
  }
  function editinThePlayer() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      namechange(symbol, playerName);
    }
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editinThePlayer}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;

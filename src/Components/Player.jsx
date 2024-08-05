import { useState } from "react";

export default function player({ name, symbol, isActive, onChangeName }) {
  const [playername, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playername);
    }
  }

  let editableplayerName = <span className="player-name">{playername}</span>;
  if (isEditing) {
    editableplayerName = (
      <input type="text" required value={playername} onChange={handleChange} />
    );
  }
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editableplayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

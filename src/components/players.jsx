import React from "react";
import { useState } from "react";

export default function Player({ initialName, symbol, isActive,onChangeName }) {
  let [isEdating, setIsEdating] = useState(false);
  let [playerName, setPlayerName] = useState(initialName);

  function clickSelect() {
    setIsEdating((edating) => !edating);
    if (isEdating){

      onChangeName(symbol,playerName)
    }
  }

  function handleSelect(event) {
    setPlayerName(event.target.value);
    // console.log(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit'

  if (isEdating) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleSelect} />
    );
    // btnCaption="Save"
  }

  return (
    <li className={isActive ? 'active' : null}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={clickSelect}>{!isEdating ? "edit" : "save"}</button>
      </span>
    </li>
  );
}

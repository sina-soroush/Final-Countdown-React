import { useState, useRef } from "react";
import trophy from "../assets/trophy.png";

export default function Player({ wins = [] }) {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [editing, setEditing] = useState(true);
  const PlayerName = useRef();

  function handelClick() {
    if (editing) {
      const val = PlayerName.current?.value?.trim() ?? "";
      if (val) {
        setEnteredPlayerName(val);
        setEditing(false);
        PlayerName.current.value = "";
      }
    } else {
      setEditing(true);
      setTimeout(() => {
        if (PlayerName.current) {
          PlayerName.current.value = enteredPlayerName ?? "";
          try { PlayerName.current.focus(); } catch (e) {}
        }
      }, 0);
    }
  }

  const buttonLabel = editing ? (enteredPlayerName ? "Save" : "Set Name") : "Edit Name";

  return (
    <section id="player">
      <div className="player-header">
        <h2 className="player-greeting">
          Welcome <span className="player-name-display">{enteredPlayerName ?? 'unknown entity'}</span>
        </h2>
        {!editing && enteredPlayerName && (
          <button className="player-edit-btn" onClick={handelClick} aria-label="Edit player name">
            Edit
          </button>
        )}
      </div>

      {editing && (
        <div className="player-controls editing">
          <input
            className="player-input"
            type="text"
            ref={PlayerName}
            placeholder="Enter your name"
            aria-label="Player name"
          />
          <button className="player-save-btn" onClick={handelClick}>
            {buttonLabel}
          </button>
        </div>
      )}

      <div aria-live="polite" className="sr-only">
        {enteredPlayerName ? `${enteredPlayerName} saved as player name` : ''}
      </div>

      {wins && wins.length > 0 && (
        <div className="player-win-list">
          {wins.map((w, i) => (
            <div key={`${w}-${i}`} className="player-win-banner">
              <img src={trophy} alt="Trophy" className="win-icon" width={48} height={48} />
              <span className="win-text">You conquered the <strong>{w}</strong> challenge!</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

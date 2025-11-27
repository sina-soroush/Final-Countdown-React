import { useState,useRef } from "react";


export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const PlayerName = useRef();

  function handelClick() {
    setEnteredPlayerName(PlayerName.current.value);
    PlayerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'unknown entity' }</h2>
      <p>
        <input
          type="text"
          ref={PlayerName}
          placeholder="Your name"
        />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}

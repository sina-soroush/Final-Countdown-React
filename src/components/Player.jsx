import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setEnteredPlayerName(event.target.value);
  }
  function handelClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome { submitted ? enteredPlayerName : 'unknown entity' }</h2>
      <p>
        <input
          type="text"
          onChange={handleChange}
          value={enteredPlayerName}
          placeholder="Your name"
        />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}

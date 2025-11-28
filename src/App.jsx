import { useState } from 'react';
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  const [wins, setWins] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  function handleResult(result, title) {
    if (result === 'win') {
      try {
        console.debug(`App: received win from ${title}`);
        setWins((s) => [...s, title]);
      } catch (e) {
        console.error('Error updating wins', e);
      }
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2500);
    }
  }

  return (
    <>
      <Player wins={wins} />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1} onResult={handleResult} />
        <TimerChallenge title="medium" targetTime={5} onResult={handleResult} />
        <TimerChallenge title="hard" targetTime={10} onResult={handleResult} />
        <TimerChallenge title="very hard" targetTime={15} onResult={handleResult} />
      </div>
    </>
  );
}

export default App;

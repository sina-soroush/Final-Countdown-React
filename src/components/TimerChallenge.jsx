import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timer = useRef(null);

    function handelStart() {
        setTimerExpired(false);
        setTimerStarted(true);
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            setTimerStarted(false);
            timer.current = null;
        }, targetTime * 1000);
    }

    function handelStop() {
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = null;
        }
        setTimerStarted(false);
    }

    useEffect(() => {
        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
                timer.current = null;
            }
        };
    }, []);

    return (
        <>
            {timerExpired && <ResultModal targetTime={targetTime} result="lost" onClose={() => setTimerExpired(false)} />}
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p className="challenge-expired">You lost!</p>}
                <p className="challenge-time">
                    Target Time: {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handelStop : handelStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Timer is running...' : 'Timer is not started'}
                </p>
            </section>
        </>
    );
}

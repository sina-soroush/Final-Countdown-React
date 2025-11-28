import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal.jsx";
import Confetti from "./Confetti.jsx";

export default function TimerChallenge({ title, targetTime, onResult }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const [result, setResult] = useState(null);
    const timeoutRef = useRef(null);
    const intervalRef = useRef(null);
    const startTime = useRef(null);
    const dialog = useRef(null);

    function handelStart() {
        // reset state
        setElapsed(0);
        setTimerExpired(false);
        setResult(null);
        startTime.current = Date.now();
        timeoutRef.current = setTimeout(() => {
            setTimerExpired(true);
            setResult("lost");
            if (typeof onResult === 'function') {
                try { console.debug(`TimerChallenge(${title}): reporting lost`); onResult('lost', title); } catch(e) { console.error('onResult (lost) handler threw', e); }
            }
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            try {
                dialog.current?.showModal();
            } catch (e) {}
            setTimerStarted(false);
        }, targetTime * 1000);

        intervalRef.current = setInterval(() => {
            setElapsed((Date.now() - startTime.current) / 1000);
        }, 100);

        setTimerStarted(true);
    }

    function handelStop() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        const finalElapsed = startTime.current ? (Date.now() - startTime.current) / 1000 : elapsed;
        setElapsed(finalElapsed);
        setTimerStarted(false);
        if (Math.abs(Math.round(finalElapsed) - targetTime) <= 1) {
            setResult("win");
            if (typeof onResult === 'function') {
                try { console.debug(`TimerChallenge(${title}): reporting win`); onResult('win', title); } catch(e) { console.error('onResult (win) handler threw', e); }
            }
            try {
                dialog.current?.showModal();
            } catch (e) {}
        }
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, []);

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result={result} />
            <section className="challenge">
                <h2>{title}</h2>
                {result === "win" && <Confetti count={18} />}
                <p className="challenge-time">
                    Target Time: {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>

                <p className="challenge-countdown">
                    {timerStarted ? `${elapsed.toFixed(1)}s` : `${elapsed.toFixed(1)}s`}
                </p>

                <p>
                    <button onClick={timerStarted ? handelStop : handelStart}>
                        {timerStarted ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerStarted ? "active" : undefined}>
                    {timerStarted ? "Timer is running..." : "Timer is not started"}
                </p>
            </section>
        </>
    );
}

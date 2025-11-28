import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
    { result, targetTime },
    ref
) {
    return (
        <dialog ref={ref} className="result-modal">
            <h2>Result: {result}</h2>
            <p>
                Target time: <strong>{targetTime}</strong> second
                {targetTime > 1 ? "s" : ""}
            </p>
            <p>
                You stopped the timer with <strong>{result}</strong>
            </p>
            <form method="dialog">
                <button onClick={onClose}>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;

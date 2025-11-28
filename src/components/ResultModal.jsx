import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
    { result, targetTime },
    ref
) {
    function onClose() {
        try {
            if (ref && typeof ref === "object" && ref.current && typeof ref.current.close === "function") {
                ref.current.close();
            }
        } catch (e) {console.error("Failed to close the dialog:", e);
        }
    }
    return (
        <dialog ref={ref} className="result-modal">
            <h2>Result: {result}</h2>
            <p>
                Target time: <strong>{targetTime}</strong> second
                {targetTime > 1 ? "s" : ""}
            </p>
            <p>
                You stopped the timer, you <strong>{result}</strong>
            </p>
            <form method="dialog">
                <button onClick={onClose}>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;

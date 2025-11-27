export default function ResultModal({ result, targetTime, onClose = () => {} }) {
    return (
        <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="result-modal">
                <h2>Result: {result}</h2>
                <p>Target time: <strong>{targetTime}</strong> second{targetTime > 1 ? 's' : ''}</p>
                <p>You stopped the timer with <strong>{result}</strong></p>
                <div style={{ textAlign: 'right' }}>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}
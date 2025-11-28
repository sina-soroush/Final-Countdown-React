import React from 'react';

export default function Confetti({ count = 20 }) {
    const colors = ["#00ff41", "#39ff14", "#00cc33", "#ffdd57", "#ff6b6b"];
    const pieces = Array.from({ length: count });

    return (
        <div className="confetti" aria-hidden>
            {pieces.map((_, i) => {
                const left = Math.random() * 100;
                const delay = (Math.random() * 0.45).toFixed(2) + 's';
                const duration = (0.9 + Math.random() * 0.8).toFixed(2) + 's';
                const rotate = Math.floor(Math.random() * 360);
                const bg = colors[i % colors.length];
                return (
                    <span
                        key={i}
                        className="confetti-piece"
                        style={{
                            left: `${left}%`,
                            background: bg,
                            transform: `rotate(${rotate}deg)`,
                            animationDelay: delay,
                            animationDuration: duration,
                        }}
                    />
                );
            })}
        </div>
    );
}

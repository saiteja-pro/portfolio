import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import './IntroLoader.css';

function IntroLoader({ onComplete }) {
    const { theme } = useContext(ThemeContext);
    const [phase, setPhase] = useState('loading');

    useEffect(() => {
        const t1 = setTimeout(() => setPhase('reveal'), 100);
        const t2 = setTimeout(() => setPhase('exit'), 2800);
        const t3 = setTimeout(() => {
            setPhase('done');
            if (onComplete) onComplete();
        }, 3400);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [onComplete]);

    if (phase === 'done') return null;

    const isDark = theme.type === 'dark';
    const firstStr = headerData.firstName || 'Sai Teja';
    const lastStr = headerData.lastName || 'Bhoomraogari';

    return (
        <div
            className={`intro${phase === 'exit' ? ' intro--exit' : ''}`}
            data-theme={isDark ? 'dark' : 'light'}
            aria-hidden="true"
        >
            <div className={`intro__typography${phase === 'reveal' ? ' intro__typography--visible' : ''}`}>
                <div className="intro__name-display">
                    <h1 className="intro__cursive">
                        {firstStr.split('').map((letter, i) => (
                            <span
                                key={`c-${i}`}
                                className="intro__char"
                                style={{ animationDelay: `${0.1 + i * 0.05}s` }}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </span>
                        ))}
                    </h1>
                    <h2 className="intro__sans">
                        {lastStr.split('').map((letter, i) => (
                            <span
                                key={`s-${i}`}
                                className="intro__char"
                                style={{ animationDelay: `${0.4 + i * 0.04}s` }}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </span>
                        ))}
                    </h2>
                </div>
            </div>

            <div className="intro__progress">
                <div className="intro__progress-bar" />
            </div>
        </div>
    );
}

export default IntroLoader;

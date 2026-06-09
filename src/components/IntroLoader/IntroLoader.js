import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import './IntroLoader.css';
function IntroLoader({ onComplete }) {
    const { theme } = useContext(ThemeContext);
    const [phase, setPhase] = useState('loading'); // loading -> reveal -> exit -> done

    // Phase timeline
    useEffect(() => {
        // Shorter reveal delay for instant typography gratification
        const t1 = setTimeout(() => setPhase('reveal'), 100);
        const t2 = setTimeout(() => setPhase('exit'), 3000); // 3 seconds of viewing
        const t3 = setTimeout(() => {
            setPhase('done');
            if (onComplete) onComplete();
        }, 3800); // +800ms for the flight animation
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [onComplete]);

    if (phase === 'done') return null;

    const isDark = theme.type === 'dark';

    // Split the names into letters for staggered animation
    const firstStr = headerData.firstName || 'Sai Teja';
    const lastStr = headerData.lastName || 'Bhoomraogari';
    
    const firstLetters = firstStr.split('');
    const lastLetters = lastStr.split('');

    return (
        <div
            className={`intro ${phase === 'exit' ? 'intro--exit' : ''}`}
            data-theme={isDark ? 'dark' : 'light'}
        >
            {/* Ambient glow */}
            <div className="intro__glow" />

            {/* Subtle grid texture */}
            <div className="intro__texture" />

            {/* Typography Card */}
            <div className={`intro__typography ${phase === 'reveal' ? 'intro__typography--visible' : ''}`}>
                <div className="intro__name-display">
                    <h1 className="intro__cursive">
                        {firstLetters.map((letter, i) => (
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
                        {lastLetters.map((letter, i) => (
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

            {/* Bottom progress bar */}
            <div className="intro__progress">
                <div className="intro__progress-bar" />
            </div>
        </div>
    );
}

export default IntroLoader;

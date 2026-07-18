import React, { useState, useEffect, useRef, useCallback } from 'react';
import './MascotBuddy.css';

const TECH_QUERIES = [
    "Are we inspecting the DOM or just admiring the layout?",
    "Tabs or spaces? Choose carefully, my database is watching.",
    "Did you deploy directly to main today? I won't tell.",
    "I scanned the console: 0 critical errors. We are ready to ship.",
    "Is this infrastructure Terraform'd, or are we living on the edge?",
    "If you run 'rm -rf /' I will start walking backwards.",
    "Why do programmers wear glasses? Because they can't C#.",
    "An SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    "A database administrator walks into a NoSQL bar, but leaves because he couldn't find a table.",
    "There are 10 types of people in the world: those who understand binary, and those who don't.",
    "Why did the programmer quit their job? Because they didn't get arrays.",
    "I have a joke about UDP, but you might not get it.",
    "There is no place like 127.0.0.1.",
    "My thread pool is resting. Please do not invoke me synchronously."
];

// Detect mobile/touch device for performance gating
const isMobileDevice = () => window.innerWidth <= 768 || 'ontouchstart' in window;

function MascotBuddy() {
    // Use refs for animation values to avoid React re-renders on every frame
    const posRef = useRef({ x: window.innerWidth - 120, y: 400 });
    const targetXRef = useRef(window.innerWidth - 120);
    const containerRef = useRef(null);
    const speechTimeoutRef = useRef(null);
    const animFrameRef = useRef(null);
    const stateRef = useRef('falling');
    const directionRef = useRef('left');
    const mouseOffsetRef = useRef({ x: 0, y: 0 });

    // React state only for things that affect the DOM structure (speech, visual state class)
    const [speech, setSpeech] = useState("Hi! I'm Sai's dev buddy. Drag me around!");
    const [visualState, setVisualState] = useState('falling');
    const [visualDir, setVisualDir] = useState('left');
    const [isMobile] = useState(isMobileDevice);

    // Apply position directly to DOM element (bypass React render cycle)
    const applyPosition = useCallback(() => {
        if (containerRef.current) {
            const { x, y } = posRef.current;
            containerRef.current.style.transform = `translate3d(${x}px, ${-y - 12}px, 0)`;
        }
    }, []);

    // Sync React visual state with ref state (batched, not per-frame)
    const syncVisualState = useCallback((newState, newDir) => {
        setVisualState(newState);
        if (newDir !== undefined) setVisualDir(newDir);
    }, []);

    // Hide initial welcome message after 5 seconds
    useEffect(() => {
        speechTimeoutRef.current = setTimeout(() => {
            setSpeech('');
        }, 5000);
        return () => clearTimeout(speechTimeoutRef.current);
    }, []);

    // Initial position apply
    useEffect(() => {
        applyPosition();
    }, [applyPosition]);

    // Physics-based falling using requestAnimationFrame (GPU-friendly)
    useEffect(() => {
        if (visualState !== 'falling') return;

        let velocityY = 0;
        const gravity = 0.8;
        const bounceDamping = 0.35;
        let active = true;

        const tick = () => {
            if (!active) return;

            velocityY += gravity;
            posRef.current.y -= velocityY;

            if (posRef.current.y <= 0) {
                if (velocityY > 4) {
                    velocityY = -velocityY * bounceDamping;
                    posRef.current.y = 0.1;
                } else {
                    posRef.current.y = 0;
                    applyPosition();
                    active = false;

                    setSpeech("Ouch! Physics engine works.");
                    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
                    speechTimeoutRef.current = setTimeout(() => setSpeech(''), 4000);

                    stateRef.current = 'sitting';
                    syncVisualState('sitting');
                    return;
                }
            }

            applyPosition();
            animFrameRef.current = requestAnimationFrame(tick);
        };

        animFrameRef.current = requestAnimationFrame(tick);
        return () => {
            active = false;
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [visualState, applyPosition, syncVisualState]);

    // State machine scheduler
    useEffect(() => {
        if (visualState === 'dragging' || visualState === 'falling' || visualState === 'walking') return;

        // On mobile: longer intervals, no walking (most expensive animation)
        const interval = isMobile ? 18000 : 12000;

        const stateInterval = setInterval(() => {
            const roll = Math.random();

            if (!isMobile && roll < 0.35) {
                // Walking (desktop only)
                const maxRange = 200;
                const currentWidth = window.innerWidth;
                const delta = (Math.random() * maxRange * 2) - maxRange;
                const newTarget = Math.max(40, Math.min(currentWidth - 100, posRef.current.x + delta));

                targetXRef.current = newTarget;
                const newDir = newTarget < posRef.current.x ? 'left' : 'right';
                directionRef.current = newDir;
                stateRef.current = 'walking';
                syncVisualState('walking', newDir);
            } else if (roll < (isMobile ? 0.5 : 0.6)) {
                stateRef.current = 'sleeping';
                syncVisualState('sleeping');
            } else if (roll < (isMobile ? 0.8 : 0.85)) {
                stateRef.current = 'typing';
                syncVisualState('typing');
            } else {
                stateRef.current = 'sitting';
                syncVisualState('sitting');
            }
        }, interval);

        return () => clearInterval(stateInterval);
    }, [visualState, isMobile, syncVisualState]);

    // Walking movement using requestAnimationFrame (desktop only)
    useEffect(() => {
        if (visualState !== 'walking') return;

        let active = true;
        const stepSize = 1.5;

        const tick = () => {
            if (!active) return;

            const diff = targetXRef.current - posRef.current.x;

            if (Math.abs(diff) <= stepSize) {
                posRef.current.x = targetXRef.current;
                applyPosition();
                active = false;

                const nextState = Math.random() < 0.5 ? 'typing' : 'sitting';
                stateRef.current = nextState;
                syncVisualState(nextState);
                return;
            }

            posRef.current.x += diff > 0 ? stepSize : -stepSize;
            applyPosition();
            animFrameRef.current = requestAnimationFrame(tick);
        };

        animFrameRef.current = requestAnimationFrame(tick);
        return () => {
            active = false;
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [visualState, applyPosition, syncVisualState]);

    // Drag-and-drop handlers
    const handlePointerDown = useCallback((e) => {
        e.preventDefault();
        stateRef.current = 'dragging';
        syncVisualState('dragging');
        setSpeech("Wheee!");
        if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);

        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);

        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            mouseOffsetRef.current = {
                x: clientX - rect.left,
                y: rect.bottom - clientY
            };
        }
    }, [syncVisualState]);

    useEffect(() => {
        if (visualState !== 'dragging') return;

        const handleMove = (e) => {
            const clientX = e.clientX || (e.touches && e.touches[0].clientX);
            const clientY = e.clientY || (e.touches && e.touches[0].clientY);

            posRef.current.x = Math.max(10, Math.min(window.innerWidth - 70, clientX - mouseOffsetRef.current.x));
            posRef.current.y = Math.max(0, window.innerHeight - clientY - mouseOffsetRef.current.y);
            applyPosition();
        };

        const handleUp = () => {
            if (posRef.current.y > 0) {
                stateRef.current = 'falling';
                syncVisualState('falling');
            } else {
                stateRef.current = 'sitting';
                syncVisualState('sitting');
                setSpeech("Safely landed!");
                speechTimeoutRef.current = setTimeout(() => setSpeech(''), 3000);
            }
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleUp);
        window.addEventListener('touchmove', handleMove, { passive: true });
        window.addEventListener('touchend', handleUp);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleUp);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleUp);
        };
    }, [visualState, applyPosition, syncVisualState]);

    const handlePetClick = useCallback(() => {
        if (stateRef.current === 'dragging' || stateRef.current === 'falling') return;

        stateRef.current = 'sitting';
        syncVisualState('sitting');
        const randomQuery = TECH_QUERIES[Math.floor(Math.random() * TECH_QUERIES.length)];
        setSpeech(randomQuery);

        if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
        speechTimeoutRef.current = setTimeout(() => {
            setSpeech('');
        }, 5000);
    }, [syncVisualState]);

    // Bubble edge detection
    const getBubbleClassName = useCallback(() => {
        const threshold = 240;
        const x = posRef.current.x;
        if (x > window.innerWidth - threshold) {
            return 'shimeji__bubble shimeji__bubble--right-edge';
        }
        if (x < threshold) {
            return 'shimeji__bubble shimeji__bubble--left-edge';
        }
        return 'shimeji__bubble';
    }, []);

    return (
        <div
            className="shimeji"
            ref={containerRef}
        >
            {/* Speech bubble with edge detection */}
            {speech && (
                <div className={getBubbleClassName()}>
                    {speech}
                </div>
            )}

            {/* Zzz indicators for sleeping state */}
            {visualState === 'sleeping' && !speech && (
                <div className="shimeji__zzz">
                    <span>z</span>
                    <span>z</span>
                    <span>z</span>
                </div>
            )}

            {/* The Shimeji Character */}
            <div
                className={`shimeji__pet state-${visualState} ${visualDir}`}
                onMouseDown={handlePointerDown}
                onTouchStart={handlePointerDown}
                onClick={handlePetClick}
                role="button"
                tabIndex={0}
                aria-label="Drag and interact with developer pet"
                title="Drag me or click me!"
            >
                <svg viewBox="0 0 100 100" className="shimeji__svg">
                    {/* Tail */}
                    <path
                        d={visualState === 'sleeping' ? "M 20 65 Q 12 65 15 58" : "M 20 60 Q 10 50 15 35 Q 20 20 30 35"}
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        className="shimeji__tail"
                    />

                    {/* Feet / Legs */}
                    <ellipse cx="40" cy="85" rx="6" ry="8" fill="var(--text-primary)" className="shimeji__leg shimeji__leg-front" />
                    <ellipse cx="60" cy="85" rx="6" ry="8" fill="var(--text-primary)" className="shimeji__leg shimeji__leg-back" />

                    {/* Body */}
                    <rect x="30" y="45" width="40" height="35" rx="15" fill="var(--bg-surface)" stroke="var(--border-medium)" strokeWidth="3" />

                    {/* Collar with gold monogram tag */}
                    <rect x="35" y="48" width="30" height="4" fill="var(--accent)" />
                    <circle cx="50" cy="55" r="5" fill="var(--accent)" />

                    {/* Head */}
                    <rect x="25" y="15" width="50" height="35" rx="16" fill="var(--bg-surface)" stroke="var(--border-medium)" strokeWidth="3" />

                    {/* Ears */}
                    <polygon points="28,16 15,2 38,15" fill="var(--accent)" />
                    <polygon points="72,16 85,2 62,15" fill="var(--accent)" />

                    {/* Glasses & Eyes */}
                    {visualState === 'sleeping' ? (
                        <>
                            <path d="M 34 32 Q 40 36 46 32" fill="none" stroke="var(--text-primary)" strokeWidth="3" strokeLinecap="round" />
                            <path d="M 54 32 Q 60 36 66 32" fill="none" stroke="var(--text-primary)" strokeWidth="3" strokeLinecap="round" />
                        </>
                    ) : (
                        <>
                            <circle cx="40" cy="32" r="10" fill="none" stroke="var(--accent)" strokeWidth="3" />
                            <circle cx="60" cy="32" r="10" fill="none" stroke="var(--accent)" strokeWidth="3" />
                            <line x1="47" y1="32" x2="53" y2="32" stroke="var(--accent)" strokeWidth="3" />

                            <circle cx="40" cy="32" r="3" fill="var(--text-primary)" />
                            <circle cx="60" cy="32" r="3" fill="var(--text-primary)" />
                        </>
                    )}

                    {/* Nose and mouth */}
                    <path d="M 48 37 Q 50 39 52 37" fill="none" stroke="var(--text-primary)" strokeWidth="2" />

                    {/* Laptop element for typing state */}
                    {visualState === 'typing' && (
                        <g className="shimeji__laptop">
                            <polygon points="68,82 85,82 92,60 80,60" fill="var(--bg-raised)" stroke="var(--border-medium)" strokeWidth="2" />
                            <polygon points="72,80 84,80 90,62 82,62" fill="var(--accent-dim)" />
                            <rect x="62" y="81" width="22" height="4" rx="2" fill="var(--text-primary)" />
                        </g>
                    )}
                </svg>
            </div>
        </div>
    );
}

export default MascotBuddy;

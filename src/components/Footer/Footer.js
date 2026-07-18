import React, { useState } from 'react';
import mascot from '../../assets/png/mascot.png';
import './Footer.css';
import { headerData } from '../../data/headerData';

const MESSAGES = [
    'Still here? Go build something.',
    'Coffee: the original cloud infrastructure.',
    'This page was hand-coded. No drag-and-drop.',
    'AWS bill incoming...',
    "git commit -m 'ship it'",
    'Open to opportunities. Scroll up.',
];

function Footer() {
    const year = new Date().getFullYear();
    const [msgIndex, setMsgIndex] = useState(0);
    const [showMsg, setShowMsg] = useState(false);

    const handleMascotClick = () => {
        setShowMsg(true);
        setMsgIndex((i) => (i + 1) % MESSAGES.length);
        setTimeout(() => setShowMsg(false), 2800);
    };

    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__container">
                <span className="footer__name">{headerData.firstName}</span>
                <span className="footer__copy">
                    {year}. Designed and built by Sai Teja Bhoomraogari.
                </span>
            </div>

            {/* Mascot */}
            <div className="footer__mascot-wrap" aria-hidden="true">
                {showMsg && (
                    <div className="footer__mascot-msg">
                        {MESSAGES[msgIndex]}
                    </div>
                )}
                <button
                    className="footer__mascot-btn"
                    onClick={handleMascotClick}
                    title="Click me"
                    tabIndex={-1}
                >
                    <img
                        src={mascot}
                        alt="Sai Teja mascot"
                        className="footer__mascot-img"
                        draggable={false}
                    />
                </button>
            </div>
        </footer>
    );
}

export default Footer;

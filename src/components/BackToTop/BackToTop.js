import React, { useState, useEffect, useContext } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';
import { ThemeContext } from '../../contexts/ThemeContext';
import './BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrolled > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisible, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
            onClick={scrollToTop}
            aria-label='Back to top'
            data-theme={theme.type}
        >
            <IoArrowUpOutline className="back-to-top__icon" />
        </button>
    );
}

export default BackToTop;

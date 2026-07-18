import React, { useContext, useState, useEffect } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { IoSunny, IoMoon } from 'react-icons/io5';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';
import { darkTheme, lightTheme } from '../../theme/theme';

const SECTION_IDS = ['work', 'experience', 'recognition', 'writing', 'volunteering', 'contacts'];

function Navbar({ onOpenPalette }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const { theme, setTheme } = useContext(ThemeContext);
    const isDark = theme.type === 'dark';

    const navLinks = [
        { to: '/#work', label: 'Work', id: 'work' },
        { to: '/#experience', label: 'Experience', id: 'experience' },
        { to: '/#recognition', label: 'Recognition', id: 'recognition' },
        { to: '/#writing', label: 'Writing', id: 'writing' },
        { to: '/#volunteering', label: 'Community', id: 'volunteering' },
        { to: '/#contacts', label: 'Contact', id: 'contacts' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);

            if (window.scrollY < 400) {
                setActiveSection('');
                return;
            }

            for (const id of SECTION_IDS) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top >= -80 && rect.top <= 280) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change or escape key
    useEffect(() => {
        if (!mobileOpen) return;
        const handleKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [mobileOpen]);

    const toggleTheme = () => {
        setTheme(isDark ? lightTheme : darkTheme);
    };

    return (
        <>
            <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} aria-label="Main navigation">
                <div className="navbar__inner">
                    <NavLink to="/" smooth className="navbar__wordmark" aria-label="Home">
                        {headerData.firstName}
                    </NavLink>

                    <ul className="navbar__links">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <NavLink
                                    to={link.to}
                                    smooth
                                    duration={1200}
                                    className={`navbar__link${activeSection === link.id ? ' navbar__link--active' : ''}`}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="navbar__controls">
                        {onOpenPalette && (
                            <button
                                className="navbar__cmd-hint"
                                onClick={onOpenPalette}
                                aria-label="Open command palette (Cmd+K)"
                            >
                                <span className="navbar__cmd-hint-text">
                                    <kbd>⌘</kbd><kbd>K</kbd>
                                </span>
                            </button>
                        )}
                        <button
                            className="navbar__theme-btn"
                            onClick={toggleTheme}
                            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                        >
                            {isDark ? <IoSunny /> : <IoMoon />}
                        </button>

                        <button
                            className={`navbar__hamburger${mobileOpen ? ' navbar__hamburger--open' : ''}`}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileOpen}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`}
                aria-hidden={!mobileOpen}
            >
                <ul className="navbar__mobile-links">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <NavLink
                                to={link.to}
                                smooth
                                duration={1200}
                                className="navbar__mobile-link"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {mobileOpen && (
                <div
                    className="navbar__overlay"
                    onClick={() => setMobileOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    );
}

export default Navbar;
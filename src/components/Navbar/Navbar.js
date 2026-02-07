import React, { useContext, useState, useEffect } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { IoSunny, IoMoon, IoMenuSharp, IoClose } from 'react-icons/io5';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';
import { darkTheme, lightTheme } from '../../theme/theme';

const SECTION_IDS = ['experience', 'education', 'achievement', 'blog', 'contacts'];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const { theme, setTheme } = useContext(ThemeContext);
    const [isDark, setIsDark] = useState(theme.type === 'dark');

    const navLinks = [
        { to: '/#experience', label: 'Experience', id: 'experience' },
        { to: '/#education', label: 'Education', id: 'education' },
        { to: '/#achievement', label: 'Achievements', id: 'achievement' },
        { to: '/#blog', label: 'Writing', id: 'blog' },
        { to: '/#contacts', label: 'Contact', id: 'contacts' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Don't highlight any section if we're near the top (landing area)
            if (window.scrollY < 500) {
                setActiveSection('');
                return;
            }

            let currentSection = '';

            // Find section whose top is closest to viewport top (within reasonable range)
            for (const sectionId of SECTION_IDS) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Section is active if its top is between -100 and 300 pixels from viewport top
                    if (rect.top >= -100 && rect.top <= 300) {
                        currentSection = sectionId;
                        break;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsDark(theme.type === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        if (isDark) {
            setTheme(lightTheme);
        } else {
            setTheme(darkTheme);
        }
        setIsDark(!isDark);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const useStyles = makeStyles((t) => ({
        themeToggleButton: {
            height: '38px',
            width: '38px',
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
                transform: 'scale(1.1)',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)',
            },
        },
        themeIcon: {
            fontSize: '1.1rem',
            color: theme.tertiary,
            transition: 'all 0.3s ease',
        },
        mobileMenuButton: {
            display: 'none',
            height: '40px',
            width: '40px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            color: theme.tertiary,
            fontSize: '1.5rem',
            [t.breakpoints.down('sm')]: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            style={{
                backgroundColor: scrolled
                    ? (isDark ? 'rgba(10, 10, 10, 0.9)' : 'rgba(250, 250, 250, 0.9)')
                    : 'transparent'
            }}
        >
            <div className='navbar--container'>
                <NavLink to='/' smooth={true}>
                    <h1 style={{ color: theme.tertiary }}>{headerData.firstName}</h1>
                </NavLink>

                <nav className='navbar--links'>
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            smooth={true}
                            duration={2000}
                            className={`navbar--link ${activeSection === link.id ? 'active' : ''}`}
                            style={{ color: theme.tertiary }}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className='navbar--controls'>
                    <IconButton
                        className={classes.themeToggleButton}
                        onClick={toggleTheme}
                        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                    >
                        {isDark ? (
                            <IoSunny className={classes.themeIcon} />
                        ) : (
                            <IoMoon className={classes.themeIcon} />
                        )}
                    </IconButton>

                    <button
                        className={classes.mobileMenuButton}
                        onClick={toggleMobileMenu}
                        aria-label='Open menu'
                    >
                        <IoMenuSharp />
                    </button>
                </div>
            </div>

            {/* Backdrop overlay */}
            <div
                className={`navbar--mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
                onClick={closeMobileMenu}
            />

            {/* Mobile Drawer Menu */}
            <div
                className={`navbar--mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
                style={{
                    backgroundColor: isDark ? '#0a0a0a' : '#fafafa'
                }}
            >
                <button
                    className='navbar--mobile-close'
                    onClick={closeMobileMenu}
                    style={{ color: theme.tertiary }}
                    aria-label='Close menu'
                >
                    <IoClose />
                </button>

                <div className='navbar--mobile-links'>
                    {navLinks.filter(link => link.id !== 'contacts').map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            smooth={true}
                            duration={2000}
                            className={`navbar--mobile-link ${activeSection === link.id ? 'active' : ''}`}
                            style={{ color: theme.tertiary }}
                            onClick={closeMobileMenu}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <NavLink
                    to='/#contacts'
                    smooth={true}
                    className='navbar--mobile-cta'
                    onClick={closeMobileMenu}
                >
                    Get in Touch
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
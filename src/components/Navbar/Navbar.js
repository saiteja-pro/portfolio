import React, { useContext, useState, useEffect } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { IoMenuSharp, IoHomeSharp, IoSunny, IoMoon } from 'react-icons/io5';
import { HiDocumentText, HiStar, HiLightBulb } from 'react-icons/hi';
import { BsFillGearFill, BsTrophyFill } from 'react-icons/bs';
import { MdPhone, MdRecommend } from 'react-icons/md';
import { FaUser, FaFolderOpen, FaYoutube, FaHandsHelping } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';
import { darkTheme, lightTheme } from '../../theme/theme';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setHandleDrawer, setTheme } = useContext(ThemeContext);
    const [isDark, setIsDark] = useState(theme.type === 'dark');

    // Scroll detection for glassmorphic navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Sync isDark state with theme
    useEffect(() => {
        setIsDark(theme.type === 'dark');
    }, [theme]);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const toggleTheme = () => {
        if (isDark) {
            setTheme(lightTheme);
        } else {
            setTheme(darkTheme);
        }
        setIsDark(!isDark);
    };

    const useStyles = makeStyles((t) => ({
        navMenu: {
            fontSize: '2.5rem',
            color: theme.tertiary,
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            transition: 'all 0.3s',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
            '&:hover': {
                transform: 'translateY(-10px) scale(1.1)',
                opacity: 0.8,
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },
            [t.breakpoints.down('xs')]: {
                fontSize: '2rem',
            },
        },
        MuiDrawer: {
            padding: '2em 1.5em',
            width: '280px',
            fontFamily: 'var(--font-primary, Inter, sans-serif)',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '18px',
            background: isDark ? 'rgba(10, 10, 10, 0.95)' : 'rgba(250, 250, 250, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: 'none',
            borderLeft: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.3)',
            [t.breakpoints.down('sm')]: {
                width: '240px',
                padding: '1.5em 1em',
            },
        },
        closebtnIcon: {
            fontSize: '1.75rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.tertiary,
            position: 'absolute',
            right: 30,
            top: 30,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
                opacity: 0.7,
                transform: 'rotate(90deg) scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                right: 20,
                top: 20,
                fontSize: '1.5rem',
            },
        },
        drawerItem: {
            margin: '0.5rem auto',
            borderRadius: '14px',
            background: isDark
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)'
                : 'linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.01) 100%)',
            backdropFilter: 'blur(12px)',
            color: theme.tertiary,
            width: '100%',
            height: '46px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '0 18px',
            gap: '14px',
            boxSizing: 'border-box',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                width: '3px',
                height: '100%',
                background: `linear-gradient(180deg, ${theme.primary}00, ${theme.primary}, ${theme.primary}00)`,
                opacity: 0,
                transition: 'opacity 0.3s ease',
            },
            '&:hover': {
                background: isDark
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)'
                    : 'linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.03) 100%)',
                transform: 'translateX(-6px) scale(1.02)',
                boxShadow: isDark
                    ? '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.03)'
                    : '0 10px 30px -10px rgba(0, 0, 0, 0.15)',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.12)',
                '&::before': {
                    opacity: 1,
                },
            },
            [t.breakpoints.down('sm')]: {
                width: '100%',
                padding: '0 14px',
                height: '42px',
            },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            fontSize: '0.9rem',
            fontWeight: 500,
            letterSpacing: '0.3px',
            whiteSpace: 'nowrap',
            transition: 'all 0.3s ease',
            [t.breakpoints.down('sm')]: {
                fontSize: '0.85rem',
            },
        },
        drawerIcon: {
            fontSize: '1.15rem',
            flexShrink: 0,
            opacity: 0.85,
            transition: 'all 0.3s ease',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.05rem',
            },
        },
        themeToggleButton: {
            height: '40px',
            width: '40px',
            borderRadius: '50%',
            transform: 'translateY(-10px)',
            marginRight: 15,
            overflow: 'hidden',
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            border: isDark ? '2px solid rgba(255, 255, 255, 0.2)' : '2px solid rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            '&:hover': {
                transform: 'translateY(-10px) scale(1.1) rotate(15deg)',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
            },
        },
        themeIcon: {
            fontSize: '1.3rem',
            color: theme.tertiary,
            transition: 'all 0.3s ease',
        },
    }));

    const classes = useStyles();

    const shortname = (name) => {
        if (name.length > 12) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };

    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
            backgroundColor: scrolled
                ? (isDark ? 'rgba(10, 10, 10, 0.85)' : 'rgba(250, 250, 250, 0.85)')
                : 'transparent'
        }}>
            <div className='navbar--container'>
                <h1 style={{ color: theme.tertiary }}>{shortname(headerData.firstName)}</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Theme Toggle Button */}
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

                    <IoMenuSharp className={classes.navMenu} onClick={handleDrawerOpen} aria-label='Menu' />
                </div>
            </div>
            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='right'
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <Fade right>
                            <NavLink to='/' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <IoHomeSharp className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Home</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink to='/#about' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <FaUser className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>About</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink to='/#experience' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <HiStar className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Experience</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink to='/#education' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <HiDocumentText className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Education</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink to='/#achievement' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <BsTrophyFill className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Achievements</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink to='/#volunteering' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <FaHandsHelping className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Volunteering</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink to='/#skills' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <HiLightBulb className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Skills</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink to='/#hobbies' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <BsFillGearFill className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Hobbies</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink to='/#recommendations' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <MdRecommend className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Recommendations</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink to='/#youtube' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <FaYoutube className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>YouTube</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink to='/#blog' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <FaFolderOpen className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Blog</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink to='/#contacts' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <MdPhone className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Contact</span>
                                </div>
                            </NavLink>
                        </Fade>


                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
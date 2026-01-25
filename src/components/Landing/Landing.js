import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
    FaMedium,
} from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    // Typing animation effect
    useEffect(() => {
        if (!headerData.description) return;

        let index = 0;
        const text = headerData.description;

        const typeInterval = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.slice(0, index));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(typeInterval);
            }
        }, 25);

        return () => clearInterval(typeInterval);
    }, []);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.tertiary,
            borderRadius: '50px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '160px',
            fontSize: '0.95rem',
            fontWeight: '600',
            height: '52px',
            fontFamily: 'var(--font-primary, Inter, sans-serif)',
            border: `2px solid ${theme.tertiary}50`,
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            letterSpacing: '0.5px',
            '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
                opacity: 0,
                transition: 'opacity 300ms ease',
            },
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `2px solid ${theme.tertiary}`,
                transform: 'translateY(-4px)',
                boxShadow: `0 20px 40px -15px ${theme.tertiary}60, 0 0 30px ${theme.tertiary}20`,
            },
            '&:hover::before': {
                opacity: 1,
            },
            '&:active': {
                transform: 'translateY(-2px)',
            },
            [t.breakpoints.down('sm')]: {
                width: '100%',
                maxWidth: '200px',
            },
        },
        contactBtn: {
            backgroundColor: theme.tertiary,
            color: theme.secondary,
            borderRadius: '50px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '160px',
            height: '52px',
            fontSize: '0.95rem',
            fontWeight: '600',
            fontFamily: 'var(--font-primary, Inter, sans-serif)',
            border: 'none',
            transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
            letterSpacing: '0.5px',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
                transition: 'transform 300ms ease',
            },
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: `0 20px 40px -15px ${theme.tertiary}80`,
            },
            '&:active': {
                transform: 'translateY(-2px)',
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing' style={{ backgroundColor: theme.secondary }}>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.medium && (
                            <a
                                href={socialsData.medium}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaMedium
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Medium'
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt={headerData.name}
                    className='landing--img'
                    style={{
                        opacity: drawerOpen ? '0' : '1',
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6 style={{ color: `${theme.tertiary}99` }}>{headerData.title}</h6>
                        <h1 style={{ color: theme.tertiary }}>{headerData.name}</h1>
                        <p style={{ minHeight: '4.5em' }}>
                            {displayText}
                            {isTyping && (
                                <span
                                    style={{
                                        borderRight: `2px solid ${theme.primary}`,
                                        marginLeft: '2px',
                                        animation: 'blink 1s step-end infinite'
                                    }}
                                />
                            )}
                        </p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.resumeBtn}>
                                        Resume
                                    </Button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className='landing--scroll-indicator' style={{ color: theme.tertiary }}>
                <span>Scroll</span>
                <div className='scroll-line'></div>
            </div>
        </div>
    );
}

export default Landing;
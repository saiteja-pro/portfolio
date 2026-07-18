import React, { useEffect, useRef, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

import './Landing.css';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

/* Live clock for Austin, TX (Central Time) */
function useLocalTime() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString('en-US', {
                timeZone: 'America/Chicago',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            setTime(formatted);
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return time;
}

function Landing() {
    const heroRef = useRef(null);
    const localTime = useLocalTime();

    useEffect(() => {
        if (!heroRef.current) return;
        const lines = heroRef.current.querySelectorAll('[data-animate]');
        lines.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('landing__line--visible');
            }, 300 + i * 110);
        });
    }, []);

    return (
        <section className="landing" id="landing" aria-label="Introduction">
            <div className="landing__container" ref={heroRef}>
                <div className="landing__meta" data-animate>
                    <span className="landing__location">Austin, TX</span>
                    {localTime && (
                        <>
                            <span className="landing__sep" aria-hidden="true" />
                            <span className="landing__time" aria-label="Local time">{localTime}</span>
                        </>
                    )}
                </div>

                <h1 className="landing__name" data-animate>
                    {headerData.firstName}<br />
                    <span className="landing__name-last">{headerData.lastName}</span>
                </h1>

                <p className="landing__title" data-animate>
                    {headerData.title}
                </p>

                <p className="landing__description" data-animate>
                    {headerData.description}
                </p>

                <div className="landing__actions" data-animate>
                    {headerData.resumePdf && (
                        <a
                            href={headerData.resumePdf}
                            target="_blank"
                            rel="noreferrer"
                            className="landing__btn landing__btn--primary"
                        >
                            Resume
                        </a>
                    )}
                    {headerData.cvPdf && (
                        <a
                            href={headerData.cvPdf}
                            target="_blank"
                            rel="noreferrer"
                            className="landing__btn landing__btn--outline"
                            title="Full curriculum vitae"
                        >
                            Full CV
                        </a>
                    )}
                    <NavLink
                        to="/#contacts"
                        smooth
                        duration={1200}
                        className="landing__btn landing__btn--ghost"
                    >
                        Get in touch
                    </NavLink>
                </div>

                <div className="landing__socials" data-animate>
                    {socialsData.linkedIn && (
                        <a
                            href={socialsData.linkedIn}
                            target="_blank"
                            rel="noreferrer"
                            className="landing__social-link"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                    )}
                    {socialsData.github && (
                        <a
                            href={socialsData.github}
                            target="_blank"
                            rel="noreferrer"
                            className="landing__social-link"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                    )}
                    {socialsData.medium && (
                        <a
                            href={socialsData.medium}
                            target="_blank"
                            rel="noreferrer"
                            className="landing__social-link"
                            aria-label="Medium"
                        >
                            <FaMedium />
                            <span>Writing</span>
                        </a>
                    )}
                </div>
            </div>

            <div className="landing__scroll-hint" aria-hidden="true">
                <div className="landing__scroll-line" />
                <span>scroll</span>
            </div>
        </section>
    );
}

export default Landing;
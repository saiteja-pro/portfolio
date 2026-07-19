import React, { useEffect, useRef, useContext } from 'react';
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';

function About() {
    const { theme } = useContext(ThemeContext);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = sectionRef.current?.querySelectorAll('[data-reveal]') || [];
        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section 
            className="about" 
            id="about" 
            ref={sectionRef} 
            aria-labelledby="about-heading"
        >
            <div className="about__container">
                <span className="section-label" data-reveal>Biography</span>
                
                <div className="about__grid">
                    <div className="about__header-col" data-reveal>
                        <h2 id="about-heading" className="about__heading">
                            {aboutData.title || "About Me"}
                        </h2>
                        <p className="about__tagline">
                            Software engineer specializing in cloud automation, backend architecture, and resilient systems.
                        </p>
                    </div>

                    <div className="about__content-col">
                        <div className="about__text-block" data-reveal>
                            <p className="about__para about__para--lead">
                                {aboutData.description1}
                            </p>
                            {aboutData.description2 && (
                                <p className="about__para">
                                    {aboutData.description2}
                                </p>
                            )}
                            {aboutData.description3 && (
                                <p className="about__para">
                                    {aboutData.description3}
                                </p>
                            )}
                        </div>

                        <div className="about__image-col" data-reveal>
                            <div className="about__image-frame">
                                <img
                                    src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
                                    alt="Sai Teja Bhoomraogari portrait"
                                    className="about__portrait"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

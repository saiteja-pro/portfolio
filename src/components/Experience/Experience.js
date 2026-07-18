import React, { useEffect, useRef } from 'react';
import './Experience.css';
import { experienceData, educationData } from '../../data/experienceData';

function Experience() {
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
            { threshold: 0.08 }
        );

        const items = sectionRef.current?.querySelectorAll('[data-reveal]') || [];
        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="experience" id="experience" ref={sectionRef} aria-labelledby="experience-heading">
            <div className="experience__container">
                <div className="experience__header" data-reveal>
                    <span className="section-label">Background</span>
                    <h2 id="experience-heading" className="experience__heading">
                        Experience
                    </h2>
                </div>

                <div className="experience__columns">
                    {/* Work experience */}
                    <div className="experience__col">
                        <h3 className="experience__col-label">Work</h3>
                        <div className="experience__list">
                            {experienceData.map((item, index) => (
                                <div
                                    className="exp-entry"
                                    key={item.id}
                                    data-reveal
                                    style={{ transitionDelay: `${index * 60}ms` }}
                                >
                                    <div className="exp-entry__meta">
                                        <span className="exp-entry__date">
                                            {item.startYear} - {item.endYear}
                                        </span>
                                        <span className="exp-entry__location">{item.location}</span>
                                    </div>
                                    <div className="exp-entry__role">
                                        <h4 className="exp-entry__title">{item.jobtitle}</h4>
                                        <span className="exp-entry__company">{item.company}</span>
                                    </div>
                                    {item.bullets && item.bullets.length > 0 && (
                                        <ul className="exp-entry__bullets">
                                            {item.bullets.map((bullet, i) => (
                                                <li key={i}>{bullet}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="experience__col experience__col--edu">
                        <h3 className="experience__col-label">Education</h3>
                        <div className="experience__list">
                            {educationData.map((item, index) => (
                                <div
                                    className="exp-entry"
                                    key={item.id}
                                    data-reveal
                                    style={{ transitionDelay: `${index * 60}ms` }}
                                >
                                    <div className="exp-entry__meta">
                                        <span className="exp-entry__date">
                                            {item.startYear} - {item.endYear}
                                        </span>
                                        {item.note && (
                                            <span className="exp-entry__location">{item.note}</span>
                                        )}
                                    </div>
                                    <div className="exp-entry__role">
                                        <h4 className="exp-entry__title">{item.course}</h4>
                                        <span className="exp-entry__company">{item.institution}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;

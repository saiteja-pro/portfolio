import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { skillsData } from '../../data/skillsData';

function Skills() {
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
        <section className="skills" id="skills" ref={sectionRef} aria-labelledby="skills-heading">
            <div className="skills__container">
                <div className="skills__header" data-reveal>
                    <span className="section-label">Stack</span>
                    <h2 id="skills-heading" className="skills__heading">
                        Technical depth
                    </h2>
                </div>

                <div className="skills__groups">
                    {skillsData.groups.map((group, index) => (
                        <div
                            className="skill-group"
                            key={group.domain}
                            data-reveal
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            <h3 className="skill-group__domain">{group.domain}</h3>
                            <ul className="skill-group__list">
                                {group.skills.map((skill) => (
                                    <li key={skill} className="skill-group__item">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;

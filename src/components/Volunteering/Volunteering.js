import React, { useEffect, useRef } from 'react';
import './Volunteering.css';
import { volunteeringData } from '../../data/volunteeringData';

function Volunteering() {
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
        <section className="volunteering" id="volunteering" ref={sectionRef} aria-labelledby="volunteering-heading">
            <div className="volunteering__container">
                <div className="volunteering__header" data-reveal>
                    <span className="section-label">Community</span>
                    <h2 id="volunteering-heading" className="volunteering__heading">
                        Volunteering
                    </h2>
                </div>

                <div className="volunteering__grid">
                    {volunteeringData.experiences.map((item, index) => (
                        <div
                            className="vol-entry"
                            key={item.id}
                            data-reveal
                            style={{ transitionDelay: `${index * 60}ms` }}
                        >
                            <div className="vol-entry__header">
                                <span className="vol-entry__cause">{item.cause}</span>
                                <span className="vol-entry__duration">{item.duration}</span>
                            </div>
                            <h3 className="vol-entry__role">{item.role}</h3>
                            <span className="vol-entry__org">{item.organization}</span>
                            <p className="vol-entry__desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Volunteering;

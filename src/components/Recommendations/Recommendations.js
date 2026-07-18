import React, { useEffect, useRef } from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { recommendationsData } from '../../data/recommendationsData';
import './Recommendations.css';

function Recommendations() {
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

    if (!recommendationsData || recommendationsData.length === 0) return null;

    return (
        <section 
            className="recommendations" 
            id="recommendations" 
            ref={sectionRef} 
            aria-labelledby="recommendations-heading"
        >
            <div className="recommendations__container" data-reveal>
                <span className="section-label">Endorsements</span>
                
                <div className="recommendations__grid">
                    <div className="recommendations__header-col">
                        <h2 id="recommendations-heading" className="recommendations__heading">
                            Recommendations
                        </h2>
                        <p className="recommendations__meta-copy">
                            Peer feedback and testimonials from engineering collaborations.
                        </p>
                    </div>

                    <div className="recommendations__list-col">
                        {recommendationsData.map((item) => (
                            <blockquote key={item.id} className="recommendation-card">
                                <div className="recommendation-card__quote-icon">“</div>
                                <p className="recommendation-card__text">
                                    {item.text}
                                </p>
                                
                                <footer className="recommendation-card__footer">
                                    {item.image && (
                                        <div className="recommendation-card__avatar-frame">
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="recommendation-card__avatar"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                    <div className="recommendation-card__author-info">
                                        <cite className="recommendation-card__name">
                                            {item.name}
                                        </cite>
                                        <span className="recommendation-card__title">
                                            {item.title}
                                        </span>
                                    </div>
                                    {item.url && (
                                        <a 
                                            href={item.url} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="recommendation-card__linkedin-link"
                                            aria-label={`${item.name} LinkedIn Profile`}
                                        >
                                            <FiLinkedin />
                                        </a>
                                    )}
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Recommendations;

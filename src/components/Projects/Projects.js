import React, { useEffect, useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';

import './Projects.css';
import { projectsData } from '../../data/projectsData';

function Projects() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal', 'visible');
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
        <section className="projects" id="work" ref={sectionRef} aria-labelledby="work-heading">
            <div className="projects__container">
                <div className="projects__header" data-reveal>
                    <span className="section-label">Selected Work</span>
                    <h2 id="work-heading" className="projects__heading">
                        Things I have built
                    </h2>
                </div>

                <div className="projects__list">
                    {projectsData.map((project, index) => (
                        <article
                            className="project-card"
                            key={project.id}
                            data-reveal
                        >
                            <div className="project-card__index">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <div className="project-card__content">
                                <div className="project-card__titles">
                                    <h3 className="project-card__name">{project.projectName}</h3>
                                    <p className="project-card__subtitle">{project.projectSubtitle}</p>
                                </div>

                                {project.achievement && (
                                    <div className="project-card__achievement">
                                        {project.achievement}
                                    </div>
                                )}

                                <div className="project-card__details">
                                    <div className="project-card__field">
                                        <span className="project-card__field-label">Context</span>
                                        <p className="project-card__field-value">{project.context}</p>
                                    </div>
                                    <div className="project-card__field">
                                        <span className="project-card__field-label">My role</span>
                                        <p className="project-card__field-value">{project.role}</p>
                                    </div>
                                    <div className="project-card__field">
                                        <span className="project-card__field-label">Outcome</span>
                                        <p className="project-card__field-value project-card__outcome">{project.outcome}</p>
                                    </div>
                                </div>

                                <div className="project-card__footer">
                                    <div className="project-card__tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="project-card__tag">{tag}</span>
                                        ))}
                                    </div>

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-card__link"
                                            aria-label={`View ${project.projectName} source`}
                                        >
                                            <FiExternalLink />
                                            <span>View</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
import SingleProject from './SingleProject/SingleProject';
import './Projects.css';
import Fade from 'react-reveal/Fade';

function Projects() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects-showcase" id="projects" style={{ backgroundColor: theme.secondary }}>
                    <div className="projects-showcase-container">
                        <Fade bottom>
                            <div className="projects-showcase-header">
                                <h1 style={{ color: theme.primary }}>Featured Projects</h1>
                                <p style={{ color: theme.tertiary80 }}>Some of my projects</p>
                            </div>
                        </Fade>
                        <div className="projects-showcase-list">
                            {projectsData.map((project, index) => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    videoDemo={project.videoDemo}
                                    images={project.images}
                                    features={project.features}
                                    achievement={project.achievement}
                                    client={project.client}
                                    role={project.role}
                                    isReversed={index % 2 !== 0}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;

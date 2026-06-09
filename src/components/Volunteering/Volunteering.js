import React, { useContext } from 'react';
import './Volunteering.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { volunteeringData } from '../../data/volunteeringData';
import { FaHandsHelping, FaMedkit, FaUsers, FaPalette } from 'react-icons/fa';

function Volunteering() {
    const { theme } = useContext(ThemeContext);

    const getCauseIcon = (cause) => {
        switch (cause) {
            case 'Human Rights':
                return <FaHandsHelping />;
            case 'Health':
                return <FaMedkit />;
            case 'Social Services':
                return <FaUsers />;
            case 'Arts and Culture':
                return <FaPalette />;
            default:
                return <FaHandsHelping />;
        }
    };

    return (
        <>
            {volunteeringData.experiences.length > 0 && (
                <div className="volunteering" id="volunteering" style={{ backgroundColor: theme.secondary }}>
                    <div className="volunteering-container">
                        <div className="volunteering-cards">
                            {volunteeringData.experiences.map((exp) => (
                                <div
                                    key={exp.id}
                                    className="volunteering-card"
                                >
                                    <div className="volunteering-card-content">
                                        <div className="volunteering-card-header">
                                            <h3 style={{ color: 'var(--text-primary)' }}>{exp.role}</h3>
                                            <h4 style={{ color: 'var(--text-secondary)' }}>{exp.organization}</h4>
                                        </div>
                                        <p className="volunteering-description" style={{ color: 'var(--text-muted)' }}>
                                            {exp.description}
                                        </p>
                                        <div className="volunteering-card-footer" style={{ color: 'var(--text-primary)' }}>
                                            <span className="volunteering-duration">{exp.duration}</span>
                                            <span className="volunteering-cause">
                                                {getCauseIcon(exp.cause)} {exp.cause}
                                            </span>
                                        </div>
                                    </div>
                                    {exp.image && (
                                        <div className="volunteering-card-image">
                                            <img src={exp.image} alt={exp.organization} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="volunteering-body">
                            <h1 style={{ color: theme.primary }}>Volunteering</h1>
                            <p style={{ color: theme.tertiary }}>{volunteeringData.bio}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Volunteering;

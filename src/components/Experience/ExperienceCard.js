import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { FaAmazon, FaCode, FaChartBar } from 'react-icons/fa';

import utaLogo from '../../assets/logos/uta.png';
import amazonLogo from '../../assets/logos/amazon.png';
import saifLogo from '../../assets/logos/saif.png';
import mavensoftLogo from '../../assets/logos/mavensoft.png';

import './Experience.css'

function ExperienceCard({ id, company, location, jobtitle, startYear, endYear, emoji, iconType, logo }) {

    const { theme } = useContext(ThemeContext);

    const logoMap = {
        'uta': utaLogo,
        'amazon': amazonLogo,
        'saif': saifLogo,
        'mavensoft': mavensoftLogo,
    };

    const renderIcon = () => {
        if (logo && logoMap[logo]) {
            return <img src={logoMap[logo]} alt={company} className="expcard-logo" />;
        }
        if (iconType === 'amazon') {
            return <FaAmazon className="expcard-icon" style={{ color: theme.secondary }} />;
        }
        if (iconType === 'saif') {
            return <FaCode className="expcard-icon" style={{ color: theme.secondary }} />;
        }
        if (iconType === 'mavensoft') {
            return <FaChartBar className="expcard-icon" style={{ color: theme.secondary }} />;
        }
        return <span className="expcard-emoji">{emoji || '💼'}</span>;
    };

    return (
        <div key={id} className="experience-card">
            <div className="expcard-img" style={{ backgroundColor: logo ? 'transparent' : theme.primary }}>
                {renderIcon()}
            </div>
            <div className="experience-details">
                <h6 style={{ color: 'var(--text-muted)' }}>{startYear}-{endYear}</h6>
                <h4 style={{ color: 'var(--text-primary)' }}>{jobtitle}</h4>
                <h4 style={{ color: 'var(--text-secondary)' }}>{company}, {location}</h4>
            </div>
        </div>
    )
}

export default ExperienceCard

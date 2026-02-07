import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { FaAmazon, FaCode, FaChartBar } from 'react-icons/fa';

import utaLogo from '../../assets/logos/uta.png';
import amazonLogo from '../../assets/logos/amazon.png';
import saifLogo from '../../assets/logos/saif.png';
import mavensoftLogo from '../../assets/logos/mavensoft.png';

import './Experience.css'

function ExperienceCard({ id, company, location, jobtitle, startYear, endYear, emoji, iconType, logo }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard: {
            backgroundColor: theme.type === 'light' ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.4)',
            "&:hover": {
                backgroundColor: theme.type === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.08)',
            },
        },
    }));

    const classes = useStyles();

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
        <div key={id} className={`experience-card ${classes.experienceCard} theme-${theme.type}`}>
            <div className="expcard-img" style={{ backgroundColor: logo ? 'transparent' : theme.primary }}>
                {renderIcon()}
            </div>
            <div className="experience-details">
                <h6 style={{ color: theme.type === 'light' ? '#FFFFFF' : theme.primary }}>{startYear}-{endYear}</h6>
                <h4 style={{ color: theme.type === 'light' ? '#FFFFFF' : theme.tertiary }}>{jobtitle}</h4>
                <h4 style={{ color: theme.type === 'light' ? '#E0E0E0' : theme.tertiary80 }}>{company}, {location}</h4>
            </div>
        </div>
    )
}

export default ExperienceCard

import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { FaChartLine, FaMicrochip } from 'react-icons/fa';

// Import logos
import utaLogo from '../../assets/logos/uta.png';
import jntuLogo from '../../assets/logos/jntu.png';
import narayanaLogo from '../../assets/logos/narayana.png';
import johnsonLogo from '../../assets/logos/johnson.png';

import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear, emoji, iconType, logo }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard: {
            backgroundColor: theme.type === 'light' ? '#000000' : 'rgba(0, 0, 0, 0.5)',
            "&:hover": {
                backgroundColor: theme.type === 'light' ? '#1a1a1a' : 'rgba(0, 0, 0, 0.7)',
            },
        },
    }));

    const classes = useStyles();

    const logoMap = {
        'uta': utaLogo,
        'jntu': jntuLogo,
        'narayana': narayanaLogo,
        'johnson': johnsonLogo,
    };

    const renderIcon = () => {
        // If logo is specified, use the image
        if (logo && logoMap[logo]) {
            return <img src={logoMap[logo]} alt={institution} className="educard-logo" />;
        }
        // Icon types
        if (iconType === 'stats') {
            return <FaChartLine className="educard-icon" style={{ color: theme.secondary }} />;
        }
        if (iconType === 'engineering') {
            return <FaMicrochip className="educard-icon" style={{ color: theme.secondary }} />;
        }
        return <span className="educard-emoji">{emoji || '🎓'}</span>;
    };

    return (
        <div key={id} className={`education-card ${classes.educationCard}`} >
            <div className="educard-img" style={{ backgroundColor: logo ? 'transparent' : theme.primary }}>
                {renderIcon()}
            </div>
            <div className="education-details">
                <h6 style={{ color: theme.type === 'light' ? '#FFFFFF' : theme.primary }}>{startYear}-{endYear}</h6>
                <h4 style={{ color: theme.type === 'light' ? '#FFFFFF' : theme.tertiary }}>{course}</h4>
                <h5 style={{ color: theme.type === 'light' ? '#E0E0E0' : theme.tertiary80 }}>{institution}</h5>
            </div>
        </div>
    )
}

export default EducationCard

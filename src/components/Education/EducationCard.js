import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { FaChartLine, FaMicrochip } from 'react-icons/fa';

import utaLogo from '../../assets/logos/uta.png';
import jntuLogo from '../../assets/logos/jntu.png';
import narayanaLogo from '../../assets/logos/narayana.png';
import johnsonLogo from '../../assets/logos/johnson.png';

import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear, emoji, iconType, logo }) {

    const { theme } = useContext(ThemeContext);

    const logoMap = {
        'uta': utaLogo,
        'jntu': jntuLogo,
        'narayana': narayanaLogo,
        'johnson': johnsonLogo,
    };

    const renderIcon = () => {
        if (logo && logoMap[logo]) {
            return <img src={logoMap[logo]} alt={institution} className="educard-logo" />;
        }
        if (iconType === 'stats') {
            return <FaChartLine className="educard-icon" style={{ color: theme.secondary }} />;
        }
        if (iconType === 'engineering') {
            return <FaMicrochip className="educard-icon" style={{ color: theme.secondary }} />;
        }
        return <span className="educard-emoji">{emoji || '🎓'}</span>;
    };

    return (
        <div key={id} className="education-card" >
            <div className="educard-img" style={{ backgroundColor: logo ? 'transparent' : theme.primary }}>
                {renderIcon()}
            </div>
            <div className="education-details">
                <h6 style={{ color: 'var(--text-muted)' }}>{startYear}-{endYear}</h6>
                <h4 style={{ color: 'var(--text-primary)' }}>{course}</h4>
                <h5 style={{ color: 'var(--text-secondary)' }}>{institution}</h5>
            </div>
        </div>
    )
}

export default EducationCard

import React, { useContext } from 'react';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleHobbie.css'


function SingleHobbie({ id, title, icon }) {

    const { theme } = useContext(ThemeContext);
    return (
        <div key={id} className="single-hobbie">
            <div className="hobbie-content">
                <i className="hobbie-icon" style={{ color: theme.primary }}>{icon}</i>
                <h4 style={{ color: 'var(--text-primary)' }}>{title}</h4>
            </div>
        </div>
    )
}

export default SingleHobbie

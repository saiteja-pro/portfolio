import React, { useContext } from 'react';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleHobbie.css'


function SingleHobbie({ id, title, icon }) {

    const { theme } = useContext(ThemeContext);
    return (
        <div key={id} className="single-hobbie" style={{ backgroundColor: theme.type === 'light' ? '#000000' : 'rgba(0, 0, 0, 0.5)' }}>
            <div className="hobbie-content" style={{ color: theme.type === 'light' ? '#FFFFFF' : theme.tertiary }}>
                <i className="hobbie-icon" style={{ color: theme.type === 'light' ? '#FFFFFF' : theme.primary }}>{icon}</i>
                <h4 style={{ color: theme.type === 'light' ? '#FFFFFF' : theme.tertiary }}>{title}</h4>
            </div>
        </div>
    )
}

export default SingleHobbie

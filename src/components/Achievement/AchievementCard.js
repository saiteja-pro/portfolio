import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

import './Achievement.css'

function AchievementCard({ id, title, details, date, field, image, url, videoUrl }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard: {
            backgroundColor: theme.type === 'light' ? '#000000' : 'rgba(0, 0, 0, 0.5)',
            "&:hover": {
                backgroundColor: theme.type === 'light' ? '#1a1a1a' : 'rgba(0, 0, 0, 0.7)',
                cursor: 'pointer',
            },
        },
    }));

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    const classes = useStyles();
    return (
        <div key={id} className={`achievement-card ${classes.achievementCard}`} >
            <div className="achievecard-content">
                <div className="achievecard-details1">
                    <h3 style={{ color: theme.type === 'light' ? '#FFFFFF' : theme.tertiary }} onClick={() => openInNewTab(url)}>{title}</h3>
                    <p style={{ color: theme.type === 'light' ? '#E0E0E0' : theme.tertiary80 }}>{details}</p>
                </div>
                <div className="achievecard-details2" style={{ color: theme.type === 'light' ? '#FFFFFF' : theme.primary }}>
                    <h5>{date}</h5>
                    <div className="achievecard-field">
                        <AiOutlineFolder />
                        <h6>{field}</h6>
                    </div>
                    {/* Show YouTube button only for publications with video links */}
                    {videoUrl && (
                        <button
                            className="achievecard-video-btn"
                            onClick={(e) => { e.stopPropagation(); openInNewTab(videoUrl); }}
                            style={{
                                backgroundColor: '#FF0000',
                                color: '#FFFFFF'
                            }}
                        >
                            <FaYoutube /> Watch Video
                        </button>
                    )}
                </div>
            </div>
            <div className="achievecard-imgcontainer">
                <img src={image} alt="" />
            </div>
        </div>

    )
}

export default AchievementCard

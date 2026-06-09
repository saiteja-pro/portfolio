import React from 'react';

import { AiOutlineFolder } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

import './Achievement.css'

function AchievementCard({ id, title, details, date, field, image, url, videoUrl }) {

    return (
        <div key={id} className="achievement-card" >
            <div className="achievecard-content">
                <div className="achievecard-details1">
                    <a href={url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                        <h3 style={{ color: 'var(--text-primary)', cursor: 'pointer' }}>{title}</h3>
                    </a>
                    <p style={{ color: 'var(--text-secondary)' }}>{details}</p>
                </div>
                <div className="achievecard-details2" style={{ color: 'var(--text-muted)' }}>
                    <h5>{date}</h5>
                    <div className="achievecard-field">
                        <AiOutlineFolder />
                        <h6>{field}</h6>
                    </div>
                    {/* Show YouTube button only for publications with video links */}
                    {videoUrl && (
                        <a
                            href={videoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="achievecard-video-btn"
                            style={{
                                backgroundColor: '#FF0000',
                                color: '#FFFFFF'
                            }}
                        >
                            <FaYoutube /> Watch Video
                        </a>
                    )}
                </div>
            </div>
            <div className="achievecard-imgcontainer">
                <img src={image} alt={title || ''} />
            </div>
        </div>

    )
}

export default AchievementCard

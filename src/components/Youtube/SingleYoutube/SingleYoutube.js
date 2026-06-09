import React from 'react';
import Fade from 'react-reveal/Fade';
import { FaYoutube } from 'react-icons/fa';
import './SingleYoutube.css';

function SingleYoutube({ theme, episode, tagline, description, youtubeId, youtubeUrl, isReversed }) {
    return (
        <div className={`showcase-youtube ${isReversed ? 'reversed' : ''}`}>
            <Fade left={!isReversed} right={isReversed}>
                <div className="showcase-content">
                    <div className="showcase-badge" style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                        <FaYoutube style={{ fontSize: '1rem' }} />
                        <span>YouTube</span>
                    </div>
                    
                    <h2 className="showcase-title" style={{ color: theme.tertiary }}>{episode}</h2>
                    
                    {tagline && (
                        <p className="showcase-role" style={{ color: theme.tertiary80 }}>
                            {tagline}
                        </p>
                    )}
                    
                    <p className="showcase-desc" style={{ color: theme.tertiary80 }}>{description}</p>
                    
                    <div className="showcase-links">
                        <a href={youtubeUrl} target="_blank" rel="noreferrer" className="showcase-btn video-btn" style={{ backgroundColor: '#ef4444', color: '#fff' }}>
                            <FaYoutube /> Watch on YouTube
                        </a>
                    </div>
                </div>
            </Fade>

            <Fade right={!isReversed} left={isReversed}>
                <div className="showcase-video-container" style={{ borderColor: theme.primary50 }}>
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title={episode}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="youtube-iframe"
                    ></iframe>
                </div>
            </Fade>
        </div>
    );
}

export default SingleYoutube;

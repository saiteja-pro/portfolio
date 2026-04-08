import React, { useContext } from 'react';
import './YouTube.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { youtubeData } from '../../data/youtubeData';

/**
 * YouTube Component
 * 
 * Displays a featured YouTube video in an embedded player
 * with a glassmorphic card design matching the portfolio aesthetic.
 */
function YouTube() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="youtube-section" id="youtube" style={{ backgroundColor: theme.secondary }}>
            <div className="youtube-body">
                <h1 style={{ color: theme.primary }}>{youtubeData.title}</h1>
                <div className="youtube-cards-container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', width: '100%' }}>
                    {youtubeData.videos.map((video) => (
                        <div className="youtube-card" key={video.id}>
                            <div className="youtube-header">
                                <h3 style={{ color: 'var(--text-primary)' }}>{video.episode}</h3>
                                <p className="youtube-tagline" style={{ color: theme.primary }}>{video.tagline}</p>
                                <p style={{ color: 'var(--text-muted)' }}>{video.description}</p>
                            </div>
                            <div className="youtube-video">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.youtube.id}`}
                                    title={video.episode}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default YouTube;

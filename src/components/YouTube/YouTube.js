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
                {/* Dark card looks good on both themes - solid in light, glassmorphic in dark */}
                <div className="youtube-card" style={{ backgroundColor: theme.type === 'light' ? '#1a1a1a' : 'rgba(0, 0, 0, 0.4)' }}>
                    <div className="youtube-header">
                        <h3 style={{ color: theme.type === 'light' ? '#ffffff' : theme.tertiary }}>{youtubeData.episode}</h3>
                        <p className="youtube-tagline" style={{ color: theme.type === 'light' ? '#ffffff' : theme.primary }}>{youtubeData.tagline}</p>
                        <p style={{ color: theme.type === 'light' ? '#e0e0e0' : theme.tertiary80 }}>{youtubeData.description}</p>
                    </div>
                    <div className="youtube-video">
                        <iframe
                            src={`https://www.youtube.com/embed/${youtubeData.youtube.id}`}
                            title={youtubeData.episode}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YouTube;

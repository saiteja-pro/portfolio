import React, { useContext } from 'react';
import './Podcast.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { podcastData } from '../../data/podcastData';

/**
 * Podcast Component
 * 
 * Displays a featured YouTube podcast/video in an embedded player
 * with a glassmorphic card design matching the portfolio aesthetic.
 */
function Podcast() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="podcast" id="podcast" style={{ backgroundColor: theme.secondary }}>
            <div className="podcast-body">
                <h1 style={{ color: theme.primary }}>{podcastData.title}</h1>
                {/* Dark card looks good on both themes - solid in light, glassmorphic in dark */}
                <div className="podcast-card" style={{ backgroundColor: theme.type === 'light' ? '#1a1a1a' : 'rgba(0, 0, 0, 0.4)' }}>
                    <div className="podcast-header">
                        <h3 style={{ color: theme.type === 'light' ? '#ffffff' : theme.tertiary }}>{podcastData.episode}</h3>
                        <p className="podcast-tagline" style={{ color: theme.type === 'light' ? '#ffffff' : theme.primary }}>{podcastData.tagline}</p>
                        <p style={{ color: theme.type === 'light' ? '#e0e0e0' : theme.tertiary80 }}>{podcastData.description}</p>
                    </div>
                    <div className="podcast-video">
                        <iframe
                            src={`https://www.youtube.com/embed/${podcastData.youtube.id}`}
                            title={podcastData.episode}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Podcast;

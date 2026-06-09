import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { youtubeData } from '../../data/youtubeData';
import SingleYoutube from './SingleYoutube/SingleYoutube';
import './Youtube.css';
import Fade from 'react-reveal/Fade';

function Youtube() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {youtubeData.videos.length > 0 && (
                <div className="youtube-showcase" id="youtube" style={{ backgroundColor: theme.secondary }}>
                    <div className="youtube-showcase-container">
                        <Fade bottom>
                            <div className="youtube-showcase-header">
                                <h1 style={{ color: theme.primary }}>{youtubeData.title}</h1>
                                <p style={{ color: theme.tertiary80 }}>Featured videos and content</p>
                            </div>
                        </Fade>
                        <div className="youtube-showcase-list">
                            {youtubeData.videos.map((video, index) => (
                                <SingleYoutube
                                    theme={theme}
                                    key={video.id}
                                    id={video.id}
                                    episode={video.episode}
                                    tagline={video.tagline}
                                    description={video.description}
                                    youtubeId={video.youtube.id}
                                    youtubeUrl={video.youtube.url}
                                    isReversed={index % 2 !== 0}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Youtube;

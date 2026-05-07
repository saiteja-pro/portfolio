import React from 'react';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import { FaPlay, FaYoutube } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import './SingleProject.css';

// Import slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SingleProject({ id, name, desc, tags, code, demo, videoDemo, images, features, achievement, isReversed, theme }) {
    
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        adaptiveHeight: true
    };

    return (
        <div key={id} className={`showcase-project ${isReversed ? 'reversed' : ''}`}>
            
            <Fade left={!isReversed} right={isReversed}>
                <div className="showcase-content">
                    {achievement && (
                        <div className="showcase-achievement" style={{ color: '#fbbf24', backgroundColor: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)' }}>
                            {achievement}
                        </div>
                    )}
                    
                    <h2 className="showcase-title" style={{ color: theme.tertiary }}>{name}</h2>
                    <p className="showcase-desc" style={{ color: theme.tertiary80 }}>{desc}</p>
                    
                    {features && features.length > 0 && (
                        <ul className="showcase-features">
                            {features.map((feature, idx) => (
                                <li key={idx} style={{ color: theme.tertiary80 }}>
                                    <BsCheckCircleFill className="feature-icon" style={{ color: theme.primary }} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    
                    <div className="showcase-tags">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="showcase-tag" style={{ background: theme.secondary, border: `1px solid ${theme.primary50}`, color: theme.primary }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="showcase-links">
                        {demo && (
                            <a href={demo} target="_blank" rel="noreferrer" className="showcase-btn primary-btn" style={{ backgroundColor: theme.primary, color: theme.secondary }}>
                                <FaPlay /> Live Demo
                            </a>
                        )}
                        {videoDemo && (
                            <a href={videoDemo} target="_blank" rel="noreferrer" className="showcase-btn video-btn" style={{ backgroundColor: '#ef4444', color: '#fff' }}>
                                <FaYoutube /> Watch Video
                            </a>
                        )}
                    </div>
                </div>
            </Fade>

            <Fade right={!isReversed} left={isReversed}>
                <div className="showcase-slider-container" style={{ borderColor: theme.primary50, boxShadow: `0 20px 40px ${theme.primary}20` }}>
                    <Slider {...sliderSettings}>
                        {images.map((img, idx) => (
                            <div key={idx} className="showcase-slide">
                                <img src={img} alt={`${name} screenshot ${idx + 1}`} className="showcase-image" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </Fade>

        </div>
    );
}

export default SingleProject;

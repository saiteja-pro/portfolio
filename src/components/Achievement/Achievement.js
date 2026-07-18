import React, { useEffect, useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';
import './Achievement.css';
import { achievementData } from '../../data/achievementData';
import { youtubeData } from '../../data/youtubeData';
import { socialsData } from '../../data/socialsData';

/* YouTube thumbnail URL helper */
const ytThumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

function Achievement() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.06 }
        );

        const items = sectionRef.current?.querySelectorAll('[data-reveal]') || [];
        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="recognition" id="recognition" ref={sectionRef} aria-labelledby="recognition-heading">
            <div className="recognition__container">

                {/* ── Publications ── */}
                <div className="recognition__header" data-reveal>
                    <span className="section-label">Research</span>
                    <div className="recognition__title-row">
                        <h2 id="recognition-heading" className="recognition__heading">
                            Publications
                        </h2>
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target="_blank"
                                rel="noreferrer"
                                className="recognition__yt-badge"
                                aria-label="YouTube channel"
                            >
                                <FaYoutube />
                                <span>YouTube</span>
                            </a>
                        )}
                    </div>
                </div>

                <div className="recognition__list">
                    {achievementData.publications.map((pub, index) => (
                        <article
                            className="pub-entry"
                            key={pub.id}
                            data-reveal
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            <div className="pub-entry__journal">
                                <span className="pub-entry__journal-name">{pub.journal}</span>
                                <span className="pub-entry__date">{pub.date}</span>
                            </div>

                            <h3 className="pub-entry__title">
                                {pub.url ? (
                                    <a
                                        href={pub.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="pub-entry__title-link"
                                    >
                                        {pub.title}
                                        <FiExternalLink className="pub-entry__link-icon" aria-hidden="true" />
                                    </a>
                                ) : pub.title}
                            </h3>

                            <p className="pub-entry__details">{pub.details}</p>
                            <div className="pub-entry__footer">
                                <span className="pub-entry__field">{pub.field}</span>
                                {pub.videoUrl && (
                                    <a
                                        href={pub.videoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="pub-entry__video-btn"
                                        aria-label={`Watch video about ${pub.title}`}
                                    >
                                        <FaYoutube />
                                        <span>Watch Video</span>
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                {/* ── On camera ── */}
                <div className="recognition__videos-header" data-reveal>
                    <span className="section-label">Video</span>
                    <div className="recognition__videos-title-row">
                        <h2 className="recognition__heading">On camera</h2>
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target="_blank"
                                rel="noreferrer"
                                className="recognition__yt-channel"
                                aria-label="YouTube channel"
                            >
                                <FaYoutube />
                                <span>Channel</span>
                            </a>
                        )}
                    </div>
                </div>

                <div className="recognition__videos">
                    {youtubeData.videos.map((video, index) => (
                        <article
                            className="video-entry"
                            key={video.id}
                            data-reveal
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            <div className="video-entry__header">
                                <span className="video-entry__episode">{video.episode}</span>
                            </div>

                            <h3 className="video-entry__tagline">
                                <a
                                    href={video.youtube.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="video-entry__link"
                                >
                                    {video.tagline}
                                    <FiExternalLink className="video-entry__link-icon" aria-hidden="true" />
                                </a>
                            </h3>

                            <p className="video-entry__desc">{video.description}</p>
                            
                            <div className="video-entry__footer">
                                <a
                                    href={video.youtube.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="pub-entry__video-btn"
                                    aria-label={`Watch: ${video.tagline}`}
                                >
                                    <FaYoutube />
                                    <span>Watch Video</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Achievement;

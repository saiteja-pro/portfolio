import React, { useContext, useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Calendly.css';

function Calendly() {
    const { theme } = useContext(ThemeContext);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const embedRef = useRef(null);

    const isDark = theme.type === 'dark';
    const calendlyUrl = `https://calendly.com/saitejabhoomraogari?hide_gdpr_banner=1&background_color=${isDark ? '0a0a0a' : 'fafafa'}&text_color=${isDark ? 'ffffff' : '0a0a0a'}&primary_color=667eea`;

    // Load Calendly script once on mount
    useEffect(() => {
        if (!document.querySelector('link[href*="calendly"]')) {
            const link = document.createElement('link');
            link.href = 'https://assets.calendly.com/assets/external/widget.css';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }

        if (!document.querySelector('script[src*="calendly"]')) {
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    // Detect when the Calendly iframe finishes loading
    useEffect(() => {
        if (iframeLoaded) return;

        const checkIframe = () => {
            if (!embedRef.current) return;
            const iframe = embedRef.current.querySelector('iframe');
            if (iframe) {
                iframe.addEventListener('load', () => {
                    // Small delay to let Calendly render its content inside the iframe
                    setTimeout(() => setIframeLoaded(true), 500);
                });
                // If iframe already loaded before we attached the listener
                if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
                    setTimeout(() => setIframeLoaded(true), 500);
                }
                return true;
            }
            return false;
        };

        // Poll for the iframe since Calendly creates it asynchronously
        const interval = setInterval(() => {
            if (checkIframe()) {
                clearInterval(interval);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [iframeLoaded]);

    return (
        <div
            className="calendly-section"
            id="schedule"
            style={{ backgroundColor: theme.secondary }}
        >
            <div className="calendly-section--container">
                <div className="calendly-section--header">
                    <h6 style={{ color: 'var(--text-muted)' }}>Let's Connect</h6>
                    <h1 style={{ color: 'var(--text-primary)' }}>Schedule a Call</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Pick a time that works for you, I'd love to chat about ideas, collaborations, or opportunities.
                    </p>
                </div>

                <div className="calendly-section--embed" ref={embedRef}>
                    <div
                        className="calendly-inline-widget"
                        data-url={calendlyUrl}
                        style={{
                            minWidth: '280px',
                            width: '100%',
                            height: '700px',
                        }}
                    />
                    <div className={`calendly-section--skeleton ${iframeLoaded ? 'loaded' : ''}`}>
                        <div className="skeleton-calendar">
                            <div className="skeleton-header">
                                <div className="skeleton-avatar" />
                                <div className="skeleton-title-block">
                                    <div className="skeleton-line wide" />
                                    <div className="skeleton-line medium" />
                                </div>
                            </div>
                            <div className="skeleton-grid">
                                {Array.from({ length: 21 }, (_, i) => (
                                    <div key={i} className="skeleton-day" />
                                ))}
                            </div>
                            <div className="skeleton-footer">
                                <div className="skeleton-line narrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendly;

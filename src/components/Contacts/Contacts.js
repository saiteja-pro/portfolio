import React, { useEffect, useRef } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiFileText, FiCalendar } from 'react-icons/fi';

import './Contacts.css';
import { contactsData } from '../../data/contactsData';
import { socialsData } from '../../data/socialsData';
import { headerData } from '../../data/headerData';

function Contacts() {
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
            { threshold: 0.1 }
        );

        const items = sectionRef.current?.querySelectorAll('[data-reveal]') || [];
        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="contacts" id="contacts" ref={sectionRef} aria-labelledby="contacts-heading">
            <div className="contacts__container">
                <div className="contacts__content" data-reveal>
                    <span className="section-label">Get in touch</span>
                    <h2 id="contacts-heading" className="contacts__heading">
                        Let's talk
                    </h2>
                    <p className="contacts__copy">
                        Open to senior engineering roles, contract work, and technical conversations.
                        Reach me directly at the email below, or schedule a calendar invite.
                    </p>

                    <a
                        href={`mailto:${contactsData.email}`}
                        className="contacts__email"
                    >
                        {contactsData.email}
                    </a>

                    <div className="contacts__links">
                        {contactsData.calendly && (
                            <a
                                href={contactsData.calendly}
                                target="_blank"
                                rel="noreferrer"
                                className="contacts__link contacts__link--calendly"
                            >
                                <FiCalendar />
                                <span>Schedule a call</span>
                            </a>
                        )}
                        <a
                            href={socialsData.linkedIn}
                            target="_blank"
                            rel="noreferrer"
                            className="contacts__link"
                        >
                            <FiLinkedin />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href={socialsData.github}
                            target="_blank"
                            rel="noreferrer"
                            className="contacts__link"
                        >
                            <FiGithub />
                            <span>GitHub</span>
                        </a>
                        {headerData.resumePdf && (
                            <a
                                href={headerData.resumePdf}
                                target="_blank"
                                rel="noreferrer"
                                className="contacts__link"
                            >
                                <FiFileText />
                                <span>Resume PDF</span>
                            </a>
                        )}
                        {contactsData.email && (
                            <a
                                href={`mailto:${contactsData.email}`}
                                className="contacts__link"
                            >
                                <FiMail />
                                <span>Email</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;

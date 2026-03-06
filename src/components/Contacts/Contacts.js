import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FiAtSign, FiCalendar, FiMapPin } from 'react-icons/fi';

import { ThemeContext } from '../../contexts/ThemeContext';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const { theme } = useContext(ThemeContext);
    const useStyles = makeStyles(() => ({
        detailsIcon: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
    }));

    const classes = useStyles();

    return (
        <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Get in Touch</h1>
                <div className='contacts-body'>
                    <div className='contacts-details'>
                        <a
                            href={`mailto:${contactsData.email}`}
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FiAtSign />
                            </div>
                            <p style={{ color: theme.tertiary, fontSize: '15px' }}>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            href='https://calendly.com/saitejabhoomraogari'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='personal-details calendly-link'
                        >
                            <div className='calendly-badge-container'>
                                <span className='powered'>Powered by</span>
                                <span className='brand'>Calendly</span>
                            </div>
                            <div className={classes.detailsIcon}>
                                <FiCalendar />
                            </div>
                            <div className='calendly-link-text'>
                                <p style={{ color: theme.tertiary }}>
                                    Schedule a Call
                                </p>
                                <span style={{ color: theme.tertiary, opacity: 0.6 }}>
                                    Book a time on Calendly →
                                </span>
                            </div>
                        </a>
                        <div className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <FiMapPin />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={theme.contactsimg}
                alt='contacts'
                className='contacts--img'
            />
        </div>
    );
}

export default Contacts;

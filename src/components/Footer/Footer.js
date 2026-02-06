import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'
import { socialsData } from '../../data/socialsData'
import { FaLinkedin, FaGithub, FaMedium, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

function Footer() {
    const { theme } = useContext(ThemeContext)

    return (
        <footer className="footer" style={{ backgroundColor: theme.secondary }}>
            <div className="footer--container">
                {/* Social Links */}
                <div className="footer--socials">
                    {socialsData.linkedIn && (
                        <a href={socialsData.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: theme.tertiary }}>
                            <FaLinkedin />
                        </a>
                    )}
                    {socialsData.github && (
                        <a href={socialsData.github} target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: theme.tertiary }}>
                            <FaGithub />
                        </a>
                    )}
                    {socialsData.medium && (
                        <a href={socialsData.medium} target="_blank" rel="noreferrer" aria-label="Medium" style={{ color: theme.tertiary }}>
                            <FaMedium />
                        </a>
                    )}
                    {socialsData.facebook && (
                        <a href={socialsData.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" style={{ color: theme.tertiary }}>
                            <FaFacebook />
                        </a>
                    )}
                    {socialsData.instagram && (
                        <a href={socialsData.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" style={{ color: theme.tertiary }}>
                            <FaInstagram />
                        </a>
                    )}
                    {socialsData.youtube && (
                        <a href={socialsData.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" style={{ color: theme.tertiary }}>
                            <FaYoutube />
                        </a>
                    )}
                </div>

                {/* Copyright */}
                <p className="footer--text" style={{ color: theme.tertiary }}>
                    © {new Date().getFullYear()} {headerData.name}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer


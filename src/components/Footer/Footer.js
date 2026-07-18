import React from 'react';
import './Footer.css';
import { headerData } from '../../data/headerData';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__container">
                <span className="footer__name">{headerData.firstName}</span>
                <span className="footer__copy">
                    2024–{year}. Designed and built by Sai Teja Bhoomraogari.
                </span>
            </div>
        </footer>
    );
}

export default Footer;

import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';

import {
    Navbar, Footer, Landing, Experience, Projects, Achievement, Blog, Contacts, Skills, Volunteering
} from '../../components';
import CommandPalette from '../../components/CommandPalette/CommandPalette';
import { headerData } from '../../data/headerData';

function Main() {
    const [cmdOpen, setCmdOpen] = useState(false);

    const openPalette = useCallback(() => setCmdOpen(true), []);
    const closePalette = useCallback(() => setCmdOpen(false), []);

    // Cmd+K / Ctrl+K listener
    useEffect(() => {
        const handler = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setCmdOpen((prev) => !prev);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    return (
        <div id="main">
            <Helmet>
                <title>{headerData.name} | Software Engineer</title>
            </Helmet>

            <Navbar onOpenPalette={openPalette} />
            <Landing />
            <Projects />
            <Experience />
            <Skills />
            <Achievement />
            <Blog />
            <Volunteering />
            <Contacts />
            <Footer />

            <CommandPalette isOpen={cmdOpen} onClose={closePalette} />
        </div>
    );
}

export default Main;

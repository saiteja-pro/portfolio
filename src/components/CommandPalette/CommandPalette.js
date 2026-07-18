import React, { useEffect, useState, useCallback, useRef } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { FiSearch, FiFileText, FiMail, FiLinkedin, FiGithub, FiBookOpen, FiX } from 'react-icons/fi';

import './CommandPalette.css';
import { headerData } from '../../data/headerData';
import { contactsData } from '../../data/contactsData';
import { socialsData } from '../../data/socialsData';

const commands = [
    {
        id: 'work',
        label: 'Selected Work',
        description: 'Projects and case studies',
        type: 'nav',
        to: '/#work',
        icon: <FiBookOpen />,
    },
    {
        id: 'experience',
        label: 'Experience',
        description: 'Work history and background',
        type: 'nav',
        to: '/#experience',
        icon: <FiBookOpen />,
    },
    {
        id: 'recognition',
        label: 'Publications',
        description: 'Research and recognition',
        type: 'nav',
        to: '/#recognition',
        icon: <FiBookOpen />,
    },
    {
        id: 'writing',
        label: 'Writing',
        description: 'Essays on Medium',
        type: 'nav',
        to: '/#writing',
        icon: <FiBookOpen />,
    },
    {
        id: 'contacts',
        label: 'Contact',
        description: 'Get in touch',
        type: 'nav',
        to: '/#contacts',
        icon: <FiMail />,
    },
    {
        id: 'resume',
        label: 'Open Resume',
        description: 'Download PDF',
        type: 'external',
        href: headerData.resumePdf,
        icon: <FiFileText />,
    },
    {
        id: 'email',
        label: 'Copy Email',
        description: contactsData.email,
        type: 'copy',
        value: contactsData.email,
        icon: <FiMail />,
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        description: 'linkedin.com/in/saitejapro',
        type: 'external',
        href: socialsData.linkedIn,
        icon: <FiLinkedin />,
    },
    {
        id: 'github',
        label: 'GitHub',
        description: 'github.com/saiteja-pro',
        type: 'external',
        href: socialsData.github,
        icon: <FiGithub />,
    },
];

function CommandPalette({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [copied, setCopied] = useState(false);
    const inputRef = useRef(null);
    const listRef = useRef(null);

    const filtered = commands.filter(
        (cmd) =>
            query === '' ||
            cmd.label.toLowerCase().includes(query.toLowerCase()) ||
            cmd.description.toLowerCase().includes(query.toLowerCase())
    );

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            setQuery('');
            setActiveIndex(0);
            setCopied(false);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    // Keep active item scrolled into view
    useEffect(() => {
        const item = listRef.current?.children[activeIndex];
        if (item) {
            item.scrollIntoView({ block: 'nearest' });
        }
    }, [activeIndex]);

    const executeCommand = useCallback(
        (cmd) => {
            if (cmd.type === 'copy') {
                navigator.clipboard.writeText(cmd.value).then(() => {
                    setCopied(true);
                    setTimeout(() => {
                        onClose();
                        setCopied(false);
                    }, 800);
                });
                return;
            }
            if (cmd.type === 'external') {
                window.open(cmd.href, '_blank', 'noreferrer');
                onClose();
                return;
            }
            // nav type is handled by NavLink click via ref click
            onClose();
        },
        [onClose]
    );

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveIndex((i) => Math.max(i - 1, 0));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filtered[activeIndex]) {
                    executeCommand(filtered[activeIndex]);
                }
            } else if (e.key === 'Escape') {
                onClose();
            }
        },
        [filtered, activeIndex, executeCommand, onClose]
    );

    if (!isOpen) return null;

    return (
        <div className="cmdpal__backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Command palette">
            <div
                className="cmdpal"
                onClick={(e) => e.stopPropagation()}
                role="combobox"
                aria-expanded="true"
                aria-haspopup="listbox"
                aria-controls="cmdpal-results"
            >
                <div className="cmdpal__input-row">
                    <FiSearch className="cmdpal__search-icon" aria-hidden="true" />
                    <input
                        ref={inputRef}
                        className="cmdpal__input"
                        type="text"
                        placeholder="Search or jump to..."
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setActiveIndex(0);
                        }}
                        onKeyDown={handleKeyDown}
                        aria-autocomplete="list"
                        aria-controls="cmdpal-results"
                    />
                    <button className="cmdpal__close" onClick={onClose} aria-label="Close command palette">
                        <FiX />
                    </button>
                </div>

                <ul
                    className="cmdpal__list"
                    id="cmdpal-results"
                    role="listbox"
                    ref={listRef}
                    aria-label="Commands"
                >
                    {filtered.length === 0 && (
                        <li className="cmdpal__empty">No results for "{query}"</li>
                    )}
                    {filtered.map((cmd, index) => {
                        const isActive = index === activeIndex;

                        if (cmd.type === 'nav') {
                            return (
                                <li
                                    key={cmd.id}
                                    className={`cmdpal__item${isActive ? ' cmdpal__item--active' : ''}`}
                                    role="option"
                                    aria-selected={isActive}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <NavLink
                                        to={cmd.to}
                                        smooth
                                        duration={1200}
                                        className="cmdpal__item-inner"
                                        onClick={onClose}
                                        tabIndex={-1}
                                    >
                                        <span className="cmdpal__item-icon" aria-hidden="true">{cmd.icon}</span>
                                        <span className="cmdpal__item-text">
                                            <span className="cmdpal__item-label">{cmd.label}</span>
                                            <span className="cmdpal__item-desc">{cmd.description}</span>
                                        </span>
                                    </NavLink>
                                </li>
                            );
                        }

                        return (
                            <li
                                key={cmd.id}
                                className={`cmdpal__item${isActive ? ' cmdpal__item--active' : ''}`}
                                role="option"
                                aria-selected={isActive}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => executeCommand(cmd)}
                            >
                                <div className="cmdpal__item-inner" style={{ cursor: 'pointer' }}>
                                    <span className="cmdpal__item-icon" aria-hidden="true">{cmd.icon}</span>
                                    <span className="cmdpal__item-text">
                                        <span className="cmdpal__item-label">
                                            {cmd.id === 'email' && copied ? 'Copied!' : cmd.label}
                                        </span>
                                        <span className="cmdpal__item-desc">{cmd.description}</span>
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>

                <div className="cmdpal__footer" aria-hidden="true">
                    <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
                    <span><kbd>Enter</kbd> select</span>
                    <span><kbd>Esc</kbd> close</span>
                </div>
            </div>
        </div>
    );
}

export default CommandPalette;

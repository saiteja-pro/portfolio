import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";
import { FiSearch, FiExternalLink, FiClock, FiArrowRight } from 'react-icons/fi';

import './BlogPage.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import { headerData } from '../../data/headerData'

import placeholder from '../../assets/png/placeholder.png'

function BlogPage() {

    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = blogData.filter((blog) => {
        const content = blog.title + blog.description + blog.date
        return content.toLowerCase().includes(search.toLowerCase())
    })

    const useStyles = makeStyles((t) => ({
        home: {
            color: theme.tertiary,
            position: 'fixed',
            top: 25,
            left: 25,
            padding: '10px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '1.5rem',
            cursor: 'pointer',
            zIndex: 100,
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--glass-blur)',
            WebkitBackdropFilter: 'var(--glass-blur)',
            border: '1px solid var(--glass-border)',
            transition: 'all 0.3s ease-in-out',
            "&:hover":
            {
                color: theme.primary,
                transform: 'scale(1.1)',
                background: 'var(--glass-bg-strong)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.3rem',
                top: 15,
                left: 15,
                padding: '8px',
            },
        },
    }));

    const classes = useStyles();

    // Featured article is the first one (newest)
    const featured = filteredArticles.length > 0 ? filteredArticles[0] : null;
    const rest = filteredArticles.length > 1 ? filteredArticles.slice(1) : [];

    return (
        <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>{headerData.name} | Writing</title>
            </Helmet>

            <Link to="/">
                <AiOutlineHome className={classes.home} />
            </Link>

            {/* Hero Header */}
            <div className="blogPage--hero">
                <div className="blogPage--hero-content">
                    <h1 style={{ color: theme.tertiary }}>
                        Writing
                    </h1>
                    <p className="blogPage--subtitle" style={{ color: 'var(--text-muted)' }}>
                        A collection of things I've been thinking about.
                    </p>
                </div>

                {/* Search */}
                <div className="blogPage--search-wrapper">
                    <div className="blogPage--search-box" style={{ borderColor: 'var(--border-subtle)' }}>
                        <FiSearch className="blogPage--search-icon" style={{ color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search articles..."
                            className="blogPage--search-input"
                            style={{
                                color: theme.tertiary,
                                backgroundColor: 'transparent',
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Featured Article */}
            {featured && !search && (
                <a
                    href={featured.url}
                    target="_blank"
                    rel="noreferrer"
                    className="blogPage--featured"
                    id="featured-article"
                >
                    <div className="blogPage--featured-image">
                        <img
                            src={featured.image || placeholder}
                            alt={featured.title}
                        />
                        <div className="blogPage--featured-overlay" />
                    </div>
                    <div className="blogPage--featured-content">
                        <span className="blogPage--featured-badge" style={{ backgroundColor: theme.primary, color: theme.secondary }}>
                            Latest
                        </span>
                        <h2 style={{ color: 'var(--text-primary)' }}>{featured.title}</h2>
                        <p style={{ color: 'var(--text-muted)' }}>{featured.description}</p>
                        <div className="blogPage--featured-meta">
                            <span className="blogPage--featured-date" style={{ color: 'var(--text-muted)' }}>
                                <FiClock /> {featured.date}
                            </span>
                            <span className="blogPage--featured-read" style={{ color: theme.primary }}>
                                Read Article <FiArrowRight />
                            </span>
                        </div>
                    </div>
                </a>
            )}

            {/* Articles Grid */}
            <div className="blogPage--grid-section">
                {!search && rest.length > 0 && (
                    <h3 className="blogPage--section-title" style={{ color: 'var(--text-muted)' }}>
                        All Articles
                    </h3>
                )}
                {search && filteredArticles.length === 0 && (
                    <div className="blogPage--empty">
                        <p style={{ color: 'var(--text-muted)' }}>No articles found for "{search}"</p>
                    </div>
                )}
                <div className="blogPage--grid">
                    {(search ? filteredArticles : rest).map((blog, index) => (
                        <a
                            key={blog.id}
                            href={blog.url}
                            target="_blank"
                            rel="noreferrer"
                            className="blogPage--card"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <div className="blogPage--card-image">
                                <img
                                    src={blog.image || placeholder}
                                    alt={blog.title}
                                />
                            </div>
                            <div className="blogPage--card-body">
                                <span className="blogPage--card-date" style={{ color: 'var(--text-muted)' }}>
                                    {blog.date}
                                </span>
                                <h3 style={{ color: 'var(--text-primary)' }}>{blog.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{blog.description}</p>
                                <span className="blogPage--card-link" style={{ color: theme.primary }}>
                                    Read Article <FiExternalLink />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogPage

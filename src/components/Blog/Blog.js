import React, { useEffect, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './Blog.css';
import { blogData } from '../../data/blogData';
import { socialsData } from '../../data/socialsData';

function Blog() {
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
            { threshold: 0.08 }
        );

        const items = sectionRef.current?.querySelectorAll('[data-reveal]') || [];
        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="blog" id="writing" ref={sectionRef} aria-labelledby="writing-heading">
            <div className="blog__container">
                <div className="blog__header" data-reveal>
                    <div className="blog__header-left">
                        <span className="section-label">Writing</span>
                        <h2 id="writing-heading" className="blog__heading">
                            Selected essays
                        </h2>
                    </div>
                    {socialsData.medium && (
                        <a
                            href={socialsData.medium}
                            target="_blank"
                            rel="noreferrer"
                            className="blog__all-link"
                            data-reveal
                        >
                            All writing
                            <FiArrowUpRight />
                        </a>
                    )}
                </div>

                <div className="blog__grid">
                    {blogData.map((post, index) => (
                        <a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noreferrer"
                            className="blog-card"
                            data-reveal
                            style={{ transitionDelay: `${index * 60}ms` }}
                            aria-label={post.title}
                        >
                            <div className="blog-card__date">{post.date}</div>
                            <h3 className="blog-card__title">{post.title}</h3>
                            <p className="blog-card__desc">{post.description}</p>
                            <span className="blog-card__read">
                                Read on Medium
                                <FiArrowUpRight />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;

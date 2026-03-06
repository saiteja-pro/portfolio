import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

import placeholder from '../../../assets/png/placeholder.png'
import './SingleBlog.css'

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
        <a className="singleBlog" key={id} href={url} target="_blank" rel="noreferrer">
            <div className="singleBlog--image">
                <img src={image ? image : placeholder} alt={title} />
            </div>
            <div className="singleBlog--body">
                <p style={{ color: 'var(--text-muted)' }}>{date}</p>
                <h3 style={{ color: 'var(--text-primary)' }}>{title}</h3>
                <h6 style={{ color: 'var(--text-secondary)' }}>{desc}</h6>
                <span className="singleBlog--readMore" style={{ color: theme.primary }}>
                    Read Article <FiExternalLink />
                </span>
            </div>
        </a>
    )
}

export default SingleBlog

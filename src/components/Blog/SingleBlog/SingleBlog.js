import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

import placeholder from '../../../assets/png/placeholder.png'
import './SingleBlog.css'

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
        <a className="singleBlog" key={id} href={url} target="_blank" rel="noreferrer" style={{ backgroundColor: theme.type === 'light' ? '#000000' : 'rgba(0, 0, 0, 0.5)' }}>
            <div className="singleBlog--image" style={{ backgroundColor: theme.secondary }}>
                <img src={image ? image : placeholder} alt={title} />
            </div>
            <div className="singleBlog--body">
                <p style={{ color: theme.type === 'light' ? '#FFFFFF' : theme.tertiary }}>{date}</p>
                <h3 style={{ color: theme.type === 'light' ? '#FFFFFF' : theme.tertiary }}>{title}</h3>
                <h6 style={{ color: theme.type === 'light' ? '#E0E0E0' : theme.tertiary }}>{desc}</h6>
                <span className="singleBlog--readMore" style={{ color: theme.primary }}>
                    Read Article <FiExternalLink />
                </span>
            </div>
        </a>
    )
}

export default SingleBlog

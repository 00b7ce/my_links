import React from 'react';

function LinkCard({ url, title, icon }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="card">
            <img src={icon} alt={title} className="link-icon" />
            <span className="link-text">{title}</span>
        </a>
    );
}

export default LinkCard;
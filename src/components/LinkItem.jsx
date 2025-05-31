import React from 'react';

function LinkItem({ url, title }) {
  return (
    <div className="link-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
}

export default LinkItem;
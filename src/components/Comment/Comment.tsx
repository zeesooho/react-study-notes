import React, { useState } from 'react';
import './Comment.css';

interface CommentProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

function Comment({
  title,
  children,
  defaultExpanded = true
}: CommentProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="comment-container">
      <div className="comment-header">
        <div className="comment-title">
          <span className="comment-icon"></span>
          {title}
        </div>
        <button
          className={`comment-toggle ${isExpanded ? 'expanded' : ''}`}
          onClick={toggleExpanded}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? '내용 접기' : '내용 펼치기'}
        >
          {isExpanded ? '▼' : '▶'}
        </button>
      </div>
      {isExpanded && (
        <div className="comment-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Comment; 
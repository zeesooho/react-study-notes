import React from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css';

interface PostItemProps {
  number: number;
  title: string;
  description?: string;
  isExternal?: boolean;
  externalUrl?: string;
  internalPath?: string;
  compact?: boolean;
}

const PostItem: React.FC<PostItemProps> = ({ 
  number,
  title, 
  description, 
  isExternal = false, 
  externalUrl, 
  internalPath,
  compact = false
}) => {
  // compact: 숫자만 표시
  // !compact: 숫자. 제목, 설명 표시
  const label = compact ? String(number) : `${number}. ${title}`;
  const itemClass = compact ? 'post-item compact' : 'post-item';

  if (isExternal && externalUrl) {
    return (
      <li className={itemClass}>
        <a 
          href={externalUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="post-link"
        >
          {label}
        </a>
        {!compact && description && <p className="post-description">{description}</p>}
      </li>
    );
  }

  if (internalPath) {
    return (
      <li className={itemClass}>
        <Link to={internalPath} className="post-link">
          {label}
        </Link>
        {!compact && description && <p className="post-description">{description}</p>}
      </li>
    );
  }

  return null;
};

export default PostItem; 
import React from 'react';
import PostItem from '../components/PostItem';
import './Home.css';

interface Post {
  number: number;
  title: string;
  description?: string;
  isExternal?: boolean;
  externalUrl?: string;
  internalPath?: string;
}

interface HomeProps {
  posts: Post[];
}

function Home({ posts }: HomeProps) {
  return (
    <div className="home">
      <h2>안녕하세요! 👋</h2>
      <p>웹 개발을 공부하면서 예시를 정리하기 위한 사이트입니다.</p>
      
      <div className="post-list">
        <h3>📚 학습 포스트 목록</h3>
        <ul>
          {posts.map((post, idx) => (
            <PostItem
              key={idx}
              number={post.number}
              title={post.title}
              description={post.description}
              isExternal={post.isExternal}
              externalUrl={post.externalUrl}
              internalPath={post.internalPath}
              compact={false}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
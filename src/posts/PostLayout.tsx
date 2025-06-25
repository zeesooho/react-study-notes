import React from 'react';
import './PostLayout.css';

interface PostLayoutProps {
  title: string;
  titleLink?: string;
}

interface PostLayoutComponentProps {
  children: React.ReactNode;
}

function PostLayout({
  title,
  children,
  titleLink
}: PostLayoutProps & PostLayoutComponentProps) {
  const defaultLink = "https://velog.io/@zeeso/series/React-Node.js-TypeScript%EB%A1%9C-%EC%8B%9C%EC%9E%91%ED%95%98%EB%8A%94-%EC%9B%B9-%EA%B0%9C%EB%B0%9C";
  const link = titleLink || defaultLink;

  return (
    <div className="post-layout">
      <h1 className="post-title">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="title-link"
        >
          {title}
        </a>
      </h1>
      <div className="post-content">
        {children}
      </div>
    </div>
  );
}

// HOC 함수: PostLayout을 감싸는 컴포넌트를 만드는 함수
export const withPostLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  title: string,
  titleLink?: string
) => {
  function WithPostLayoutComponent(props: P) {
    return (
      <PostLayout title={title} titleLink={titleLink}>
        <WrappedComponent {...props} />
      </PostLayout>
    );
  }

  WithPostLayoutComponent.displayName = `withPostLayout(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithPostLayoutComponent;
};

export default PostLayout; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Post4 from './posts/post4/Post4';
import Home from './pages/Home';
import NotFound from './pages/Notfound';
import PostItem from './components/PostItem';
import Post5 from './posts/post5/Post5';

const navPosts = [
  {
    number: 1,
    title: 'Node.js와 React 개발환경 준비하기',
    description: 'Node.js 설치부터 React 프로젝트 생성까지',
    isExternal: true,
    externalUrl:
      'https://velog.io/@zeeso/Node.js%EC%99%80-npm-React-%EA%B0%9C%EB%B0%9C%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%A4%80%EB%B9%84',
  },
  {
    number: 2,
    title: 'React 시작하기 - 기본 웹 개발 개념과 첫 프로젝트',
    description: 'HTML, CSS, JavaScript, DOM 개념과 React 기초',
    isExternal: true,
    externalUrl:
      'https://velog.io/@zeeso/React-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EA%B8%B0%EB%B3%B8-%EC%9B%B9-%EA%B0%9C%EB%B0%9C-%EA%B0%9C%EB%85%90%EA%B3%BC-%EC%B2%AB-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0',
  },
  {
    number: 3,
    title: 'React 웹 표준과 접근성 검사 도구 설정',
    description: '시맨틱 HTML, SEO, 접근성 검사 도구',
    isExternal: true,
    externalUrl:
      'https://velog.io/@zeeso/%EC%9B%B9-%ED%91%9C%EC%A4%80%EA%B3%BC-%EC%A0%91%EA%B7%BC%EC%84%B1-%EA%B2%80%EC%82%AC-%EB%8F%84%EA%B5%AC-%EC%84%A4%EC%A0%95',
  },
  {
    number: 4,
    title: 'HTML에서 TSX로, React 컴포넌트 기초',
    description: 'TSX 문법, React 컴포넌트, Props 이해하기',
    internalPath: '/post4',
  },
  {
    number: 5,
    title: 'Props와 조건부 렌더링으로 React 컴포넌트 심화하기',
    description: 'Props 타입 정의, 조건부 렌더링, 리스트 렌더링',
    internalPath: '/post5',
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            <Link to="/" className="title-link">
              React + TypeScript 학습 블로그
            </Link>
          </h1>
          <nav>
            <ul className="nav-list">
              {navPosts.map((post, idx) => (
                <PostItem
                  key={idx}
                  number={post.number}
                  title={post.title}
                  isExternal={post.isExternal}
                  externalUrl={post.externalUrl}
                  internalPath={post.internalPath}
                  compact={true}
                />
              ))}
            </ul>
          </nav>
        </header>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home posts={navPosts} />} />
            <Route path="/post4" element={<Post4 />} />
            <Route path="/post5" element={<Post5 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

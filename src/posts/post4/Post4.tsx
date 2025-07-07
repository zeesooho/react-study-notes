import React from 'react';
import { withPostLayout } from '../PostLayout';
import CodeBlock from '../../components/CodeBlock/CodeBlock';

// 함수형 컴포넌트 선언부
const Greeting = () => {
  return <h1>안녕하세요!</h1>;
};

const Header = () => <header>헤더 영역</header>;
const Main = () => <main>메인 콘텐츠</main>;
const Footer = () => <footer>푸터 영역</footer>;

function Button() {
  return <button>클릭!</button>;
}

const Post4Content: React.FC = () => {
  return (
    <>
      <CodeBlock
        code={`import React from "react";

function Greeting() {
  return <h1>안녕하세요!</h1>;
}

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
`}
      >
        <Greeting />
      </CodeBlock>
      <CodeBlock
        code={`import React from "react";

function Header() {
  return <header>헤더 영역</header>;
}

function Main() {
  return <main>메인 콘텐츠</main>;
}

function Footer() {
  return <footer>푸터 영역</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;`}
      >
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </CodeBlock>
      <CodeBlock
        code={`import React from "react";

function Button() {
  return <button>클릭!</button>;
}

function App() {
  return (
    <div>
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;
`}
      >
        <Button />
        <Button />
        <Button />
      </CodeBlock>
    </>
  );
};

// HOC를 사용하여 PostLayout을 적용
const Post4 = withPostLayout(
  Post4Content,
  'HTML에서 TSX로, React 컴포넌트 기초',
  'https://velog.io/@zeeso/HTML%EC%97%90%EC%84%9C-TSX%EB%A1%9C-React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B8%B0%EC%B4%88',
);

export default Post4;

import React from 'react';
import { withPostLayout } from '../PostLayout';
import CodeBlock from '../../components/CodeBlock/CodeBlock';

const Post4Content: React.FC = () => {
    return (
        <>
            <CodeBlock cssUrl="/posts/post4/post4-preview.css">
                <div id="my-special-div">
                    <h1>제목</h1>
                    <p>이제 로컬 CSS 파일로 스타일이 적용됩니다.</p>
                </div>
            </CodeBlock>
        </>
    );
};

// HOC를 사용하여 PostLayout을 적용
const Post4 = withPostLayout(
    Post4Content,
    "HTML에서 TSX로, React 컴포넌트 기초",
    "https://velog.io/@zeeso/HTML%EC%97%90%EC%84%9C-TSX%EB%A1%9C-React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B8%B0%EC%B4%88"
);

export default Post4;
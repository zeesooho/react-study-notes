import React from 'react';
import { withPostLayout } from '../PostLayout';
import CodeBlock from '../../components/CodeBlock/CodeBlock';

interface UserCardProps {
  name: string;
  age: number;
  email?: string; // 선택적 속성 (있어도 없어도 그만)
  isActive: boolean;
  onClick?: (age: number) => void; // 함수도 Props로 받을 수 있음
}

const UserCard: React.FC<UserCardProps> = ({ name, age, email, isActive, onClick }) => {
  return (
    <div className={`post5-user-card ${isActive ? 'active' : 'inactive'}`}>
      <h3>{name}</h3>
      <p>나이: {age}세</p>
      {email && <p>이메일: {email}</p>}
      <div className={`post5-status ${isActive ? 'online' : 'offline'}`}>
        {isActive ? '온라인' : '오프라인'}
      </div>
      {onClick && (
        <button className="post5-detail-btn" onClick={() => onClick(age)}>
          상세보기
        </button>
      )}
    </div>
  );
};

interface ButtonProps {
  text?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ text = '확인', color = '#2196f3', size = 'medium' }) => {
  return (
    <button style={{ background: color, marginRight: 8 }}>
      {text} ({size})
    </button>
  );
};

const StatusBadge = ({ isActive }: { isActive: boolean }) => {
  return (
    <span className={`post5-badge ${isActive ? 'online' : 'offline'}`}>
      {isActive ? '온라인' : '오프라인'}
    </span>
  );
};

const Welcome = ({ name }: { name?: string }) => {
  return (
    <div className="post5-welcome">
      <p>환영합니다!</p>
      {name && <p>{name}님, 반가워요!</p>}
    </div>
  );
};

const Post5Content: React.FC = () => {
  return (
    <div className="post-content">
      <CodeBlock
        code={`interface UserCardProps {
  name: string;
  age: number;
  email?: string; // 선택적 속성 (있어도 없어도 그만)
  isActive: boolean;
  onEdit?: (id: number) => void; // 함수도 Props로 받을 수 있음
}
  
const UserCard: React.FC<UserCardProps> = ({ name, age, email, isActive, onClick }) => {
  return (
    <div className={\`user-card \${isActive ? 'active' : 'inactive'}\`}>
      <h3>{name}</h3>
      <p>나이: {age}세</p>
      {email && <p>이메일: {email}</p>}
      <div className={\`status \${isActive ? 'online' : 'offline'}\`}>
        {isActive ? '온라인' : '오프라인'}
      </div>
      {onClick && <button onClick={() => onClick(age)}>상세보기</button>}
    </div>
  );
};


<UserCard name="John" age={25} isActive={true} onClick={(age) => alert(\`\${age}세 사용자 상세정보를 보여줍니다!\`)} />
<UserCard name="John" age={25} isActive={false} email="john@example.com" />
`}
        cssUrl="/posts/post5/post5-preview.css"
      >
        <UserCard
          name="John"
          age={25}
          isActive={true}
          onClick={(age) => {
            alert(`${age}세 사용자 상세정보를 보여줍니다!`);
          }}
        />
        <UserCard name="John" age={25} isActive={false} email="john@example.com" />
      </CodeBlock>
      <CodeBlock
        code={`interface ButtonProps {
  text?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  text = '확인',
  color = '#2196f3',
  size = 'medium',
}) => {
  return (
    <button style={{ background: color }}>
      {text} ({size})
    </button>
  );
};

<Button />
<Button text="삭제" color="#f44336" size="small" />
`}
      >
        <Button />
        <Button text="삭제" color="#f44336" size="small" />
      </CodeBlock>
      <CodeBlock
        code={`const StatusBadge = ({ isActive }: { isActive: boolean }) => {
  return (
    <span className={
      isActive ? 'badge online' : 'badge offline'
    }>
      {isActive ? '온라인' : '오프라인'}
    </span>
  );
};

const Welcome = ({ name }: { name?: string }) => {
  return (
    <div className="post5-welcome">
      <p>환영합니다!</p>
      {name && <p>{name}님, 반가워요!</p>}
    </div>
  );
};

<StatusBadge isActive={true} />
<StatusBadge isActive={false} />
<Welcome name="홍길동" />
<Welcome />
`}
      >
        <StatusBadge isActive={true} />
        <StatusBadge isActive={false} />
        <Welcome name="홍길동" />
        <Welcome />
      </CodeBlock>
    </div>
  );
};

// HOC를 사용하여 PostLayout을 적용
const Post5 = withPostLayout(
  Post5Content,
  'Props와 조건부 렌더링으로 React 컴포넌트 심화하기',
  'https://velog.io/@zeeso/Props%EC%99%80-%EC%A1%B0%EA%B1%B4%EB%B6%80-%EB%A0%8C%EB%8D%94%EB%A7%81%EC%9C%BC%EB%A1%9C-React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%8B%AC%ED%99%94%ED%95%98%EA%B8%B0',
);

export default Post5;

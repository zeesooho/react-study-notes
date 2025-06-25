import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import './CodeBlock.css';

interface CodeBlockProps {
  code: string;
  children: React.ReactNode;
  showHighlighter?: boolean;
  showPreview?: boolean;
  style?: React.CSSProperties;
  cssUrl?: string;
  defaultShowPreview?: boolean;
}

function CodeBlock({
  code,
  children,
  showHighlighter = true,
  showPreview = true,
  style,
  cssUrl,
  defaultShowPreview = true,
}: CodeBlockProps) {
  const [cssContent, setCssContent] = useState('');
  const [isPreviewVisible, setIsPreviewVisible] = useState(defaultShowPreview);

  useEffect(() => {
    if (cssUrl) {
      fetch(cssUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then((text) => setCssContent(text))
        .catch((error) => console.error('Error fetching CSS:', error));
    }
  }, [cssUrl]);

  const togglePreview = () => {
    setIsPreviewVisible(!isPreviewVisible);
  };

  return (
    <div className="code-block-container">
      {showHighlighter && (
        <SyntaxHighlighter language="tsx" style={atomDark} className="code-highlighter">
          {code}
        </SyntaxHighlighter>
      )}
      {showPreview && (
        <>
          <div className="preview-header">
            <button
              className={`preview-toggle ${isPreviewVisible ? 'expanded' : ''}`}
              onClick={togglePreview}
              aria-expanded={isPreviewVisible}
              aria-label={isPreviewVisible ? '실행 결과 숨기기' : '실행 결과 보기'}
            >
              {isPreviewVisible ? '▼' : '▶'} 실행 결과
            </button>
          </div>
          {isPreviewVisible && (
            <div className="preview-container" style={style}>
              <div className="style-reset">
                {cssContent && <style>{cssContent}</style>}
                {children}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CodeBlock; 
import React, { useState, useEffect } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import './CodeBlock.css';

interface CodeBlockProps {
  children: React.ReactElement;
  showHighlighter?: boolean;
  showPreview?: boolean;
  style?: React.CSSProperties;
  cssUrl?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  showHighlighter = true,
  showPreview = true,
  style,
  cssUrl,
}) => {
  const [cssContent, setCssContent] = useState('');

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

  const codeString = reactElementToJSXString(children, {
    showFunctions: true,
    functionValue: (fn) => `${fn.name}()`,
  });

  return (
    <div className="code-block-container">
      {showHighlighter && (
        <SyntaxHighlighter language="tsx" style={atomDark} className="code-highlighter">
          {codeString}
        </SyntaxHighlighter>
      )}
      {showPreview && (
        <div className="preview-container" style={style}>
          <div className="style-reset">
            {cssContent && <style>{cssContent}</style>}
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeBlock; 
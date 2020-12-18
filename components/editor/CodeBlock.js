import SyntaxHighlighter from 'react-syntax-highlighter';
// import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = (props) => {
  return (
    <SyntaxHighlighter language={props.language}>
      {props.value || ''}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

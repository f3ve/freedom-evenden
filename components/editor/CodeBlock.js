// import { Card } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = (props) => {
  return (
    <SyntaxHighlighter language={props.language}>
      {props.value || ''}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

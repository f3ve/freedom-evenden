import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = (props) => {
  return (
    <SyntaxHighlighter language={props.language} style={monokaiSublime}>
      {props.value || ''}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

import SyntaxHighlighter from 'react-syntax-highlighter';
// import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function constructor(props) {
  return (
    <SyntaxHighlighter language={props.language}>
      {props.value || ''}
    </SyntaxHighlighter>
  );
}

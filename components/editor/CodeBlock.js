import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function CodeBlock(props) {
  return (
    <SyntaxHighlighter
      language={props.node.language}
      style={atomOneDark}
      showLineNumbers
      customStyle={{
        borderRadius: 15,
        fontSize: 16,
      }}
    >
      {props.node.code || ''}
    </SyntaxHighlighter>
  );
}

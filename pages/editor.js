import { useCallback, useMemo, useState } from 'react';
import { createEditor, Editor, Transforms } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { Container } from '@material-ui/core';
import Paragraph from '../components/editor/Paragraph';

const editor = () => {
  const editorField = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus sed augue eget consequat. Praesent et sapien leo. Mauris ultrices vel elit nec fringilla. Morbi eget lectus at turpis cursus imperdiet vel at sem. Quisque tincidunt non est sed pellentesque. Ut sed sem tortor. Nunc viverra, erat et lobortis vestibulum, sapien turpis tempor purus, et consectetur leo risus vitae lectus. Morbi non tortor libero. Morbi sodales accumsan dolor vitae ultricies. Ut in ex vel tortor molestie auctor in eu est. ',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'Fusce condimentum ligula in elementum fringilla. In eleifend ligula purus, nec convallis justo dignissim ac. Praesent eleifend eu libero a eleifend. Suspendisse lacinia ut nisi nec luctus. Sed vulputate risus elit, ac convallis enim tincidunt ut. Nam nibh ante, tincidunt eget orci nec, consectetur imperdiet erat. Nunc ultricies tortor ipsum, vitae mattis quam facilisis ac. Suspendisse potenti. Nam ac nibh eu neque dapibus hendrerit. Integer laoreet finibus tincidunt. Curabitur quis condimentum libero, vitae consequat urna. Cras id urna hendrerit, tristique est eget, suscipit magna. Sed porta nec nisi ut varius. Praesent tempus eu dolor sed vulputate. Donec rhoncus maximus eros, eget dapibus nisi imperdiet ut. ',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'Donec tempus varius ligula dignissim convallis. Nulla malesuada lorem vel velit tincidunt, ac blandit tellus vestibulum. Etiam pharetra facilisis iaculis. Vestibulum in sem ornare, pulvinar purus quis, malesuada tellus. In hac habitasse platea dictumst. Duis lobortis lorem egestas, viverra nisl at, scelerisque leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ex eget arcu rutrum molestie.',
        },
      ],
    },
  ]);

  const CodeElement = (props) => {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    );
  };

  const renderElement = useCallback((props) => {
    // console.log(props.element.type);
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;

      default:
        return <Paragraph {...props} />;
    }
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === '`' && e.ctrlKey) {
      // Prevent the "`" from being inserted by default.
      e.preventDefault();
      console.log('weee');
      // Otherwise, set the currently selected blocks type to "code".
      Transforms.setNodes(
        editor,
        { type: 'code' },
        { match: (n) => Editor.isBlock(editor, n) }
      );
    }
  };

  return (
    <Container maxWidth='sm'>
      <Slate
        editor={editorField}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable renderElement={renderElement} onKeyDown={handleKeyPress} />
      </Slate>
    </Container>
  );
};

export default editor;

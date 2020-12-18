/* eslint-disable no-nested-ternary */
import { Typography } from '@material-ui/core';

export default function Heading(props) {
  return (
    <Typography variant={`h${props.level}`} gutterBottom color={props.color}>
      {props.node && props.node.children[0]
        ? props.node.children[0].value
        : props.text
        ? props.text
        : ''}
    </Typography>
  );
}

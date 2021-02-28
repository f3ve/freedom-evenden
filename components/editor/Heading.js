/* 
  custom heading component for easily reusing same component styles throughout 
  site.
*/

/* eslint-disable no-nested-ternary */
import { Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

export default function Heading(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm')); // sets breakpoint for small screens

  /* 
    this changes size of heading based on screen size
  */
  const headingVariantSize = matches
    ? `h${props.level + 2}`
    : `h${props.level}`;

  return (
    <Typography variant={headingVariantSize} gutterBottom color="secondary">
      {props.node && props.node.children[0]
        ? props.node.children[0].value
        : props.text
        ? props.text
        : ''}
    </Typography>
  );
}

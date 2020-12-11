/* eslint-disable no-nested-ternary */
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  Heading: {
    fontFamily: 'Noto Sarif',
  },
}));

const Heading = (props) => {
  const styles = useStyles();
  return (
    <Typography
      variant={`h${props.level}`}
      gutterBottom
      className={styles.Heading}
    >
      {props.node && props.node.children[0]
        ? props.node.children[0].value
        : props.text
        ? props.text
        : ''}
    </Typography>
  );
};

export default Heading;

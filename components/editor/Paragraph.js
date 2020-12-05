import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  paragraph: {
    marginBottom: theme.spacing(4),
    fontSize: 20,
  },
}));

const Paragraph = (props) => {
  const styles = useStyles();
  console.log(props.node.children[0].value);
  return (
    <Typography
      variant='body1'
      component='p'
      gutterBottom
      className={styles.paragraph}
    >
      {props.node.children[0].value}
    </Typography>
  );
};

export default Paragraph;

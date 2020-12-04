import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  paragraph: {
    marginBottom: theme.spacing(2),
  },
}));

const Paragraph = (props) => {
  const styles = useStyles();
  return (
    <Typography
      variant='body1'
      component='p'
      gutterBottom
      className={styles.paragraph}
      {...props.attributes}
    >
      {props.children}
    </Typography>
  );
};

export default Paragraph;

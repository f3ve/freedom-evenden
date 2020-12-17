import {
  Grid,
  Button,
  Grow,
  Box,
  Typography,
  Divider,
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/styles';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { colors } from '../../Theme';
import Heading from '../editor/Heading';

const useStyles = () =>
  makeStyles(() => ({
    body: {
      color: colors.white,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    button: {
      alignSelf: 'flex-end',
    },
  }));

const ArticleCard = ({ article }, props) => {
  const styles = useStyles();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/articles/${article.slug}`);
  };

  const date = format(new Date(article.publish_date), 'MMMM d, yyyy');

  return (
    <Grow in>
      <Grid item key={article.id} {...props}>
        <Box variant='outlined' className={styles.body}>
          <Heading level={3} text={article.title} color='Secondary' />
          <Typography variant='body2' color='primary' gutterBottom>
            {date} | Freeom Evenden
          </Typography>
          <Typography
            variant='body1'
            gutterBottom
            className={styles.body}
            color='textPrimary'
          >
            {article.summary}
          </Typography>
          <Button
            onClick={handleClick}
            variant='contained'
            endIcon={<ArrowRightAltIcon />}
            color='primary'
            className={styles.button}
          >
            Read More
          </Button>
          <Divider />
        </Box>
      </Grid>
    </Grow>
  );
};

export default ArticleCard;

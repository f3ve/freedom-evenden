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
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      position: 'relative',
      zIndex: 1,
      backgroundColor: colors.background,
    },
    button: {
      alignSelf: 'flex-end',
    },
  }));

export default function ArticleCard({ article }, props) {
  const styles = useStyles();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/articles/${article.slug}`);
  };

  const date = format(new Date(article.publish_date), 'MMMM d, yyyy');

  return (
    <Grow in>
      <Grid item key={article.id} {...props} className={styles.body}>
        <Box className={styles.body} zIndex={1} position='relative'>
          <Heading level={3} text={article.title} color='secondary' />
          <Typography variant='body2' color='textSecondary' gutterBottom>
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
}

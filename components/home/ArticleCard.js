import {
  Grid,
  Button,
  Grow,
  Typography,
  Divider,
  Zoom,
  Box,
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/styles';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import Heading from '../editor/Heading';

const useStyles = makeStyles(() => ({
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
      <Grid item {...props}>
        <Heading level={3} text={article.title} color="secondary" />
        <Zoom in style={{ transitionDelay: '400ms' }}>
          <Box>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {date} | Freeom Evenden
            </Typography>
            <Typography variant="body1" gutterBottom color="textPrimary">
              {article.summary}
            </Typography>
          </Box>
        </Zoom>
        <Zoom in style={{ transitionDelay: '800ms' }}>
          <Button
            onClick={handleClick}
            endIcon={<ArrowRightAltIcon />}
            color="primary"
            className={styles.button}
          >
            Read More
          </Button>
        </Zoom>
        <Divider />
      </Grid>
    </Grow>
  );
}

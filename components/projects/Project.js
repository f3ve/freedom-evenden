import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  container: {
    listStyle: 'none',
    marginBottom: 50,
    position: 'relative',
    zIndex: 1,
  },
  placeholderImg: {
    position: 'absolute',
    height: 495,
    maxHeight: '100%',
    /* Adjust the content to fit */
    objectFit: 'contain',
    objectPosition: 'center',
    /* Blur the image and scale to avoid transparent corners */
    filter: 'blur(20px)',
    transform: 'scale(1.1)',
    borderRadius: 100,
  },

  imgContainer: {
    position: 'relative',
    width: '100%',
    height: 495,
    maxHeight: '56.26%',
    overflow: 'hidden',
  },
}));

export default function Project({ p }) {
  const styles = useStyles();

  return (
    <Box className={styles.container} component="li">
      <Card className={styles.card}>
        <div className={styles.imgContainer}>
          <img
            src={p.placeholderImg}
            alt="0"
            className={styles.placeholderImg}
          />
          <Image src={p.img} width={1280} height={720} priority />
        </div>
        <Divider />
        <CardHeader title={p.title} />
        <CardContent className={styles.content}>
          <Typography variant="body1" component="p">
            {p.description}
          </Typography>
        </CardContent>
        <CardActionArea>
          {p.clientRepo && (
            <IconButton
              href={p.clientRepo}
              color="primary"
              target="_blank"
              aria-label="GitHub Repo"
              rel="noopener"
            >
              <GitHubIcon />
            </IconButton>
          )}
          <IconButton
            href={p.live}
            color="primary"
            aria-label="Live website"
            target="_blank"
            rel="noopener"
          >
            <WebIcon />
          </IconButton>
        </CardActionArea>
      </Card>
      <Divider />
    </Box>
  );
}

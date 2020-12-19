import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Link,
  Typography,
  Zoom,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  card: {
    margin: theme.spacing(2),
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  container: {
    marginBottom: 50,
    position: 'relative',
    zIndex: 1,
  },
}));

export default function Project({ p }) {
  const styles = useStyles();
  const router = useRouter();

  return (
    <Zoom in>
      <Box className={styles.container}>
        <Card compont="li" className={styles.card}>
          <Zoom in style={{ transitionDelay: '500ms' }}>
            <CardMedia image={p.img} className={styles.media} />
          </Zoom>
          <Divider />
          <CardHeader title={p.title} />
          <CardContent className={styles.content}>
            <Typography variant="body1" component="p">
              {p.description}
            </Typography>
          </CardContent>
          <CardActionArea>
            <IconButton href={p.clientRepo} color="primary">
              <GitHubIcon />
            </IconButton>
            <IconButton href={p.live} color="primary">
              <WebIcon />
            </IconButton>
          </CardActionArea>
        </Card>
        <Divider />
      </Box>
    </Zoom>
  );
}

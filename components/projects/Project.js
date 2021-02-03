import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

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
    listStyle: 'none',
    marginBottom: 50,
    position: 'relative',
    zIndex: 1,
  },
}));

export default function Project({ p }) {
  const styles = useStyles();

  return (
    <Box className={styles.container} component="li">
      <Card className={styles.card}>
        <CardMedia image={p.img} className={styles.media} />
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
              // rel="noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          )}
          <IconButton
            href={p.live}
            color="primary"
            aria-label="Live website"
            target="_blank"
            // rel="noreferrer"
          >
            <WebIcon />
          </IconButton>
        </CardActionArea>
      </Card>
      <Divider />
    </Box>
  );
}

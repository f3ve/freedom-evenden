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
    marginBottom: 50,
  },
}));

const Project = ({ p }) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Card compont='li' className={styles.card}>
        <CardMedia image={p.img} className={styles.media} />
        <Divider />
        <CardHeader title={p.title} />
        <CardContent className={styles.content}>
          <Typography variant='body1' component='p'>
            {p.description}
          </Typography>
        </CardContent>
        <CardActionArea>
          <IconButton color='primary'>
            <GitHubIcon />
          </IconButton>
          <IconButton color='primary'>
            <WebIcon />
          </IconButton>
        </CardActionArea>
      </Card>
      <Divider />
    </Box>
  );
};

export default Project;

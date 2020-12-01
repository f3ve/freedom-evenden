import {
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
import { colors } from '../../Theme';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  card: {
    margin: theme.spacing(2),
  },
}));

const Project = ({ p }) => {
  const styles = useStyles();
  return (
    <Card compont='li' className={styles.card}>
      <CardMedia image={p.img} className={styles.media} />
      <Divider />
      <CardHeader title={p.title} />
      <CardContent className={styles.content}>
        <Typography variant='body2' component='p'>
          {p.description}
        </Typography>
      </CardContent>
      <CardActionArea>
        <IconButton>
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <WebIcon />
        </IconButton>
      </CardActionArea>
    </Card>
  );
};

export default Project;

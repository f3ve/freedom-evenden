import {
  Container,
  Divider,
  Grid,
  ButtonGroup,
  IconButton,
  useMediaQuery,
  useTheme,
  makeStyles,
  Typography,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import Image from 'next/image';
import Heading from '../editor/Heading';

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    position: 'relative',
  },

  main: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    backgroundColor: theme.palette.background.main,
  },

  authorImage: {
    borderRadius: 10,
    objectFit: 'cover',
  },
}));

export default function Footer() {
  const styles = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <footer className={styles.main}>
      <Divider />
      <Container
        maxWidth="md"
        component="footer"
        classes={{ maxWidthMd: styles.footer }}
      >
        <Heading text="About the Author" level={2} />
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item md={4} sm={12}>
            <Image
              alt="picture of the author"
              src="/images/9A1C5BC0-339D-43CD-816A-3E9C3CD47FA0.jpg"
              width={250}
              height={250}
              className={styles.authorImage}
            />
          </Grid>
          <Grid item md={8}>
            <Grid
              container
              justify={smallScreen ? 'center' : 'flex-start'}
              alignItems="center"
            >
              <Grid item>
                <ButtonGroup>
                  <IconButton
                    color="primary"
                    href="https://www.linkedin.com/in/freedom-evenden-dev/"
                    target="_blank"
                    aria-label="Freedom's LinkedIn profile."
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="https://github.com/f3ve"
                    rel="noreferrer"
                    target="_blank"
                    aria-label="Freedom's GitHub Profile"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="https://twitter.com/f3veDev"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Freedom's twitter profile"
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="mailto:free.eve@protonmail.com"
                    aria-label="Email Freedom"
                  >
                    <MailIcon />
                  </IconButton>
                </ButtonGroup>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="textPrimary" align="left">
                  Freedom is a full-stack web developer with experience building
                  responsive, mobile-first applications using React.js, Node.js,
                  Express, Python, Django, and PostgreSQL. When he&apos;s not
                  writing code he&apos;s usualy spending time with his wife, at
                  the gym, or conquering his foes in strategy games.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

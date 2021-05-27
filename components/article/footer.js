/* 
  footer component for Article pages
*/

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
    borderRadius: 125,
    objectFit: 'cover',
  },

  imgContainer: {
    position: 'relative',
    width: 250,
    height: 250,
    overflow: 'hidden',
    borderRadius: 125,
  },

  placeholderImg: {
    position: 'absolute',
    height: 250,
    width: 250,
    filter: 'blur(20px)',
    borderRadius: 125,
    transform: 'scale(1.1)',
    objectFit: 'cover',
  },
}));

export default function Footer({ imgBase64, imgSrc }) {
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
            <div className={styles.imgContainer}>
              <img
                aria-hidden="true"
                alt=""
                src={imgBase64}
                className={styles.placeholderImg}
              />
              <Image
                alt="picture of the author"
                src={imgSrc}
                width={250}
                height={250}
                className={styles.authorImage}
              />
            </div>
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
                    rel="noopener"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="https://github.com/f3ve"
                    rel="noopener"
                    target="_blank"
                    aria-label="Freedom's GitHub Profile"
                  >
                    <GitHubIcon />
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
                <Typography
                  variant="body1"
                  color="textPrimary"
                  align="left"
                  gutterBottom
                >
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

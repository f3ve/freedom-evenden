import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const login = () => {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container maxWidth="md">
      <Typography variant="h2" color="secondary" align="center">
        Login
      </Typography>
      <Box component="form" className={styles.form}>
        <TextField
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            console.log(email, password);
          }}
        >
          Log in
        </Button>
      </Box>
    </Container>
  );
};

export default login;

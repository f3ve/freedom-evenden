import {
  Button,
  Collapse,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Heading from '../../components/editor/Heading';
import RouterLink from '../../components/global/RouterLinks';
import { apiPostLogin } from '../../services/ArticleApiService';

export default function Admin() {
  const router = useRouter();
  const [creds, setCreds] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  function handleLogin() {
    apiPostLogin('auth/login', creds)
      .then((woo) => {
        console.log(woo);
        setCreds({
          email: '',
          password: '',
        });
        router.push('/admin/editor');
      })
      .catch((err) => setError(err.error));
  }

  function handleUpdateCreds(key, val) {
    setError(false);
    setCreds((cur) => ({
      ...cur,
      [key]: val,
    }));
  }

  return (
    <Container maxWidth="md">
      <Heading text="Admin Login" level={3} component="h2" />
      <Collapse in={!!error}>
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      </Collapse>
      <form>
        <TextField
          label="email"
          value={creds.email}
          onChange={(e) => handleUpdateCreds('email', e.target.value)}
        />
        <TextField
          label="password"
          value={creds.password}
          onChange={(e) => handleUpdateCreds('password', e.target.value)}
        />
        <Button onClick={() => handleLogin()}>Login</Button>
        <RouterLink text="go back" href="/" />
      </form>
    </Container>
  );
}

import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [ isLoggedIn ] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn) {
      navigate('/dashboard', { replace: true });
    }
  });

  if (isLoggedIn) return null;

  return (
    <Container>
      <Typography
        variant="h1"
        component="h1"
        mt={4}
      >Login Page</Typography>
    </Container>
  );
};

export default LoginPage;
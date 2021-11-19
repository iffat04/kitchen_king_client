import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import UseAuth from '../../hooks/useAuth';

import { Navigate } from "react-router";
const theme = createTheme();


const Register = () => {

  const {user,registerUser} =UseAuth();
  const[regstatus, setRegstatus] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // eslint-disable-next-line no-console
    const newUser = {
      name:data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };
    console.log(newUser)
    registerUser(newUser.email ,newUser.password, newUser.name );
    setRegstatus(true);

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
                />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/login" variant="body2">
                  {"Already have an account? SignIn "}
                </Link>
              </Grid>
            </Grid>
            <Typography align="center">----Or----</Typography>
            <FormControlLabel
              control={
              <GoogleIcon sx={{color:"orange", fontSize:"30px", marginX:"3px"}}/>
              }
              label=" SignIn with Google"
              sx={{border:"1px solid tomato", paddingX:"3px", paddingY:"2px",marginY:"10px", borderRadius:"4px"}}
            />
          </Box>
        </Box>
        {regstatus &&
        <Navigate replace to="/home" />
          
        }
      </Container>
    </ThemeProvider>
  );
}

export default Register;
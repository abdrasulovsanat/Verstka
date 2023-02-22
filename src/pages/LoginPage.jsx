import React, { useState } from 'react';
import { Box, Button, createTheme, TextField } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useAuth } from '../contexts/AuthContextProvider';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useAuth();

  const indigoTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: red[300],
      },
    },
  });

  const inpsStyles = {
    margin: "15vmin auto",
  };

  return (
    <center>
    <div className='card'>
      <div>
        <Box>
      <Box sx={inpsStyles}>
      <h2>Login User</h2>
      {error ? (
        <h3>{error}</h3>
      ) : (
        ''
      )}
      <TextField type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} sx={{ mx: 2 }} id="outlined-basic" label="Username" />
      <TextField type="text" placeholder='Password' onChange={e => setPassword(e.target.value)} sx={{ mx: 2 }} id="outlined-basic" label="Password" />
      <br />
      <Button variant="contained" theme={indigoTheme} sx={{ mx: 2 }} onClick={() => login(username, password)}>Login</Button>
      </Box>
      </Box>
    </div>
    </div>
    </center>
  )
}

export default LoginPage
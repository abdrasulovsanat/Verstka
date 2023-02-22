import React, { useState } from 'react';
import { Box, Button, createTheme, TextField } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useAuth } from '../contexts/AuthContextProvider';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { register, error } = useAuth();

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

  return (
    <center>
    <div className='card'>
      <div>
      <h2>Register User</h2>
      {error ? (
        <h3>{error}</h3>
      ) : (
        ''
      )}
      <TextField type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} sx={{ mx: 2 }} id="outlined-basic" label="Username"  />
      <TextField type="text" placeholder='Password' onChange={e => setPassword(e.target.value)} sx={{ mx: 2 }} id="outlined-basic" label="Password"  />
      <br />
      <Button variant="contained" theme={indigoTheme} sx={{ mx: 2 }} onClick={() => register(username, password)}>Register</Button>
    </div>
    </div>
    </center>
  )
}

export default RegistrationPage
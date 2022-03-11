import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link as Nv } from '@material-ui/core';
export default function Login() {
  return (
    <div>  <Grid>
    <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign In</h2>
            <h4 style={{color:"green"}}>{msg}</h4>
        </Grid>
        <TextField label='Email'  name="email" value={email}  onChange={e => onInputChange(e)} placeholder='Enter Email' type='text' fullWidth required/>
        <TextField label='Password'  name="password" value={password}  onChange={e => onInputChange(e)} placeholder='Enter password' type='text' fullWidth required/>
      
        <Button type='submit' onClick={signIn} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
      
        <Typography > Don't Have Account ?
          <NavLink to="Signup">
           <span style={{marginLeft:"4px"}}>Singup</span>
          </NavLink>
        </Typography>
    </Paper>
</Grid></div>
  )
}

import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom component="div">
                        SIGN IN
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Welcome to Tech Foring!
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>

                        <TextField
                            required
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="outlined" />
                        <TextField
                            required
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="outlined" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        {/* <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink> */}
                        {/* {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>} */}
                        {/* {authError && <Alert severity="error">{authError}</Alert>} */}
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%", height: "50%" }} src={logo} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;
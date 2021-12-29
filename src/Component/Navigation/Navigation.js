import React from 'react';
import { AppBar, Avatar, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';


const Navigation = () => {
    const theme = useTheme()
    const useStyle = makeStyles({
        bgColor: {
            backgroundColor: "#182F59",
            textDecoration: "none"

        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: "none"
            },
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: "center",
                fontSize: "25px"
            },
            [theme.breakpoints.up('sm')]: {
                textAlign: "left"
            },
        }
    })
    const { bgColor, navIcon, navLogo } = useStyle();


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={bgColor}>
                <Toolbar>
                    <IconButton
                        className={navIcon}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={navLogo} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Tech Foring
                    </Typography>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
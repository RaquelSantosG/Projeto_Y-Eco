import './Navbar.css';
import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Grid, Toolbar, Typography } from '@material-ui/core';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout(){
        setToken('')
        alert("Usuario deslogado")
        history.push('/login')
    }

    return (
        <>
            <Grid container direction="row" justifyContent='center' alignItems="center" >
                <Grid alignItems="center" item xs={12}>
                    <Box className='logo'>
                        <Box display='flex' alignItems="center" justifyContent="center">
                            <Typography variant="h2">Y-Eco</Typography>
                        </Box>
                        <Box display='flex' alignItems="center" justifyContent="center">
                            <Typography variant="h5">Produtos sustentáveis, ecológicos e biodegradáveis</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <AppBar position="static">
                <Toolbar className='menu' variant="dense" >
                    <Box display='flex' justifyContent='center' className='boxToolbar'>

                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                                <HomeRoundedIcon className='icon' />
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/produtos' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                                <ShoppingBagIcon className='icon' />
                                <Typography variant="h6" color="inherit">
                                    produtos
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/categoria' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                                <DashboardIcon className='icon' />
                                <Typography variant="h6" color="inherit">
                                    categoria
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/sobre' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                                <FavoriteIcon className='icon' />
                                <Typography variant="h6" color="inherit">
                                    Sobre
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    <Box display='flex' justifyContent='end' width='auto' className='boxToolbar'>

                            <Box className="ponteiro" display='flex' justifySelf='flex-end' alignItems="center" onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
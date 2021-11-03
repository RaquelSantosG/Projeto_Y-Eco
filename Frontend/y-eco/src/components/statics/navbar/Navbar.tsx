import './Navbar.css';
import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Box } from '@material-ui/system';
import { Link } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function Navbar() {
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

                        <Box mx={5} className='cursor'>
                            <ShoppingBagIcon className='icon' />
                            <Typography variant="h6" color="inherit">
                                produtos
                            </Typography>
                        </Box>

                        <Box mx={5} className='cursor'>
                            <DashboardIcon className='icon' />
                            <Typography variant="h6" color="inherit">
                                categoria
                            </Typography>
                        </Box>
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
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                        <Link to='/login' className='text-decorator-none logout'>
                            <Box display='flex' justifySelf='flex-end' alignItems="center">
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
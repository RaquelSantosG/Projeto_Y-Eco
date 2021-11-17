import './Navbar.css';
import React from 'react';
import { AppBar, Box, Grid, Toolbar, Typography } from '@material-ui/core';
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
                        <img className='imgLogo' src="https://i.imgur.com/mLUh1HH.png" alt="" />  
                    </Box>
                </Grid>
            </Grid>

            <AppBar position="static">
                <Toolbar className='menu' variant="dense" >
                    <Box display='flex' justifyContent='center' className='boxToolbar'>

                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                                
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/produtos' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                               
                                <Typography variant="h6" color="inherit">
                                    Produtos
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/categoria' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                               
                                <Typography variant="h6" color="inherit">
                                    Categoria
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/sobre' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                                
                                <Typography variant="h6" color="inherit">
                                    Sobre
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    <Box display='flex' justifyContent='end' width='auto' className='boxToolbar'>

                            <Box className="ponteiro" display='flex' justifySelf='flex-end' alignItems="center" onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
import './Navbar.css';
import React from 'react';
import { AppBar, Box, Grid, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTipo, addToken } from '../../../store/user/actions';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import BasicMenu from '../navbarMenu/navbarMenu';
import { UserState } from '../../../store/user/userReducer';


function Navbar() {
    
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const name = useSelector<UserState, UserState["names"]>(
        (state) => state.names
    );
    
    const tipo = useSelector<UserState, UserState["tipos"]>(
        (state) => state.tipos
    );

    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(''));
        dispatch(addTipo(''));
        toast.info('Usuário deslogado', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;
    var headComponent; 
    var menuAdm;

    if (tipo == 'Admin') {
        menuAdm = <Box mx={5} >
            <BasicMenu />
        </Box>
    }

    if(token != ''){
        headComponent = 
        <Grid container direction="row" justifyContent='center' alignItems="center" >
        <Grid alignItems="center" item xs={12}>
            <Box className='logo'>
                <img className='imgLogo' src="https://i.imgur.com/mLUh1HH.png" alt="" />  
            </Box>
        </Grid>
    </Grid>
    }

    if(token !=''){
        navbarComponent = 
        <AppBar position="static">
        <Toolbar className='menu' variant="dense" >
        <Box display='flex' justifyContent='center' className='boxToolbar' flexWrap='wrap'>

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

            {menuAdm}

                    <Box className="ponteiro" display='flex' justifySelf='flex-end' alignItems="center" onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>
            </Box>
        </Toolbar>
    </AppBar>
    }

    return (
        <>
            {headComponent}
            {navbarComponent}
        </>
    )
}

export default Navbar
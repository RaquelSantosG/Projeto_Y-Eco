import './Navbar.css';
import React from 'react';
import { AppBar, Box, Grid, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';


function Navbar() {
    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(''));
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
    }

    return (
        <>
            {headComponent}
            {navbarComponent}
        </>
    )
}

export default Navbar
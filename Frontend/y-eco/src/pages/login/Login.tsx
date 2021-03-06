import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';



import './Login.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import UserLogin from '../../models/UserLogin';
import { addTipo, addToken } from '../../store/user/actions';
import { login } from '../../services/Service';


function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            tipo: '',
            senha: '',
            token: ''
        }
    )

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            tipo: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }



    useEffect(() => {
       
        if (respUserLogin.token != '') {
            dispatch(addToken(respUserLogin.token));
            dispatch(addTipo(respUserLogin.tipo));
            history.push('/home')
        }
    }, [respUserLogin.token])
    

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    } 

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={12} sm={6}>
                <Box justifyContent="flex"  sx={{width:'90%', margin:'0 auto'}}   >
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' className='botao'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrar'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                </Box>
            </Grid>
            <Grid xs={12} sm={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Categoria from '../../models/Categoria';
import './UsuarioCategoria.css';
import { useHistory } from 'react-router-dom';
import { busca } from '../../services/Service';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Grid, Box } from '@mui/material';
import { UserState } from '../../store/user/userReducer';


function UsuarioCategoria() {
  const [categorias, setCategoria] = useState<Categoria[]>([])
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
);
  let history = useHistory();

  useEffect(()=>{
    if(token == ''){
      toast.error('Você precisa estar logado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
    });
      history.push("/login")
    }
  }, [token])


  async function getCategoria() {
    await busca("/categoria", setCategoria, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(() => {
    getCategoria()
  }, [categorias.length])

  return (
    <>
   <Grid container  justifyContent="center" alignItems="center" >
      <Box className='principalBox2'>
        {
          categorias.map(categoria => (
            <Box m={3}>
              <Box display="flex">
              <Box padding={2}>
                  <Card variant="outlined" className = 'card2'>
                    <CardContent>
                      <Typography variant="h4" component="h4">
                        {categoria.nome}
                      </Typography>
                      <Typography variant="h5" component="h5" >
                        {categoria.setor}
                      </Typography>
                      <Typography variant="h5" component="h5" >
                        {categoria.tipo}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Box display="flex" justifyContent="center" mb={1.5}>
                      </Box>
                    </CardActions>
                  </Card>
                </Box>
              </Box>
            </Box>
          ))
        }
      </Box>
      </Grid>

    </>
  );
}


export default UsuarioCategoria;
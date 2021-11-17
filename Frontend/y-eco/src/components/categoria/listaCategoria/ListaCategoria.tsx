import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Categoria from '../../../models/Categoria';
import './ListaCategoria.css';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { Grid, Box } from '@mui/material';


function ListaCategoria() {
  const [categorias, setCategoria] = useState<Categoria[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  useEffect(() => {
    if (token == '') {
      alert("Você precisa estar logado")
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
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {
          categorias.map(categoria => (
            <Box m={6}>
              <Box display="flex">
              <Box padding={2}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h4" component="h4" className='textos2'>
                        {categoria.nome}
                      </Typography>
                      <Typography variant="h5" component="h5" className='textos'>
                        {categoria.setor}
                      </Typography>
                      <Typography variant="h5" component="h5" className='textos'>
                        {categoria.tipo}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Box display="flex" justifyContent="center" mb={1.5}>
                        <Box>
                          <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                            <Box mx={1} display="flex" justifyContent="center">
                              <Button variant="contained" className="botao3" size='small' color="primary" >
                                atualizar
                              </Button>
                            </Box>
                          </Link>
                        </Box>

                        <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                          <Box mx={1} display="flex" justifyContent="center">
                            <Button variant="contained" size='small' color="secondary" className='botao2' >
                              deletar
                            </Button>
                          </Box>
                        </Link>
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


export default ListaCategoria;
import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarCategoria.css';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { buscaId, deleteId } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';


function DeletarCategoria() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
  );
    const [categoria, setCategoria] = useState<Categoria>();

    useEffect(() => {
        if (token == "") {
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

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categoria/${id}`, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
            history.push('/categoria')
            deleteId(`/categoria/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Categoria deletado com sucesso', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: 'colored',
              progress: undefined,
          });
          }
        
          function nao() {
            history.push('/categoria')
          }
  
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textPrimary" gutterBottom>
                Deseja deletar a Categoria:
              </Typography>
              <Typography color="textSecondary">
                {categoria?.nome}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarCategoria;




import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProduto.css';
import Produto from '../../../models/Produto';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';
import { BorderClear } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';

function ListaProduto() {

  const [produto, setProduto] = useState<Produto[]>([])
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
);
  let history = useHistory();

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

  async function getProduto() {
    await busca('/produto', setProduto, {
      headers: { 'Authorization': token }
    })
  }

  useEffect(() => {
    getProduto()
  }, [produto.length])

  return (
    <>
    <Box className='btCadastro'>
        <Link to={`/formularioProduto`} className="text-decorator-none" >
          <Button variant="contained" size='medium' color="primary" className='btCadastro'>
            Cadastrar novo produto
          </Button>
        </Link>
      </Box>
      <Box className='principalBox'>
        {
          produto.map(produto =>(
          <Box m={2} >
            
            <Card className = "cardProduto" variant="outlined">
            <Link to={`/admproduto/${produto.id}`} className="text-decorator-none">
              <CardContent>
                <Box>
                      <img className='imgProduto' src={produto.img} /> 
                </Box>
                <Box className="tamanhoBox">
                <Typography variant="h5" component="h2">
                  {produto.nome}
                </Typography>
                </Box>
               
                
                <Typography  variant="body1" component="p" className='fontListaProduto'>
                  {produto.quantidade} unidades
                </Typography>
                
                <Typography variant="body2" component="p" className='fontListaProduto'>
                R&#36;{produto.valor.toFixed(2)} 
                </Typography>
                
              </CardContent>
              </Link>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
          ))
        }
      </Box>
    </>)
}

export default ListaProduto;

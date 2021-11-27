import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography,Grid } from '@material-ui/core';
import './UsuarioProduto.css';
import useLocalStorage from 'react-use-localstorage';
import { BorderClear } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { busca } from '../../services/Service';
import Produto from '../../models/Produto';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { UserState } from '../../store/user/userReducer';

function UsuarioProduto() {

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
      <Box className='principalBox'>
        {
          produto.map(produto =>(
          <Box >
            
            <Card className = "cardProduto" variant="outlined">
            <Link to={`/produto/${produto.id}`} className="text-decorator-none">
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

                  
                    <Box mx={3}>
                      
                      <ShoppingBagOutlinedIcon fontSize='large'/>
                    </Box>
                  
                  
                    <Box mx={3}>
                      
                      <ShoppingCartOutlinedIcon fontSize='large'/> 
                    </Box>
            
                </Box>
              </CardActions>
            </Card>
          </Box>
          ))
        }
      </Box>
    </>)
}

export default UsuarioProduto;

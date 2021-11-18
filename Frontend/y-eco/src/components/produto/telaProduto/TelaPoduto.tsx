import React, { useEffect, useState, ChangeEvent } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './TelaProduto.css';
import Produto from '../../../models/Produto';


import { busca, buscaId } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function TelaProduto() {

  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

  useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history.push("/login")

      }
  }, [token])

  const [categoria, setCategoria] = useState<Categoria>(
      {
          id: 0,
          nome: '',
          setor: '',
          tipo: ''
      })
  const [produto, setProduto] = useState<Produto>({
      id: 0,
      nome: '',
      descricao: '',
      img:'',
      quantidade:0,
      valor:0,
      categoria: null
  })

  useEffect(() => { 
      setProduto({
          ...produto,
          categoria: categoria
      })
  }, [categoria])

  useEffect(() => {
      getCategorias()
      if (id !== undefined) {
          findByIdProduto(id)
      }
  }, [id])

  async function getCategorias() {
      await busca("/categoria", setCategorias, {
          headers: {
              'Authorization': token
          }
      })
  }

  async function findByIdProduto(id: string) {
      await buscaId(`produto/${id}`, setProduto, {
          headers: {
              'Authorization': token
          }
      })
  }

  function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

      setProduto({
          ...produto,
          [e.target.name]: e.target.value,
          categoria: categoria
      })

  }

  return (
    <>
      <Box display="flex" flexWrap="wrap" justifyContent="center" minHeight="100vh">
        
          <Box m={2} >
            <Card className = "cardTelaProduto" variant="outlined">
              <CardContent>
                <Box display='flex' justifyContent='center' className='nomeProduto'>
                <Typography variant="h5" component="h1" className='fontProdutoTitulo'>
                  {produto.nome}
                </Typography>
                </Box>
                <Box display='flex' justifyContent='center'>
                  <img className = "imgTelaProduto" src={produto.img} alt={produto.nome} />
                </Box>
                <Box>
                <Typography variant="body1" component="p" className='fontProduto'>
                  {produto.descricao}
                </Typography>
                <Typography variant="body1" component="p" className='fontProduto'>
                  {produto.quantidade} Unidades
                </Typography>
                <Typography variant="body2" component="p" className='fontProduto'>
                R&#36; {produto.valor.toFixed(2)}
                </Typography>
                <Typography variant="body2" component="p" className='fontProduto'>
                  Categoria: {produto.categoria?.nome} - {produto.categoria?.setor} - {produto.categoria?.tipo}
                </Typography>
                </Box>
              </CardContent>
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
      </Box>
    </>)
}

export default TelaProduto;

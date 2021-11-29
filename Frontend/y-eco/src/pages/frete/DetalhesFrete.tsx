import { Box, Grid, Typography } from '@mui/material';
import { height } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { busca } from '../../services/Service';
import { addToken } from '../../store/user/actions';
import { UserState } from '../../store/user/userReducer';
import './DetalhesFrete.css';


function DetalhesFrete() {

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


  return (
    <>
      <Grid container item xs={12} >
        <Grid item xs={12} alignItems='center'>
          <Box display="flex"  justifyContent="center" >
            <img src="https://cdn.discordapp.com/attachments/882496817550483510/912391175351197716/FreteBrasil_final.jpg" style={{ width: '90%', height: '100%'}}/>
          </Box>
        </Grid>
        
        <Grid item alignItems='center' justifyContent='center'>
          <Box paddingTop={1} display='flex' alignItems='center'  className='fonteTex' >
            <Typography variant="h4" align="center" gutterBottom >SOBRE O FRETE GRÁTIS</Typography>
          </Box>
        </Grid>
        
        <Grid item alignItems='center'>
          <Box paddingTop={1} display='flex' justifyContent='center' alignItems='center' className='fonteTex'>
            <Typography variant="body1" > A compra pela internet tem crescido muito pela praticidade e comodidade - você encontra tudo que deseja em apenas alguns cliques e os preços, em muitos casos, são menores do que nas lojas físicas. Mas sabemos que o valor do frete ainda desanima, né?

              O Brasil possui um território gigantesco, onde uma encomenda de São Paulo a Manaus percorre mais de 2500 km, por exemplo, seja através do Correios ou transportadora, existem profissionais engajados, trabalhando para que a encomenda chegue em perfeitas condições até você.</Typography>
          </Box>
          <Box paddingTop={1} display='flex' className='fonteTex'>
            <Typography variant="body1" > Frete Grátis (envio via Correios PAC ou Transportadora), conforme valor mínimo de compras para cada região:

              <p> - Estado de SP - Acima de R$ 200,00</p>

              <p> - Outras cidades da Região Sudeste e Região Sul - Acima de R$ 350,00</p>

              <p> - Região Centro Oeste - Acima de R$ 400,00</p>

              <p> - Região Nordeste - Acima de R$ 600,00</p>

              <p> - Região Norte - Acima de R$ 700,00p</p></Typography>
          </Box>
        </Grid>

      </Grid>

    </>
  );
}

export default DetalhesFrete;
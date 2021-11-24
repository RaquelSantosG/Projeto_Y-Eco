import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import './DetalhesFrete.css';
import { TokenState } from '../../store/tokens/tokensReducer';

 function DetalhesFrete() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
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
        <Grid container item xs={12} justifyContent="center">
            <Grid item xs={12} alignItems='center'>
                <Box display="flex"  className='principal2'>
                    <img src="https://cdn.discordapp.com/attachments/882496817550483510/912391175351197716/FreteBrasil_final.jpg" alt="" />
                </Box>
            </Grid>
            <Grid item alignItems='center'>
                <Box  paddingTop={1} display='flex' justifyContent='center' alignItems='center'  > <Typography variant="h4" align="center" gutterBottom className='textos'>SOBRE O FRETE GRÁTIS</Typography>
                </Box>
            </Grid>
            <Grid item alignItems='center'>
                <Box  paddingTop={1} display='flex' justifyContent='center' alignItems='center'>
                <Typography variant="body1" className='textos fonteTex'> A compra pela internet tem crescido muito pela praticidade e comodidade - você encontra tudo que deseja em apenas alguns cliques e os preços, em muitos casos, são menores do que nas lojas físicas. Mas sabemos que o valor do frete ainda desanima, né? 

O Brasil possui um território gigantesco, onde uma encomenda de São Paulo a Manaus percorre mais de 2500 km, por exemplo, seja através do Correios ou transportadora, existem profissionais engajados, trabalhando para que a encomenda chegue em perfeitas condições até você.</Typography>
</Box>
<Box  paddingTop={1} display='flex' >
                <Typography variant="body1" className='textos fonteTex'> Frete Grátis (envio via Correios PAC ou Transportadora), conforme valor mínimo de compras para cada região: 

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
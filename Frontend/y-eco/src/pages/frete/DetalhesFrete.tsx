import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { busca } from '../../services/Service';
import { addToken } from '../../store/tokens/actions';
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
            <Grid item xs={6} alignItems='center'>
                <Box display="flex" justifyContent="center" flexWrap='wrap'>
                    <a href="https://cdn.discordapp.com/attachments/882496817550483510/912391175351197716/FreteBrasil_final.jpg"></a>
                </Box>
            </Grid>
        </Grid>
   
   </>
   );
}

export default DetalhesFrete;
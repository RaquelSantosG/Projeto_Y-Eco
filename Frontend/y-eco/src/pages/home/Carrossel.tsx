import React, { useEffect } from 'react'
import { useState } from 'react'
import './Carrossel.css';
import { Box, Button, Grid} from '@mui/material';
import './Carrossel.css';
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';



function Carrossel(): JSX.Element {

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


  const [items, setstate] = useState([
    {id: 0, botaocliqueaqui: '/produtos', img:"https://cdn.discordapp.com/attachments/882496817550483510/912447679185973248/Desenho_sem_titulo_29.png"},
    {id: 1, botaocliqueaqui: '/produtos', img:"https://cdn.discordapp.com/attachments/882496817550483510/912448755054288916/Desenho_sem_titulo_31.png"},
    {id: 2, botaocliqueaqui: '/produtos', img:"https://cdn.discordapp.com/attachments/882496817550483510/912448231919730798/Desenho_sem_titulo_30.png"},
    {id: 3, botaocliqueaqui: '/produto/22', img:"https://cdn.discordapp.com/attachments/882496817550483510/912405540909490176/Desenho_sem_titulo_28.png"},
    {id: 4, botaocliqueaqui: '/frete', img:"https://cdn.discordapp.com/attachments/882496817550483510/912449138044567592/Desenho_sem_titulo_32.png"},
  ])
    
      return (
          <>
<Grid item xs={12} container justifyContent="center">
<Carousel isRTL={false} enableAutoPlay autoPlaySpeed={15500}>
{items.map(item => <div key={item.id}>
  <Box display="flex" justifyContent="center" flexWrap = 'wrap'>
<img src={item.img} alt="" width="100%" height="100%"/>
 <Link className='text-decoration-none2' to={item.botaocliqueaqui}>
 <Button className='botaoCar' variant="contained" size='large' >CLIQUE E SAIBA MAIS</Button></Link>
  </Box>
  
</div>)}
</Carousel>
</Grid>
</>
  )
}

export default Carrossel;

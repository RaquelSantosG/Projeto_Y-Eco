import './Home.css';
import React, { useState , useEffect  } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import './Carrossel.css';
import Carrossel from './Carrossel';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Home() {

        let history = useHistory();
        const token = useSelector<TokenState, TokenState["tokens"]>(
                (state) => state.tokens
        );

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
                <Grid container >
                        <Grid item xs={12} marginBottom='5%'>
                                <Carrossel />
                        </Grid>
                        <Grid item xs={12} display='flex' justifyContent='center' alignItems="center" >
                                <Box paddingTop={1} display='flex' justifyContent='center' alignItems='center' className='title' marginBottom='10%'> <Typography variant="h4" align="center" gutterBottom className='textosHome' >Mais Vendidos</Typography>
                                </Box>
                        </Grid>
                        <Grid item xs={6} display='flex' justifyContent="center" marginBottom='10%'>
                                <Card>
                                        <CardActionArea href="#">
                                                <CardMedia
                                                        component="img"
                                                        height="350"
                                                        image="https://imgur.com/reA84Aw.jpg"
                                                        alt="copo de silicone"
                                                />
                                                <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                                Copo de Silicone
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary">
                                                                Temos várias cores para você escolher!
                                                        </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                </Card>
                        </Grid>

                        <Grid item xs={6} display='flex' justifyContent="center" marginBottom='10%'>
                                <Card>
                                        <CardActionArea href="#">
                                                <CardMedia
                                                        component="img"
                                                        height="350"
                                                        image="https://imgur.com/zlKXDPQ.jpg"
                                                        alt="filtro de barro"
                                                />
                                                <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                                Filtro de Barro
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary">
                                                                O clássico filtro barro para sua casa!
                                                        </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                </Card>
                        </Grid>
                        <Grid item xs={12} display='flex' justifyContent='center' alignItems="center" >
                                <Box paddingTop={1} display='flex' justifyContent='center' alignItems='center' className='title' marginBottom='10%'> <Typography variant="h4" align="center" gutterBottom className='textosHome' >Destaques da Semana</Typography>
                                </Box>
                        </Grid>
                        <Grid item xs={6} display='flex' justifyContent="center" marginBottom='10%'>
                                <Card>
                                        <CardActionArea href="#">
                                                <CardMedia
                                                        component="img"
                                                        height="350"
                                                        image="https://imgur.com/T5PV8Wm.jpg"
                                                        alt="copo de bambu"
                                                />
                                                <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                                Copo de Bambu
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary">
                                                                Design rústico e funcional.
                                                        </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                </Card>
                        </Grid>
                        <Grid item xs={6} display='flex' justifyContent="center" marginBottom='10%'>
                                <Card>
                                        <CardActionArea href="#">
                                                <CardMedia
                                                        component="img"
                                                        height="350"
                                                        image="https://imgur.com/wpAB6b0.jpg"
                                                        alt="canudo de inox"
                                                />
                                                <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                                Canudo de Inox
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary">
                                                                Adquira seu kit e ganhe uma escovinha Stainless.
                                                        </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                </Card>
                        </Grid>
                </Grid>
        )
}

export default Home;
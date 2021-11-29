import './Home.css';
import React, { useState, useEffect } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import './Carrossel.css';
import Carrossel from './Carrossel';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { UserState } from '../../store/user/userReducer';
import { styled, createTheme, ThemeProvider } from '@mui/system';




const Iframe = styled('iframe')(({ theme }) => ({
        maxWidth:'100%',
        height:'100%',
        minHeight:'250px',
        width:'100%'
}));





function Home() {

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
                <Grid container spacing={5}>
                        <Grid item xs={12} display='flex' justifyContent="center" padding='5%'>
                                <Carrossel />
                        </Grid>

                        <Grid container item xs={12} display='flex' justifyContent="center" padding='5%' >
                                <Grid item xs={12} display='flex' justifyContent='center' alignItems="center">
                                        <Box paddingTop={1} display='flex' justifyContent='center' alignItems='center' className='title' > <Typography variant="h4" align="center" gutterBottom className='textosHome' >Mais Vendidos</Typography>
                                        </Box>
                                </Grid>
                        </Grid>

                       

                        <Grid item xs={12} sm={4} display='flex' justifyContent="center" >
                                <Card>
                                        <Link to='/produto/4' className='text-decoration-none'>
                                                <CardActionArea >
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
                                                                <Typography variant="body2" >
                                                                        <span className='textValor'>R$14.00</span> | R$9.00
                                                                </Typography>
                                                        </CardContent>
                                                </CardActionArea>
                                        </Link>
                                </Card>
                        </Grid>

                        <Grid item xs={12} sm={4} display='flex' justifyContent="center" >
                                <Card>
                                        <Link to='/produto/23' className='text-decoration-none'>
                                                <CardActionArea >
                                                        <CardMedia
                                                                component="img"
                                                                height="350"
                                                                image="https://cdn.discordapp.com/attachments/882496817550483510/912391178769535037/garrafa-termica-bambu-paz-em-gaia.jpg"
                                                                alt="garrafa de madeira"
                                                        />
                                                        <CardContent>
                                                                <Typography gutterBottom variant="h5" component="div">
                                                                        Garrafa de Madeira
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary">
                                                                        Linda e prática!
                                                                </Typography>
                                                                <Typography variant="body2" >
                                                                        <span className='textValor'>R$34.00</span> | R$19.00
                                                                </Typography>
                                                        </CardContent>
                                                </CardActionArea>
                                        </Link>
                                </Card>
                        </Grid>

                        

                        <Grid item xs={12} sm={4} display='flex' justifyContent="center">
                                <Card>
                                        <Link to='/produto/3' className='text-decoration-none'>
                                                <CardActionArea >
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
                                                                <Typography variant="body2" >
                                                                        <span className='textValor'>R$74.00</span> | R$59.00
                                                                </Typography>
                                                        </CardContent>
                                                </CardActionArea>
                                        </Link>
                                </Card>
                        </Grid>

                        

                        <Grid container item xs={12} display='flex' justifyContent="center" padding='5%'>
                                <Grid item xs={12} display='flex' justifyContent='center' alignItems="center" >
                                        <Box paddingTop={1} display='flex' justifyContent='center' alignItems='center' className='title'> <Typography variant="h4" align="center" gutterBottom className='textosHome' >Destaques da Semana</Typography>
                                        </Box>
                                </Grid>
                        </Grid>
                        <Grid item  xs={12} sm={4} display='flex' justifyContent="center">
                                <Card>
                                        <Link to='/produto/1' className='text-decoration-none'>
                                                <CardActionArea>
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
                                                                <Typography variant="body2" >
                                                                        <span className='textValor'>R$24.00</span> | R$15.00
                                                                </Typography>
                                                        </CardContent>
                                                </CardActionArea>
                                        </Link>
                                </Card>
                        </Grid>
                        <Grid item  xs={12} sm={4} display='flex' justifyContent="center">
                                <Card>
                                        <Link to='/produto/25' className='text-decoration-none'>
                                                <CardActionArea>
                                                        <CardMedia
                                                                component="img"
                                                                height="350"
                                                                image="https://cdn.discordapp.com/attachments/882496817550483510/911106117868875806/squeeze.jpg"
                                                                alt="garrafa de fibra de coco"
                                                        />
                                                        <CardContent>
                                                                <Typography gutterBottom variant="h5" component="div">
                                                                        Garrafa de Fibra de Coco
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary">
                                                                        Otima opção para brindes.
                                                                </Typography>
                                                                <Typography variant="body2" >
                                                                        <span className='textValor'>R$14.00</span> | R$9.00
                                                                </Typography>
                                                        </CardContent>
                                                </CardActionArea>
                                        </Link>
                                </Card>
                        </Grid>
                        <Grid item  xs={12} sm={4} display='flex' justifyContent="center" >
                                <Card>
                                        <Link to='/produto/9' className='text-decoration-none'>
                                                <CardActionArea >
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
                                                                <Typography variant="body2" >
                                                                        <span className='textValor'>R$24.00</span> | R$11.00
                                                                </Typography>
                                                        </CardContent>
                                                </CardActionArea>
                                        </Link>
                                </Card>
                        </Grid>


                        <Grid container justifyContent="center" padding='5%' >
                                <Grid item xs={12} display='flex' justifyContent='center' alignItems="center" >
                                        <Box paddingTop={1} display='flex' justifyContent='center' alignItems='center' className='title' marginBottom='10%'> <Typography variant="h4" align="center" gutterBottom className='textosHome' >Assista ao vídeo e saiba mais</Typography>
                                        </Box>
                                </Grid>
                                <Grid xs={12} sm={6} >
                                        <Iframe  src="https://www.youtube.com/embed/ydH9YpoxpsI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                        <img src="https://cdn.discordapp.com/attachments/882496817550483510/911090453703712838/Desenho_sem_titulo_25.png"  width={'100%'} height={'100%'} />
                                </Grid>
                        </Grid>

                </Grid>




        )
}

export default Home;
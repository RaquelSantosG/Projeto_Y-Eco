import './Home.css';
import React, { useState } from 'react';
import { Box, Button, Card, CardActionArea, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import './Carrossel.css';
import {images} from './CarrosselData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowFowardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Carrossel from './Carrossel';

function Home() {
    return (
        <section className='background'>
             <Grid marginBottom='10%'>
            <Container maxWidth="sm">
                <Box pt={8} textAlign="center">
                    <Typography variant="h4" component="h2" gutterBottom={true} className='logo'>Y-Eco</Typography>
                    <Typography variant="subtitle1" className='logo'>Produtos sustentáveis, ecológicos e biodegradáveis.</Typography>
                </Box>
            </Container>
            </Grid>
            <Grid container spacing={12} direction="row" justifyContent="center" alignItems="center" marginBottom='10%' marginLeft='15%'>
            <Container>
                <Box pt={8} pb={10}>
                    <Carrossel />
                </Box>
            </Container>
            </Grid>
            <Container maxWidth="md">
                <Box pt={8} pb={10}>
                    <Grid container spacing={6} direction="row" justifyContent="center" alignItems="center" marginBottom='10%'>
                        <Grid item xs={12} md={6}>
                            <Box display='flex' className='img'>
                                <img src="https://imgur.com/reA84Aw.jpg" alt="" className='img'/>
                                </Box>  
                            <Box display="flex" height="100%">
                                <Box my="auto">
                                    <Typography variant="h4" component="h2" gutterBottom={true}>Destaque do Dia</Typography>
                                    <Typography variant="h2" component="h3">Copo de Silicone</Typography>
                                    <Typography variant="body1" color="textSecondary" paragraph={true}>Temos várias cores para você escolher!</Typography>
                                    <Box display="flex" justifyContent="center">
                                        <Button variant="outlined" className='botao'>Comprar</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={6} direction="row" justifyContent="center" alignItems="center" marginBottom='10%'>
                        <Grid item xs={12} md={6}><Box display='flex' className='img'><img src="https://imgur.com/wpAB6b0.jpg" alt="" className='img'/></Box>  
                            <Box display="flex" height="100%">
                                <Box my="auto">
                                    <Typography variant="h4" component="h2" gutterBottom={true}>Destaque da Semana</Typography>
                                    <Typography variant="h2" component="h3">Canudo de Inox</Typography>
                                    <Typography variant="body1" color="textSecondary" paragraph={true}>Adquira seu kit com escovinha Stainless.</Typography>
                                    <Box display="flex" justifyContent="center">
                                        <Button variant="outlined" className='botao'>Comprar</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                    </Grid>
                </Box>
            </Container>
        </section>
    )
}

export default Home

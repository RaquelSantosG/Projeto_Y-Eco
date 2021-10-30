import './Home.css';
import React, { useState } from 'react';
import { Box, Button, Card, CardActionArea, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import './Carrossel.css';
import {images} from './CarrosselData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowFowardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Home() {
    const [currImg, setCurrImg] = useState(0)
    return (
        <section>
            <Container maxWidth="sm">
                <Box pt={8} textAlign="center">
                    <Typography variant="h4" component="h2" gutterBottom={true}>Y-Eco</Typography>
                    <Typography variant="subtitle1" color="textSecondary">Produtos sustentáveis, ecológicos e biodegradáveis.</Typography>
                </Box>
            </Container>
            <div className="carrossel">
            <div className='carrosselInner' style={{backgroundImage:`url(${images[currImg].Image})`}}>
                <div className='left' onClick={() =>{currImg > 0 && setCurrImg(currImg - 1);}}>
                    <ArrowBackIosIcon style={{fontSize: 30}}/>
                </div>
                <div className='center'> <h1>{images[currImg].title}</h1><p>{images[currImg].subtitle}</p></div>
                <div className='right' onClick={() =>{currImg < images.length - 1 && setCurrImg(currImg + 1);}}>
                <ArrowFowardIosIcon style={{fontSize: 30}}/>
                </div>
            </div>
        </div>
            <Container maxWidth="md">
                <Box pt={8} pb={10}>
                    <Grid container spacing={6} direction="row" justifyContent="center" alignItems="center" className='caixa'>
                        <Grid item xs={12} md={6}><Box display='flex' className='img'><img src="rhttps://imgur.com/reA84Aw.jpg" alt="" className='img'/></Box>  
                            <Box display="flex" height="100%">
                                <Box my="auto">
                                    <Typography variant="h2" component="h3">Copo de Silicone</Typography>
                                    <Typography variant="h4" component="h2" gutterBottom={true}>Destaque do Dia</Typography>
                                    <Typography variant="body1" color="textSecondary" paragraph={true}>Temos várias cores para você escolher!</Typography>
                                    <Box display="flex" justifyContent="center">
                                        <Button variant="outlined" className='botao'>Comprar</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                    </Grid>
                    <Grid container spacing={6} direction="row" justifyContent="center" alignItems="center" className='caixa'>
                        <Grid item xs={12} md={6}><Box display='flex' className='img'><img src="https://imgur.com/wpAB6b0.jpg" alt="" className='img'/></Box>  
                            <Box display="flex" height="100%">
                                <Box my="auto">
                                    <Typography variant="h2" component="h3">Canudo de Inox</Typography>
                                    <Typography variant="h4" component="h2" gutterBottom={true}>Destaque da Semana</Typography>
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

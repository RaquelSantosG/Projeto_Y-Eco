import React from 'react';
import './Sobre.css';
import CarouselPostagemComponent from './CarouselPostagemComponent';
import { Box, Container, Grid, Typography } from '@mui/material';


function Sobre() {
    return (
        <>
            <Grid container  >
                <Grid item xs={6}>

                    <Box>
                        <Box marginTop='50px' display="flex" justifyContent="center" >
                            <img src="https://cdn.discordapp.com/attachments/882496817550483510/908341953488359505/40313.jpg" alt="" style={{ width: "90%", borderRadius: '6%' }} />
                        </Box>
                        <Box display="flex" marginTop='50px' justifyContent="center" >
                            <Typography variant="h4" color="#39796b">UM POUCO SOBRE NÓS</Typography>
                        </Box>
                        <Box p={5}>

                            <Typography variant="body1" color="#39796b">Aqui você encontra produtos ecológicos, reutilizáveis para o seu dia a dia ser mais sustentável. Pequenas atitudes que geram grandes mudanças! Fortalecer o consumo consciente e a mudança de hábito para preservar nosso planeta.</Typography>
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={6} >
                    <Box>
                        <Box marginTop='50px' display="flex" justifyContent="center" >
                            <img src="https://cdn.discordapp.com/attachments/882496817550483510/908341950225203210/17877.jpg" alt="" style={{ width: "90%", borderRadius: '6%' }} />
                        </Box>
                        <Box display="flex" marginTop='50px' justifyContent="center" > <Typography variant="h4" color="#39796b">MISSÃO E VALORES!</Typography>
                        </Box>

                        <Box p={5}>
                            <Typography variant="body1" color="#39796b">Missão:

                                Fornecer dicas e práticas sustentáveis que gerem impactos positivos para o meio ambiente e para sociedade. Engajar cada vez mais pessoas a substituírem materiais de uso único por reutilizáveis.Tornar nossas ações diárias mais respeitosas com o meio ambiente. Proteger nossas futuras gerações da quantidade de resíduos que estão sendo descartados na natureza de forma desenfreada. </Typography>

                            <Typography variant="body1" color="#39796b">Valores:

                                - Amor à vida

                                - Respeito incondicional à natureza

                                - Equidade

                                - Empatia

                                - Ética e transparência</Typography>

                        </Box>
                    </Box>



                </Grid>
                <Grid container justifyContent="center" marginBottom='100px' className='teste'>
                    <Box display="flex" justifyContent="center" > <Typography variant="h4" color='White'>DESENVOLVEDORES</Typography>
                    </Box>
                </Grid>
                <Grid container spacing={12} direction="row" justifyContent="center" alignItems="center"  marginLeft='25%'>
            <Container>
                <Box pt={4} pb={6}>
              <CarouselPostagemComponent/>
                </Box>
            </Container>
            </Grid>
             
            </Grid>
        </>

    )
}


export default Sobre
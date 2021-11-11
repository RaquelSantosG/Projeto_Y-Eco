import React from 'react';
import { ThemeProvider} from '@mui/system';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Button, Box, Paper} from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import './Sobre.css';
import { GitHub, WhatsApp } from '@material-ui/icons';

function Sobre(){
    return(
        <>
            <Grid container  >
                 <Grid item xs={6}>
                    
                 <Box>
                                <Box marginTop='50px' display="flex" justifyContent="center" >
                                <img src="https://cdn.discordapp.com/attachments/882496817550483510/908341953488359505/40313.jpg" alt="" style={{ width: "70%", borderRadius: '6%'}} />
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
                                <img src="https://cdn.discordapp.com/attachments/882496817550483510/908341950225203210/17877.jpg" alt="" style={{ width: "70%", borderRadius: '6%'}} />
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
                <Grid container  justifyContent="center" marginBottom='70px'>
                <Box display="flex" justifyContent="center"  > <Typography variant="h4" color="#39796b">DESENVOLVEDORES</Typography>
                                </Box>
                                </Grid>
                <Grid container spacing={2} justifyContent="center">
                
                <Grid item xs={2}>
                <Paper elevation={3} sx={{ p:1}}>
                
                     <Box display="flex" justifyContent="center">
                                    <Typography variant="h4" color="initial">MAYSA</Typography>
                                </Box>
                    <Box display="flex" justifyContent="center" mt={2} >
                        <img src="https://avatars.githubusercontent.com/u/89356698?v=4" alt="" style={{ width: "50%", borderRadius: '50%'}} />
                    </Box>
                    <Box p={2}>
                                    <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate enim labore porro obcaecati necessitatibus a, reprehenderit saepe optio ducimus perferendis eos odio vero. !</Typography>
                                </Box>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#39796b", height: "120px", borderRadius:'20px' }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Contate - me </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/mays2pearl" target="_blank">
                                <GitHub style={{ fontSize: 50, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/maysa-andrade-maysa-andrade/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ height: "20px" }}>
                        <Box paddingTop={1}>
                            
                        </Box>
                        <Box>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper elevation={3} sx={{ p:1, margin: 'auto', maxWidth:1500}}>
                
                     <Box display="flex" justifyContent="center">
                                    <Typography variant="h4" color="initial">RAQUEL</Typography>
                                </Box>
                    <Box display="flex" justifyContent="center" mt={2} >
                        <img src="https://avatars.githubusercontent.com/u/72945788?v=4" alt="" style={{ width: "50%", borderRadius: '50%' }} />
                    </Box>
                    <Box p={2}>
                                    <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate enim labore porro obcaecati necessitatibus a, reprehenderit saepe optio ducimus perferendis eos odio vero. </Typography>
                                </Box>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#39796b", height: "120px", borderRadius:'20px' }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Contate - me </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/RaquelSantosG" target="_blank">
                                <GitHub style={{ fontSize: 50, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/raquel-santos-gomes-b21318187/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ height: "20px" }}>
                        <Box paddingTop={1}>
                            
                        </Box>
                        <Box>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper elevation={3} sx={{ p:1, margin: 'auto', maxWidth:1500}}>
                
                     <Box display="flex" justifyContent="center">
                                    <Typography variant="h4" color="initial">BRUNO</Typography>
                                </Box>
                    <Box display="flex" justifyContent="center" mt={2} >
                        <img src="https://avatars.githubusercontent.com/u/88937060?v=4" alt="" style={{ width: "50%", borderRadius: '50%'}} />
                    </Box>
                    <Box p={2}>
                                    <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate enim labore porro obcaecati necessitatibus a, reprehenderit saepe optio ducimus perferendis eos odio vero. </Typography>
                                </Box>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#39796b", height: "120px", borderRadius:'20px' }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Contate - me </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/Bmuraro" target="_blank">
                                <GitHub style={{ fontSize: 50, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/brunomuraros" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ height: "20px" }}>
                        <Box paddingTop={1}>
                            
                        </Box>
                        
                    </Box>
                </Grid>
            </Grid>
            </Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper elevation={3} sx={{ p:1, margin: 'auto', maxWidth:1500}}>
                
                     <Box display="flex" justifyContent="center">
                                    <Typography variant="h4" color="initial">JÚLIO</Typography>
                                </Box>
                    <Box display="flex" justifyContent="center" mt={2} >
                        <img src="https://avatars.githubusercontent.com/u/57552535?v=4" alt="" style={{ width: "50%", borderRadius: '50%'}} />
                    </Box>
                    <Box p={2}>
                                    <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate enim labore porro obcaecati necessitatibus a, reprehenderit saepe optio ducimus perferendis eos odio vero. !</Typography>
                                </Box>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#39796b", height: "120px", borderRadius:'20px' }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Contate - me </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/juliobalbino" target="_blank">
                                <GitHub style={{ fontSize: 50, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/juliobalbino/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ height: "20px" }}>
                        <Box paddingTop={1}>
                            
                        </Box>
                        
                    </Box>
                </Grid>
            </Grid>
            </Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper elevation={3} sx={{ p:1, margin: 'auto', maxWidth:1500}}>
                
                     <Box display="flex" justifyContent="center">
                                    <Typography variant="h4" color="initial">MÁRCIO</Typography>
                                </Box>
                    <Box display="flex" justifyContent="center" mt={2} >
                        <img src="https://avatars.githubusercontent.com/u/88987545?v=4" alt="" style={{ width: "50%", borderRadius: '50%' }} />
                    </Box>
                    <Box p={2}>
                                    <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate enim labore porro obcaecati necessitatibus a, reprehenderit saepe optio ducimus perferendis eos odio vero.</Typography>
                                </Box>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#39796b", height: "120px", borderRadius:'20px'}}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Contate - me </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" >
                            <a href="https://github.com/marciors92" target="_blank">
                                <GitHub style={{ fontSize: 50, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/marciors92/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ height: "20px" }}>
                        <Box paddingTop={1}>
                            
                        </Box>
                        <Box>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </Paper>
            </Grid>
                </Grid>
                
                
                </Grid>
             
        </>

    )
}


export default Sobre
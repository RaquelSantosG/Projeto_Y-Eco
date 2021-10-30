import React from 'react';
import { ThemeProvider} from '@mui/system';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Button, Box, Paper} from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core'
import './Sobre.css';
import { GitHub, WhatsApp } from '@material-ui/icons';

function Sobre(){
    return(
        <div>
            <Grid container  >

                <Grid item direction='column'>
                    <Box>
                        <Box display="flex" justifyContent="center">
                            <Box>
                                <Box display="flex" justifyContent="center" >
                                    <Typography variant="h4" color="#39796b">UM POUCO SOBRE NÓS</Typography>
                                </Box>

                                <Box p={5}>
                                    <Typography variant="body1" color="#39796b">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate enim labore porro obcaecati necessitatibus a, reprehenderit saepe optio ducimus perferendis eos odio vero. Dolores eos sint saepe quaerat quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nostrum quasi doloremque corrupti aliquid doloribus mollitia delectus debitis autem enim eos odio quidem suscipit nam expedita quo consequatur quam perferendis!</Typography>
                                </Box>
                            </Box>


                        </Box>


                    </Box>
                </Grid>
                <Paper sx={{ p:1, margin: 'auto', maxWidth:1500, flexGrow: 10 }}>
                <Grid container direction="row" justifyContent="space-around" alignItems="stretch">
                <Grid item xs={2}>
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
                    <Box style={{ backgroundColor: "#39796b", height: "120px" }}>
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
                    <Box style={{ height: "60px" }}>
                        <Box paddingTop={1}>
                            
                        </Box>
                        <Box>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
                </Grid>
                <Grid item xs={2}>
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
                    <Box style={{ backgroundColor: "#39796b", height: "120px" }}>
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
                    <Box style={{ height: "60px" }}>
                        <Box paddingTop={1}>
                            
                        </Box>
                        <Box>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
                </Grid>
                <Grid item xs={2}>
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
                    <Box style={{ backgroundColor: "#39796b", height: "120px" }}>
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
                    <Box style={{ height: "60px" }}>
                        <Box paddingTop={1}>
                            
                        </Box>
                        
                    </Box>
                </Grid>
            </Grid>
                </Grid>
                <Grid item xs={2}>
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
                    <Box style={{ backgroundColor: "#39796b", height: "120px" }}>
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
                    <Box style={{ height: "60px" }}>
                        <Box paddingTop={1}>
                            
                        </Box>
                        
                    </Box>
                </Grid>
            </Grid>
                </Grid>
                <Grid item xs={2}>
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
                    <Box style={{ backgroundColor: "#39796b", height: "120px" }}>
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
                    <Box style={{ height: "60px" }}>
                        <Box paddingTop={1}>
                            
                        </Box>
                        <Box>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
                </Grid>
                
              
                </Grid>
            </Paper>
            </Grid>
        </div>
    )
}


export default Sobre
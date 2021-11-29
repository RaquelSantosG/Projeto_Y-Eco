import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textosFooter'>Sigam-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/profile.php?id=100075123653628" target="_blank">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com/projetoyeco/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://youtu.be/Fev2MHAa-qo" target="_blank">
                                <YouTubeIcon className='redes' />
                            </a>
                            <a href="https://github.com/Y-eco/" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textosFooter'>© 2021 Copyright: Grupo Y-Eco</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://y-eco.herokuapp.com/" className='text-decoration-none'>
                                <Typography variant="subtitle2" gutterBottom className='textosFooter' align="center">y-eco.herokuapp.com/</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;
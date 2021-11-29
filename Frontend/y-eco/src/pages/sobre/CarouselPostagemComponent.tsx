import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'
import './CarouselPostagemComponent.css'
import { Box, Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function CarouselPostagemComponent(): JSX.Element {
  const [items, setstate] = useState([
    { id: 0, linkgithub: 'https://github.com/mays2pearl', linklinkedin: "https://www.linkedin.com/in/maysa-andrade-maysa-andrade/", img: "https://cdn.discordapp.com/attachments/882496817550483510/910217621205549056/maysa.png" },
    { id: 1, linkgithub: 'https://github.com/RaquelSantosG', linklinkedin: "https://www.linkedin.com/in/raquel-santos-gomes-b21318187/", img: "https://cdn.discordapp.com/attachments/882496817550483510/910217623675998238/raquel.png" },
    { id: 2, linkgithub: 'https://github.com/juliobalbino', linklinkedin: "https://www.linkedin.com/in/juliobalbino/", img: "https://cdn.discordapp.com/attachments/882496817550483510/910217616705069117/julio.png" },
    { id: 3, linkgithub: 'https://github.com/Bmuraro', linklinkedin: "https://www.linkedin.com/in/brunomuraros/", img: "https://cdn.discordapp.com/attachments/882496817550483510/910217612003258408/bruno.png" },
    { id: 3, linkgithub: 'https://github.com/marciors92', linklinkedin: "https://www.linkedin.com/in/marciors92/", img: "https://cdn.discordapp.com/attachments/882496817550483510/910217618441502792/marcio.png" },
  ])
  return (
    <Grid item xs={12} container justifyContent="center">
      <Carousel isRTL={false} enableAutoPlay autoPlaySpeed={15500}>
        {items.map(item => <div key={item.id}>
          <Box display="flex" justifyContent="center" flexWrap='wrap'>
            <img src={item.img} alt="" width="100%" height="400px" />
            <a href={item.linkgithub} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className='redes2' /></a>
            <a href={item.linklinkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon className='redes2' /></a>
          </Box>

        </div>)}
      </Carousel>
    </Grid>
  )
}

export default CarouselPostagemComponent;

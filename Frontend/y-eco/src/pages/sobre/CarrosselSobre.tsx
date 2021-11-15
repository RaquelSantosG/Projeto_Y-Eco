import React, { useState } from 'react';
import { Box, Button, Card, CardActionArea, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import './CarrosselSobre.css';
import {images} from './CarrosselSobreData';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { GitHub } from '@material-ui/icons';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowFowardIosIcon from '@material-ui/icons/ArrowForwardIos';


function CarrosselSobre(){
    const [currImg, setCurrImg] = useState(0)
    return(
<div className="carrosselSobre">
                <div className='carrosselInnerSobre' style={{backgroundImage:`url(${images[currImg].img})`}}>
                <div className='leftSobre' onClick={() =>{currImg > 0 && setCurrImg(currImg - 1);}}>
                    <ArrowBackIosIcon style={{fontSize: 30}}/>
                </div>
                <div className='centerSobre'></div>
                <div className='rightSobre' onClick={() =>{currImg < images.length - 1 && setCurrImg(currImg + 1);}}>
               
                <ArrowFowardIosIcon style={{fontSize: 30}}/>
                </div>
            </div>
            </div>
    )
}

export default CarrosselSobre
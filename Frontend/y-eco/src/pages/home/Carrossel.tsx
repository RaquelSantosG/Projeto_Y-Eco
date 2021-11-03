import React, { useState } from 'react';
import { Box, Button, Card, CardActionArea, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import './Carrossel.css';
import {images} from './CarrosselData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowFowardIosIcon from '@material-ui/icons/ArrowForwardIos';


function Carrossel(){
    const [currImg, setCurrImg] = useState(0)
    return(
<div className="carrossel">
            <div className='carrosselInner' style={{backgroundImage:`url(${images[currImg].img})`}}>
                <div className='left' onClick={() =>{currImg > 0 && setCurrImg(currImg - 1);}}>
                    <ArrowBackIosIcon style={{fontSize: 30}}/>
                </div>
                <div className='center'> <h1>{images[currImg].title}</h1><p>{images[currImg].subtitle}</p></div>
                <div className='right' onClick={() =>{currImg < images.length - 1 && setCurrImg(currImg + 1);}}>
                <ArrowFowardIosIcon style={{fontSize: 30}}/>
                </div>
            </div>
            </div>
    )
}

export default Carrossel
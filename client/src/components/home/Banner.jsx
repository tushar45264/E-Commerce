import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import { Box, styled } from '@mui/material'
import first from '../../images/1b.png'
import second from '../../images/2b.png'
import third from '../../images/3b.jpg'
import fourth from '../../images/4b.png'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
  return (
    <Box>
    <Carousel responsive={responsive}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              swipeable={false}
              draggable={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
    >
      
        <Image src={first} alt="banner"/>
        <Image src={second} alt="banner"/>
        <Image src={third} alt="banner"/>
        <Image src={fourth} alt="banner"/>  
      
    </Carousel>
  </Box>
  )
}
const  Image =styled('img')(({theme})=>({
  width:'100%',
  height:280,
  [theme.breakpoints.down('md')]:{
    objectFit:'cover',
    height:180,
  },
}))

export default Banner
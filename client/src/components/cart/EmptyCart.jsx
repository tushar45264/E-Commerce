import { Box, Typography,styled } from '@mui/material'
import React from 'react'

const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  return (
    <Component>
        <Container>
            <Image  src={imgurl} alt="empty cart"/>
            <Typography>Your cart is empty!</Typography>
            <Typography>Add items to it now.</Typography>
        </Container>
    </Component>
  )
}

const Component = styled(Box)`
    height: 65vh;
    width: 80%;
    background-color: #fff;
    margin: 80px 120px;
`;

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
`;

const Image = styled('img')`
    width: 15%;
`;
export default EmptyCart
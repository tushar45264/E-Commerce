import { Box, Typography,styled } from '@mui/material'
import React from 'react'
import fail from '../../images/fail.jpg'
import { Link } from 'react-router-dom'
const Cancel = () => {
  return (
    <Component>
      <Container>
          <Image src={fail} alt="fail"/>
          <Typography variant="h4" >Oops! Payment Failed</Typography>
          <Typography variant="h6" >Please Try Again!!</Typography>
          <Link to={'/'}>
          <Typography style={{marginTop:10, marginBottom:10,color:'inherit'}}>Go To Home</Typography>
          </Link>
      </Container>
    </Component>
  )
}

const Component = styled(Box)`
    display: flex;
    border-top: 1px solid #f0f0f0;
    background-color: #fff;
`;

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
`;

const Image = styled('img')`
    width: 25%;
`;
export default Cancel
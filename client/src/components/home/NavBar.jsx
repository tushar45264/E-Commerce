import React from 'react'
import { navData } from '../../constants/navData'
import { Box, Typography, styled } from '@mui/material'
const NavBar = () => {
  return (
    <Box style={{background: '#fff'}}>
    <NavD>
            {
            navData.map(data=>(
                <FnaV>
                    <img src={data.url} alt="navImg" style={{width : 64}}/>
                    <Test>{data.text}</Test>
                </FnaV>
            ))
    }
    </NavD>
    </Box>
  )
}

const NavD= styled(Box)(({theme})=>({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '70px 130px 0 130px',
  overflow:'hidden',
  [theme.breakpoints.down('lg')]:{
    margin:0,
  },
}))

const FnaV = styled(Box)`
padding: 12px 8px;
text-align: center;
`;

const Test =styled(Typography)`
font-size: 14px;
font-weight: 600;
font-family:inherit;
`;  
export default NavBar
import React from 'react'
import {Box, Button, Typography,Badge, styled} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialogue from '../login/loginDialogue';
import { LoginContext } from '../../context/dataProvider.jsx';
import { useContext} from 'react';
import { useState} from 'react';
import Profile from './Profile.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CustomButtons = () => {
  const navigate = useNavigate();
  const {cartI} = useSelector(state => state.cart);
  const [open, setOpen] = useState(false);
  const user=JSON.parse(localStorage.getItem('User'))?.username;
  const {account,setAccount} = useContext(LoginContext);
  const handleLogout=()=>{
    localStorage.removeItem('User');
    localStorage.removeItem('cart');
    navigate('/');
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <CusB>
    {
        user ? <h1 style={{marginLeft : 10}}>{user}</h1> :
        <ButT variant='contained' onClick={()=>handleClickOpen()}>Login</ButT>
    }
        {user ? 
        <Link to='/dashboard'>
        <Typography style={{ textDecoration: 'none', color: 'white', marginTop: 3, width: 100 }}>Dashboard</Typography>
        </Link>
        :<Typography style={{marginTop : 3, width: 135}}>Become a Seller</Typography> }
        <Typography style={{marginTop : 3}}>More</Typography>
          <Link to={'/cart'} style={{textDecoration:'none' , color:'inherit'}}>
          <Box style={{display : 'flex', marginTop: 3}}>
            <Badge badgeContent={cartI?.length} color="primary">
            <ShoppingCartIcon />
            </Badge>
            <Typography style={{marginLeft:10}}>Cart</Typography>
        </Box>
          </Link>
        <LoginDialogue open= {open} setOpen={setOpen}/>
        {
          user?<ButT variant='contained' onClick={handleLogout}>Logout</ButT>:
          <></>
        }
        
    </CusB>
  )
}

const CusB= styled(Box)(({theme})=>({
  display: 'flex',
  fontSize: '16px',
  marginLeft: '0 3% 0 auto',
  alignItems: 'center',
  '& > *': {
      marginRight: '40px !important',
      fontSize: '16px',
      alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    display:'block'
  }
}));

const ButT= styled(Button)`
text-transform: none;
background-color: #fff;
color: #394867;
border-radius: 2px;
padding: 6px 40px;
font-weight: 600;
&:hover {
    background-color:#394867;
    color:#fff;
    border: 2px solid #fff;
}
`;

export default CustomButtons
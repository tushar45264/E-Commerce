import React from 'react'
import Search from './search';
import {AppBar, Toolbar, Box,Drawer,List, Typography, styled} from "@mui/material";
import CustomButtons from './customButtons';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ListItem from '@mui/material/ListItem';

const Header = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const list = () => {
    return (
      <Box style={{width:200}} onClick={handleClose}>
      <List>
        <ListItem button >
        <CustomButtons />
        </ListItem>
      </List>  
    </Box>
    )
    
  }

  return (
    <StyledAppBar>
      <Toolbar style={{ minHeight: 60 }}>
      <Menu style={{color:'inherit'}} onClick={handleOpen}>
        <MenuIcon />
      </Menu>
      <Drawer open={open} onClose={handleClose}>
        {list()}
      </Drawer>
        <Component>
          {/* <img src="https://api.logo.com/api/v2/images?logo=logo_4ded81e2-693a-487a-ba46-6169a8320025&format=webp&margins=0&quality=60&width=500&background=transparent&u=1691086905" alt='' style={{width: 250}}></img>
           */}
           <Link to={`/`} style={{textDecoration:'none', color:'inherit'}}>

          <img src={logo} alt='' style={{width: 250,marginTop:6}}></img>
  
          <Box style={{display: 'flex',marginBottom:3}}>
            <Typography>Click. Shop. Smile.</Typography>
            <Pi src='https://img.icons8.com/?size=512&id=mgbkiKWKwFvD&format=png' alt='' />
          </Box>
          </Link>
        </Component>
        <Search />
        <CustomB>
        <CustomButtons />
        </CustomB>
      </Toolbar>
    </StyledAppBar>
  )
}
 const StyledAppBar = styled(AppBar)`
  background-color: #394867;
 `;

 const Component= styled(Box)`
 margin-left: 12%;
 line-height: 0;
 `;

 const Pi =styled('img')({
  width: 20,
  marginLeft: 4,
 });

 const CustomB= styled(Box)(({theme})=>({
  margin : '0 5% 0 auto',
  [theme.breakpoints.down('md')]:{
    display:'none',
  },
 }))
 
 const Menu = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}))

export default Header
import React from 'react'
import {Typography,Box,styled} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState} from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import toast from 'react-hot-toast';

const Profile = ({account, setAccount}) => {
  const user=JSON.parse(localStorage.getItem('User'))?.username;
  console.log(user)
    const [open, setOpen] = useState(false);

    const handleClick =(event)=>{
        setOpen(event.currentTarget);
    }

    const handleClose =()=>{
        setOpen(false);
    }

    const LogoutUser =()=>{
        localStorage.removeItem('User');
        localStorage.removeItem('cart');
        toast.success('Logout successfully');
        setAccount('');
    }
  return (
    <>
        <Box onClick={handleClick}>
        <Typography style={{marginTop:2, cursor:'pointer'}}>{user}</Typography> </Box> 
        <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose(); LogoutUser();}}>
            <PowerSettingsNewIcon color='primary' fontSize="small" />
            <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  )
}

const Component =styled(Menu)`
marginTop:5px;
`;

const Logout = styled(Typography)`
font-size: 14px;
margin-left: 20px;
`;
export default Profile
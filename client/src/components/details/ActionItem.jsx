import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Box,Button, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../../redux/actions/cartAction'
import { loadStripe } from '@stripe/stripe-js';
import toast from 'react-hot-toast';
const ActionItem = ({product}) => {
    console.log(product);
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const [quantity,setQuantity]=useState(1);
    const {id} = product;
    const addItemToCart =()=>{
        const user=JSON.parse(localStorage.getItem('User'));
        if(!user) {
            toast('Please login to continue')
            navigate('/');
            return;
        }
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }
    const BuyNow=async()=>{
      const user=JSON.parse(localStorage.getItem('User'));
        if(!user) {
          toast('Please login to continue')
            navigate('/');
            return;
        }
        const stripe = await loadStripe('pk_test_51NmJMjSHkZOP0UbjKG9TyfhpXCUA7iKLYwyt8tKsaRtF3zY4Tu1lVNLKWa0M1SPohSr1QUOtnYapxEp2BVlsiSvQ00xxSPz3zQ');
    
        const body ={
          products: [product]
        } 
        
        const headers = {
          "Content-Type": "application/json"
        }
        const response = await fetch('http://localhost:8000/create-checkout-session', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(body),
        }) 
        const session = await response.json();
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
    
        if(result.error){
          console.log('=>>>>>',result.error);
        }
    
    }
  return (
    <LeftWrapper>
        <Box style={{ padding:'15px 20px',
    border:'1px solid #f0f0f0',width:'90%'}}>
            <Image src={product.detailUrl} alt="product" />
        </Box>
        <StyledButton variant="contained" onClick={()=>addItemToCart()} style={{backgroundColor:'#ff9f00', marginRight:10}}>
        <ShoppingCartIcon style={{color:'white'}}/>
        Add to Cart</StyledButton>
        <StyledButton variant="contained" style={{background:'#fb541b'}} onClick={()=>addItemToCart()}>
        <FlashOnIcon style={{color:'white'}}/>
        Buy Now</StyledButton>
    </LeftWrapper>
  )
}

const LeftWrapper= styled(Box)(({theme})=>({
    minWidth:'40%',
    padding:'40px 0px 0px 80px',
    [theme.breakpoints.down('lg')]:{
        padding:'40px 20px',
    },
}))

const Image= styled('img')({
    width:'90%',
    padding:'15px'
});

const StyledButton =styled(Button)(({theme})=>({
    width:'48%',
    height: '50px',
    borderRadius: 2,
    [theme.breakpoints.down('lg')]:{
        width:'46%',
    }, [theme.breakpoints.down('sm')]:{
        width:'48%',
    },
}))
export default ActionItem
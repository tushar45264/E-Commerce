import { Grid, Typography,Box,Button, styled } from '@mui/material'
import React from 'react'
import {useSelector} from 'react-redux'
import CartItems from './cartItems'
import TotalView from './totalView'
import EmptyCart from './EmptyCart'
import {loadStripe} from '@stripe/stripe-js/pure';
const Cart = () => {
  const {cartI} = useSelector(state => state.cart)
  if(cartI){
    localStorage.setItem('cart', JSON.stringify(cartI));
  }
  const makePayment = async() => {
    console.log(process.env.STRIPE_SECRET_KEY )
    const stripe = await loadStripe('pk_test_51NmJMjSHkZOP0UbjKG9TyfhpXCUA7iKLYwyt8tKsaRtF3zY4Tu1lVNLKWa0M1SPohSr1QUOtnYapxEp2BVlsiSvQ00xxSPz3zQ');
    
    const body ={
      products: cartI
    } 
    
    const headers = {
      "Content-Type": "application/json"
    }
    const response = await fetch('https://e-commerce-h20n.onrender.com/create-checkout-session', {
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
   <>
      {
        cartI.length ?
        <Container container>
              <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                  <Header>
                    <Typography variant="h5">My Cart({cartI.length})</Typography>
                  </Header>
                  {
                    cartI.map(product =>(
                      <CartItems product={product} />
                    ))
                  } <ButtonWrapper>
                    <StyledButton onClick={makePayment}>Place order</StyledButton>
                  </ButtonWrapper>
              </LeftComponent>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartI={cartI}/>
              </Grid>
        </Container> : <EmptyCart /> 
      }
   </>
  )
}

const Container =styled(Grid)(({theme}) => ({
  padding: '30px 135px',
  [theme.breakpoints.down('md')]: {
    padding: '15px 15px',
  },
}))

const Header = styled(Box)`
      padding : 15px 24px;
      background-color: #fff;
`;

const ButtonWrapper = styled(Box)`
    padding:16px 22px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-top: 1px solid #f0f0f0;
`;

const StyledButton =styled(Button)`
      display: flex;
      margin-left: auto;
      background-color: #fb641b;
      color: #fff;
      width: 250px;
      height: 51px;
      border-radius: 2px;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.5px;
      &:hover{
        background-color: #fb641b;
      }
`;

const LeftComponent=styled(Grid)(({theme}) => ({
  paddingRight: '15px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '15px',
  },
}));
export default Cart;

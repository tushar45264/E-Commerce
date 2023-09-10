import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import logo from '../.././images/l.png'
import { addEllipses } from '../../utils/common-utils'
import ButtonGroup from './ButtonGroup'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/cartAction'

const CartItems = ({product}) => {
  const dispatch = useDispatch();
  const removeFromCartItem = (id) => {
    dispatch(removeFromCart(id));
  }
  return (
    <Container>
          <LeftComponent>
              <img src={product.url} alt="product" style={{height:110,width:110}}/>
              <ButtonGroup />
          </LeftComponent>
          <Box style={{margin:20}}>
                <Typography>{addEllipses(product.title.longTitle)}</Typography>
                <Typography style={{color: '#388e3c',fontSize:14, marginTop:10}}>Seller: SuperNex
                <Box component='span'>
                <img src={logo} alt="logo" style={{width:100, marginLeft:'15px'}}/>
                </Box>
                </Typography>
                <Typography style={{margin: '20px 0px'}}>
              <Box component='span' style={{fontWeight:600, fontSize:18}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
              <Box component='span' style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
              <Box component='span' style={{color:'#388E3C'}}>{product.price.discount}</Box>
            </Typography>
            <RemoveButton onClick={()=>removeFromCartItem(product.id)}>Remove</RemoveButton>
          </Box>
    </Container>
  )
}

const Container = styled(Box)`
    display: flex;
    border-top: 1px solid #f0f0f0;
    background-color: #fff;

`
const LeftComponent = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const RemoveButton = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`;
export default CartItems
import { Box,Typography, styled } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const TotalView = ({cartI}) => {
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const TotalAmount = () => {
    let price = 0,discount = 0;

    cartI.map(item => {
      price += item.price.mrp;
      discount += (item.price.mrp - item.price.cost);
    })
    setPrice(price);
    setDiscount(discount);
  }

  useEffect(() => {
    TotalAmount();
  }, [cartI])
  return (
    <Box>
      <Heading>
            <HeadingWrapper>Price Details</HeadingWrapper>
      </Heading>
      <Container>
            <Typography>price of ({cartI?.length} items)
              <Price component='span'>₹{price}</Price>
            </Typography>
            <Typography>Discount
              <Price component='span'>-₹{discount}</Price>
            </Typography>
            <Typography>Delivery Charges
              <Price component='span'>₹40</Price>
            </Typography>
            <Typography variant='h6'>Total Amount
              <Price component='span'>₹{price-discount+40}</Price>
            </Typography>
            <Discount>You will save ₹{discount-40} on this order </Discount>
      </Container>
    </Box>
  )
}

const Heading = styled(Box)`
    padding: 15px 24px;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

const HeadingWrapper =styled(Typography)`
    color: #878787;
`;

const Container =styled(Box)`
    padding: 15px 24px;
    background-color: #fff;
    & > p{
      margin-bottom: 20px;
      font-size: 14px;
    } &>h6 {
      margin-bottom: 20px;
    }
`;

const Price = styled(Box)`
    float: right;
`;

const Discount = styled(Typography)`
    color: #388e3c;
    font-weight: 500;
`;
export default TotalView
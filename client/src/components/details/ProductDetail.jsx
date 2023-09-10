import React from 'react'
import { Box, Table, TableBody, TableRow, TableCell, Typography,styled } from '@mui/material'
import Logoa from '../../images/l.png'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import coin from '../../images/coin.png'

const ProductDetail = ({product}) => {
    const date= new Date(new Date().getTime()+(5*24*60*60*1000));
  return (
    <>
        <Typography style={{fontWeight:'600'}}>{product.title.longTitle}</Typography>
            <Typography style={{marginTop: 0, color: '#878787', fontSize:14 }}>
              8 Ratings & 1 Review
              <Box component='span'> <img src={Logoa} alt='' style={{width:100, marginLeft:20, marginTop:5}}/></Box>
            </Typography>
            <Typography>
              <Box component='span' style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
              <Box component='span' style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
              <Box component='span' style={{color:'#388E3C'}}>{product.price.discount}</Box>
            </Typography>
            <Typography style={{marginTop:20, fontWeight:600}}>Available Offers</Typography>
            <Box>
                <Typography style={{marginTop:10, fontSize:14, verticalAlign:'baseline'}}> <StyledBadge />
                    <span style={{color:'#388E3C', marginRight:10}}>Special Price</span>Get extra 20% off upto ₹50 on 1 item(s) T&C
                </Typography>
                <Typography style={{marginTop:10, fontSize:14, verticalAlign:'baseline'}}> <StyledBadge />
                    <span style={{color:'#388E3C', marginRight:10}}>Bank Offer</span>5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C
                </Typography>
                <Typography style={{marginTop:10, fontSize:14, verticalAlign:'baseline'}}> <StyledBadge />
                    <span style={{color:'#388E3C', marginRight:10}}>Bank Offer</span>20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik T&C
                </Typography>
                <Typography style={{marginTop:10, fontSize:14, verticalAlign:'baseline'}}> <StyledBadge />
                    <span style={{color:'#388E3C', marginRight:10}}>Combo Offer</span>Buy 2 items save 5%;Buy 3 or more save 10%See all products T&C
                </Typography>
                <Typography style={{marginTop:10, fontSize:14, verticalAlign:'baseline'}}> <StyledBadge />
                    <span style={{color:'#388E3C', marginRight:10}}>Partner Offer</span>GST Invoice Available! Save up to 28% for business purchases Know More
                </Typography>
                <Typography style={{marginTop:10, fontSize:14, verticalAlign:'baseline'}}> <StyledBadge />
                    <span style={{color:'#388E3C', marginRight:10}}>Cashback</span>Get Flat ₹100 off on first Flipkart Pay Later order of ₹500 and above T&C
                </Typography>
                <Table>
                    <TableBody>
                        <ColText>
                            <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                            <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                        </ColText>
                        <ColText>
                            <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                            <TableCell>upto 6 months warranty</TableCell>
                        </ColText>
                        <ColText>
                            <TableCell style={{color:'#878787'}}>Seller</TableCell>
                            <TableCell ><Box>
                                <span style={{color:'#287480'}}>SuperNex</span>
                            </Box>
                            <Typography style={{color:'#878787', fontSize:14}}>GST Invoice Available</Typography>
                            <Typography style={{color:'#287480', fontSize:14}}>view more sellers starting from ₹{product.price.cost} </Typography>
                            </TableCell>
                        </ColText>
                        <ColText>
                            <TableCell colSpan={2}>
                                <img src={coin} style={{width:350}} alt=''/>
                            </TableCell>
                        </ColText>
                        <ColText>
                            <TableCell style={{color:'#878787'}}>Description</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </ColText>
                    </TableBody>
                </Table>
            </Box>
    </>
  )
}

const StyledBadge = styled(LocalOfferIcon)`
    color: #388E3C;
    margin-right: 10px;
    font-size: 15px;
`;

const ColText= styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & >td {
        font-size: 14px;
        margin-top: 10px;
    }
`;


export default ProductDetail
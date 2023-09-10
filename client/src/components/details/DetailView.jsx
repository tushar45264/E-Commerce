import React from 'react'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Box, Typography,Grid,styled } from "@mui/material"
import { getProductDetails } from '../../redux/actions/productAction'
import ActionItem from './ActionItem'
import Logoa from '../../images/l.png';
import ProductDetail from './ProductDetail'

const DetailView = () => {
  // const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const dispatch =useDispatch();
    const {id} = useParams(); 
    const {loading, product}=useSelector(state=>state.getProductDetails);
    useEffect(()=>{
      if(product && id !== product.id)
        dispatch(getProductDetails(id))
    },[dispatch,id,loading,product]) 
  return (
    <Component>
    {
      product && Object.keys(product).length && 
      <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product}/>
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
          <ProductDetail product={product}/>
          </RightContainer>
      </Container>
    }
    </Component>
  )
}


const Component=styled(Box)`
  background:#f2f2f2; 
  margin-top:55px; 
`;

const Container =styled(Grid)(({theme})=>({
  background:'#ffffff',
  display:'flex',
  [theme.breakpoints.down('md')]:{
    margin:0,
  },

}))


const RightContainer =styled(Grid)`
  margin-top:50px;
`;


export default DetailView
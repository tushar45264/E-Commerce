import { InputBase,List, Box, ListItem, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts } from '../../redux/actions/productAction';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';


const Search = () => {
        const [text, setText] = useState('');
        const dispatch= useDispatch();
        const {products}=useSelector(state=>state.getProducts);

        useEffect(()=>{
          dispatch(getProducts());
        },[dispatch])

        const getText = (text) => {
         setText(text);
        }
  return (
    <StyledContainer>
         <StyledInputBase  placeholder='Search for products, brands and more'
          onChange={(e)=>getText(e.target.value)}
          value={text}
         />
            <IconWrapper>
            <SearchIcon />
            </IconWrapper>
            {
              text && <ListWrapper>{
                products.filter(product=> product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                  <ListItem>
                  <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'inherit'}}
                  onClick={()=>setText('')}>
                  {product.title.longTitle}
                  </Link>
                  </ListItem>
                ))
              }   
              </ListWrapper>
            }
    </StyledContainer>
  )
}
const StyledContainer = styled(Box)`
 background-color: #fff;
 width: 30%;
 margin-left: 10px;
 border-radius: 3px;
 display: flex;
 margin-right: 10px;
`;

const StyledInputBase = styled(InputBase)`
padding-left: 20px;
 width: 100%;
 font-size: unset;
`;

const IconWrapper = styled(Box)`
margin-left: auto;
color: #068FFF;
padding: 5px;
display: flex;
`;

const ListWrapper=styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top:36px;
`;
export default Search
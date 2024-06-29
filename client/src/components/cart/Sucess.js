import React ,{useEffect}from 'react'
import  {Typography,Box,styled} from '@mui/material'
import S from '../../images/s.jpg'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

const Sucess = () => {
  const navigate = useNavigate();
  const user=JSON.parse(localStorage.getItem('User'))?._id;
  const cartI=JSON.parse(localStorage.getItem('cart'));
  const body = {
    userId: user,
    products: cartI,
  };
 
  useEffect(() => {
    const postOrder = async () => {
      try {
        const response = await axios.post('https://e-commerce-h20n.onrender.com/store-order', body);
        if (response.status === 201) {
          console.log('Order stored successfully');
          localStorage.removeItem('cart');
          navigate('/');
        }
      } catch (error) {
        console.error('Error storing order:', error);
      }
    };

    postOrder();
  }, [body, navigate]);
  return (
    <Component>
      <Container>
            <Image src={S} alt="sucess"/>
            <Typography variant="h4" >Your order has been placed sucessfully</Typography>
            <Typography variant="h6" >Thank you for shopping with NEX-CHANGE</Typography>
            <Link to={'/'}>
            <Typography style={{marginTop:10,marginBottom:10,color:'inherit'}}>Go To Home</Typography>
            </Link>
      </Container>
    </Component>
  )
}

const Component = styled(Box)`
    display: flex;
    border-top: 1px solid #f0f0f0;
    background-color: #fff;
`;

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
`;

const Image = styled('img')`
    width: 25%;
`;
export default Sucess
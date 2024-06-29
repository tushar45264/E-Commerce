import React,{useState,useEffect} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { Box, Typography,Button,Divider, styled } from '@mui/material';

const responsive = { 
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4  
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Perfume = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        // fetch(`https://fakestoreapi.com/products/category/electronics`)
        //     .then(res=>res.json())
        //     .then(json=>setProducts(json))
            fetch('https://dummyjson.com/products/category/fragrances')
            .then(res=> res.json())
            .then(json=>setProducts(json.products));
    },[])
    return (
        <Component>
            <Deal>
                <DealText>Perfume's</DealText>
                <ViewAllButton variant='contained' style={{marginLeft: 'auto', backgroundColor: '#394867', color: '#fff'}}>View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel
        responsive={responsive}
              swipeable={false}
              draggable={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              centerMode={true}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
        >
            {products.map(product=>(
                <Link to={`product3/${product.id}`} style={{textDecoration:'none', color:'inherit'}}>
                <Box textAlign={'center'} style={{padding : '25px 15px'}}>
                <Image src={product.images[0]} alt='products'/>
                <Text style={{fontWeight:600 ,color:'212121'}}>{product.title}</Text>
                <Text style={{color:'green'}}>${product.price}</Text>
                <Text style={{color:'212121', opacity:'.6'}}>{product.decription}</Text>
                </Box>
                </Link>
            ))}
        </Carousel>
        </Component>
        
    )
}


const Component = styled(Box)`
    margin-top: 10px;
    background: #fff;
`;

const Deal =styled(Box)`
    padding: 15px 20px;
    display: flex;
`;

const Timer =styled(Box)`
    display: flex;
    margin-left: 10px;
    align-items: center;
    color: #7f7f7f;
`;

const DealText =styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    margin-right:25px;
`;

const ViewAllButton =styled(Button)`
    background-color: #394867;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
`;

const Image = styled('img')({
    width:'auto',
    height:150
})

const Text =styled(Typography)`
    font-size:14px;
    margin-top: 5px;
    `;

export default Perfume
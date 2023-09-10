import { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from "react-redux";
import SliDe from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

const Home = () => {
  const { products } = useSelector(state=>state.getProducts);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])
  return (
    <> 
      <NavBar />
      <Container>
      <Banner />
      <MidSlide products={products} title="Deal of the Day" timer={true}/>
      <SliDe products={products} title="Recommended for You" timer={false}/>
      <MidSection />
      <SliDe products={products} title="Trending offers" timer={false}/>
      <SliDe products={products} title="Nex-Change's Special" timer={false}/>
      <SliDe products={products} title="Discounts of the Year" timer={false}/>
      <SliDe products={products} title="Top Selections" timer={false}/>
      <SliDe products={products} title="season's top picks" timer={false}/>
      <SliDe products={products} title="Home Essentials" timer={false}/>

      </Container>
    </>
  )
}

const Container = styled(Box)`
background-color: #f2f2f2;
padding:10px;
`;
export default Home
import { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from "react-redux";
import SliDe from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
import FakePro from './FakePro'
import MenPro from './MenPro'
import Elect from './Elect'
import Trend from './Trend'
import Laptop from './Laptop'
import Perfume from './Perfume'
import Groc from './Groc'
import Skin from './Skin'
import HomeDeco from './HomeDeco'

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
      <Elect />
      <MidSection />
      <FakePro />
      <Perfume />
      <Skin />
      {/* <SliDe products={products} title="Nex-Change's Special" timer={false}/>
      <SliDe products={products} title="Discounts of the Year" timer={false}/>
      <SliDe products={products} title="Top Selections" timer={false}/>
      <SliDe products={products} title="season's top picks" timer={false}/>
      <SliDe products={products} title="Home Essentials" timer={false}/> */}
      <Trend />
      <Laptop />
      <HomeDeco />
      <Groc />
      <MenPro />
      </Container>
    </>
  )
}

const Container = styled(Box)`
background-color: #f2f2f2;
padding:10px;
`;
export default Home
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
  console.log(products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };
  return (
    <> 
      <NavBar />
      <Container>
      <Banner />
      <MidSlide products={products} title="Deal of the Day" timer={true}/>
      <MidSection />
      <SliDe products={getProductsByCategory('Furniture')} title="Home Essentials" timer={false}/>
      <SliDe products={getProductsByCategory("Electronics")} title="Electronics" timer={false}/>
      <SliDe products={getProductsByCategory('Clothing')} title="Clothing" timer={false}/>
      <SliDe products={getProductsByCategory('Beauty')} title="Beauty" timer={false}/>
      <SliDe products={getProductsByCategory("Fragrances")} title="Fragrances" timer={false}/>
      <SliDe products={getProductsByCategory('Jewellery')} title="Jewellery" timer={false}/>
      </Container>
    </>
  )
}

const Container = styled(Box)`
background-color: #f2f2f2;
padding:10px;
`;
export default Home
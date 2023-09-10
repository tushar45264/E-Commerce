import Header from "./components/header/header";
import Home from "./components/home/home";
import { Box } from "@mui/material";
import ContextProvider from "./context/dataProvider";
import Cart from "./components/cart/cart";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DetailView from "./components/details/DetailView";
import Sucess from "./components/cart/Sucess";
import Cancel from "./components/cart/Cancel";

function App() {
  return (
      <ContextProvider>
          <BrowserRouter>
            <Header />
            <Box style={{ marginTop: 64 }}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Sucess />} />
            <Route path="/cancel" element={<Cancel />} />
            </Routes>
            </Box>
          </BrowserRouter>
      </ContextProvider>
   
      
  );
}

export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/Nav';
import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Components/Contact';
import About from './Components/About';
import ProductDetails from './Components/Singleproduct';
import Cart from './Components/Cart';
import Error from './Error';
import Checkout from './Components/Checkout';
import { useSelector } from 'react-redux';
import Jwellery from './Components/Jwellery';
import Womens from './Components/Womens';
import Mensclothing from './Components/Mensclothing';
const ProtectedRoute = ({ element, path }) => {
  
  const isAuthenticated = useSelector((state) => state.cartReducer.isAuthenticated);
  localStorage.setItem('isAuthenticated', isAuthenticated);
  

  return isAuthenticated ? (
    element
  ) : (
    <Navigate state={{ from: path }} replace to="/Contact" />
  );
};

const App = () => {
  const bodyStyle = {
    paddingTop: '54px',
  };

  return (
    <Router>
      <NavBar />
      <div style={bodyStyle}>
        <Routes>
          {/* <Route
            exact
            path="/Products"
            element={<ProtectedRoute element={<Products />} path="/Products" />}
          /> */}
          <Route exact path="/Products" element={<Products />} />
          <Route
            exact
            path="/Products/:id"
            element={<ProtectedRoute element={<ProductDetails />} path="/Products/:id" />}
          />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Jwellery" element={<Jwellery/>} />
          <Route exact path="/Womens" element={<Womens/>} />
          <Route exact path="/Mensclothing" element={<Mensclothing/>} />
           {/* <Route
            exact
            path="/Cart"
            element={<ProtectedRoute element={<Cart />} path="/Cart" />}
          />  */}
           <Route exact path="/Cart" element={<Cart />} /> 

          <Route
            exact
            path="/Checkout"
            element={<ProtectedRoute element={<Checkout />} path="/Checkout" />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


import React from'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { CartProvider } from './Context/CartContext';
import Food from './pages/Food';
import Deals from './pages/Deals';
import Locations from './pages/Locations';

function App() {

  return (

    <div>
       <CartProvider>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/cart' element={<Cart />} />
       <Route path='/favorites' element={<Favorites />} />
       <Route path='/food' element={<Food />} />
       <Route path='/deals' element={<Deals />} />
       <Route path='/locations' element={<Locations />} />
     </Routes>
     </CartProvider>
    </div>
  );
}

export default App;

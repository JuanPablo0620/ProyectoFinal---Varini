import React from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResult from './Components/SearchResult/SearchResult.jsx';
import { CarritoProvider } from './context/CarritoContext.jsx';
import Cart from "./Components/Cart/Cart.jsx"
import Checkout from './Components/Checkout/Checkout.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/search/:searchTerm" element={<SearchResult/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='*' element={ <h2> Sitio en Construccion</h2> }/>
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
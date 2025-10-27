import { Routes, Route } from 'react-router';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:id" element={<Product />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

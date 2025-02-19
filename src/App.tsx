import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rings from './pages/Rings';
import Necklaces from './pages/Necklaces';
import Watches from './pages/Watches';
import Earrings from './pages/Earrings';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import { CartProvider } from './context/CartContext';

function App() {
  

  return (
    <CartProvider>
      <Router>
        <div>
          <div className="bg-[#FAFAFA] dark:bg-gray-900 min-h-screen">
            <Navbar/>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rings" element={<Rings />} />
                <Route path="/necklaces" element={<Necklaces />} />
                <Route path="/watches" element={<Watches />} />
                <Route path="/earrings" element={<Earrings />} />
                <Route path="/product/:category/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App
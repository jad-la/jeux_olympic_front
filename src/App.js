import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Home from './pages/Accueil/Home'
import EventsPage from './pages/Evenement/EventsPage';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import CartPage from './pages/CartPage/CartPage'



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      // Recherche si l'article est déjà dans le panier
      const isItemInCart = prev.find(product => product.id === item.id);

      if (isItemInCart) {
        // Augmenter la quantité si l'article est déjà présent
        return prev.map(product =>
          product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
        );
      }
      const updatedCart = [...prev, { ...item, quantity: 1 }];
      return updatedCart;
    });
  };

  const removeFromCart = (item) => {
    setCart(prev => prev.filter(product => product.id !== item.id));
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:categoryName" element={<EventsPage addToCart={addToCart} />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;

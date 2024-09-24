import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Accueil/Home'
import EventsPage from './pages/Evenement/EventsPage';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import CartPage from './pages/CartPage/CartPage';
import TicketsPage from './pages/Tickets/TicketsPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports/:categoryId" element={<EventsPage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<CartPage  />} />
        <Route path="/tickets" element={<TicketsPage />}/>  
      </Routes>
    </Router>
  );
}

export default App;

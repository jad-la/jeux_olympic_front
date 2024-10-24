import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Accueil/Home'
import EventsPage from './pages/Evenement/EventsPage';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import CartPage from './pages/CartPage/CartPage';
import TicketsPage from './pages/Tickets/TicketsPage';
import Remboursement from './pages/Modalite-remboursement/Remboursement';
import PolitiqueConfidentialite from './pages/Politique-confidentialite/PolitiqueConfidentialite';
import UserManuel from './components/UserManual/UserManual';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports/:categoryId" element={<EventsPage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage  />} />
        <Route path="/tickets" element={<TicketsPage />}/>  
        <Route path="/Remboursement" element={<Remboursement />}/>  
        <Route path="/Confidentialite" element={<PolitiqueConfidentialite />}/>  
        <Route path="/manuel-utilisation" element={<UserManuel />}/>  
      </Routes>
    </Router>
  );
}

export default App;

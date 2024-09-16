import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="header">

      <div className="logo">
        <img src="/assets/images/jeux-olympiques-d-ete-2024-paris-france-dessin-a-la-main-pas-ai-illustration-vectorielle-2wb4pb7.jpg" alt="Logo" />
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <Link to="/signup">S'inscrire</Link>
      </nav>

      <div className="user-section">
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="user">
          <Link to="/login"> 
            <i className="fa-regular fa-user"></i>
          </Link>
        </div>
      </div>
    </header>
    );
};

export default Header;
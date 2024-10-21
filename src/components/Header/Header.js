import React from 'react';
import './Header.css'
import { Link,  useNavigate  } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

    // Fonction de déconnexion, suppresion du token et redirection
    const handleLogout = () => {
      localStorage.removeItem('token');  
      navigate('/login');  
  };

    return (
      <header className="header">

      <div className="logo">
        <img src="/assets/images/jeux-olympiques-d-ete-2024-paris-france-dessin-a-la-main-pas-ai-illustration-vectorielle-2wb4pb7.jpg" alt="Logo" />
      </div>

      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/contact">Nous contacter</Link>
        <Link to="/signup">S'inscrire</Link>
      </nav>

      <div className="user-section">
        <div className="cart">
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>
        <div className="user">
          {token ? (
      // Utilisateur connecté : montre l'icône de déconnexion
            <span onClick={handleLogout} style={{ cursor: 'pointer' }}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> {/* Icône de déconnexion */}
            </span>
          ) : (
      // Utilisateur non connecté : montre l'icône de connexion
            <Link to="/login"> 
              <i className="fa-regular fa-user"></i> {/* Icône de connexion */}
            </Link>
          )}
        </div>
      </div>
    </header>
    );
};

export default Header;
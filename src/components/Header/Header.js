import React, {useState} from 'react';
import './Header.css'
import { Link,  useNavigate  } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [menu, setMenu] = useState(false);
  
  //Fonction menu quand utilisateur est connecter
  const toggleMenu = () => {
    setMenu(!menu);
  };

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
      // Utilisateur connecté : montre le menu
            <div className="burger-menu">
              <span onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                <i className="fa-solid fa-bars"></i> {/* Icône du menu burger */}
              </span>
              {menu && (
                <div className="dropdown-menu">
                  <Link to="/tickets" onClick={() => setMenu(false)}>Mes tickets</Link>
                  <span onClick={handleLogout} style={{ cursor: 'pointer' }}>Déconnexion</span>
                </div>
              )}
            </div>
            // <span onClick={handleLogout} style={{ cursor: 'pointer' }}>
            //   <i className="fa-solid fa-arrow-right-from-bracket"></i> 
            // </span>
          ) : (
      // Utilisateur non connecté : montre l'icône de connexion
            <Link to="/login"> 
              <i className="fa-regular fa-user"></i> 
            </Link>
          )}
        </div>
      </div>
    </header>
    );
};

export default Header;
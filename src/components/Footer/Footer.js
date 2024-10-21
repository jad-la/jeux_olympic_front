import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-sections'>
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src="/assets/images/jeux-olympiques-d-ete-2024-paris-france-dessin-a-la-main-pas-ai-illustration-vectorielle-2wb4pb7.jpg" alt="Logo" />
                    </div>
                    <Link to="/remboursement">Modalités de remboursement</Link>
                    <Link to="/confidentialite">Politique de confidentialité</Link>
                    <Link to="/manuel-utilisation">Manuel d'utilisation</Link>
                </div>
                <div className="footer-section">
                    <h4>Plan du site</h4>
                    <Link to="/">Accueil</Link>
                    <Link to="/contact">Nous contacter</Link>
                    <Link to="/signup">S'enregistrer</Link>
                    <Link to="/cart">Panier</Link>
                    <Link to="/login">Se connecter</Link>
                </div>
                <div className="footer-section">
                    <h4>Nous suivre</h4>
                    <div>
                        <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                    </div>
                    
                </div>

            </div>
            <p className="footer-copy">© Copyright 2024. All right reserved.</p>
      </footer>
    );
};

export default Footer;
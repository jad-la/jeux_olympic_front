import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-sections'>
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src="/assets/images/jeux-olympiques-d-ete-2024-paris-france-dessin-a-la-main-pas-ai-illustration-vectorielle-2wb4pb7.jpg" alt="Logo" />
                    </div>
                    <a href="#contact">Nous contacter</a>
                </div>
                <div className="footer-section">
                    <h4>Plan du site</h4>
                    <a href="#home">Accueil</a>
                    <a href="#register">S'enregistrer</a>
                    <a href="#cart">Panier</a>
                    <a href="#login">Se connecter</a>
                </div>
                <div className="footer-secti
                on">
                    <h4>Nous suivre</h4>
                    <div><a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                    <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a></div>
                    
                </div>

            </div>
            <p className="footer-copy">© Copyright. All right reserved.</p>
      </footer>
    );
};

export default Footer;
import React from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import backgroundImage from '../../Images/64be2e38b6def399cb0152f3.jpeg';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer.js';

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="home-page">
                {/* Hero Section */}
                <div 
                    className="hero-section"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '500px',
                    }}
                >
                   <div className="container-titre">
                        <h1 className="h1-home">Réservez vos billets pour les Jeux Olympiques 2024</h1>
                        <p>Ne manquez pas l'occasion d'assister aux événements sportifs les plus spectaculaires.</p>
                    </div> 
                </div>

                <Categories />

                <Footer />
            </div>
        </div>
    );
};

export default Home;
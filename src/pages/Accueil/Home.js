import React, { useEffect, useState } from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import backgroundImage from '../../Images/64be2e38b6def399cb0152f3.jpeg';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer.js';
import axios from 'axios';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    //appel API lors du chargement de la page
    useEffect(() => {
        // Récupérer l'URL du backend depuis le fichier .env
        const backendUrl = process.env.REACT_APP_BACKEND_URL;

        // Appel API pour récupérer les catégories 
        axios.get(`${backendUrl}/api/sports/`)
            .then(response => {
                setCategories(response.data); 
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des catégories:', error);
                setError('Impossible de récupérer les catégories.');
            });
    }, []);
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

                {error ? (
                    <p className='msg-error'>{error}</p>  
                ) : (
                    <Categories categories={categories} />
                )}

                <Footer />
            </div>
        </div>
    );
};

export default Home;
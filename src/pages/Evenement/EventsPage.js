import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './EventsPage.css';
import Event from '../../components/Event/Event'; 
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import axios from 'axios';


const EventsPage = () => {
    // on récupère le paramètre `categoryId` depuis l'URL
    const { categoryId } = useParams(); 
    const location = useLocation();
     // on récupère le nom de la catégorie depuis l'état de navigation
    const categoryName = location.state?.categoryName; 
    const [events, setEvents] = useState([])

    //effectue un appel API à chaque fois que `categoryId` change
    useEffect(() => {
        // Récupérer l'URL du backend depuis le fichier .env
        const backendUrl = process.env.REACT_APP_BACKEND_URL;

        // Appel API pour récupérer les événements pour un sport choisi
        axios.get(`${backendUrl}/api/sports/${categoryId}/events/`)
            .then(response => {
                setEvents(response.data);  
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des événements:', error);
            });
    }, [categoryId]);

    return (
        <div className="event-page">
            <Header/>
            <h1 className="h1-events">{categoryName}</h1>
            <div className='main-event-page'>
                {events.map(event => (
                    <Event key={event.id} event={event} />
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default EventsPage;
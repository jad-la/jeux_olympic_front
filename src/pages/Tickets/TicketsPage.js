import React, { useEffect, useState } from 'react';
import './TicketsPage'
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const TicketsPage = () => {
  const [tickets, setTickets] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    //on récupère le token JWT pour l'authentification
    const token = localStorage.getItem('token');  

    //appel API pour récupérer les billets de l'utilisateur
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/tickets/`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    .then((response) => {
      setTickets(response.data);
    })
    .catch((error) => {
      // on gère les erreurs de la requête
      console.error('Erreur lors de la récupération des billets:', error);
      setErrorMessage('Impossible de récupérer les billets.');
    });
  }, []);

  return (
    <div className="tickets-page">
      <Header />
      <div className="main-ticketsPage">
        <h2>Vos Billets</h2>
        {errorMessage && <p>{errorMessage}</p>}
        {tickets.length === 0 ? (
          <p>Vous n'avez pas encore de billets.</p>
        ) : (
          <ul className="tickets-list">
            {tickets.map((ticket) => (
              <li key={ticket.id} className="ticket-item">
                <h3>{ticket.event.name}</h3>
                <p>Offre : {ticket.offer}</p>
                <p>Date : {ticket.event.date}</p>
                <p>Lieu : {ticket.event.location}</p>
                <img src={ticket.qr_code} alt="QR Code du billet" className="qr-code" />
                <a href={ticket.qr_code} download={`ticket-${ticket.id}.png`}>Télécharger le billet</a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TicketsPage;
import React, { useState } from 'react';
import './Event.css'; 
import Swal from 'sweetalert2';
import axios from 'axios';

const Event = ({event}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOffer, setSelectedOffer] = useState('solo'); 


  // vérification si l'utilisateur est connecté
  const isLoggedIn = () => {
    return !!localStorage.getItem('token');  
  }; 

  const handleAddToCart = () => {
    if (isLoggedIn()) {
      // on récupère le token JWT
      const token = localStorage.getItem('token');  
  
      // Envoie une requête POST au backend pour ajouter l'article au panier
      axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/cart/items/`,  
        {
          event_id: event.id,      
          offer: selectedOffer,    
          quantity: quantity      
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,  
            'Content-Type': 'application/json'
          }
        }
      )
      .then(() => {
        // message lorsque l'article est ajouté au panier
        Swal.fire({
          icon: 'success',
          title: 'Ajouté au panier',
          text: 'L\'article a été ajouté à votre panier.',
        });
      })
      .catch((error) => {
         // alerte en cas d'échec
        console.error('Erreur lors de l\'ajout au panier:', error.response.data);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Impossible d\'ajouter l\'article au panier.',
        });
      });
  
    } else {
      // Si l'utilisateur n'est pas connecté, afficher un message pour l'authentification
      Swal.fire({
        title: 'Connectez-vous',
        text: 'Vous devez être connecté pour ajouter au panier.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Se connecter',
        cancelButtonText: 'S\'inscrire',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirige vers la page de connexion
          window.location.href = '/login';  
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Redirige vers la page d'inscription
          window.location.href = '/signup';  
        }
      });
    }
  };

  return (
    <div className="event">
      <img src={event.photo_url} alt={event.name} className="event-image" />
      <h3>{event.name}</h3>
      <p className='para-description'>{event.description}</p>
      <div className='info-event'>
        <p>Date : {event.date}</p>
        <p>Heure : {event.time}</p>
        <p>Lieu : {event.location}</p>
      </div>
      <div className="prices">
          <label htmlFor="offer">Choisissez une offre :</label>
          <select 
              id="offer" 
              value={selectedOffer} 
              onChange={(e) => setSelectedOffer(e.target.value)}
          >
            <option value="solo">Solo - {event.price_solo}€</option>
            <option value="duo">Duo - {event.price_duo}€</option>
            <option value="family">Familial - {event.price_family}€</option>
          </select>
      </div>
      <div className="quantity-control">
          <label htmlFor="quantity">Quantité :</label>
          <input 
              id="quantity" 
              type="number" 
              min="1" 
              value={quantity} 
              // Met à jour la quantité
              onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>Ajouter au panier</button>
    </div>
  );
};

export default Event;
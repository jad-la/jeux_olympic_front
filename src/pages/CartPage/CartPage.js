import React, { useEffect, useState } from 'react';
import './CartPage.css'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);  
    const [total, setTotal] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // on récupére le contenu du panier depuis le backend
    useEffect(() => {
        const token = localStorage.getItem('token');  // Récupère le token JWT du localStorage

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/cart/`, {
            headers: {
                'Authorization': `Bearer ${token}`,  // Envoie le token JWT dans l'en-tête
            },
        })
        .then((response) => {
            const items = response.data.items;
            
            //on calcule le sous-total pour chaque article
            const updatedItems = items.map((item) => {
                const price = item.event ? parseFloat(item.event[`price_${item.offer}`]) || 0 : 0;
                const subtotal = item.quantity * price;
                return { ...item, subtotal };  
            });
        
            setCartItems(updatedItems);
            // on calcule le total général du panier
            const total = updatedItems.reduce((acc, item) => acc + item.subtotal, 0);  
            setTotal(total);
        })
        .catch((error) => {
            console.error('Erreur lors de la récupération du panier:', error);
            setErrorMessage('Impossible de récupérer le contenu du panier.');
        });
    }, []);
 
    // fonction pour supprimer un article du panier
    const handleRemoveFromCart = (itemId) => {
        const token = localStorage.getItem('token');
        
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/cart/items/${itemId}/`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((response) => {
          // Mise à jour du panier après suppression
          const updatedItems = cartItems.filter((item) => item.id !== itemId);
          setCartItems(updatedItems);
      
          // Recalcul du total général après suppression
          const newTotal = updatedItems.reduce((acc, item) => acc + item.subtotal, 0);
          setTotal(newTotal);
        })
        .catch((error) => {
          console.error('Erreur lors de la suppression de l\'article:', error);
        });
    };

  // Fonction pour valider la réservation
  const handleBooking = () => {
    const token = localStorage.getItem('token');
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/bookings/`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`,  
      },
    })
    .then((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Réservation confirmée',
        text: 'Votre commande a été validée. Vous recevrez vos billets sous peu.',
      }).then(() => {
        // Redirige vers la page des tickets
        navigate('/tickets');
      });
    })
    .catch((error) => {
      console.error('Erreur lors de la réservation:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de la validation de la commande.',
      });
    });
  };
   
    return (
        <div className="cart-page">
            <Header/>
            <div className='main-cartPage'>
                <h2>Votre Panier</h2>
                {errorMessage && <p>{errorMessage}</p>}
                {cartItems.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.event.name}</h3>
                            <p>Offre : {item.offer}</p>
                            <p>Prix unitaire : {parseFloat(item.event[`price_${item.offer}`])}€</p>
                            <p>Quantité : {item.quantity}</p>
                            <p>Sous-total : {item.subtotal.toFixed(2)}€</p>
                            <button className='delete-btn' onClick={() => handleRemoveFromCart(item.id)}>
                              <i className="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total général : {total.toFixed(2)}€</h3>
                        <button onClick={handleBooking} className="booking-btn">
                            Valider la réservation
                        </button>
                    </div>

                </div>
                )}
            </div>
          <Footer/>
        </div>
      );
};

export default Cart;